<template>
    <div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">CODE</th>
                <th scope="col">CAPACITY</th>
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
               <tr v-for="(item,index) in courses">   
                <th scope="row"> {{index}} </th>
                <td v-for="value in item.code" > {{ value  }} </td>
                <td v-for="value in item.name" > {{ value  }} </td>
                <td v-for="value in item.semester" > {{ value  }} </td>
                <td v-for="value in item.credit" > {{ value  }} </td>
                <td v-for="value in item.CorE" > {{ value  }} </td>
                <td v-for="value in item.DorS" > {{ value  }} </td>
                <td v-for="value in item.numStudents" > {{ value  }} </td>
                <td v-for="value in item.instructor" > {{ value  }} </td>
                <td v-for="value in item.preference" > {{ value  }} </td>
              </tr>              
            </tbody>
          </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Course",
    data() {
        return {
            courses:[   {"code":"CENG114","name":"Computer Programming II",
                                "semester":"1","credit":"5","CorE":"C","DorS":"D","numStudents":"95",
                                "instructor":"OGR.GOR. YUSUF EVREN AYKAC","preference":"3"},
                        {"code":"CHEM101","name":"GENERAL CHEMISTRY",
                                "semester":"1","credit":"5","CorE":"C","DorS":"S","numStudents":"110",
                                "instructor":"DOC.DR. NURAY CELEBI","preference":"3"}]
        };
    },
    methods: {

    },
    mounted(){
        let result = axios.get("http://localhost:3000/course");
        this.courses = result.data;
        console.log(this.course);
    }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
.table{
    background-color: aliceblue;
}
</style>