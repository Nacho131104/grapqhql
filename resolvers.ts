
import { Collection } from "mongodb";
import {cityModel} from "./types.ts";

type argsgetcities ={
    contact_Collection: Collection<cityModel>;
}
export const resolvers ={
    Query:{
        getCities:async(_:unknown,__:unknown,ctx:argsgetcities):Promise<cityModel[]|null> =>{
            const cities = await ctx.contact_Collection.find().toArray();
            console.log(cities)
            return cities;
        }
    }
}