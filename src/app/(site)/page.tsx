import { getProjects } from "../../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="">
      <h1 className="text-7xl font-extrabold text-center">Hello I'm <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Mili</span></h1>
      <h3 className="mt-24 font-bold text-blue-700 text-3xl">My Projects</h3>
      <div className="mt-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
                  <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-3 hover:border-blue-600 hover:scale-105 transition">
                    {project.image && (
                      <Image src={project.image} width={750} height={300} alt={project.name}
                        className="object-cover rounded-lg border border-gray-500"></Image>
                    )
                    }
                    <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text 
                    text-transparent p-4 text-center">{project.name}</div>
                </Link>
            ))}
        </div>
    </div>
  );
}

