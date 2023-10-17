import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skCMEknAzhK8k4L7pxp4JA8LU4l0bejdCp5z0jVB705oSMzpE1TOcPBcytKuaajDvn4PD8XEBhS4FPog2YWcfEfksKWG8XqoGI4v16nr9qVyCKJ1k9vVz9mBiao9gsXSDViciZuaFw53rlO4LvG3rna8tO3IfRSBRi9w6rE7EA3WiRt2Pffk"
})
