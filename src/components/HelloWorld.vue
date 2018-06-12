<template>
  <div class="hello">
    {{msg}}
    <div class="title_dao">
      {{count}}
    </div>
    <button @click="concate">getters</button>
    <button @click="mutationBtn">mutation</button>
    <button @click="actionBtn">action</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  mounted(){

  },
  methods:{
    concate(){
      this.msg = this.$store.getters.doCount
    },
    mutationBtn(){
      this.$store.commit('increment')
      console.log(this.count)
    },
    actionBtn(){
      this.$store.dispatch('increment')
      console.log(this.count)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
