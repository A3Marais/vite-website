<template>
  <div class="flex h-screen">
  <div class="bg-gray-500 w-1/6 px-4 py-6">
      <div class="flex flex-col mb-4">
        <div class="flex justify-center items-center mb-4">
          <i class="pi pi-box text-t3xt mr-2" style="font-size: 2rem"></i>
        </div>
        <ul class="space-y-2">
          <li :class="{ 'bg-blue-600': activeTab === 0 }">
            <a
              href="#"
              class="flex items-center px-4 py-2 rounded hover:bg-blue-600 hover:text-white"
              @click="activeTab = 0"
            >
              <i class="pi pi-book text-t3xt mr-2" style="font-size: 2rem"></i>
              <span class="text-t3xt">Education</span>
            </a>
          </li>
          <li :class="{ 'bg-blue-600 ': activeTab === 1 }">
            <a
              href="#"
              class="flex items-center px-4 py-2 rounded hover:bg-blue-600 text-t3xt hover:text-white"
              @click="activeTab = 1"
            >
              <i class="pi pi-building text-t3xt mr-2" style="font-size: 2rem"></i>
              <span class="text-t3xt">Experience</span>
            </a>
          </li>
          <li :class="{ 'bg-blue-600 ': activeTab === 2 }">
            <a
              href="#"
              class="flex items-center px-4 py-2 rounded hover:bg-blue-600 hover:text-white"
              @click="activeTab = 2"
            >
              <i class="pi pi-bolt text-t3xt mr-2" style="font-size: 2rem"></i>
              <span class="text-t3xt">Skills</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  <div v-show="activeTab === 0" id='education' class="flex flex-col min-h-screen items-center justify-between">
    <div class="card flex flex-col items-center w-2/3">
      <div class="items-center mb-4">      
      <Accordion class="accordion-custom py-2" :activeIndex="0">
        <AccordionTab>
              <template #header>
                  <i class="pi pi-book"></i>
                  <span>National Senior Certificate</span>
              </template>
              <p>
                I completed matric at Afrikaanse Hoër Seunskool in Pretoria. I finished with 2 distinctions and an average of 75. I played cricket, rugby, and hockey. 
              </p>
          </AccordionTab>
          <AccordionTab>
              <template #header>
                  <i class="pi pi-image"></i>
                  <span>Bachelor of Commerce</span>
              </template>
              <p>
                I started studying Agribusiness Management in 2018 at the University of Pretoria and graduated in 2021. My course included the following main modules: 
              </p>
              <ul class="list-disc ml-6">
                <li>Agricultural Economics</li>
                <li>Economics (passed with distinction)</li>
                <li>Accounting</li>
                <li>Statistics</li>
                <li>Marketing</li>
                <li>Business Management</li>
              </ul>
          </AccordionTab>
          <AccordionTab>
              <template #header>
                  <i class="pi pi-desktop"></i>
                  <span>Online Courses</span>
              </template>
              <p>
                After completing my degree at university, I have been constantly learning and developing my skills. I have always been interested in IT and especially programming/software development. Until now I have finished 2 online courses, and started a 3rd course on Udemy:
              </p>
              <ul class="list-disc ml-6">
                <li>SQL - MySQL for Data Analytics and Business Intelligence📈</li>
                <li>Data Analysis Bootcamp - Python 🐍</li>
                <li>The Complete 2023 Web Development Bootcamp 🖥️ (current)</li>
              </ul>
          </AccordionTab>
      </Accordion>
    </div>
    </div>
  </div>
  <div v-show="activeTab === 1" id='experience' class="flex flex-col min-h-screen items-center justify-between">
    <XpDataT />
  </div>
  <div v-show="activeTab === 2" id='skills' class="flex flex-col min-h-screen items-center justify-between">
    <SkillsTable />
  </div>
</div>
</template>

<script lang="ts">
import { ref } from "vue";
import XpDataT from '../components/XpDataT.vue';
import SkillsTable from '../components/SkillsTable.vue';

export default {
  name: 'About',
  components: {XpDataT, SkillsTable },
  setup() {
  const activeTab = ref(0);
  return {
    activeTab,
  };
}}

</script>

<style scoped>
.accordion-custom i span {
  vertical-align: middle;
}

.accordion-custom span {
  margin: 0 0.5rem;
}

.p-accordion p {
  line-height: 1.5;
  margin: 0;
}

</style>