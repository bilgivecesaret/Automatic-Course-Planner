import axios from "axios";
var courses = [], classrooms = [], services = [], busies = [], plan = [];
var day="",semester="", time="";
var year, days, times;

export function initialPlan(){
    for(let i=0; i<360; i++){
        plan[i] = null; //i.toString();
    } 
    return plan;
}

function findYear(semester){
    if(semester == "1") return 0;
    else if(semester == "2") return 1;
    else if(semester == "3") return 2;
    else if(semester == "4") return 3;
    else return -1;
}

function findDay(day){
    if(day.toLowerCase() == "monday") return 0;
    else if(day.toLowerCase() == "tuesday") return 1;
    else if(day.toLowerCase() == "wednesday") return 2;
    else if(day.toLowerCase() == "thursday") return 3;
    else if(day.toLowerCase() == "friday") return 4;
    else return -1;
}

function findTimeSlot(time){
    if(time == "8:30") return 0;
    else if(time == "9:30") return 1;
    else if(time == "10:30") return 2;
    else if(time == "11:30") return 3;
    else if(time == "12:30") return 4;
    else if(time == "13:30") return 5;
    else if(time == "14:30") return 6;
    else if(time == "15:30") return 7;
    else if(time == "16:30") return 8;
    else return -1;
}

function findLocation(year, days, times){
    if(year == -1 || days == -1 || times == -1){
        return;
    }  
    var dayBlock=72;
    var timeBlock=8;
    var yearBlock=2;
    return dayBlock*days + yearBlock*year + timeBlock*times;    
}

function matchCourseSemesterYear(lectureCode){
    const course = courses.find(element => element.code === lectureCode);
    if (course) {
        return findYear(course.semester);
    }
    return null;    
}

function matchCourseNumberOfStudents(lectureCode){
    const course = courses.find(element => element.code === lectureCode);
    if (course) {
        return course.numStudents;
    }
    return null;
}

function matchCourseInstructor(lectureCode){
    const course = courses.find(element => element.code === lectureCode);
    if (course) {
        return course.instructor;
    }
    return null;
}


function findClassroom(lectureCode){
    var numStudents = matchCourseNumberOfStudents(lectureCode);
    if (numStudents !== null) {
        // Find a classroom that can accommodate the number of students
        const suitableClassroom = classrooms.find(classroom => parseInt(classroom.capacity) >= parseInt(numStudents));
        if (suitableClassroom) {
            return suitableClassroom.code;
        }
    }
    return null;
}

function isBlockLecture(lectureCode){
    const course = courses.find(element => element.code === lectureCode);
    if (course) {
        return course.preference === "3";
    }
    return null;
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
 
function searchTimeSlot(lectureCode){
    
}

export async function placeService(plan){ 

    courses = (await axios.get("http://localhost:3000/course")).data; 
    classrooms = (await axios.get("http://localhost:3000/classroom")).data;
    services = (await axios.get("http://localhost:3000/service")).data;
    busies = (await axios.get("http://localhost:3000/busy")).data; 

    services.forEach(element => {
        var placedClassroom = findClassroom(element.code);
        days = findDay(element.serviceDay);
        year = matchCourseSemesterYear(element.code);
        var time1 = findTimeSlot(element.serviceTimeSlot1);
        var time2 = findTimeSlot(element.serviceTimeSlot2);
        var time3 = findTimeSlot(element.serviceTimeSlot3);
        var lecture = element.code;
        var location1 = findLocation(year,days,time1);
        var location2 = findLocation(year,days,time2);
        var location3 = findLocation(year,days,time3);
    
        plan[location1] = lecture;
        plan[location1 + 1] = placedClassroom;
        plan[location2] = lecture;
        plan[location2 + 1] = placedClassroom;
        plan[location3] = lecture;
        plan[location3 + 1] = placedClassroom;   
        
    });
/*
    courses.forEach(element => {
        var placedClassroom = findClassroom(element.code);
        year = matchCourseSemesterYear(element.code);
        var instructor = matchCourseInstructor(lectureCode);
        var isBlockLecture = isBlockLecture(lectureCode);
        const foundDays = busy.find(element => element.instructor === instructor);
        var busyInstructorDay;
        if (foundDays) {
            busyInstructorDay = findDay(foundDays.busyDay);
        }


        var lectureDay = randomIntFromInterval(0, 4);
        while(lectureDay == busyInstructorDay){
            lectureDay = randomIntFromInterval(0, 4);
        }
        
*/



}

