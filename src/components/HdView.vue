<template>
  <div class="header">
    <div class="logo" @click="clickLogo">
      <img src="@/assets/img/logo.jpg" alt="" />
      <div class="text">
        <span>刘风的</span>
        博客
      </div>
    </div>
    <div class="nav">
      <router-link to="/show">博客列表</router-link>
      <router-link to="/add">添加博客</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickLogo () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 80px;
  background: green;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
      height: 60px;
    }
    .text{
      color: #fff;
      font-size: 25px;
      padding-left: 10px;
      span{
        display: block;
        font-size: 14px;
        opacity: 0.7;
      }
    }
  }
  .nav{
    display: flex;
    a{
      display: block;
      border-radius: 5px;
      padding: 5px 20px;
      color: #fff;
      font-size: 20px;
      margin-left: 10px;
      &:hover,&.action{
        color: green;
        background: honeydew;
      }
    }
  }
}
</style>
