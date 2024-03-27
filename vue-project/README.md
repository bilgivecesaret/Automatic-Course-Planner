CENG206 – Project – Web-based Course Planner
Implement an automatic course planner for a curriculum semester of a department. 
In the curriculum, there are several courses for each year of the curriculum. 
This program will assign a classroom and a time slot for each course in the curriculum. 
Courses in the same year should not be intersected with each other. 
There are several classrooms with varying capacities and courses with varying registered students. 
In addition, for each weekday there are 8 time slots available, (from 8:30 to 16:30), to place a course in a classroom. 
In the department curriculum, there are some service courses that are given by another department at the university. 
The time slot of these courses is fixed and predefined. 
Therefore, you cannot assign different time slots for those courses other than the requested time slot. 
Furthermore, some instructors may not be available for some time slots. 
Thus, your program should respect these busy time slots for the respective courses. 
In the end, this program will show the course schedule for the department on the webpage. 
In this schedule, there should not be any intersection between courses for a year of the curriculum and respect all constraints. 
If this program cannot find any possible schedule it will print an error message “There is no way to make a schedule for the department.” 
Then, you may suggest the user to increase the number of classrooms or their capacity to find a course schedule successfully.