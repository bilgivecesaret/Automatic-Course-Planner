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
                <th> <input type="text" class="form-control" placeholder="Enter Code" v-model="service.code"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Day" v-model="service.serviceDay"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time1" v-model="service.serviceTimeSlot1"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time2" v-model="service.serviceTimeSlot2"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Time3" v-model="service.serviceTimeSlot3"> </th>
                <th>
                    <span v-show="showAdd"> <button type="button" class="btn btn-success" v-on:click="addService">ADD</button></span>
                    <span v-show="showUpdate"> <button type="button" class="btn btn-success" v-on:click="updateService">SAVE</button></span>
                    <span v-show="showCancel"> <button type="button" class="btn btn-success" id="cancel" v-on:click="cancel">CANCEL</button></span>
                </th>
            </tr>
            <tr v-for="(item,counter) in services" v-bind:key="item.id">
                <th> {{ counter +1 }} </th>
                <th> {{ item.code  }} </th>
                <th> {{ item.serviceDay  }} </th>
                <th> {{ item.serviceTimeSlot1}} </th>
                <th> {{ item.serviceTimeSlot2}} </th>
                <th> {{ item.serviceTimeSlot3}} </th>
                <th>
                    <button type="button" class="btn btn-success" v-on:click="showUpdateButton(item.id)">UPDATE</button>
                    <button type="button" class="btn btn-success" v-on:click="deleteService(item.id)">DELETE</button>
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
    name: "Service",
    data() {
        return {
            services: [],
            service: {
                code: "",
                serviceDay: "",
                serviceTimeSlot1: "",
                serviceTimeSlot2: "",
                serviceTimeSlot3: ""
            },
            showAdd: true,
            showUpdate: false,
            showCancel: false,
            idItem:null
        };
    },
    methods: {
        update() {
            axios.get("http://localhost:3000/service").then(response => (this.services = response.data));
            this.service.code = null;
            this.service.serviceDay = null;
            this.service.serviceTimeSlot1 = null;
            this.service.serviceTimeSlot2 = null;
            this.service.serviceTimeSlot3 = null;
        },
        async addService() {
            let result = confirm("Save data?");
            if (result === true) {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
                await axios.post("http://localhost:3000/service",this.service);
            }
            await axios.get("http://localhost:3000/service").then(response => (this.services = response.data));
            this.service.code = null;
            this.service.serviceDay = null;
            this.service.serviceTimeSlot1 = null;
            this.service.serviceTimeSlot2 = null;
            this.service.serviceTimeSlot3 = null;
        },
        async showUpdateButton(idItem) {
            this.showAdd = false;
            this.showUpdate = true;
            this.showCancel = true;
            this.idItem = idItem;

            var result = await axios.get("http://localhost:3000/service/"+idItem);
            this.service.code = result.data.code;
            this.service.serviceDay = result.data.serviceDay;
            this.service.serviceTimeSlot1 = result.data.serviceTimeSlot1;
            this.service.serviceTimeSlot2 = result.data.serviceTimeSlot2;
            this.service.serviceTimeSlot3 = result.data.serviceTimeSlot3;
        },
        cancel() {
            this.showAdd = true;
            this.showUpdate = false;
            this.showCancel = false;
            this.service.code = null;
            this.service.serviceDay = null;
            this.service.serviceTimeSlot1 = null;
            this.service.serviceTimeSlot2 = null;
            this.service.serviceTimeSlot3 = null;
        },
        async updateService() {
            let answer = confirm("Update data?");
            if (answer === true) {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
                const url = "http://localhost:3000/service/" + (this.idItem);
                await axios.put(url, {
                    code: this.service.code,
                    serviceDay: this.service.serviceDay,
                    serviceTimeSlot1: this.service.serviceTimeSlot1,
                    serviceTimeSlot2: this.service.serviceTimeSlot2,
                    serviceTimeSlot3: this.service.serviceTimeSlot3
                });
            }else{
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
            }
            await axios.get("http://localhost:3000/service").then(response => (this.services = response.data));
            this.service.code = null;
            this.service.serviceDay = null;
            this.service.serviceTimeSlot1 = null;
            this.service.serviceTimeSlot2 = null;
            this.service.serviceTimeSlot3 = null;
        },
        async deleteService(item) {
            let answer = confirm("Delete data?");
            if (answer === true) {
                const url = "http://localhost:3000/service/" + item;
                await axios.delete(url);
            }
            await axios.get("http://localhost:3000/service").then(response => (this.services = response.data));
            this.service.code = null;
            this.service.serviceDay = null;
            this.service.serviceTimeSlot1 = null;
            this.service.serviceTimeSlot2 = null;
            this.service.serviceTimeSlot3 = null;
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
