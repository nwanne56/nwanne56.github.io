import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import fs from 'fs';

import getProjectData from '@/components/getPostData';

const getProjectContent = (slug) => {
    const folder = 'projects/';
    const file = `${folder}${slug}/index.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const projects = getProjectData();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const ProjectPage = (props) => {
    const slug = props.params.slug;
    const project = getProjectContent(slug);
    return (        
        <div className=''>
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