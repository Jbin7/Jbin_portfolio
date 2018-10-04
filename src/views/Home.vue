<template>
  <div>
    <div class="container">

      <div class="nav">
        <div class="nav-item">ABOUT</div>
        <div class="nav-item">SKILL</div>
        <div class="nav-item">PROJECT</div>
        <div class="nav-item">BLOG</div>
        <div class="nav-item">Github</div>
      </div>

      <div class="main-wrapper">
        <div class="main-title-wrapper">
          <span style="font-size:20pt; color:#747474; font-weight: 700">DEVLOPER</span>&nbsp;&nbsp;
          <span style="font-size:20pt; color:#8C8C8C; font-weight: 400">PORTFOLIO</span>
        </div>
      </div>

      <div class="solid-line"></div>

      <About></About>

      <div class="solid-line"></div>

      <Project></Project>

      <div class="dashed-line"></div>



    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        components:{
            'About': ()=>import('../components/About'),
            'Project': ()=>import('../components/Project')
        },
        data(){
            return{

            }
        },
        props: {

        },
        methods:{

        },
        mounted: function () {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
