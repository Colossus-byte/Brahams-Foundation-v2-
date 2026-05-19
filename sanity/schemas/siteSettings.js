export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline shown in the hero section',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 3,
      description: 'Supporting text below the headline',
    },
    {
      name: 'missionText',
      title: 'Mission Statement',
      type: 'text',
      rows: 5,
      description: 'The foundation mission description',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 3,
    },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
};
