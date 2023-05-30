class Student {
    name: string;
    semester: number;
    course: string;

    constructor(name: string, semester: number, course: string) {
        this.name = name;
        this.semester = semester;
        this.course = course;
    }

    // Método Getter con Courses
    public get courses() {
        return this.course;
    }

    public set courses(thecourse: string) {
        this.course = thecourse;
    }
}
// Acceder a cualquier propiedad de la clase Student,
let student = new Student("Aman Rathod", 4, "Web Development");

// Método Setter
student.course = "Estos datos son usando el método SETTER";

// Método Getter
console.log("Esta muestra en pantalla es del método GETTER y " + student.courses);
