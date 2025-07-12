
import {createClient} from '@sanity/client'

export default createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // find this in sanity.json or manage.sanity.io
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
})
