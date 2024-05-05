<template>
    <nav class="navbar navbar-expand-lg bg">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">ADD INPUT</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/course" class="nav-link active" aria-current="page">EDIT COURSE</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/classroom" class="nav-link">EDIT CLASSROOM</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/service" class="nav-link">EDIT SERVICE</router-link>
              </li>
              <li class="nav-item">
                <router-link to="busy" class="nav-link">EDIT BUSY</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/plannedCourse" class="nav-link">SHOW COURSE PLAN</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>
export default {
  name:"Header",
  data() {
      return {

      };
  },
  methods: {

  }    
}
</script>
<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
.bg {    
    background: rgb(6, 77, 81) ;
}
.nav-link{
    color: white;
    font-size: larger;    
}
.nav-link::after{
  margin-left: 20px;    
}
.navbar-toggler-icon{
    background-image: linear-gradient(to bottom,rgba(48, 213, 200,0.15),rgba(48, 213, 200,0.3)), url("./aybuLogo.jpg")
}
</style>
