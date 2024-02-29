
// Destructure  ---> {} is also use to destructure the code
//  {} ----> React me use karenge code ko destruture karne ke liye

const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

const {courseInstructor}=course

console.log(courseInstructor)


const {courseInstructor:instructor}=course

console.log(instructor)


