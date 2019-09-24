<template>
  <div id="app">
    <login-Nav-Menu v-if="istrue"></login-Nav-Menu>
    <Nav-Menu v-else></Nav-Menu>
    <Header-Search></Header-Search>
    <Back-Top></Back-Top>
    <!-- <Nav></Nav> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      istrue: true,
    };
  },
  methods: {

  },
  created() {
  }
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

@media only screen and (min-width: 1200px) {
  body {
    width: 100%;
  }
  #app {
    width: 100%;
  }
}
@media only screen and (max-width: 1199px) {
  body {
    width: 1020px;
  }
  #app {
    width: 100%;
  }
}
</style>