<template>
  <div class="AswFormBuilder-group">
    <div class="AswFormBuilder-group_label">{{config.label}}<b v-if="config.imp" class="AswFormBuilder-group_imp">*</b></div>
    <div class="AswFormBuilder-group_sublabel">{{config.sublabel}}</div>
    <div :class="config.block ? '': 'inline'">
      <div v-for="i in config.options" :key="i.id" class="AswFormBuilder-group_radio">
        <input class="" v-model="config.value" :value="i" type="radio">
        <small>{{i}}</small>
      </div>
    </div>
    <div v-if="!!GetMessage" class="AswFormBuilder-group_message " :class="GetMessage.type" v-html="GetMessage.msg" ></div>
  </div>
</template>
<script>
import commonMixin from '../mixins/commonProp'
export default {
  mixins: [commonMixin]
}
</script>