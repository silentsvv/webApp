<template>
  <div id="index">
    <div class="page">
      <div class="content">
        <div class="content__header">
          今日囧图
        </div>
        <div class="content__box clearfix">
           <div class="box">
            <div class="box__img">
              <img src="http://s1.dwstatic.com/group1/M00/E2/F2/dcbc69575564374aece9fc3ad9df1c0e.gif" alt="">
            </div>
            <div class="box__text">全球搞笑GIF图第1868弹：这火锅怎么越吃越热的啊</div>
           </div>
           <div class="box">
            <div class="box__img">
              <img src="http://s1.dwstatic.com/group1/M00/E2/F2/dcbc69575564374aece9fc3ad9df1c0e.gif" alt="">
            </div>
            <div class="box__text">全球搞笑GIF图第1868弹：这火锅怎么越吃越热的啊</div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
