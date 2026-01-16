export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
  ],
}
