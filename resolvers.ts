
import { Collection } from "mongodb";
import {cityModel} from "./types.ts";
import { ObjectId } from "../../../../AppData/Local/deno/npm/registry.npmjs.org/bson/6.10.1/bson.d.ts";
import { GraphQLError } from "graphql";

type argsgetcities ={
    contact_Collection: Collection<cityModel>;
}

type argsgetCity={
    id: string,
}
export const resolvers ={
    Query:{
        getCities:async(_:unknown,__:unknown,ctx:argsgetcities):Promise<cityModel[]|null> =>{
            const cities = await ctx.contact_Collection.find().toArray();
            return cities;
        },

        /*
        getCity:async(_:unknown,args:argsgetCity,ctx:argsgetcities):Promise<cityModel> =>{
            const city = await ctx.contact_Collection.findOne({_id: new ObjectId(args.id)})
            if(!city)throw new GraphQLError("No se ha encontrado dicha ciudad");
            return city;
        }
            */
    },

    /*
    Ciudad:{
        id:(parent:cityModel):string => {return parent._id!.toString();},

        latitude:async(parent:cityModel):Promise<number>=>{


        }

    }
        */
}