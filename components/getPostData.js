import fs from "fs";
import matter from 'gray-matter';

const getPostData = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const mdPosts = files.filter((file) => file.endsWith(".md"));
    const posts = mdPosts.map((filename) => {
      const contents = fs.readFileSync(`posts/${filename}`, 'utf-8');
      const matterResult = matter(contents);
      return matterResult.data;
    })
    posts.sort(function(a,b) {
      return Date.parse(b.date) - Date.parse(a.date);
    })
    return posts;
}

export default getPostData;