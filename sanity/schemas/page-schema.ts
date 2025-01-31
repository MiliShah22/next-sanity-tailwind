// page-schema.ts

const page = {
  name: "page", // Corrected name to match Sanity convention
  title: "Page",
  type: "document",
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: "string",
    },
    {
      name: 'slug',
      title: 'Slug',
      type: "slug",
      options: { source: 'name' },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default page;
