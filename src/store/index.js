import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
    msg:'nihao'
  },
  getters:{
    doCount:function(state){
      return  state.msg + '------daojun'
    }
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
  },
  actions: {
    increment (context) {
      context.commit('decrement')
      console.log(context)
      console.log(context.state)
      console.log(context.getters)
    }
  }
})
