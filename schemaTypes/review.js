export default
  {
    name: 'review',
    type: 'document',
    title: 'Review',
    fields: [
      {
        name: 'reviewerName',
        type: 'string',
        title: 'Reviewer Name',
        validation: (Rule) => Rule.required().error('Reviewer name is required'),
      },
      {
        name: 'reviewerTitle',
        type: 'string',
        title: 'Reviewer Title',
        description: 'The title or position of the reviewer (e.g., CEO, Manager)',
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        validation: (Rule) =>
          Rule.required()
            .min(1)
            .max(5)
            .error('Rating must be between 1 and 5'),
        description: 'Rating out of 5',
      },
      {
        name: 'reviewText',
        type: 'text',
        title: 'Review Text',
        validation: (Rule) => Rule.required().min(10).error('Review text must be at least 10 characters'),
        description: 'The main content of the review',
      },
    ],
  }


