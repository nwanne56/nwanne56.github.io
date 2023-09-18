import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import fs from 'fs';

import getPostData from '@/components/getPostData';

const getPostContent = (slug) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <p>
            <h1>Post: {post.data.title}</h1>
            <article className="prose-base">
                <Markdown>{post.content}</Markdown>
            </article>
        </p>
    )
};

export default PostPage;