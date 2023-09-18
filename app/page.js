import Link from "next/link";
import getPostData from '../components/getPostData';
import PostPreview from "../components/PostPreview";


function Home() {
  const projectLinks = [1, 2, 3];

  const postData = getPostData();

  const subheader = (
    <header>
    <p className=" border-b-2 border-[#4E4950] p-2 m-4">
      <span className="font-bold text-stone-700 italics text-4xl">Welcome</span> to my page  I a ma a guy fro m cllege of <span className="bg-neutral-600 text-white font-mono rounded-md">ocllege here</span> studying <span className="bg-neutral-600 text-white font-mono rounded-md">degree here</span>.   
      I like to make stuff like this and that and I am interested in a and I also like to makeo ther stuff 
    </p>
    </header>
  );

  const postPreviews = postData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      {subheader}
      <div className="flex w-full">
        <div className="flex-1 border-[#4E4950] p-2 border-r-2">
          {postPreviews}
        </div>
        <div className="flex-none w-5/12 p-2">
          {projectLinks}
        </div>
      </div>
    </div>
    
    );
}

export default Home;