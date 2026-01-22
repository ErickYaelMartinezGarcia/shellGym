<!-- <script >
import { createApp } from 'vue'

const app = createApp({})
import { defineAsyncComponent } from 'vue'

// const logymComponent = defineAsyncComponent(() =>
//   import('logyMf/Login')
//)
app.component('logymComponent', defineAsyncComponent(() =>
  import('logyMf/Login')
))
</script> -->



<script setup>
  
import { defineAsyncComponent } from 'vue'

const logymComponent = defineAsyncComponent(() =>
  import('logyMf/Login').then(m => m.default)
)
</script>


<template>
  <div style="border: 2px solid blue; min-height:100px; min-width:100px">
  <logymComponent/>
  </div>
</template>

<style scoped>

 
</style>
