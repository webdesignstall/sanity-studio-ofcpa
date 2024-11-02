export default
  {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image'
      }
    ]
  }

