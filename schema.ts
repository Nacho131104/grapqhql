export const schema =`#graphql

    type Ciudad{

    }
    type Query {
        getCiudad(id:String!): Ciudad!
        getCiudades:[Ciudad]!
    }

`