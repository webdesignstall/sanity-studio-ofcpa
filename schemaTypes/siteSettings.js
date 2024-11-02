export default
  {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    fields: [
      {
        name: 'favicon',
        title: 'Favicon',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'siteName',
        title: 'Site Name',
        type: 'string'
      }
    ]
  }

