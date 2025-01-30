
import{OptionalId}from"mongodb"


export type cityModel=OptionalId<{
    nombre: string,
    pais: string,
    population: number,
    latitude: number,
    longitude: number,
    timezone: string,
}>


