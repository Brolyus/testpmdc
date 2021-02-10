import Prismic from '@prismicio/client'

export const apiEndpoint = `https://${process.env.PRISMIC_REPOSITORY_NAME}.cdn.prismic.io/api/v2`
export const accessToken = process.env.PRISMIC_API_TOKEN

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, accessToken)

// const createClientOptions = (req = null, prismicAccessToken = null) => {
//   const reqOption = req ? { req } : {}
//   const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
//   return {
//     ...reqOption,
//     ...accessTokenOption,
//   }
// }