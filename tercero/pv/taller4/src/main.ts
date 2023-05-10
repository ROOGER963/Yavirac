import {Student} from "./entities/students"
let students:Student[]=[];


function addStudent(){
    let currentStudent:Student ={
        name: readHtml("nameStudent"),
        identification: readHtml("identificationStudent"),
        adress: readHtml("adressStudent"),
        email: readHtml("emailStudent"),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent")
    }
    students.push(currentStudent);
    console.log(students);
    console.table(students);

}
function readHtml(id:string):string{
    return(<HTMLInputElement>document.getElementById(id)).value;
}
