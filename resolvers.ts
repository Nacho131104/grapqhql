
import { Collection } from "mongodb";
import {cityModel} from "./types.ts";
import { ObjectId } from "mongodb";
import { GraphQLError } from "graphql";

type argsgetcities ={
    contact_Collection: Collection<cityModel>;
}

type argsgetCity={
    id: string,
}

type argsAddCity={
    nombre: string,
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
            const{nombre} = args;
            const API_KEY = Deno.env.get("API_KEY");
            if(!API_KEY)throw new GraphQLError("Se neecesita de una api key para acceder a los datos");
            
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