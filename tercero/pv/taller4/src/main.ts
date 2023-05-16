import{Student} from "./entities/students"
import{Teacher} from "./entities/teacher";
import {Course} from "./entities/course";
let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];
enum Carrera {
    turismo = "Turismo",
    marketing = "Marketing",
    software = "Software",
}
function addStudent(){
    let currentStudent:Student ={
        
        name: readHtml("nameStudent"),
        id: parseInt(readHtml("identStudent")),
        adress: readHtml("adressStudent"),
        registration:readHtml("registrationStudent"),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent")
    }
    students.push(currentStudent);
    console.log(students);
    console.table(students);

}

function addTeacher(){
    let currentTeacher: Teacher = {
       name: readHtml("nameTeacher"),
       id: parseInt( readHtml("idTeacher")),
       adress: readHtml("addressTeacher"),
       title:readHtml("titleTeacher"),
       asignature: readHtml("asignatureTeacher") as "Interfaces" | "Programacion" | "Metodologias",
       carrer: readHtml("carrerTeacher"),
    }
    teachers.push(currentTeacher);
    console.log(teachers);
    console.table(teachers);
   }
   function addCourse(){
    let currentCourse: Course = {
       area: readHtml("areaCourse"),
       name:  readHtml("nameCourse"),
    }
    courses.push(currentCourse);
    console.log(courses);
    console.table(courses);
   }
function readHtml(id: string): string{
    return (<HTMLInputElement>document.getElementById(id)).value;
}
