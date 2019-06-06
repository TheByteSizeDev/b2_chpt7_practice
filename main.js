const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const createStudentComponent = (name, subject, info) => {
    return `
        <div class="student">
            <h1 class="failing">${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
        </div>
    `
}

const createPassingStudent = (name, subject, info ) => {
    return `
        <div class="student">
        <h1 class="xx-large passing">${name}</h1>
        <section class="bordered dashed section--padded">${subject}</section>
        <aside class="pushRight">${info}</aside>
        </div>
    `
}


 students.forEach( function(person) {
    let studentComponent = ""
        if (person.score >= 60) {
            studentComponent = createPassingStudent(person.name, person.subject, person.info)
        } else {
            studentComponent = createStudentComponent(person.name, person.subject, person.info)
        }
    document.querySelector("#container").innerHTML += studentComponent
})

/* <div class="student">
    <h1 class="xx-large passing">Student Name</h1>
    <section class="bordered dashed section--padded">Subject</section>
    <aside class="pushRight">Additional information</aside>
</div> */


// ****** REMIX!!!!!********


const createStudentComponent = (className, name, subject, info) => {
    return `
        <div class="student">
            <h1 class="${className}">${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
        </div>
    `
}

const studentContainer = document.querySelector(#container)
// ******* this was a much better way to do this than what you did dummy! This is only reaching into the dom once
//     where are what you did was reach in during every loop, which is inneficient!


// ******* For every student in the array of students run the Code. Student is just a place holder variable
for (const student of students) {
    let studentComponent = ""
        if (person.score >= 60) {
            studentComponent = createStudentComponent("passing", student.name, student.subject, student.info)
        } else {
            studentComponent = createStudentComponent("failing", student.name, student.subject, student.info)
        }
    studentContainer.innerHTML += studentComponent
})

//*********** Making it into a single argument. Exactly how you thought it would be just plus adding the class name



const createStudentComponent = (studentObj) => {
    return `
        <div class="student">
            <h1 class=>${studentObj.name}</h1>
            <section>${studentObj.subject}</section>
            <aside>${studetnObj.info}</aside>
        </div>
    `
}

const studentContainer = document.querySelector(#container)


for (const student of students) {
    let studentComponent = ""
        if (person.score >= 60) {
            studentComponent.className = "passing"
            studentComponent = createStudentComponent(student)
        } else {studentComponent
            studentComponent.className = "failing"
            studentComponent = createStudentComponent(student)
        }
    studentContainer.innerHTML += studentComponent
})
