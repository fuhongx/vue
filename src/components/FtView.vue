<template>
  <div class="footer">
    <div>
      Copyright © 2013-2021
      <a href="http://www.4399.com" target="_blank">刘风的博客</a>
      备案号：123456789
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer{
  height: 60px;
  background: rgb(11, 101, 11);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
  div{
    opacity: 0.8;
    a{
      color: #fff;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
