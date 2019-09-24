<template>
    <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/home">资讯</el-breadcrumb-item>
            <el-breadcrumb-item>
              {{route}}
            </el-breadcrumb-item>
            <el-breadcrumb-item>页面内容</el-breadcrumb-item>
          </el-breadcrumb>
</template>
<script>
export default {
    data:function(){
      return{

      }
    },
    props:["route"]
}
</script>
<style lang="stylus">

</style>