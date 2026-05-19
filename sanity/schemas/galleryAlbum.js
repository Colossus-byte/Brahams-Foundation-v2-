export default {
  name: 'galleryAlbum',
  title: 'Gallery Album',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Album Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'All', value: 'All' },
          { title: 'Sports', value: 'Sports' },
          { title: 'Education', value: 'Education' },
          { title: 'Community', value: 'Community' },
          { title: 'Cultural', value: 'Cultural' },
          { title: 'Health', value: 'Health' },
          { title: 'Women', value: 'Women' },
          { title: 'Disability', value: 'Disability' },
        ],
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'photo',
          title: 'Photo',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
          preview: {
            select: { media: 'image', title: 'caption' },
            prepare({ media, title }) {
              return { media, title: title || 'Photo' };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'category',
    },
  },
};
