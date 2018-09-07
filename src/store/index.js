import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './type'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
	    username: '', 
	    Num: 0
	},
	mutations:{
		[types.ADD_NUM](state, num) {
		    ++state.Num;
	    },
	    [types.SET_NAME](state, name) {
            state.username = name;
        }
	}
})