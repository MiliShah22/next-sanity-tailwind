// project-schema.ts

const project = {
  name: "project", // Corrected name to match Sanity convention
  title: "project",
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }, // Corrected typo ('hotsot' -> 'hotspot')
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default project;
