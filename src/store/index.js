/*
* @Author: 12574
* @Date:   2018-06-22 10:08:08
* @Last Modified by:   12574
* @Last Modified time: 2018-06-22 16:43:41
*/

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})