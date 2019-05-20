<template>
  <div class="home">
   
    <cabecera/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import cabecera from '@/components/Cabecera.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    cabecera
  }
}
</script>
