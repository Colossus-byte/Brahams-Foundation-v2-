export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(120),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'Upcoming' },
          { title: 'Ongoing', value: 'Ongoing' },
          { title: 'Past', value: 'Past' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sports', value: 'Sports' },
          { title: 'Education', value: 'Education' },
          { title: 'Community', value: 'Community' },
          { title: 'Cultural', value: 'Cultural' },
          { title: 'Health', value: 'Health' },
          { title: 'Women', value: 'Women' },
          { title: 'Disability', value: 'Disability' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date & Time',
      type: 'datetime',
      options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date (optional)',
      type: 'datetime',
      options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm' },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description (max 200 characters)',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'gallery',
      title: 'Gallery Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'registrationLink',
      title: 'Registration Link (optional)',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Featured events appear larger in the events grid',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverPhoto',
      subtitle: 'status',
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: `${subtitle || 'No status'}`,
      };
    },
  },
};
