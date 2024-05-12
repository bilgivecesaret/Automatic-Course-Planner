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
                <th> <input type="text" class="form-control" placeholder="Enter Code" v-model="classroom.code"> </th>
                <th> <input type="text" class="form-control" placeholder="Enter Capacity" v-model="classroom.capacity"> </th>
                <th>
                    <span v-show="showAdd"> <button type="button" class="btn btn-success" v-on:click="addClassroom">ADD</button></span>
                    <span v-show="showUpdate"> <button type="button" class="btn btn-success" v-on:click="updateClassroom">SAVE</button></span>
                    <span v-show="showCancel"> <button type="button" class="btn btn-success" id="cancel" v-on:click="cancel">CANCEL</button></span>
                </th>
            </tr>
            <tr v-for="(item,counter) in classrooms" v-bind:key="item.id">
                <th> {{ counter +1 }} </th>
                <th> {{ item.code }} </th>
                <th> {{ item.capacity  }} </th>
                <th> 
                    <button type="button" class="btn btn-success" v-on:click="showUpdateButton(item.id)">UPDATE</button>
                    <button type="button" class="btn btn-success" v-on:click="deleteClassroom(item.id)">DELETE</button>
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
    name: "Course",
    data() {
        return {
            classrooms: [],
            classroom: {
                code: "",
                capacity: ""
            },
            showAdd: true,
            showUpdate: false,
            showCancel: false,
            idItem:"1"
        };
    },
    methods: {
        async update() {
            await axios.get("http://localhost:3000/classroom").then(response => (this.classrooms = response.data));
            this.classroom.code = null;
            this.classroom.capacity = null;
        },
        async addClassroom() {
            let result = confirm("Save data?");
            if (result === true) {
                this.showAdd = true;
                this.showUpdate = false;
                this.showCancel = false;
                await axios.post("http://localhost:3000/classroom",this.classroom);
            }
            await axios.get("http://localhost:3000/classroom").then(response => (this.classrooms = response.data));
            this.classroom.code = null;
            this.classroom.capacity = null;            
        },
        async showUpdateButton(idItem) {
            this.showAdd = false;
            this.showUpdate = true;
            this.showCancel = true;
            this.idItem = idItem;

            var result = await axios.get("http://localhost:3000/classroom/" + idItem);
            this.classroom.code = result.data.code;
            this.classroom.capacity = result.data.capacity;
        },
        cancel() {
            this.showAdd = true;
            this.showUpdate = false;
            this.showCancel = false;
            this.classroom.code = null;
            this.classroom.capacity = null;
        },
        async updateClassroom() {
            let answer = confirm("Update data?");
            if (answer === true) {
                this.showAdd = false;
                this.showUpdate = true;
                this.showCancel = false;
                const url = "http://localhost:3000/classroom/" + (this.idItem);
                await axios.put(url, {
                    code: this.classroom.code,
                    capacity: this.classroom.capacity                  
                });  
            }else {
                this.showCancel = false;
            }         
            await axios.get("http://localhost:3000/classroom").then(response => (this.classrooms = response.data));
            this.classroom.code = null;
            this.classroom.capacity = null;       
        },
        async deleteClassroom(item) {
            let answer = confirm("Delete data?");
            if (answer === true) {
                const url = "http://localhost:3000/classroom/" + item;
                await axios.delete(url);
            }
            await axios.get("http://localhost:3000/classroom").then(response => (this.classrooms = response.data));
            this.classroom.code = null;
            this.classroom.capacity = null;
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

#cancel{
    background-color: red;
}
</style>
