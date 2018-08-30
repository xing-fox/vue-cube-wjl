<template>
  <div id="app">
    <router-view/>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CFooter from '@/components/common/footer'
export default {
  name: 'App',
  components: {
    CFooter
  }
}
</script>

<style>
@import './style/common.less';
@import './style/animate.less';
#app {
  width: 100%;
  height: 100%;
  padding: 0 0 1rem 0;
  box-sizing: border-box;
  position: relative;
}
</style>
