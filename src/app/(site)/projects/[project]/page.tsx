import { getProjectsbySlug } from "../../../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";
type Props = {
    params : {project : string}
}
export default async function Project({params}: Props) {
    const slug = params.project;
    const project = await getProjectsbySlug(slug);
    return <div className="">
            <header className="flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project?.name}</h1>
            <a href={project?.url} title="View Project" target="_blank" className="bg-gray-200 rounded-lg text-gray-500 font-blod py-3 px-4 whitespace-nowrap">View  Project</a>
        </header>
         {project?.image && (
                      <Image src={project?.image} width={750} height={300} alt={project?.name}
                        className="object-cover rounded-lg border border-gray-500 mt-10"></Image>
                    )
                    }
        <div className="mt-5 text-lg text-gray-500 ">
         <PortableText value={project?.content}/>
        </div>
        </div>
}