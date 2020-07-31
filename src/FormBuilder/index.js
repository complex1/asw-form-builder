import formBuilder from './builder.vue'
export const AswFormBuilder = formBuilder

export default {
  install (Vue) {
    Vue.component('asw-form-builder', formBuilder) 
  }
}