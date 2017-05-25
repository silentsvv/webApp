<template>
  <div id="index">
    <div class="page">
      <div class="content">
        <div class="content__header">
          今日囧图
        </div>
        <div class="content__box clearfix">
           <div class="box" v-for="data in dataList">
            <div class="box__img">
              <img :src="data.imgSrc" alt="">
            </div>
            <div class="box__text">{{data.title}}</div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataList: []
      }
    },
    mounted () {
      fetch('http://localhost:3000/hello').then((res) => {
        return res.text()
      }).then((res) => {
        this.dataList = JSON.parse(res)
        console.log(this.dataList)
      })
    }
  }
</script>

<style lang='scss'>
  @import '../../scss/vars.scss';
  #index {
    background: #fff;
    @include font(60px);
    .content {
      .content__header {
        height: 140rem/$font;
        line-height: 140rem/$font;
        padding-left: 40rem/$font;
        border-bottom: 1rem/$font solid #ccc;
      }
      .content__box {
        padding-bottom: 50rem/$font;
        .box {
          display: inline-block;
          float: left;
          width: 50%;
          height: 500rem/$font;
          padding: 50rem/$font;
          box-sizing: border-box;
          @include font(38px)
          img {
            width: 100%;
          }        
          .box__text {
            margin-top: 20rem/$font;
          }
        }  
      }
    }  
  }
</style>
