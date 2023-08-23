<template>
  <div class="flex flex-col min-h-screen bg-gray-600">
    <Header />
    <RouterView class=""/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';



export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();

return {
      route: router.currentRoute,
    };
  },
});
</script>


<style scoped>
</style>
