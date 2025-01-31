import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import schemas from "./sanity/schemas";

const config = defineConfig({

    projectId: "dgyuedhl",
    dataset: "next-sanity",
    title: "Next Sanity",
    apiVersion: "2025-01-30",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {
        types: schemas
    }
});

export default config;