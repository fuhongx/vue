<template>
  <div id="app">
    <HdView/>
    <div class="main">
      <router-view></router-view>
    </div>
    <FtView/>
  </div>
</template>

<script>
import HdView from '@/components/HdView'
import FtView from '@/components/FtView'

export default {
  components: {
    HdView,
    FtView

  }
}
</script>

<style lang="less">
*{ padding: 0; margin: 0; font-family: "微软雅黑"; box-sizing: border-box;}
a{text-decoration: none;}
ul,ol{ list-style: none };

#app {
  width: 1000px;
  border: 1px solid #41b883;
  margin: 0 auto;
  box-shadow: 0 0 25px rgba(65, 184, 131, 0.5);
}
.main {
  min-height: 200px;  //最小高度

}
</style>
