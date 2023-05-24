import { Person } from "./Person";

export interface Teacher extends Person{
    title:string;
    asignature:string;
}