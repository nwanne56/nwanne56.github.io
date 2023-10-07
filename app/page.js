import Link from "next/link";
import getPostData from '../components/getPostData';
import getProjectData from '../components/getProjectData';

import PostPreview from "../components/PostPreview";
import ProjectPreview from "../components/ProjectPreview";

function Home() {

  const postData = getPostData();
  const projectData = getProjectData();

  const subheader = (
    <header>
    <p className=" border-b-2 border-[#4E4950] p-2 m-4">
      <span className="font-bold text-stone-700 italics text-4xl">Welcome</span> to my page! Currently studying <span className="bg-neutral-600 text-white font-mono rounded-md">computer science</span> and <span className="bg-neutral-600 text-white font-mono rounded-md">nonprofit leadership</span> . TBD
    </p>
    </header>
  );

  const postPreviews = postData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const projectPreviews = projectData.map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));

  return (
    <div>
      {subheader}
      <div className="flex w-full">
        <div className="flex-1 border-[#4E4950] p-2 border-r-2 flex flex-col gap-2">
          {postPreviews}
        </div>
        <div className="flex-none w-5/12 p-2 flex flex-col gap-2">
          {projectPreviews}
        </div>
      </div>
    </div>
    
    );
}

export default Home;