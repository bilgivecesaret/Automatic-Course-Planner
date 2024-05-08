import axios from "axios";
var courses = [], classrooms = [], services = [], busies = [], plan = [];
var semester="", day="", time="", lectureCode="";
var year, days, times;

axios.get("http://localhost:3000/course").then(response => (courses = response.data)); 
axios.get("http://localhost:3000/classroom").then(response => (classrooms = response.data));
axios.get("http://localhost:3000/service").then(response => (services = response.data));
axios.get("http://localhost:3000/busy").then(response => (busies = response.data)); 

export function initialPlan(){
    for(let i=0; i<360; i++){
        plan[i] = i.toString();
    } 
    return plan;
}
function findYear(semester){
    if(semester == "1" || semester == "2") return 0;
    else if(semester == "3" || semester == "4") return 1;
    else if(semester == "5" || semester == "6") return 2;
    else if(semester == "7" || semester == "8") return 3;
    else return -1;
}

function findDay(day){
    if(day == "Monday") return 0;
    else if(day == "Tuesday") return 1;
    else if(day == "Wednesday") return 2;
    else if(day == "Thursday") return 3;
    else if(day == "Friday") return 4;
    else return -1;
};

function findTimeSlot(time){
    if(time == "08:30") return 0;
    else if(time == "09:30") return 1;
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
    if(year == -1 || day == -1 || time == -1){
        return;
    }  
    var dayBlock=72;
    var timeBlock=8;
    var yearBlock=2;
    return dayBlock*day + yearBlock*year + timeBlock*time;    
}

function matchCourseSemesterYear(lectureCode){
    for(let course in courses){
        if(course.code == lectureCode){
            return findYear(course.semester);
        }
    }
}

function matchCourseNumberOfStudents(lectureCode){
    for(let course in courses){
        if(course.code == lectureCode){
            return course.numStudents;
        }
    }
}

function matchCourseInstructor(lectureCode){
    for(let course in courses){
        if(course.code == lectureCode){
            return course.instructor;
        }
    }
}


function findClassroom(lectureCode){
    let numStudent = matchCourseNumberOfStudents(lectureCode);
    for(let classes in classrooms){
        if(classes.capacity >= numStudent){
            return classes.code;
        }
    }
}

export function placeService(plan){ 
    for(var service in services){
        var placedClassroom = findClassroom(service.code);
        days = findDay(service.serviceDay);
        year = matchCourseSemesterYear(service.code);
        var time1 = findTimeSlot(service.serviceTimeSlot1);
        var time2 = findTimeSlot(service.serviceTimeSlot2);
        var time3 = findTimeSlot(service.serviceTimeSlot3);
        var lecture = service.code;
        var location1 = findLocation(year,days,time1);
        var location2 = findLocation(year,days,time2);
        var location3 = findLocation(year,days,time3);

        plan[location1] = lecture;
        plan[location1 + 1] = placedClassroom;
        plan[location2] = lecture;
        plan[location2 + 1] = placedClassroom;
        plan[location3] = lecture;
        plan[location3 + 1] = placedClassroom;        
    }
    plan[16] = "CENG 114";
    plan[17] = "C111";
    plan[34] = "CENG 202";
    plan[35] = "B414";
}