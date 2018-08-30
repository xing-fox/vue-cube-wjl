<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
</style>

<template>
  <div class="hello">
    <Select @click="showPicker"></Select>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Select,
  Picker,
  createAPI
} from 'cube-ui'

Vue.use(Picker)
createAPI(Vue, Picker, ['select', 'cancel'], true)

export default {
  name: 'HelloWorld',
  data () {
    return {
      options: [
        {text: '剧毒', value: '剧毒'},
        {text: '蚂蚁', value: '蚂蚁'},
        {text: '幽鬼', value: '幽鬼'}
      ],
      value: 2,
      picker: ''
    }
  },
  mounted () {
    let self = this
    self.picker = self.$createPicker({
      title: 'Picker',
      data: [self.options],
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        console.log(selectedVal)
      },
      onCancel: () => {
        console.log('1234')
      }
    })
  },
  components: {
    Select
  },
  methods: {
    showPicker () {
      this.picker.show()
    }
  }
}
</script>
