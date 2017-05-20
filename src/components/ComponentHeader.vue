<template>
  <div id="header">
    <div class="header__nav"></div>
    <div class="header__logo">
      <div class="logo__text">silentsvv</div>
    </div>
  </div>
</template>

<style lang='scss'>
  @import '../scss/vars.scss';
  $font: 125;
  #header {
    width: 100%;
    height: 180rem/$font;
    background: #f77676;
    box-shadow: 5px 3px 14px 0px #aba6a6;
    .header__logo {
      float: left;
      height: 180rem/$font;
      line-height: 180rem/$font;
      letter-spacing: 2rem/$font;
      text-indent: 60rem/$font;
      color: #fff;
      @include font(60px);
      .logo__text {
        position: relative;
        font-style: italic;
        &:after{
          content: '';
          position: absolute;
          bottom: 38rem/$font;
          left: 60rem/$font;
          width: 40%; 
          border-bottom: 1rem/$font double #fff;
        }
      }
      
    }
  }
</style>
