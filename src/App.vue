<script setup>
import { ref } from 'vue';
import MultipleStepsForm from './components/MultipleStepsForm/MultipleStepsForm.vue'

const formData = ref([])
</script>

<template>
  <MultipleStepsForm v-model="formData"/>

  <section class="result-as-json">
    <strong>Result as JSON</strong>
    <pre>{{ formData }}</pre>
  </section>
  
  <footer>
    Developed by <a href="https://github.com/gayret">Safa Gayret</a>
  </footer>
</template>

<style scoped>
.result-as-json {
  margin-top: 2rem;
  border: 1px solid lightgray;
  padding: .5rem;
  background-color: rgb(235, 235, 235);
}

footer {
  padding-block: 1rem;
  font-size: .7rem;
  text-align: right;
}
</style>