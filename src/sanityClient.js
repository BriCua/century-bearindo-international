
import {createClient} from '@sanity/client'

console.log("!!! Attempting to create Sanity client...");
let client;
try {
  client = createClient({
    projectId: 'gpuveli0', // find this in sanity.json or manage.sanity.io
    dataset: 'production',
    apiVersion: '2021-08-31', // use a UTC date string - pinned API version
    useCdn: true, // `false` if you want to ensure fresh data
  });
  console.log("!!! Sanity client created successfully.");
} catch (error) {
  console.error("!!! Error creating Sanity client:", error.message);
  // Re-throw or handle as appropriate for production, but for now, log it.
  throw error;
}

export default client;
