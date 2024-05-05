<template>
  <div>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">INSTRUCTOR</th>
              <th scope="col">WEEKDAY</th>
              <th scope="col">TIME SLOT 1</th>
              <th scope="col">TIME SLOT 2</th>
              <th scope="col">TIME SLOT 3</th>
              <th scope="col">TIME SLOT 4</th>
              <th scope="col">TIME SLOT 5</th>
              <th scope="col">TIME SLOT 6</th>
              <th scope="col">TIME SLOT 7</th>
              <th scope="col">TIME SLOT 8</th>
              <th scope="col">TIME SLOT 9</th>
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
              <th> <input type="text" class="form-control" id="add9"> </th>
              <th> <input type="text" class="form-control" id="add10"> </th>
              <th> <input type="text" class="form-control" id="add11"> </th>
              <th> <button>ADD</button></th>
            </tr>
            <tr v-for="item in busies" :key="item.index">    
              <th scope="row"> {{item.id}} </th>
              <th> {{ item.instructor  }} </th>
              <th> {{ item.busyDay  }} </th>
              <th> {{ item.busyTimeSlots1 }} </th>
              <th> {{ item.busyTimeSlots2 }} </th>
              <th> {{ item.busyTimeSlots3 }} </th>
              <th> {{ item.busyTimeSlots4 }} </th>
              <th> {{ item.busyTimeSlots5 }} </th>
              <th> {{ item.busyTimeSlots6 }} </th>
              <th> {{ item.busyTimeSlots7 }} </th>
              <th> {{ item.busyTimeSlots8 }} </th>
              <th> {{ item.busyTimeSlots9 }} </th>
              <th> <button>UPDATE</button><button>DELETE</button></th>
            </tr>              
          </tbody>
        </table>
        <button v-on:click="update">FETCH DATA ON SERVER</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name:"Service",
  data() {
      return {
          busies:[]
      };
  },
  methods: {
    update(){
      axios.get("http://localhost:3000/busy").then(response => (this.busies = response.data));
      console.log(this.busies); 
    }   
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
.table{
  background-color: aliceblue;
}
</style>
