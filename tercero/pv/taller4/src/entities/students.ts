import { Person } from "./person"

export interface Student extends Person {
    carrer:string;
    level:string;
}