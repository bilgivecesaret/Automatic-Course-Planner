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
            <tr v-for="(item,index) in busies">    
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
  name:"Service",
  data() {
      return {
          busies:[{"instructor":"DOC.DR. NURAY CELEBI","busyDay":"Tuesday",
                        "busyTimeSlots1":"8:30","busyTimeSlots2":"9:30","busyTimeSlots3":"",
                        "busyTimeSlots4":"","busyTimeSlots5":"","busyTimeSlots6,":"",
                        "busyTimeSlots7":"","busyTimeSlots8":"","busyTimeSlots9":""},
                  {"instructor":"DOC.DR. NURAY CELEBI","busyDay":"Friday",
                        "busyTimeSlots1":"12:30","busyTimeSlots2":"13:30","busyTimeSlots3":"14:30",
                        "busyTimeSlots4":"","busyTimeSlots5":"","busyTimeSlots6,":"",
                        "busyTimeSlots7":"","busyTimeSlots8":"","busyTimeSlots9":""}]
      };
  },
  methods: {

  },
  mounted(){
      let result = axios.get("http://localhost:3000/busy");
      this.busies = result.data;
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
