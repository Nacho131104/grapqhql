
import { Collection } from "mongodb";
import {APIcity, Apitimezone, cityModel} from "./types.ts";
import { ObjectId } from "mongodb";
import { GraphQLError } from "graphql";

type argsgetcities ={
    contact_Collection: Collection<cityModel>;
}

type argsgetCity={
    id: string,
}

type argsAddCity={
    name: string,
    pais: string,
}
export const resolvers ={
    Query:{
        getCities:async(_:unknown,__:unknown,ctx:argsgetcities):Promise<cityModel[]|null> =>{
            const cities = await ctx.contact_Collection.find().toArray();
            return cities;
        },

        getCity:async(_:unknown,args:argsgetCity,ctx:argsgetcities):Promise<cityModel> =>{
            const cityEncontrada = await ctx.contact_Collection.findOne({_id: new ObjectId(args.id)})
            if(!cityEncontrada)throw new GraphQLError("No se ha encontrado dicha ciudad");
            return cityEncontrada;
        },
    
    },
    Mutation:{
        addCity:async(_:unknown,args:argsAddCity,ctx:argsgetcities):Promise<cityModel> =>{
            const{name,pais} = args;
            const API_KEY = Deno.env.get("API_KEY");
            if(!API_KEY)throw new GraphQLError("Se neecesita de una api key para acceder a los datos");
            
            const url = `https://api.api-ninjas.com/v1/city?name=${name}`;
            const data = await fetch(url,{
                headers:{
                    "X-API-KEY":API_KEY,
                }
            })
            if(data.status !==200)throw new GraphQLError("Error en la api ninja");
            const response:APIcity[] = await data.json();

            const latitude = response[0].latitude;
            const longitude = response[0].longitude;
            const population = response[0].population;

            const url2 = `https://api.api-ninjas.com/v1/timezone?city=${name}`;
            const data2 = await fetch(url2,{
                headers:{
                    "X-API-KEY":API_KEY,
                }
            })
            if(data2.status !==200)throw new GraphQLError("Error en la api ninja");
            const response2: Apitimezone = await data2.json();
            const timezone = response2.timezone;
            const {insertedId} = await ctx.contact_Collection.insertOne({
                name,
                country:pais,
                latitude,
                longitude,
                population,
                timezone
            })
            return {
                _id: insertedId,
                name,
                country:pais,
                latitude,
                longitude,
                population,
                timezone,
            }
        }
    }

    /*
    Ciudad:{
        id:(parent:cityModel):string => {return parent._id!.toString();},

        latitude:async(parent:cityModel):Promise<number>=>{


        }

    }
        */
}