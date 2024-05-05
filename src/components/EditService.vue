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
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name:"Service",
  data() {
      return {
          services:[{"id":"1","code":"CHEM101","serviceDay":"Tuesday",
                            "serviceTimeSlot1":"8:30","serviceTimeSlot2":"9:30","serviceTimeSlot3":"10:30"},
                    {"id":"2","code":"MATH102","serviceDay":"Monday",
                            "serviceTimeSlot1":"13:30","serviceTimeSlot2":"14:30","serviceTimeSlot3":"15:30"}]
      };
  },
  methods: {

  },
  mounted(){
      let result = axios.get("http://localhost:3000/service");
      this.services.join(result.data);
      console.log(this.services);
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
.table{
  background-color: aliceblue;
}
</style>
