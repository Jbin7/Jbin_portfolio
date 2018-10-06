<template>
    <div>

        <div class="area-title-wrapper">
            <span class="area-title">PROJECT DETAIL</span>&nbsp;&nbsp;
        </div>

        <div>
            <div v-for="i in selProject.imgMaxCnt">
                <img class="project-img" :src="'/portfolio/img/projects/'+selProject.path+'/'+i+'.png'">
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
                selProject: {}
            }
        },
        props: {

        },
        methods:{

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
