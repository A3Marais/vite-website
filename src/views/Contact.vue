<template>
    <div class="flex flex-col justify-center items-center mx-auto my-auto h-max">
      <Card class="contact-card bg-gray-300">
        <template #title>
          Contact Details
        </template>
        <template #content>
          <div>
            <p><strong>Email:</strong> a3marais26@gmail.com</p>
            <p><strong>Email (w):</strong> adriaan.marais@pilog.co.za</p>
            <p><strong>Phone:</strong> 084 301 4077</p>
            <p><strong>Address:</strong> Erasmuskloof, Pretoria, 0181</p>
            <p>
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/adriaan-marais-53b6421b5/"
                target="_blank"
                class="underline text-blue-500"
              >
                Adriaan Marais
              </a>
            </p>
          </div>
        </template>
      </Card>
    </div>
  </template>
  

<script lang="ts">
import { ref } from "vue";

export default {
    name: "Contact",
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

</style>