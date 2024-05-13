<template>
<div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">CODE</th>
                <th scope="col">NAME</th>
                <th scope="col">SEMESTER</th>
                <th scope="col">CREDIT</th>
                <th scope="col">Compulsory or Elective</th>
                <th scope="col">Department or Service</th>
                <th scope="col">Number of Students</th>
                <th scope="col">INSTRUCTOR</th>
                <th scope="col">PREFERENCE</th>
                <th scope="col">EDIT</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"> # </th>
                <th> <input type="text" class="form-control" placeholder="Enter Code" v-model="course.code"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Name" v-model="course.name"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Semester" v-model="course.semester"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Sredit" v-model="course.credit"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter C or E" v-model="course.CorE"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter D or S" v-model="course.DorS"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter #Students" v-model="course.numStudents"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Instructor" v-model="course.instructor"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Preference" v-model="course.preference"> </th>
                <th>
                    <span v-show="showAdd"> <button type="button" class="btn btn-success" v-on:click="addCourse">ADD</button></span>
                    <span v-show="showUpdate"> <button type="button" class="btn btn-success" v-on:click="updateCourse">SAVE</button></span>
                    <span v-show="showCancel"> <button type="button" class="btn btn-success" id="cancel" v-on:click="cancel">CANCEL</button></span>
                </th>
            </tr>
            <tr v-for="(item,counter) in courses" v-bind:key="item.id">
                <th> {{ counter +1 }} </th>
                <th> {{ item.code  }} </th>
                <th> {{ item.name  }} </th>
                <th> {{ item.semester  }} </th>
                <th> {{ item.credit  }} </th>
                <th> {{ item.CorE  }} </th>
                <th> {{ item.DorS  }} </th>
                <th> {{ item.numStudents  }} </th>
                <th> {{ item.instructor  }} </th>
                <th> {{ item.preference  }} </th>
                <th>
                    <button type="button" class="btn btn-success" v-on:click="showUpdateButton(item.id)">UPDATE</button>
                    <button type="button" class="btn btn-success" v-on:click="deleteCourse(item.id)">DELETE</button>
                </th>
            </tr>
        </tbody>
    </table>
</div>
<div>
    <button type="button" class="btn btn-success" v-on:click="update">FETCH DATA FROM SERVER</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Course",
    data() {
        return {
            courses: [],
            course: {
                code: "",
                name: "",
                semester: "",
                credit: "",
                CorE: "",
                DorS: "",
                numStudents: "",
                instructor: "",
                preference: ""
            },
            showAdd: true,
            showUpdate: false,
            showCancel: false,
            idItem:null
        };
    },
    methods: {
        async update() {
            axios.get("http://localhost:3000/course").then(response => (this.courses = response.data));
            this.course.code = null;
            this.course.name = null;
            this.course.semester = null;
            this.course.credit = null;
            this.course.CorE = null;
            this.course.DorS = null;
            this.course.numStudents = null;
            this.course.instructor = null;
            this.course.preference = null;
        },
        async addCourse() {
            let result = confirm("Save data?");
            if (result === true) {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
                await axios.post("http://localhost:3000/course",this.course);
            }
            await axios.get("http://localhost:3000/course").then(response => (this.courses = response.data));            
            this.course.code = null;
            this.course.name = null;
            this.course.semester = null;
            this.course.credit = null;
            this.course.CorE = null;
            this.course.DorS = null;
            this.course.numStudents = null;
            this.course.instructor = null;
            this.course.preference = null;
        },
        async showUpdateButton(idItem) {
            this.showAdd = false;
            this.showUpdate = true;
            this.showCancel = true;
            this.idItem = idItem;

            var result = await axios.get("http://localhost:3000/course/"+idItem);
            this.course.code = result.data.code;
            this.course.name = result.data.name;
            this.course.semester = result.data.semester;
            this.course.credit = result.data.credit;
            this.course.CorE = result.data.CorE;
            this.course.DorS = result.data.DorS;
            this.course.numStudents = result.data.numStudents;
            this.course.instructor = result.data.instructor;
            this.course.preference = result.data.preference;
        },
        cancel() {
            this.showAdd = true;
            this.showUpdate = false;
            this.showCancel = false;
            this.course.code = null;
            this.course.name = null;
            this.course.semester = null;
            this.course.credit = null;
            this.course.CorE = null;
            this.course.DorS = null;
            this.course.numStudents = null;
            this.course.instructor = null;
            this.course.preference = null;
        },
        async updateCourse() {
            let answer = confirm("Update data?");
            if (answer === true) {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
                const url = "http://localhost:3000/course/" + (this.idItem);
                await axios.put(url, {
                    code: this.course.code,
                    name: this.course.name,
                    semester: this.course.semester,
                    code: this.course.code,
                    credit: this.course.credit,
                    CorE: this.course.CorE,
                    DorS: this.course.DorS,
                    numStudents: this.course.numStudents,
                    instructor: this.course.instructor,
                    preference: this.course.preference
                });
            }else {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
            }
            await axios.get("http://localhost:3000/course").then(response => (this.courses = response.data));
            this.course.code = null;
            this.course.name = null;
            this.course.semester = null;
            this.course.credit = null;
            this.course.CorE = null;
            this.course.DorS = null;
            this.course.numStudents = null;
            this.course.instructor = null;
            this.course.preference = null;
        },
        async deleteCourse(item) {
            let answer = confirm("Delete data?");
            if (answer === true) {
                const url = "http://localhost:3000/course/" + item;
                await axios.delete(url);
            }
            await axios.get("http://localhost:3000/course").then(response => (this.courses = response.data));
            this.course.code = null;
            this.course.name = null;
            this.course.semester = null;
            this.course.credit = null;
            this.course.CorE = null;
            this.course.DorS = null;
            this.course.numStudents = null;
            this.course.instructor = null;
            this.course.preference = null;
        }
    }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

.table {
    background-color: aliceblue;
}

.btn-success {
    margin-right: 1%;
}

#cancel {
    background-color: red;
}
</style>
