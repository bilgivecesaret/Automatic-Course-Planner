<template>
  <div>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">CODE</th>
              <th scope="col">WEEKDAY</th>
              <th scope="col">TIME SLOT 1</th>
              <th scope="col">TIME SLOT 2</th>
              <th scope="col">TIME SLOT 3</th>
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
              <th> <button>ADD</button></th>
            </tr>
            <tr v-for="item in services" :key="item.index">    
              <th scope="row"> {{item.id}} </th>
              <th> {{ item.code  }} </th>
              <th> {{ item.capacity  }} </th>
              <th> {{ item.serviceTimeSlot1}} </th>
              <th> {{ item.serviceTimeSlot2}} </th>
              <th> {{ item.serviceTimeSlot3}} </th>
              <th> <button>ADD</button><button>UPDATE</button><button>DELETE</button></th>
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
          services:[]
      };
  },
  methods: {
    update(){
      axios.get("http://localhost:3000/service").then(response => (this.services = response.data));
      console.log(this.services); 
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
