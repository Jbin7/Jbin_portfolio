<template>
    <div>

        <div class="nav">
            <div class="nav-item"><router-link to="/#about">About</router-link></div>
            <div class="nav-item"><router-link to="/#stack">Stack</router-link></div>
            <div class="nav-item"><router-link to="/#project">Project</router-link></div>
            <div class="nav-item"><a href="https://jbin7.github.io/profile" target="_blank">Profile</a></div>
            <div class="nav-item"><a href="http://jhonnywest.tistory.com/" target="_blank">Blog</a></div>
            <div class="nav-item"><a href="https://github.com/jbin7" target="_blank">Github</a></div>
        </div>

        <div class="container" style="margin-top: 60px;">
            <div class="area-title-wrapper">
                <span class="area-title">PROJECT DETAIL</span>&nbsp;&nbsp;
                <div class="area-subtitle">프로젝트 상세내용</div>
            </div>

            <div style="font-size: 11pt; padding: 30px;">
                <div>프로젝트명: {{selProject.name}}</div>
                <div>사용 기술: {{selProject.tech}}</div>
                <div>Role: {{selProject.role}}</div>
                <div>{{selProject.detail}}</div>
            </div>

            <div>
                <img class="project-img" :src="'/portfolio/img/projects/'+selProject.path+'/'+selImg+'.png'">
            </div>

            <div style="text-align: center;">
                <div v-for="i in selProject.imgMaxCnt" class="project-img-selector-wrapper" @click="viewImg(i)">
                    <img class="project-img-selector" :src="'/portfolio/img/projects/'+selProject.path+'/'+i+'.png'">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import projects from '../assets/projects'

    export default {
        name: '',
        components:{},
        data(){
            return{
                selProject: {},
                selImg: 1
            }
        },
        props: {

        },
        methods:{
            viewImg(i){
                this.selImg = i
            }
        },
        mounted: function () {
            var id = this.$store.state.selProjectId
            this.selProject = projects.projectList.filter(function (item) {
                return item.id == id
            })[0]

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
