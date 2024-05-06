export function initialPlan(planArray){
    for(let i=0; i<360; i++){
        planArray[i] = " ";
    } 
}

function findYear(semester){
    if(semester == "1" || semester == "2") return 0;
    else if(semester == "3" || semester == "4") return 1;
    else if(semester == "5" || semester == "6") return 2;
    else if(semester == "7" || semester == "8") return 3;
    else return -1;
}

function findDay(day){
    if(day.toLowerCase() == "monday") return 0;
    else if(day.toLowerCase() == "tuesday") return 1;
    else if(day.toLowerCase() == "wednesday") return 2;
    else if(day.toLowerCase() == "thursday") return 3;
    else if(day.toLowerCase() == "friday") return 4;
    else return -1;
};

function findTimeSlot(time){
    if(time.trim() == "08:30") return 0;
    else if(time.trim() == "09:30") return 1;
    else if(time.trim() == "10:30") return 2;
    else if(time.trim() == "11:30") return 3;
    else if(time.trim() == "12:30") return 4;
    else if(time.trim() == "13:30") return 5;
    else if(time.trim() == "14:30") return 6;
    else if(time.trim() == "15:30") return 7;
    else if(time.trim() == "16:30") return 8;
    else return -1;
}

function findLocation(year,day,time){
    if(year == -1 || day == -1 || time == 1){
        alert('Incorrect data entry.');
        return;
    } 
    let dayBlock=72;
    let timeBlock=8;
    let yearBlock=2;
    return dayBlock*day + yearBlock*year + timeBlock*time;    
}

function matchCourseSemesterYear(lectureCode,courseArray){
    for(let course in courseArray){
        if(course.code == lectureCode){
            return findYear(course.semester);
        }
    }
}

function matchCourseNumberOfStudents(lectureCode,courseArray){
    for(let course in courseArray){
        if(course.code == lectureCode){
            return course.numStudents;
        }
    }
}

function matchCourseInstructor(lectureCode, courseArray){
    for(let course in courseArray){
        if(course.code == lectureCode){
            return course.instructor;
        }
    }
}


function findClassroom(lectureCode, classroomArray,courseArray){
    let numStudent = matchCourseNumberOfStudents(lectureCode,courseArray);
    for(let classes in classroomArray){
        if(classes.capacity >= numStudent){
            return classes.code;
        }
    }
}

export function placeService(planArray, serviceArray, classroomArray, courseArray){ 
    
    for(let service in serviceArray){
        let placedClassroom = findClassroom(service.code,classroomArray,courseArray);
        let day = findDay(service.serviceDay);
        let year = matchCourseSemesterYear(service.code);
        let time1 = findTimeSlot(service.serviceTimeSlot1);
        let time2 = findTimeSlot(service.serviceTimeSlot2);
        let time3 = findTimeSlot(service.serviceTimeSlot3);
        let lecture = service.code;

        let location1 = findLocation(year,day,time1);
        let location2 = findLocation(year,day,time2);
        let location3 = findLocation(year,day,time3);

        planArray[location1] = lecture;
        planArray[location1 + 1] = placedClassroom;
        planArray[location2] = lecture;
        planArray[location2 + 1] = placedClassroom;
        planArray[location3] = lecture;
        planArray[location3 + 1] = placedClassroom;
    }
}