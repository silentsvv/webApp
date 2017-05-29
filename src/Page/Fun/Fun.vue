<template>
  <div id="fun">
    <div class="page">
      <div class="content">
        <div class="content__header">
          测试  
        </div>
        <div class="content__box clearfix">
          <div class="box" v-for="data in dataList">
            <div class="box__img">
              <img :src="data" alt="">
            </div>
            <!-- <div class="box__text">{{data.title}}</div> -->
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
    methods: {
    },
    mounted () {
      console.log(this.$route.params)
      let a = {
        'url': 'http://tu.duowan.com/gallery/134026.html'.replace('gallery', 'scroll')
      }
      fetch('http://localhost:3000/get', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(a)
      }).then((res) => {
        return res.text()
      }).then((res) => {
        console.log(res)
        let response = JSON.parse(res)
        this.dataList = response
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
          float: left;
          width: 50%;
          height: 360rem/$font;
          padding: 50rem/$font;
          margin-bottom: 100rem/$font;
          box-sizing: border-box;
          border-right: 1px solid #eee;
          @include font(36px);
          .box__img {
            width: 100%;
            margin-top: 3%;
            height: 94%;
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 20rem/$font;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              padding: 10rem/$font;
              width: 96%;
              height: auto;
              transform: translate(-50%,-50%);
              vertical-align: middle;
            }
            &:after {
              display: inline-block;
              width: 0%;
              height: 100%;
              vertical-align: middle;
            }
          }
          .box__text {
            margin-top: 40rem/$font;
          }
        }  
      }
    }  
  }
</style>
