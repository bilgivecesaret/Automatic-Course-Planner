<template>
    <button v-on:click="createSchedule">CREATE COURSE PLAN</button>
</template>

<script>

export default{
    data(){

    },
    methods:{ 
        createSchedule() {
            this.$router.push("/createdSchedule");
        }
    }
}
</script>
