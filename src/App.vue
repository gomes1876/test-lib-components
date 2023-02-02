<template>
  <div id="app">
    <tButton>
      <span>teste</span>
    </tButton>
    <tButton>
      <span>teste</span>
    </tButton>
    <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
      <TInput size=4 placeholder="placeholder test value" title="testname example:" />
      <TInput size=4 placeholder="placeholder test value" title="testname example:" />
      </div>
    <TInput size=4 placeholder="placeholder test value" />
    <TTextarea size=4 placeholder="example item" />
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
