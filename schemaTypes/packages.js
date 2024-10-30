export default {
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    {
      name: 'planName',
      title: 'Plan Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
