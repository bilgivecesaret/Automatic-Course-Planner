<template>
    <Header/>
    <router-view></router-view>
</template>

<script>
import Result from './components/Result.vue'
import HomePage from './components/HomePage.vue'
import Header from './components/Header.vue'
export default {
    components: {
        "app-result": Result,
        "app-home" : HomePage,
        "Header" : Header
    },
    data() {
        return {
            
        }
    }
}
</script>