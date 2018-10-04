import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selProjectId: ''
    },
    mutations: {
        selProjectId(state,id){
            state.selProjectId = id
        }
    },
    actions: {

    }
})
