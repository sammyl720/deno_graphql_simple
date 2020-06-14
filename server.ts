import { Application, Context} from 'https://deno.land/x/oak/mod.ts'
import { applyGraphQL, gql } from "https://deno.land/x/oak_graphql/mod.ts";
import { resolvers } from './resolvers.ts'
import { typeDefs } from './graphql_types.ts' 
const app = new Application()


const GraphQLService = await applyGraphQL({
  typeDefs,
  resolvers
})

app.use(GraphQLService.routes(), GraphQLService.allowedMethods())
console.log(`Server started on localhost:8000`)
app.listen({ port: 8000 })