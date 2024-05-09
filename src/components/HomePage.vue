<template>
<div id="header">
    <div class="caption">
        <i class="tcaption">Course Planner</i>
    </div>
</div>

<div class="boxx">
    <div class="accordion" id="accordionExample">
        <div class="accordion-item bg-secondary">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Step #1 Please choose the course file
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="input-group mb-3 text-white mt-5">
                        <input type="file" accept=".csv" class="form-control" id="upload1" ref="file1" v-on:change="handleFileUpload1">
                        <label class="input-group-text" for="upload1">COURSE</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item bg-secondary">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Step #2 Please choose the classroom file
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="input-group mb-3 text-white mt-5">
                        <input type="file" accept=".csv" class="form-control" id="upload2" ref="file2" v-on:change="handleFileUpload2">
                        <label class="input-group-text" for="upload2">CLASSROOM</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion-item bg-secondary">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Step #3 Please choose the service file
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="input-group mb-3 text-white mt-5">
                        <input type="file" accept=".csv" class="form-control" id="upload3" ref="file3" v-on:change="handleFileUpload3">
                        <label class="input-group-text" for="upload3">SERVICE</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion-item bg-secondary">
            <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Step #4 Please choose the busy file
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="input-group mb-3 text-white mt-5">
                        <input type="file" accept=".csv" class="form-control" id="upload4" ref="file4" v-on:change="handleFileUpload4">
                        <label class="input-group-text" for="upload4">BUSY</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
let course = [];
let classroom = [];
let service = [];
let busy = [];
export default {
    name:"Home",
    data() {
        return {

        };
    },
    methods: {
        handleFileUpload1(event) {
            let lines;
            let currentline;
            let csv;
            let headers;
            let obj={};
            let selectedFile = event.target.files[0];
            if (!selectedFile.name.toLowerCase().startsWith('course')) {
                alert('Please select a COURSE.CSV file.');
                return;
            }
            let reader = new FileReader();
            reader.readAsBinaryString(selectedFile);
            reader.onload = event => {
                csv = reader.result;
                lines = csv.split("\r\n");
                headers = ["id","code", "name", "semester", "credit", "CorE", "DorS", "numStudents", "instructor", "preference"];

                for (let i = 0; i < lines.length; i++) {
                    if (!lines[i]) continue                    
                    currentline = lines[i];
                    var re = /"/g;
                    currentline = re[Symbol.replace](currentline, '');
                    currentline = currentline.split(",");
                    obj["id"] = i+1;
                    for (let j = 1; j < headers.length; j++) {
                        let head = headers[j];
                        let value = currentline[j-1].trim().toUpperCase();
                        obj[head] = value;
                    }
                    course[i] = obj;
                    Plan1(obj);
                }                                
            };         
        },
        handleFileUpload2(event) {
            let lines;
            let currentline;
            let csv;
            let headers;
            let obj={};
            let selectedFile = event.target.files[0];
            if (!selectedFile.name.toLowerCase().startsWith('classroom')) {
                alert('Please select a CLASSROOM.CSV file.');
                return;
            }
            let reader = new FileReader();
            reader.readAsBinaryString(selectedFile);
            reader.onload = event => {
                csv = reader.result;
                lines = csv.split("\r\n");
                headers = ["id","code", "capacity"];

                for (let i = 0; i < lines.length; i++) {
                    if (!lines[i]) continue                    
                    currentline = lines[i];
                    var re = /"/g;
                    currentline = re[Symbol.replace](currentline, '');
                    currentline = currentline.split(";");
                    obj["id"] = i+1;
                    for (let j = 1; j < headers.length+1; j++) {
                        let head = headers[j];
                        let value = currentline[j-1];
                        obj[head] = value;
                    }
                    classroom[i] = obj;
                    Plan2(obj);
                }               
            };            
        },
        handleFileUpload3(event) {
            let lines;
            let currentline;
            let csv;
            let headers;
            let obj={};
            let selectedFile = event.target.files[0];
            if (!selectedFile.name.toLowerCase().startsWith('service')) {
                alert('Please select a SERVICE.CSV file.');
                return;
            }
            let reader = new FileReader();
            reader.readAsBinaryString(selectedFile);
            reader.onload = event => {
                csv = reader.result;
                lines = csv.split("\r\n");
                headers = ["id","code", "serviceDay", "serviceTimeSlot1", "serviceTimeSlot2", "serviceTimeSlot3"];
                for (let i = 0; i < lines.length; i++) {
                    if (!lines[i]) continue
                    currentline = lines[i];
                    var re = /"/g;
                    currentline = re[Symbol.replace](currentline, '');
                    currentline = currentline.split(",");
                    obj["id"] = i+1;
                    for (let j = 1; j < headers.length; j++) {
                        let head = headers[j];
                        let value;
                        if (currentline[j-1] != null) {
                            value = currentline[j-1].trim().toUpperCase();
                        } else {
                            value = null;
                        }
                        obj[head] = value;
                    }
                    service[i] = obj;
                    Plan3(obj);
                }                                
            };            
        },
        handleFileUpload4(event) {
            let lines;
            let currentline;
            let csv;
            let headers;
            let obj={};
            let selectedFile = event.target.files[0];
            if (!selectedFile.name.toLowerCase().startsWith('busy')) {
                alert('Please select a BUSY.CSV file.');
                return;
            }
            let reader = new FileReader();
            reader.readAsBinaryString(selectedFile);
            reader.onload = event => {
                csv = reader.result;
                lines = csv.split("\r\n");
                headers = ["id","instructor", "busyDay", "busyTimeSlots1", "busyTimeSlots2", "busyTimeSlots3",
                    "busyTimeSlots4", "busyTimeSlots5", "busyTimeSlots6,",
                    "busyTimeSlots7", "busyTimeSlots8", "busyTimeSlots9"
                ];
                for (let i = 0; i < lines.length; i++) {
                    if (!lines[i]) continue
                    currentline = lines[i];
                    var re = /"/g;
                    currentline = re[Symbol.replace](currentline, '');
                    currentline = currentline.split(",");
                    obj["id"] = i+1;
                    for (let j = 1; j < headers.length; j++) {
                        let head = headers[j];
                        let value;
                        if (currentline[j-1] != null) {
                            value = currentline[j-1].trim().toUpperCase();
                        } else {
                            value = null;
                        }
                        obj[head] = value;
                    }
                    busy[i]=obj;
                    Plan4(obj);
                }                                
            };          
        }
    }
}

async function Plan1(course) {
    await axios.post("http://localhost:3000/course", course);
};
async function Plan2(classroom) {
    await axios.post("http://localhost:3000/classroom/", classroom);
};
async function Plan3(service) {
    await axios.post("http://localhost:3000/service/", service);
};
async function Plan4(busy) {
    await axios.post("http://localhost:3000/busy/", busy);
};

</script>
<style src="./src/assets/home.css" />
