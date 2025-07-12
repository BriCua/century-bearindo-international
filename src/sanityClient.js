
import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'gpuveli0', // find this in sanity.json or manage.sanity.io
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
})
