import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import fs from 'fs';

import getProjectData from '@/components/getProjectData';

const getProjectContent = (head) => {
    const folder = 'projects/';
    const file = `${folder}${head}/index.md`;
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const matterResult = matter(content);
      return matterResult;
    }
    catch {
      return "404";
    }
    
}

export const generateStaticParams = async () => {
    const projects = getProjectData();
    console.log(projects);
    return projects.map((project) => ({
        head: project.head,
    }));
}

const ProjectPage = (props) => {
    const head = props.params.head;
    const project = getProjectContent(head);
    if (project == "404") {
      return <div className='text-2xl font-bold w-full h-full text-center text-shadow text-[#4E4950] pb-8'>404</div>
    }
    return (        
        <div className=''>
            <div class="gfm-embed" data-url="https://www.gofundme.com/f/mutual-aid-monday-zero-deaths-from-exposure/widget/medium"></div>
            <h1 className='text-2xl font-bold w-full text-center text-shadow text-[#4E4950] pb-8'>{project.data.title}</h1>
            <article className="prose-base ">
                <Markdown 
                    options={{
                        overrides: {
                          a: {
                            props: {
                              className: 'text-[#7070F3]',
                            },
                          },
                          code: {
                            props: {
                                className: 'bg-neutral-600 text-white font-mono rounded-md',
                            }
                          },
                          quote: {
                            props: {
                                className: 'border-t border-b border-[#4E4950] text-[#7D767F] ',
                            }
                          },
                          h2: {
                            props: {
                                className: ''
                            }
                          }
                        },
                      }}>
                    {project.content}
                </Markdown>
            </article>
        </div>
    )
};

export default ProjectPage;