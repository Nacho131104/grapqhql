export const schema =`#graphql

    type Ciudad{

    }
    type Query {
        default:String!
        getCiudad(id:String!): Ciudad!
        getCiudades:[Ciudad]!
    }

`