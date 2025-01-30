
import { Collection } from "mongodb";
import {cityModel} from "./types.ts";

type argsgetcities ={
    context: Collection<cityModel>;
}
export const resolvers ={
    Query:{
        getCities:async(_:unknown,__:unknown,ctx:argsgetcities):Promise<cityModel[]|null> =>{
            const cities = await ctx.context.find().toArray();
            return cities;
        }
    }
}