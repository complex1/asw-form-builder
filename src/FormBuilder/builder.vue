<template>
  <div class="AswFormBuilder">
    <ele-container :config="data.form_ele" :body="data.body" />
    <div class="AswFormBuilder-action" :style="data.action_bar.style">
      <button
        v-for="i in data.action_bar.btn"
        :key="i.id"
        :style="i.style"
        @click="clicked(i.id)"
        >
        {{i.text}}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  components: {
    "ele-container": () => import("./component/ele_container"),
  },
  methods: {
    clicked (id) {
      this.$emit('ClickAction', {id: id, body: this.data.body})
    }
  }
}
</script>

<style lang="scss">
.AswFormBuilder {
  font-size: 16px;
  * {
    outline: none;
    box-sizing: border-box;
  }
  .inline {
    display: flex;
  }
  .block {
    display: block;
  }
  &_container {
    padding: 0.375em 0.75em;
  }
  &-group {
    padding: 5px;
    &_label {
      font-size: 1.25em;
    }
    &_imp {
      color: rgb(252, 0, 0);
    }
    &_sublabel {
      font-size: 0.75em;
      margin-bottom: 0.4em;
    }
    &_input {
      position: relative;
      font-size: 1em;
      display: block;
      padding: 0.375em 0.75em;
      font-size: 1em;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25em;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    &_input.block {
      width: 100%;
    }
    &_message {
      font-size: 0.65em;
    }
    &_message.success {
      color: green;
    }
    &_message.warning {
      color: #daa200;
    }
    &_message.alert {
      color: #ff4141;
    }
    &_radio {
      display: flex;
      align-items: center;
      padding: 3px;
      margin-right: 10px;
    }
  }
  &-action {
    padding: 10px 15px;
    button {
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375em .75em;
      font-size: 1em;
      line-height: 1.5;
      border-radius: .25em;
      margin-right: 15px;
      margin-left: 15px;
    }
  }
}
</style>