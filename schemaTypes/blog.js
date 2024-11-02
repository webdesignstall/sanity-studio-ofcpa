
export default
  {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required()
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                title: 'Position',
                name: 'position',
                type: 'string',
                options: {
                  list: [
                    {title: 'Center', value: 'center'},
                    {title: 'Left', value: 'left'},
                    {title: 'Right', value: 'right'},
                  ],
                  layout: 'radio',
                  isHighlighted: true
                }
              },
              {
                type: 'text',
                name: 'alt',
                title: 'Description',
                options: {
                  isHighlighted: true
                }
              }
            ],
            options: {
              hotspot: true
            }
          },
          {
            type: 'table'
          }
          // {
          //   type: 'code',
          //   options: {
          //     withFilename: true
          //   }
          // }
        ],
        validation: Rule => Rule.required()
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'blogCategory'}],
        validation: Rule => Rule.required()
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}],
        validation: Rule => Rule.required()
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'tags',
        options: {
          includeFromRelated: 'tags',
          onCreate: (value) => ({
            label: value,
            value: value.toLowerCase().replace(/\W/g, '-'),
          })
        }
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        title: "Seo",
        name: "seo",
        type: "seoMetaFields",
      },
    ],
    preview: {
      select: {
        metaTitle: "seo",
      },
      prepare(selection) {
        const { metaTitle } = selection?.metaTitle || "";
        return {
          title: metaTitle || "seo",
        };
      },
    },
  }

