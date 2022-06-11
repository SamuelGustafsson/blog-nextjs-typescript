export type Author = {
    name: string, // Max 40 characters
    email: string, // Valid email
}

export type Post = {
    heading: string // Max 50 characters
    preamble: string // Max 250 characters
    text: string
    author: Author
}

export type BlogPost = Post & {
    id: string
    slug: string
    date: string
}
