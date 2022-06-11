import { useRouter } from 'next/router';

import PostFormEdit from '@/components/PostFormEdit';
import { useBlog } from '@/contexts/BlogContext';

function BlogEdit() {
  const router = useRouter();
  const { posts, getPostBySlug } = useBlog();

  const slug = router.query?.slug;

  const post = slug && getPostBySlug(slug.toString());

  if (post) return <PostFormEdit post={post} />;
  else return <div>{`Inlägget ${router.query.slug} kunde inte hittas`}</div>;
}

export default BlogEdit;
