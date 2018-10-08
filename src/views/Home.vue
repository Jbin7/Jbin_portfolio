<template>
  <div>


    <div class="nav">
      <div class="nav-item"><a href="#about">About</a></div>
      <div class="nav-item"><a href="#stack">Stack</a></div>
      <div class="nav-item"><a href="#project">Project</a></div>
      <div class="nav-item"><a href="https://jbin7.github.io/profile" target="_blank">Profile</a></div>
      <div class="nav-item"><a href="http://jhonnywest.tistory.com/" target="_blank">Blog</a></div>
      <div class="nav-item"><a href="https://github.com/jbin7" target="_blank">Github</a></div>
    </div>

    <div class="container">

      <div class="main-wrapper">
        <div class="main-title-wrapper">
          <span style="font-size:20pt; color:#747474; font-weight: 700">DEVLOPER</span>&nbsp;&nbsp;
          <span style="font-size:20pt; color:#8C8C8C; font-weight: 400">PORTFOLIO</span>
        </div>
      </div>

      <div id="about" class="solid-line"></div>

      <About></About>

      <div id="stack" class="solid-line"></div>

      <Stack></Stack>

      <div id="project" class="solid-line"></div>

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
            'Stack': ()=>import ('../components/Stack'),
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
