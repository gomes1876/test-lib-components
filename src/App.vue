<template>
  <div id="app" class="p-2">
    <tButton>
      <span>teste</span>
    </tButton>
    <tButton>
      <span>teste</span>
    </tButton>
    <div style="display: flex; flex-direction: row; justify-content: space-evenly; margin-bottom: 12px;">
      <TInput :size=4 placeholder="placeholder test value" title="testname example:" />
      <TInput :size=4 placeholder="placeholder test value" title="testname example:" />
    </div>
    <TInput title="example error" style="margin-bottom: 12px" v-model="text" valueDef="example" :size=4
      placeholder="placeholder test value" />
    <TTextarea title="teste" :size=4 placeholder="example item" />
  </div>
</template>

<script>
import Vue from 'vue'
import tButton from '@/components/TButton';
import TInput from '@/components/TInput';
import TTextarea from '@/components/TTextarea'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import InlineSvg from 'vue-inline-svg';

Vue.component('inline-svg', InlineSvg);

export default {
  name: 'App', 
  data() {
    return {
      text: "",
    }
  },
  components: {
    tButton,
    TInput,
    TTextarea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
