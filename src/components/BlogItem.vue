<template>
  <div class="itembox">
      <div class="top">
        <h2>{{ myObj.title }}</h2>
        <div class="time"> {{getMyDate(myObj.posttime)}} </div>
      </div>
      <div class="center">
        {{ myObj.description }}
      </div>
      <div class="info">
        <div class="list">
          所属分类:
          <span>{{myObj.classid}}</span>
        </div>
        <div class="author">
          作者:
          <span>{{myObj.rating}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import common from '@/assets/js/common'
console.log(common.myDate('1523240130', 1))
export default {
  props: {
    myObj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    getMyDate (time) {
      return common.myDate(time, 1)
    }
  }
}
</script>

<style lang="less">
.itembox{
  padding: 30px 0;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(0, 0, 0);
    padding-bottom: 10px;
    word-wrap:break-word;
    h2{
      font-size: 25px;
      color: #333;
      width: 750px;
    }
    .time{
      font-size: 14px;
      color: #888;
    }
  }
  .center{
    background: #f6f6f6;
    border-radius: 5px;  // 圆角边框
    padding: 15px 10px;
    font-size: 18px;
    line-height: 1.8em;  // 行高
    color: #444;
    margin-bottom: 10px;
    word-wrap:break-word;
  }
  .info{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #888;
    span{
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
