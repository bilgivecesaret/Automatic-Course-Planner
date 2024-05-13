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
                <th> <input type="text" class="form-control" placeholder="Enter Instructor" v-model="busy.instructor"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Day" v-model="busy.busyDay"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots1"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots2"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots3"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots4"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots5"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots6"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots7"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots8"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time" v-model="busy.busyTimeSlots9"> </th>
                <th>
                    <span v-show="showAdd"> <button type="button" class="btn btn-success" v-on:click="addBusy">ADD</button></span>
                    <span v-show="showUpdate"> <button type="button" class="btn btn-success" v-on:click="updateBusy">SAVE</button></span>
                    <span v-show="showCancel"> <button type="button" class="btn btn-success" id="cancel" v-on:click="cancel">CANCEL</button></span>
                </th>
            </tr>
            <tr v-for="(item,counter) in busies" v-bind:key="item.id">
                <th> {{counter +1}} </th>
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
                <th>
                    <button type="button" class="btn btn-success" v-on:click="showUpdateButton(item.id)">UPDATE</button>
                    <button type="button" class="btn btn-success" v-on:click="deleteBusy(item.id)">DELETE</button>
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
    name: "Busy",
    data() {
        return {
            busies: [],
            busy: {
                instructor: "",
                busyDay: "",
                busyTimeSlots1: "",
                busyTimeSlots2: "",
                busyTimeSlots3: "",
                busyTimeSlots4: "",
                busyTimeSlots5: "",
                busyTimeSlots6: "",
                busyTimeSlots7: "",
                busyTimeSlots8: "",
                busyTimeSlots9: ""
            },
            showAdd: true,
            showUpdate: false,
            showCancel: false,            
            idItem:null
        };
    },
    methods: {
        update() {
            axios.get("http://localhost:3000/busy").then(response => (this.busies = response.data));
            this.busy.instructor = null;
            this.busy.busyDay = null;
            this.busy.busyTimeSlots1 = null;
            this.busy.busyTimeSlots2 = null;
            this.busy.busyTimeSlots3 = null;
            this.busy.busyTimeSlots4 = null;
            this.busy.busyTimeSlots5 = null;
            this.busy.busyTimeSlots6 = null;
            this.busy.busyTimeSlots7 = null;
            this.busy.busyTimeSlots8 = null;
            this.busy.busyTimeSlots9 = null;
        },
        async addBusy() {
            let result = confirm("Save data?");
            if (result === true) {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
                await axios.post("http://localhost:3000/busy",this.busy);
            }
            await axios.get("http://localhost:3000/busy").then(response => (this.busies = response.data));
            this.busy.instructor = null;
            this.busy.busyDay = null;
            this.busy.busyTimeSlots1 = null;
            this.busy.busyTimeSlots2 = null;
            this.busy.busyTimeSlots3 = null;
            this.busy.busyTimeSlots4 = null;
            this.busy.busyTimeSlots5 = null;
            this.busy.busyTimeSlots6 = null;
            this.busy.busyTimeSlots7 = null;
            this.busy.busyTimeSlots8 = null;
            this.busy.busyTimeSlots9 = null;            
        },
        async showUpdateButton(idItem) {
            this.showAdd = false;
            this.showUpdate = true;
            this.showCancel = true;
            this.idItem = idItem;

            var result = await axios.get("http://localhost:3000/busy/"+idItem);
            this.busy.instructor = result.data.instructor;
            this.busy.busyDay = result.data.busyDay;
            this.busy.busyTimeSlots1 = result.data.busyTimeSlots1;
            this.busy.busyTimeSlots2 = result.data.busyTimeSlots2;
            this.busy.busyTimeSlots3 = result.data.busyTimeSlots3;
            this.busy.busyTimeSlots4 = result.data.busyTimeSlots4;
            this.busy.busyTimeSlots5 = result.data.busyTimeSlots5;
            this.busy.busyTimeSlots6 = result.data.busyTimeSlots6;
            this.busy.busyTimeSlots7 = result.data.busyTimeSlots7;
            this.busy.busyTimeSlots8 = result.data.busyTimeSlots8;
            this.busy.busyTimeSlots9 = result.data.busyTimeSlots9;
        },
        cancel() {
            this.showAdd = true;
            this.showUpdate = false;
            this.showCancel = false;
            this.busy.instructor = null;
            this.busy.busyDay = null;
            this.busy.busyTimeSlots1 = null;
            this.busy.busyTimeSlots2 = null;
            this.busy.busyTimeSlots3 = null;
            this.busy.busyTimeSlots4 = null;
            this.busy.busyTimeSlots5 = null;
            this.busy.busyTimeSlots6 = null;
            this.busy.busyTimeSlots7 = null;
            this.busy.busyTimeSlots8 = null;
            this.busy.busyTimeSlots9 = null;
        },
        async updateBusy() {
            let answer = confirm("Update data?");
            if (answer === true) {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
                const url = "http://localhost:3000/busy/" + (this.idItem);
                await axios.put(url, {
                    instructor: this.busy.instructor,
                    busyDay: this.busy.busyDay,
                    busyTimeSlots1: this.busy.busyTimeSlots1,
                    busyTimeSlots2: this.busy.busyTimeSlots2,
                    busyTimeSlots3: this.busy.busyTimeSlots3,
                    busyTimeSlots4: this.busy.busyTimeSlots4,
                    busyTimeSlots5: this.busy.busyTimeSlots5,
                    busyTimeSlots6: this.busy.busyTimeSlots6,
                    busyTimeSlots7: this.busy.busyTimeSlots7,
                    busyTimeSlots8: this.busy.busyTimeSlots8,
                    busyTimeSlots9: this.busy.busyTimeSlots9
                });
            }else {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
            }
            await axios.get("http://localhost:3000/busy").then(response => (this.busies = response.data));
            this.busy.instructor = null;
            this.busy.busyDay = null;
            this.busy.busyTimeSlots1 = null;
            this.busy.busyTimeSlots2 = null;
            this.busy.busyTimeSlots3 = null;
            this.busy.busyTimeSlots4 = null;
            this.busy.busyTimeSlots5 = null;
            this.busy.busyTimeSlots6 = null;
            this.busy.busyTimeSlots7 = null;
            this.busy.busyTimeSlots8 = null;
            this.busy.busyTimeSlots9 = null;
            
        },
        async deleteBusy(item) {
            let answer = confirm("Delete data?");
            if (answer === true) {
                const url = "http://localhost:3000/busy/" + item;
                await axios.delete(url);
            }
            await axios.get("http://localhost:3000/busy").then(response => (this.busies = response.data));
            this.busy.instructor = null;
            this.busy.busyDay = null;
            this.busy.busyTimeSlots1 = null;
            this.busy.busyTimeSlots2 = null;
            this.busy.busyTimeSlots3 = null;
            this.busy.busyTimeSlots4 = null;
            this.busy.busyTimeSlots5 = null;
            this.busy.busyTimeSlots6 = null;
            this.busy.busyTimeSlots7 = null;
            this.busy.busyTimeSlots8 = null;
            this.busy.busyTimeSlots9 = null;
        }

    }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

.table {
    background-color: aliceblue;
}

#cancel{
    background-color: red;
}
</style>
