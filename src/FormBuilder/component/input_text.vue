<template>
  <div class="AswFormBuilder-group">
    <div class="AswFormBuilder-group_label">{{config.label}}<b v-if="config.imp" class="AswFormBuilder-group_imp">*</b></div>
    <div class="AswFormBuilder-group_sublabel">{{config.sublabel}}</div>
    <input class="AswFormBuilder-group_text AswFormBuilder-group_input" :class="config.block ? 'block' : ''" :placeholder="config.placeholder" v-model="config.value" type="text">
    <div v-if="!!GetMessage" class="AswFormBuilder-group_message " :class="GetMessage.type" v-html="GetMessage.msg" ></div>
  </div>
</template>
<script>
import commonMixin from '../mixins/commonProp'
export default {
  mixins: [commonMixin]
}
</script>