import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skyX85mIQm11NAcWY0NSHMDSV5n9Etn7GhowNHyLbwUxvS309NcraszGQUkcisQlFOuhGceI57yoqmHZTqvQPwZtAHQCtKLY7z7iIynnZv9XxIKyzdja17oKjMSilkzLcZDaGKrDbVBohJDXV2wvHehijBXoBWv615cm4rdvkgKalp0e0zbO"
})
