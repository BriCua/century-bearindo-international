
import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'gpuveli0', // find this in sanity.json or manage.sanity.io
  dataset: 'production',
  apiVersion: '2021-08-31', // use a UTC date string - pinned API version
  useCdn: true, // `false` if you want to ensure fresh data
})
