import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk4yFpBgHF21fX2CgpL3UHt4BwmCjBJ0doOXVe38ooUZZSaqO3iQnl7SATiFMCeHnUqVZ3IfEUvlgrzoEAuSUVFLG6MuscQkSjP3KQOi0PrgtaK7FmOgctaF6RACZ3TZTzI9Wvp8L8CkVHrv97xOHkUWxPo51pxHTTRNhjUhUSvfzucxaaGT"
})
