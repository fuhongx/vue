<template>
  <div class="showView">
    <BlogItem
    v-for="item in listArr"
    :key="item.id"
    :myObj="item"
    />

    <div class="pageGroup">
      <div class="btn btnLeft" @click="btnLeft"> &lt; 上一页 </div>
      <div class="btn btnRight" @click="btnRight"> 下一页 &gt; </div>
    </div>

    <div class="toast" v-show="showToast">
      数据加载中...
    </div>

  </div>
</template>

<script>
import BlogItem from './BlogItem'
export default {
  components: {
    BlogItem
  },
  data () {
    return {
      showToast: false,
      page: 1,
      listArr: []
    }
  },
  created () {
    // 获取网络数据
    this.getData()
  },
  methods: {
    // 点击左边的按钮
    btnLeft () {
      if (this.page <= 1) {
        alert('已经是第一页了')
        return
      }
      this.page--
      this.getData()
      this.scrTop()
      this.showToast = true
    },

    // 点击右边的按钮
    btnRight () {
      if (this.listArr.length < 9 || this.listArr.length == 0) {
        alert('已经没有更多内容了')
        return
      }
      this.page++
      this.getData()
      // 点击下一页后，页面回到顶部
      this.scrTop()
      this.showToast = true
    },
    // 返回顶部的函数
    scrTop () {
      if (document.body.scrollTop) {
        document.body.scrollTop = 0
      } else {
        document.documentElement.scrollTop = 0
      }
    },

    // 获取请求和函数
    getData () {
      this.axios({
        url: 'https://ku.qingnian8.com/dataApi/qingKu/getList.php',
        params: {
          page: this.page
        }
      }).then(res => {
        console.log(res)

        this.listArr = res.data
        this.showToast = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.toast{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.3);
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
}
.showView {
  padding:30px;
}
.pageGroup {
  padding: 40px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    border: 1px solid green;
    padding: 10px 20px;
    color: green;
    margin: 0 auto;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      color: #fff;
      background: green;
    }
  }
}
</style>
