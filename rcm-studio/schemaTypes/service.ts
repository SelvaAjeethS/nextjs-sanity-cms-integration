export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'icon', title: 'Icon (emoji)', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}