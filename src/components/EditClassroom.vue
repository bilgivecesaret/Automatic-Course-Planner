<template>
  <div>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">CODE</th>
              <th scope="col">CAPACITY</th>
              <th scope="col">EDIT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> # </th>
              <th> <input type="text" class="form-control" id="add1"> </th>
              <th> <input type="text" class="form-control" id="add2"> </th>
              <th> <button>ADD</button></th>
            </tr>
            <tr v-for="items in classrooms" :key="items.index">    
              <th> {{items.id}} </th>
              <th> {{ items.code  }} </th>
              <th> {{ items.capacity  }} </th>
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
          classrooms:[{"id":"1","code":"B403","capacity":"100"},
                      {"id":"2","code":"C501","capacity":"60"},
                      {"id":"3","code":"C501","capacity":"60"}]
      };
  },
  methods: {

  },
  mounted(){
      let result = axios.get("http://localhost:3000/classroom");
      this.classrooms.join(result.data);
      console.log(this.classrooms);
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
.table{
  background-color: aliceblue;
}
</style>
