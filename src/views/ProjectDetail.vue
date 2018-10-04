<template>
    <div>
        <div>
            <v-container grid-list-md text-xs-center>

                <v-layout row wrap>
                    <v-flex xs12>

                        <div style="background-color: white; padding:10px; border: solid 1px #E7E7E7">
                            <v-layout row wrap>

                                <v-flex xs12>
                                    <div class="about-title">
                                        Project Detail
                                    </div>

                                    <div v-for="i in selProject.imgMaxCnt">
                                        <img :src="'/portfolio/img/projects/'+selProject.path+'/'+i+'.png'" style="width: 100%; max-width: 800px;">
                                    </div>
                                </v-flex>


                            </v-layout>
                        </div>

                    </v-flex>
                </v-layout>


            </v-container>
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
    .about-title{
        text-align: left; border-left:5px solid #1565C0; padding-left:10px; margin-bottom: 10px;
    }

    .about-title-sub{
        color:gray; font-size: 14pt;
    }

    .about-area{
        text-align: left; padding-left:10px;
    }
</style>
