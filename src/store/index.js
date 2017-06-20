/**
 * Created by limuzi on 2017/6/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)



export default new Vuex.Store({
    mutations,
    actions,
    getters,
    state
})
