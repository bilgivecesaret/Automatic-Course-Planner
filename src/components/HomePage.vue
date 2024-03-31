<template>
    <div class="addData">
        <h2>Add data form.</h2>
        <input id="select" type="file" accept=".csv" v-on:change="handleFileUpload">
        <button id="process" v-on:click="processCSV">Process the file.</button>
        <div v-if="csvContent">
            <h3>CSV Content:</h3>
            <pre>{{ csvContent }}</pre>
        </div>             
    </div>
    <div>
        <button id="create" v-on:click="createSchedule">CREATE COURSE PLAN</button> 
    </div>  
     
</template>

<script>

export default{
    data(){
        return {
            csvContent: null,
            selectedFile: null
        };
    },
    methods:{ 
        createSchedule() {
            this.$router.push("/createdSchedule");
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },
        processCSV() {
            if (!this.selectedFile) {
                alert('Please select a file.');
                return;
            }

            if (!this.selectedFile.name.endsWith('.csv')) {
                alert('Please select a CSV file.');
                return;
            }

            const reader = new FileReader();

            reader.onload = () => {
                this.csvContent = reader.result;
            };

            reader.onerror = () => {
                console.error("An error occurred while reading the file.");
            };

            reader.readAsText(this.selectedFile);
        }
    }
}
</script>
<style scoped>
.addData{
    display: inline-table;
    text-align: center;
    min-width: 100px;
    border: 2px solid black;
    border-radius: 5px;
}
pre{
    display: inline-block;
    text-align: left;
}
.addData button{
    display: inline-flexbox;
}
pre{
    width: 100%;
}
</style>
