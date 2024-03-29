<template>
    <keep-alive>
        <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component='app-result'">Print Schedule</button>
</template>

<script>
import Result from './components/Result.vue'
import HomePage from './components/HomePage.vue'

export default {
    components: {
        "app-result": Result,
        "app-home" : HomePage
    },
    data() {
        return {
            component: 'app-home'
        }
    }
}
</script>

<style scoped>

</style>