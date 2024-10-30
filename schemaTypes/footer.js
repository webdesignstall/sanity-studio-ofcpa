export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },
    /*{
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'url' }],
    },*/
    {
      name: 'copyright',
      title: 'Copyright Information',
      type: 'string',
    },
  ],
};
