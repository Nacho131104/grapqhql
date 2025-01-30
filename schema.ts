export const schema =`#graphql

    type Ciudad{
        nombre: String!
        pais: String!
        latitude: Float!
        longitude: Float!
        population: Int!
        timezone: String!
    }
    type Query {
        getCity(id:ID!): Ciudad!
        getCities:[Ciudad]!
    }

`