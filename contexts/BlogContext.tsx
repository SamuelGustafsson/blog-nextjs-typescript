import { useContext, createContext, ReactNode, useState } from 'react';
import { BlogPost, Post } from '@/types/blog';
import { convertStringToSlug } from '@/helpers/convertStringToSlug';
import mockedBlog from '../mocks/blogPosts.json';
import Router from 'next/router';

type blogContextType = {
  posts: BlogPost[];
  addPost: (post: Post) => void;
  editPost: (post: Post & { id: string }) => void;
  deletePost: (id: string) => void;
  getPostBySlug: (slug: string) => BlogPost | undefined;
};

const defaultValues: blogContextType = {
  posts: [],
  addPost: () => {},
  editPost: () => {},
  deletePost: () => {},
  getPostBySlug: () => undefined,
};

const BlogContext = createContext<blogContextType>(defaultValues);

export function useBlog() {
  return useContext(BlogContext);
}

type Props = {
  children: ReactNode;
};

export function BlogProvider({ children }: Props) {
  const [posts, setPosts] = useState<BlogPost[]>(mockedBlog);

  const getPostBySlug = (slug: string): BlogPost | undefined =>
    posts.find((post) => post.slug === slug);

  const addPost = (post: Post) => {
    const newPostId = posts.length + 1;

    const postToBeAdded: BlogPost = {
      id: newPostId.toString(),
      date: new Date().toISOString(),
      slug: convertStringToSlug(post.heading),
      ...post,
    };

    try {
      setPosts((prevPosts) => {
        return [postToBeAdded, ...prevPosts];
      });
      Router.push('/blog');
    } catch (error) {}
  };

  const editPost = (post: Post & { id: string }) => {
    try {
      let postToBeEdit = posts.find(({ id }) => id === post.id);

      if (!postToBeEdit) return;
      const updatedPost: BlogPost = {
        ...post,
        date: postToBeEdit.date,
        slug: convertStringToSlug(post.heading),
      };

      console.log('HALLÅÅ', updatedPost);

      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if (post.id === updatedPost.id) return updatedPost;
          return post;
        });
      });
      Router.push('/blog');
    } catch (error) {}
  };

  const deletePost = (id: string) => {
    if (!id) return;
    try {
      let postToDelete = posts.find((post) => post.id === id);

      if (!postToDelete) return;

      setPosts((prevPosts) => {
        return prevPosts.filter((post) => post.id !== id);
      });

      Router.push('/blog');
    } catch (error) {}
  };

  const value = { posts, addPost, editPost, deletePost, getPostBySlug };
  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  );
}
