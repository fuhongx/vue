<template>
  <div class="addBlog">
    <div class="addMain">
      <div class="row">
        <div class="text">博客标题：</div>
        <div class="iptBox">
          <input type="text" v-model="myObj.title"/>
        </div>
      </div>

      <div class="row rowAuthor">
        <div class="text">作者：</div>
        <div class="iptBox">
          <input type="text" v-model="myObj.rating"/>
        </div>
      </div>

      <div class="row">
        <div class="text">分类：</div>
        <div class="iptBox">
          <select v-model="myObj.classid">
            <!--这里不需要添加value值，vue也知道选的谁了-->
            <option v-for="(item, index) in fenlei" :key="index">{{item}}</option>
          </select>
        </div>
      </div>

      <div class="row rowArea">
        <div class="text">博客内容：</div>
        <div class="iptBox">
          <textarea v-model="myObj.description"></textarea>
        </div>
      </div>

      <div class="row">
        <div class="text"></div>
        <div class="iptBox">
          <button @click="onSubmit">发表博客</button>
        </div>
      </div>
    </div>

      <h2 class="blShowBox">博客预览</h2>
    <div v-show="myObj.title || myObj.description || myObj.classid || myObj.rating">
      <BlogItem :myObj="myObj"/>
    </div>
  </div>
</template>

<script>
import BlogItem from './BlogItem'
export default {
  data () {
    return {
      myObj: {
        title: '',
        posttime: new Date().getTime() / 1000,
        classid: '',
        description: '',
        rating: ''
      },
      classList: [],
      fenlei: ['Vue', 'Js', 'Html', 'Css']
    }
  },
  components: {
    BlogItem
  },
  created () {
    this.getClassid()
  },
  methods: {
    // 点击提交数据
    onSubmit () {
      if (this.myObj.title == '' ||
      this.myObj.description == '' ||
      this.myObj.classid == '' ||
      this.myObj.rating == '') {
        alert('请按照要求填写后提交')
      }
      // this.pushData();
      // alert("发布成功，返回首页")
      // this.$router.push('/')
    },

    // pushData() {
    //   axios({
    //     url:
    //   })
    // },

    // 获取分类列表
    getClassid () {
      this.axios({
        url: 'https://ku.qingnian8.com/dataApi/qingKu/getList.php'
      }).then(res => {
        this.classList = res.data
        console.log(this.classList)
      })
    }
  }

}
</script>

<style scoped lang="less">
input, textarea, select, button {
  outline: none;
}
.addBlog {
  padding: 50px 30px;
  min-height: 830px;
}
.addMain {
  padding: 0 80px;
  font-size: 18px;
  color: #333;
  .row {
    padding: 10px 0;
    display: flex;
    align-items: center;
    .text {
      width: 20%;
      text-align: right;
      padding-right: 10px;
    }
    .iptBox {
      width: 80%;
      input, textarea {
        width: 100%;
        padding: 10px;
        height: 38px;
        border: 1px solid #ccc;
        border-radius: 3px;
        transition: 0.3s;
        font-size: 16px;
        color: #666;
        &:focus {
          border-color: #41B883;
          box-shadow: 0 0 10px rgba(65, 184, 131, 0.3);
        }
      }
      select {
        width: 50%;
        height: 38px;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 0 10px;
        font-size: 16px;
        color: #333
      }
      textarea {
        height: 150px;
      }
      button {
        width: 50%;
        height: 38px;
        background: #41B883;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background: #2F6F52;
        }
      }
    }
  }
  .rowArea {
    align-items: flex-start;
  }
}
.blShowBox {
  font-size: 22px;
  color: #555;
  padding: 50px 0 30px;
  text-align: center;
  border-top: 1px solid #e4e4e4;
  margin-top: 30px;
}
</style>
