
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short summary of the post to show on the highlights page.',
      validation: Rule => Rule.max(200).warning('An excerpt should be short, ideally under 200 characters.')
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Layanan', value: 'layanan'},
          {title: 'Produk', value: 'produk'},
          {title: 'General', value: 'general'}
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'string',
      options: {
        list: [
          // Layanan subcategories
          {title: 'Pemantauan Kondisi', value: 'pemantauan-kondisi'},
          {title: 'Laser Shaft Alignment', value: 'laser-shaft-alignment'},
          {title: 'Penyeimbangan On-Site', value: 'penyeimbangan-on-site'},
          {title: 'Alat - Bearing Berukuran Besar', value: 'alat-bearing-berukuran-besar'},
          {title: 'Training', value: 'training'},
          // Future: Product subcategories can be added here
          {title: 'None', value: 'none'}
        ],
        layout: 'dropdown'
      },
      description: 'Optional: Select a specific subcategory if this post relates to a particular service or product',
      hidden: ({document}) => !document?.category || document.category === 'general'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
