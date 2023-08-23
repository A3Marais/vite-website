<template>
    <div class="flex flex-col w-max mx-10 my-12 justify-center items-center">
      <div>
        <h2 class="text-2xl">Skills</h2>
      </div>
      <div class="flex flex-col w-max mx-12 my-5 justify-center">
        <div class="flex-auto overflow-x-auto max-h-[600px]">
          <DataTable
            :value="skills"
            :rows="5"
            :paginator="true"
            :pageLinks="3"
            :rowsPerPageOptions="[5, 10, 15]"
            sortMode="multiple"
            tableStyleClass="custom-table"
          >
            <Column field="skill" header="Skill" sortable style="width: 25%"></Column>
            <Column field="rating" header="Rating" sortable style="width: 25%">
              <template #body="slotProps">
                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
              </template>
            </Column>
            <Column field="duration" header="Duration" sortable style="width: 25%"></Column>
            <Column field="description" header="Descriptions" sortable style="width: 25%"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
    import { defineComponent } from 'vue';


    export default defineComponent({
    name: 'SkillsTable',
    components: {},
    data() {
        return {
        skills: [
            {
            skill: 'HTML',
            rating: 4,
            duration: '2 years',
            description: 'Proficient in HTML5',
            },
            {
            skill: 'CSS',
            rating: 3,
            duration: '2 years',
            description: 'Familiar with CSS3 and CSS frameworks',
            },
            {
            skill: 'JavaScript',
            rating: 4,
            duration: '2 years',
            description: 'Strong skills in JavaScript',
            },
            {
            skill: 'Python',
            rating: 4,
            duration: '2 years',
            description: 'Strong skills in Python',
            },
            {
            skill: 'MySQL',
            rating: 3,
            duration: '2 years',
            description: 'Familiar with SQL queries and databases',
            },
            {
            skill: 'Excel',
            rating: 5,
            duration: '5 years',
            description: 'Advanced skills in MS Excel',
            },
            {
            skill: 'Vue3',
            rating: 4,
            duration: '1 year',
            description: 'Experienced in Vue3 development',
            },
            {
            skill: 'Vite',
            rating: 3,
            duration: '1 year',
            description: 'Familiar with Vite framework',
            },
            {
            skill: 'Primevue',
            rating: 4,
            duration: '1 year',
            description: 'Proficient in Primevue components',
            },
            {
            skill: 'TailwindCSS',
            rating: 3,
            duration: '1 year',
            description: 'Familiar with styling using Tailwind CSS',
            },
            {
            skill: 'TypeScript',
            rating: 3,
            duration: '1 year',
            description: 'Familiar with TypeScript',
            },
            {
            skill: 'Node.js',
            rating: 3,
            duration: '1 year',
            description: 'Familiar with Node.js development',
            },
            {
            skill: 'Express',
            rating: 3,
            duration: '1 year',
            description: 'Familiar with Express framework',
            },
            {
            skill: 'Tableau',
            rating: 3,
            duration: '2 years',
            description: 'Familiar with Tableau for data visualization',
            },
        ],
        };
    },
    });
    </script>
