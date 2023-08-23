<template>
    <div class="flex flex-col w-max mx-10 my-12 justify-center items-center">
        <div>
            <h2 class="text-2xl">Work Experience</h2>
        </div>
        <div class="text-2xl my-5">
            <DataTable :value="workExperience" :rows="5" :paginator="true" :pageLinks="3" :rowsPerPageOptions="[5, 10, 15]">
                <Column field="company" header="Company"></Column>
                <Column field="position" header="Position"></Column>
                <Column field="duration" header="Duration"></Column>
                <Column field="description" header="Descriptions"></Column>
            </DataTable>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'XpDataT',
    components: {},
    data() {
      return {
        workExperience: [
          { company: 'Deltamune', position: 'Lab Assistant', duration: '09/2017-12/2017', description: 'Processed samples that came through sample reception from clients, Admin duties.'},
          { company: 'MarkData', position: 'Data Capture Clerk', duration: '2020-2021',  description: 'Seasonally entered data from physical surveys into the company system.'},
          { company: 'Maize Quality and Logistics (MQL)', position: 'Quality Assurance Specialist', duration: '02/2022-08/2022', description: "Performed GMO tests on maize samples and registered results."},
          { company: 'PiLog Africa', position: 'Software Developer Intern', duration: '11/2022-Present', description: "Received internal frontend development training, general data work."},
          // Add more work experience objects as needed
        ],
      };
    },
  });
  </script>