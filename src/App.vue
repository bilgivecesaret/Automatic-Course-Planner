<template>
    <router-view></router-view>
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
            
        }
    }
}
</script>

<style scoped>

</style>