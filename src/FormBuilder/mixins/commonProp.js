export default {
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    body: {
      default: () => {}
    }
  },
  computed: {
    GetMessage () {
      const msg = Function('data', this.config.validation)(this.config.value)
      if (typeof msg === 'string') {
        return {
          msg: msg,
          type: 'default'
        }
      } else {
        return msg
      }
    },
    value () {
      return this.config.value || ''
    },
    key () {
      return this.config.key || ''
    }
  },
  watch: {
    body: {
      deep: true,
      immediate: true,
      handler () {
        if (this.key in this.body) {
          this.config.value = this.body[this.key]
        }
      }
    },
    value: {
      immediate: true,
      handler (val) {
        if (this.key in this.body) {
          this.body[this.key] = val
        }
      }
    }
  }
}