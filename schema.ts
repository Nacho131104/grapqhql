export const schema =`#graphql

    type Query {
        default:String!
        getCiudad(id:String!): Ciudad!
        getCiudades:[Ciudad]!
    }

`