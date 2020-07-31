<template>
  <div class="AswFormBuilder-group">
    <div v-html="config.text"></div>
  </div>
</template>

<script>
import commonMixin from '../mixins/commonProp'
export default {
  mixins: [commonMixin]

}
</script>

<style>

</style>