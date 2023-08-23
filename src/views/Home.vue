<template>
    <div class="mx-auto my-auto" style="text-align: center;">
      <Card class="justify-center items-center flex flex-col w-max mx-4 mt-2">
        <template #header>
          <img alt="grad-photo" src="/gradphoto.JPG" style="width: 300px; height: 400px">
        </template>
        <template #title>
          Welcome to my personal page:
        </template>
        <template #subtitle>
          Adriaan Marais
        </template>
        <template #content>
          <p>
            This is my personal website that contains information on my education, my work experience, and my skills. This website also forms part of my project portfolio. Go to the <a href="/about" class="text-blue-500">about page</a> to find out more.
          </p>
        </template>
      </Card>
    </div>
  </template>

<script lang="ts">
import { ref } from "vue";

export default {
    name: "Home",
  setup() {

    const visibleLeft = ref(false);
    
    function toggleModal(): void {
      visibleLeft.value = !visibleLeft.value;
    }
    
    return {
    visibleLeft,
    toggleModal,
  };
  },
};
</script>

<style scoped>
.line-break {
  height: 1px;
  background-color: whitesmoke;
  width: 100%;
}
</style>