export const schema =`#graphql

    type Query {
        default:String!
        getCiudad(id:ID!): String!
        getCiudades:[String]!
    }

`