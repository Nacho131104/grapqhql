export const schema =`#graphql

    type Query {
        default:String!
        getCiudad(id:ID!): Ciudad!
        getCiudades:[Ciudad]!
    }

`