
import{OptionalId}from"mongodb"


export type cityModel=OptionalId<{
    nombre: string,
    pais: string,
    population: number,
    latitude: number,
    longitude: number,
    timezone: string,
}>


//https://api.api-ninjas.com/v1/city
export type APIcity ={
    name: string,
    latitude: number,
    longitude: number,
    population: number,
    country: string,
}