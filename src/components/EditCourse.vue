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
              <tr>
                <th scope="row"> # </th>
                <th> <input type="text" class="form-control" id="add1"> </th>
                <th> <input type="text" class="form-control" id="add2"> </th>
                <th> <input type="text" class="form-control" id="add3"> </th>
                <th> <input type="text" class="form-control" id="add4"> </th>
                <th> <input type="text" class="form-control" id="add5"> </th>
                <th> <input type="text" class="form-control" id="add6"> </th>
                <th> <input type="text" class="form-control" id="add7"> </th>
                <th> <input type="text" class="form-control" id="add8"> </th>
                <th> <input type="text" class="form-control" id="add8"> </th>
                <th> <button>ADD</button></th>
              </tr>
              <tr v-for="item in courses" :key="item.index">    
                <th scope="row"> {{item.id}} </th>
                <th> {{ item.code  }} </th>
                <th> {{ item.name  }} </th>
                <th> {{ item.semester  }} </th>
                <th> {{ item.credit  }} </th>
                <th> {{ item.CorE  }} </th>
                <th> {{ item.DorS  }} </th>
                <th> {{ item.numStudents  }} </th>
                <th> {{ item.instructor  }} </th>
                <th> {{ item.preference  }} </th>
                <th> <button>UPDATE</button><button>DELETE</button></th>
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
            courses:[   {"id":"1","code":"CENG114","name":"Computer Programming II",
                                "semester":"1","credit":"5","CorE":"C","DorS":"D","numStudents":"95",
                                "instructor":"OGR.GOR. YUSUF EVREN AYKAC","preference":"3"},
                        {"id":"2","code":"CHEM101","name":"GENERAL CHEMISTRY",
                                "semester":"1","credit":"5","CorE":"C","DorS":"S","numStudents":"110",
                                "instructor":"DOC.DR. NURAY CELEBI","preference":"3"}]
        };
    },
    methods: {

    },
    mounted(){
        let result = axios.get("http://localhost:3000/course");
        this.courses.join(result.data);
      console.log(this.courses);
    }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
.table{
    background-color: aliceblue;
}
</style>