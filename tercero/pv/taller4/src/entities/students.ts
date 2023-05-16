import { Person } from "./person"

export interface Student extends Person {
    registration:string;
    carrer:string;
    level:string;
}