import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import { Page } from "../types/Page";
import  clientConfig  from "./config/client-config"
export async function getProjects(): Promise<Project[]> {
  try {
    const projects: Project[] = await createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,  // Correct field reference for image URL
        url,
        content
      }`
    );

    console.log("Projects fetched:", projects); // Debugging: Logs the fetched projects
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error); // Logs any error that occurs
    return []; // Ensure we always return an array
  }
}

export async function getProjectsbySlug(slug: string): Promise<Project | null> {
  try {
    // Fetch the project by slug using a parameterized query
    const project: Project | null = await createClient(clientConfig).fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,  // Correct field reference for image URL
        url,
        content
      }`,
      { slug } // Pass slug as the parameter to the query
    );

    console.log("Project fetched:", project); // Logs the fetched project
    return project;
  } catch (error) {
    console.error("Error fetching project:", error); // Logs any error that occurs
    return null; // Return null if there's an error
  }
}
export async function getPages(): Promise<Page[]> {
  try {
    const pages: Page[] = await createClient(clientConfig).fetch(
      groq`*[_type == "page"] | order(name asc){
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        content
      }`
    );

    console.log("pages fetched:", pages); // Debugging: Logs the fetched pages
    return pages;
  } catch (error) {
    console.error("Error fetching pages:", error); // Logs any error that occurs
    return []; // Ensure we always return an array
  }
}

export async function getPagesbySlug(slug: string): Promise<Page | null> {
  try {
    // Fetch the project by slug using a parameterized query
    const page: Page | null = await createClient(clientConfig).fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        content
      }`,
      { slug } // Pass slug as the parameter to the query
    );

    console.log("Project fetched:", page); // Logs the fetched project
    return page;
  } catch (error) {
    console.error("Error fetching project:", error); // Logs any error that occurs
    return null; // Return null if there's an error
  }
}
