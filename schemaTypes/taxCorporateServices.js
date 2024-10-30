export default {
  name: 'taxCorporateServices',
  type: 'document',
  title: 'Tax and Corporate Services',
  fields: [
    {
      name: 'serviceTitle',
      type: 'string',
      title: 'Service Title',
      description: 'Title of the tax or corporate service (e.g., 1040 with Sch C)',
    },
    {
      name: 'serviceItems',
      type: 'array',
      title: 'Service Items',
      of: [
        {
          type: 'object',
          title: 'Service Item',
          fields: [
            {
              name: 'itemTitle',
              type: 'string',
              title: 'Item Title',
              description: 'Detailed title or description for the service item',
            },
            {
              name: 'price',
              type: 'string',
              title: 'Price',
              description: 'Price of the service item (e.g., $1,500+)',
            },
          ],
        },
      ],
    },
  ],
};
