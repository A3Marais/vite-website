<template>
    <div class="footer bg-blue-900">
      <hr class="line-break">
      <p>Adriaan Marais 2023 ©</p>
    </div>
  </template>

<script lang="ts">
export default {
    name: "Footer",
  setup() { },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: whitesmoke /* Adjust the height as desired */
  /*background-color: black;
  color: whitesmoke /* Example background color */
}

.line-break {
  width: 100%;
  border: none;
  border-top: 1px solid whitesmoke;
  margin: 10px 0;
}

.footer p {
  text-align: center;
}
</style>