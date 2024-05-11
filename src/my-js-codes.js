import axios from "axios";
var courses = [], classrooms = [], services = [], busies = [], plan = [];  

export function initialPlan(){
    for(let i=0; i<360; i++){
        plan[i] = null;//i.toString();
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

function findLocation(year, day, time){
    if(year == -1 || day == -1 || time == -1){
        return false;
    }  
    var dayBlock=72;
    var timeBlock=8;
    var yearBlock=2;
    return dayBlock*day + yearBlock*year + timeBlock*time;    
}

function matchCourseSemester(lectureCode){
    const course = courses.find(element => element.code === lectureCode);
    if (course) {
        return course.semester;
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

function isBusyInstructor(instructor){ 
    var isBusy = false;  
    busies.forEach(element => {        
        if(element.instructor === instructor){
            isBusy = true;
        }            
    });
    return isBusy;
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
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseRandomItemInArray(arr) {
    if(arr == null){
        return null;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function removeItemFromArray(arr, item) {
    for(var i = 0; i < arr.length; i++){ 
        if (arr[i] === item) {
          arr.splice(i, 1); 
        }
    }
    return arr;
}

function findItemFromArray(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
      return true;
    }
    return false;
}

function showAllTimeSlotsInSemester(semester){
    var timeSlotRange = [];
    var timeSlotConstant;
    var year = findYear(semester);   

    for(timeSlotConstant=0; timeSlotConstant<45; timeSlotConstant++){
        var range = 8*timeSlotConstant + year*2;
        timeSlotRange.push(range);
    }
    return timeSlotRange;
}

export async function makePlan(plan,info){ 
    initialPlan();
    courses = (await axios.get("http://localhost:3000/course")).data; 
    classrooms = (await axios.get("http://localhost:3000/classroom")).data;
    services = (await axios.get("http://localhost:3000/service")).data;
    busies = (await axios.get("http://localhost:3000/busy")).data; 

    services.forEach(element => {
        var placedClassroom = findClassroom(element.code);
        var days = findDay(element.serviceDay);
        var year = findYear(matchCourseSemester(element.code));

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

    var newCourseArray = [];
    for(var i=0; i<courses.length;i++){
        newCourseArray.push(courses[i]);
        for(var j=0; j<services.length;j++){
            if(courses[i].code === services[j].code){
                newCourseArray.pop();
            }
        }
    }    
   
    newCourseArray.forEach(element => {
        var placedClassroom = findClassroom(element.code);
        var semester = matchCourseSemester(element.code);
        var instructor = matchCourseInstructor(element.code);
        var isBusy = isBusyInstructor(instructor);
        var allTimeSlots = showAllTimeSlotsInSemester(semester);   
          
        for(var i=0; i<plan.length; i++){
            if(plan[i] !== null)
                removeItemFromArray(allTimeSlots,i);            
        }      

        var ignoreTimeSlots = []; 
        if(isBusy){            
            for(var i=0; i<busies.length; i++){
                if(busies[i].instructor === element.instructor){
                    if(busies[i].busyTimeSlots1) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots1)));
                    if(busies[i].busyTimeSlots2) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots2)));
                    if(busies[i].busyTimeSlots3) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots3)));
                    if(busies[i].busyTimeSlots4) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots4)));
                    if(busies[i].busyTimeSlots5) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots5)));
                    if(busies[i].busyTimeSlots6) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots6)));
                    if(busies[i].busyTimeSlots7) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots7)));
                    if(busies[i].busyTimeSlots8) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots8)));
                    if(busies[i].busyTimeSlots9) ignoreTimeSlots.push(findLocation(findYear(semester),findDay(busies[i].busyDay),findTimeSlot(busies[i].busyTimeSlots9)));                                        
                }
            }
        } 
        
        for(var i=0; i<allTimeSlots.length; i++){
            if(allTimeSlots[i]){
                removeItemFromArray(allTimeSlots,ignoreTimeSlots[i]);
            }
        }

        if(isBlockLecture(element.code)){
            var flagBlock = true;
            var location = chooseRandomItemInArray(allTimeSlots);
            var eval1 = findItemFromArray(allTimeSlots,location);
            var eval2 = findItemFromArray(allTimeSlots,(location+8));
            var eval3 = findItemFromArray(allTimeSlots,(location+16));               
        
            if(eval1 && eval2 && eval3){
                plan[location] = element.code;
                plan[location+1] = placedClassroom;
                plan[location+8] = element.code;
                plan[location+9] = placedClassroom;
                plan[location+16] = element.code;
                plan[location+17] = placedClassroom;
                removeItemFromArray(allTimeSlots,location);
                removeItemFromArray(allTimeSlots,location+8);
                removeItemFromArray(allTimeSlots,location+16);
                flagBlock = false;                                  
            }
            if(flagBlock){
                info = 'Can not create a block lecture plan!';
                return;
            }
        }else{
            var flagApart = true;
            var location = chooseRandomItemInArray(allTimeSlots);               
            var eval1 = findItemFromArray(allTimeSlots,location);
            var eval2 = findItemFromArray(allTimeSlots,(location+8));
            
            if(eval1 && eval2){
                plan[location] = element.code;
                plan[location+1] = placedClassroom;
                plan[location+8] = element.code;
                plan[location+9] = placedClassroom;  
                removeItemFromArray(allTimeSlots,location);
                removeItemFromArray(allTimeSlots,location+8); 
                flagApart = false;            
            }            
            location = chooseRandomItemInArray(allTimeSlots);
            var eval3 = findItemFromArray(allTimeSlots,location);
            if(eval3){
                plan[location] = element.code;
                plan[location +1] = placedClassroom;
                removeItemFromArray(allTimeSlots,location);
                flagApart = false; 
            }
            if(flagApart){
                info = 'Can not create a 2+1 lecture plan!';
                return;
            }        
        }              
    }); 
   
}