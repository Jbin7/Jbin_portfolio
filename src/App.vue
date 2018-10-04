<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

  body{
    width: 100%;
    height:100%;
    text-align: center;
  }

  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  body        { font: 24px/30px 'Noto Sans KR', sans-serif; }
  .thin       { font-weight: 100 }
  .light      { font-weight: 300 }
  .regular    { font-weight: 400 }
  .medium     { font-weight: 500 }
  .bold       { font-weight: 700 }
  .bolder     { font-weight: 900 }

  @media screen and (min-width: 300px) and (max-width: 500px) {

    .container {
      margin-left:1%;
      margin-right:1%;
    }

    .project-wrapper{
      display: inline-block;
      width: 95%;
      text-align: center;
      cursor: pointer;
    }

    .main-wrapper {
      text-align: center; width: 100%; height: 400px;
    }

    .main-title-wrapper {
      padding: 30%;
    }

    .about-divide{
      width: 95%; display: inline-block; text-align: center; vertical-align: top; padding: 10px;
    }

  }

  @media screen and (min-width: 500px) {

    .container {
      margin-left:20%;
      margin-right:20%;
    }
    .project-wrapper{
      display: inline-block;
      width: 30%;
      text-align: center;
      cursor: pointer;
    }

    .main-wrapper {
      text-align: center; width: 100%; height: 600px;
    }

    .main-title-wrapper {
      padding: 30%;
    }

    .about-divide{
      width: 48%; display: inline-block; text-align: center; text-align: center; vertical-align: top; padding: 10px;
    }

  }

  .nav {
    font-size: 10pt;
    text-align: center;
    border-bottom: 1px dashed #BDBDBD;
  }

  .nav-item {
    display: inline-block;
    padding: 5px;
    color:#5D5D5D;
  }

  .solid-line {
    width: 100%;
    border-bottom: 1px solid #BDBDBD;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .dashed-line {
    width: 100%;
    border-bottom: 1px dashed #BDBDBD;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .area-title-wrapper{
    text-align: center; margin-bottom: 50px;
  }


  .area-title{
    font-size:20pt; color:#747474; font-weight: 700;
  }



  .project-selector{
    font-size: 10pt;
    font-weight: bold;
    display: inline-block;
    margin: 8px;
    cursor: pointer;
    user-select: none;
  }

  .project-selector:hover{
    font-size: 10pt;
    font-weight: bold;
    display: inline-block;
    margin: 8px;
    cursor: pointer;
    color: darkgrey;
    user-select: none;
  }

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }

</style>
