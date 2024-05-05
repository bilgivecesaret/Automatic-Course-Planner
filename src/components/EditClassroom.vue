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
            <tr v-for="(item,index) in classrooms">    
              <th scope="row"> {{index}} </th>
              <td v-for="value in item.code" > {{ value  }} </td>
              <td v-for="value in item.capacity" > {{ value  }} </td>
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
          classrooms:[{"code":"B403","capacity":"100"},
                      {"code":"C501","capacity":"60"}]
      };
  },
  methods: {

  },
  mounted(){
      let result = axios.get("http://localhost:3000/classroom");
      this.classrooms = result.data;
      console.log(result.data);
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
.table{
  background-color: aliceblue;
}
</style>
