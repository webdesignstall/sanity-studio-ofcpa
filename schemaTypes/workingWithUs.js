export default
  {
    name: 'workingWithUs', // Use camelCase or kebab-case
    type: 'document',
    title: 'Working With Us',
    fields: [
      {
        name: 'sectionTitle', // Camel case
        type: 'string',
        title: 'Section Title',
      },
      {
        name: 'sectionSubtitle', // Camel case
        type: 'string',
        title: 'Section Subtitle',
      },
      {
        name: 'title', // Keep as is
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description', // Keep as is
        type: 'text',
        title: 'Description',
      },
      {
        name: 'image', // Keep as is
        type: 'image',
        title: 'Icon',
        options: {
          hotspot: true,
        },
      },
    ],
  }


