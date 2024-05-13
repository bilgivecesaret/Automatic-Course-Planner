# Project – Web-based Course Planner

This project automatically creates a lesson plan in accordance with the curriculum period of a department at the university. The app assigns a class and a time slot for each subject in the curriculum. It prevents courses from the same year from intersecting with each other. It takes into account a variety of classes with different capacities and courses with different enrollments of students. Additionally, 9 time slots are available for each weekday (8:30 to 17:30) to accommodate classes. The department curriculum includes service courses offered by another department at the university. The time frame of these courses is fixed and predefined. For this reason, different time zones are not assigned to these courses other than the requested time zone. Additionally, some instructors may not be available during some time periods. The program therefore respects these intensive time periods for relevant courses. This program displays the department's course schedule on its website. In this program, no overlap between courses was prevented and all restrictions were complied with for one year of the curriculum. If this program does not find a possible schedule, it prints the error message "There is no way to schedule for the department." It then suggests the user to increase the number or capacity of classrooms to find the syllabus successfully.


## Getting Started

The following steps walk through getting the application running. 

1. [Clone the project](#1-clone-the-project)
2. [Install and set up the environment](#3-install-and-set-up-the-environment)
3. [Start the app](#5-start-the-app)

### 1. Clone the project

1. [Clone the project](https://github.com/bilgivecesaret/Automatic-Course-Planner.git), e.g. `gh repo clone bilgivecesaret/Automatic-Course-Planner`

### 2. Install and set up the environment

We recommend using VS Code to install and run the application. This application was made using Vue.js. To install Vue.js, visit https://vuejs.org/guide/quick-start.html. Install json-server to access files on the local server. To install json-server, follow the steps at https://www.npmjs.com/package/json-server. Perform the json-server installation command in this directory. Install axios for data transfers. You can access the installation command at https://axios-http.com/docs/intro. 

### 3. Start the app

Run `npm install` into terminal to install the app.
Run `npm run dev` into terminal to start the app.
Type 'cd public' into terminal to install json server.
Run `npx json-server db.json` into terminal to start the database db.json

**You can now view the app at http://localhost:5173**