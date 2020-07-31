<template>
  <div id="app">
    <h2>Asw Form Builder</h2>
    <div style="display: flex">
      <div class="left-panel p" >
        <h3>All Config</h3>
        <json-viewer :value="allJson"></json-viewer>
      </div>
      <div class="mid-panel">
        <form-builder :data="exampleForm" @ClickAction="ClickAction"/>
      </div>
      <div class="right-panel p">
        <h3>Form Body</h3>
        <json-viewer  :value="exampleForm.body"></json-viewer>
        <h3>Form Full Config</h3>
        <json-viewer :value="exampleForm"></json-viewer>
      </div>
    </div>
  </div>
</template>

<script>
import allJson from './FormBuilder/config'
import exampleForm from './exampleForm'
export default {
  name: 'App',
  components: {
    FormBuilder: () => import('./FormBuilder/builder')
  },
  data () {
    return {
      allJson,
      exampleForm
    }
  },
  methods: {
    ClickAction (e) {
      alert(JSON.stringify(e))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  margin: 20px;
}
.p {
  padding: 10px;
}
.fixHeight {
  height: 500px;
  overflow: auto;
}
.left-panel {
  width: 20%;
}
.mid-panel {
  width: 50%;
  border: 1px solid gray;
}
.right-panel {
  width: 30%;
}
</style>
