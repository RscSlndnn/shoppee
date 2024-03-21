<template>
    <router-view/>
</template>




<script>
export default {
  name: 'App',
  created() {
    localStorage.setItem('authToken', 'false');

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth && localStorage.getItem('authToken') !== 'true') {
        next('/');
      } else {
        next();
      }
    });
  }
};
</script>

<style>

#app {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    margin-top: 4%;
    }


</style>
