<template>
  <div :class="config.direction">
    <div :style="GetWidth" class="AswFormBuilder_container" v-for="i in config.elements"  :key="i.id" >
      <component :is="i.component" :config="i" :body="body" />
    </div>
  </div>
</template>

<script>
import commonMixin from '../mixins/commonProp'
export default {
  mixins: [commonMixin],
  name: 'ele_container',
  components: {
    ele_container: () => import('./ele_container'),
    form_text: () => import('./form_text'),
    input_text: () => import('./input_text'),
    input_textarea: () => import('./input_textArea'),
    input_number: () => import('./input_number'),
    input_checkbox: () => import('./input_checkbox'),
    input_radio: () => import('./input_radio'),
    input_dropdown: () => import('./input_dropdown'),
    input_multiselect: () => import('./input_multiselect'),
    input_date: () => import('./input_date'),
    input_time: () => import('./input_time'),
    input_password: () => import('./input_password')
  },
  computed: {
    GetWidth () {
      const len = this.config.elements.length
      if (len === 0 || this.config.direction === 'block') {
        return {width: '100%', fontSize: `${this.config.size}px`}
      } else {
        return {width: 100.00 / len + '%', fontSize: `${this.config.size}px`}
      }
    }
  }
}
</script>

<style>

</style>