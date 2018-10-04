<template>
    <div>
        <div class="area-title-wrapper">
            <span class="area-title">프로젝트</span>&nbsp;&nbsp;
        </div>

        <div class="about-area">
            <div @click="selYear('')" class="project-selector">ALL</div>
            <div @click="selYear('2018')" class="project-selector">2018</div>
            <div @click="selYear('2017')" class="project-selector">2017</div>
        </div>

        <div style="text-align: left">
            <transition-group name="list-complete" tag="div">
                <div v-for="(item, index) in computedList" v-bind:key="index"
                     class="project-wrapper list-complete-item"
                     style="padding: 10px;"
                     @click="selProject(item.id)"
                >
                    <img :src="'/portfolio/img/projects/'+item.path+'/1.png'" style="width: 100%;">
                    <div style="display: inline-block; font-size: 10pt;">{{item.name}}</div>
                </div>
            </transition-group>
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
                query: '',
                projectList: []
            }
        },
        props: {

        },
        methods:{
            selYear(query){
                this.query = query
            },
            selProject(id){
                this.$store.commit('selProjectId',id)
                this.$router.push('ProjectDetail')
            }
        },
        computed:{
            computedList(){
                var vm = this
                return this.projectList.filter(function (item) {
                    return item.year.indexOf(vm.query) !== -1
                })
            }
        },
        mounted: function () {
            this.projectList = projects.projectList;
        }
    }
</script>