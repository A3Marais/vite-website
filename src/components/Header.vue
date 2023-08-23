<template>
    <div>
        <header class="sticky top-0 bg-blue-900 shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-t3xt py-6 mx-auto">
          <div class="flex items-center gap-3">
            <i class="pi pi-box text-xl pi-hover pi-text-pilog-3 duration-150" style="font-size: 1.25rem"/>
            <h2 class="text-2xl">{{ $route.name }}</h2>
          </div>  
          <div class="flex gap-3 flex-1 justify-end">
            <div title="Home">
                <RouterLink to="/" class="text-t3xt hover:text-pilog-3 duration-150 cursor-pointer">
                <i class="pi pi-home text-xl pi-hover pi-text-pilog-3 duration-150 cursor-pointer" style="font-size: 1.25rem" @click="toggleModal"></i>
                </RouterLink>
            </div>

            <div title="About">
                <RouterLink to="/about" class="text-t3xt hover:text-pilog-3 duration-150 cursor-pointer">
                <i class="pi pi-info-circle text-xl pi-hover pi-text-pilog-3 duration-150 cursor-pointer" style="font-size: 1.25rem" @click="toggleModal"></i>
                </RouterLink>
            </div>

            <div title="Contact">
                <RouterLink to="/contact" class="text-t3xt hover:text-pilog-3 duration-150 cursor-pointer">
                <i class="pi pi-mobile text-xl pi-hover pi-text-pilog-3 duration-150 cursor-pointer" style="font-size: 1.25rem" @click="toggleModal"></i>
                </RouterLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'Header',
  components: { RouterLink },
  setup() {
    const visibleLeft = ref(false);
    const visible = ref(false);

    function toggleModal(): void {
      visible.value = !visible.value;
    }

    return {
      visibleLeft,
      visible,
      toggleModal,
    };
  },
};

</script>