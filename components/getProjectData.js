import fs from "fs";
import matter from 'gray-matter';

const getProjectData = () => {
    const main = "projects/";
    const projectFolders = fs.readdirSync(main).filter(function (file) {
        return fs.statSync(main+'/'+file).isDirectory();
    });
    console.log(projectFolders);
    const projectsPosts = projectFolders.map((folder) => {
        const projects = fs.readdirSync(main + folder + "/");
        const mdIndex = projects.find((file) => file == "index.md");
        const contents = fs.readFileSync(`${main}${folder}/${mdIndex}`, 'utf-8');
        const matterResult = matter(contents);
        return matterResult.data;
    })
    return projectsPosts;

}

export default getProjectData;