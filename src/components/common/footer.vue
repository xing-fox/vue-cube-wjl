<style lang="less" scoped>
  .footer{
    font-size: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f1f3f5;
    ul {
      width: 100%;
      display: flex;
      li{
        flex: 1;
        color: #999;
        font-size: .28rem;
        height: 1rem;
        text-align: center;
        .listImg{
          width: 100%;
          height: .4rem;
          margin: .1rem 0 0 0;
          img {
            width: .4rem;
            height: .4rem;
            vertical-align: top;
          }
        }
        .listName{
          width: 100%;
          height: .4rem;
          line-height: .4rem;
        }
      }
    }
  }
</style>

<template>
  <div class="footer">
    <ul>
      <li v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">
        <div class="listImg">
            <img v-if="item.select" :src="item.src">
            <img v-else :src="item.srcActive">
        </div>
        <div class="listName">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList: [{
        name: '首页',
        select: true,
        src: require('@/assets/icon/test.png'),
        srcActive: require('@/assets/icon/test_active.png')
      }, {
        name: '我的',
        select: false,
        src: require('@/assets/icon/test.png'),
        srcActive: require('@/assets/icon/test_active.png')
      }]
    }
  },
  methods: {
    changeTab (eq) {
      this.tabList.map((item) => {
        item.select = false
      })
      this.tabList[eq].select = true
      eq === 0 ? this.$router.push('index') : this.$router.push('home')
    }
  }
}
</script>
