import { buildSubgraphSchema } from '@apollo/federation'
import { ApolloServer } from 'apollo-server'

import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core'

import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/typeDefs'

const port = 4002

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({
        embed: true,
        graphRef: 'plaid-gufzoj@current'
      })
      : ApolloServerPluginLandingPageLocalDefault({ embed: true })
  ]
})

async function start() {
  try {
    const { url } = await server.listen({ port })
    console.log(`Post server at ${url}`)
  } catch (e) {
    console.log(e)
  }
}

start()
