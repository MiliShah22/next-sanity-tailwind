import { getPagesbySlug } from "../../../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";
type Props = {
    params : {page : string}
}
export default async function Project({params}: Props) {
    const slug = params.page;
    const page = await getPagesbySlug(slug);
    return <div className="">
            <header className="flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page?.name}</h1>
        </header>
        
        <div className="mt-5 text-lg text-gray-500 ">
         <PortableText value={page?.content}/>
        </div>
        </div>
}