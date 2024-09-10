<script setup>
import steps from '../../../data/steps'
const step = steps.find((step) => step.id === 'step2')

const emits = defineEmits(['part-is-completed', 'go-previous-part'])

const onNext = () => {
    // if u need validation, add here

    emits('part-is-completed')
}

const onPrevious = () => emits('go-previous-part')
</script>

<template>
<header>
    <h2>{{ step.title }}</h2>
</header>
<main>
    <section class="field" v-for="field in step.fields" :key="field.key">
        <label :for="field.label">{{ field.label }}</label>
        <input :id="field.label" :type="field.type" v-model="field.value" :placeholder="field.placeholder">
    </section>
</main>

<footer class="actions">
    <button @click="onPrevious">Previous</button>
    <button @click="onNext">{{ step.buttonLabel }}</button>
</footer>
</template>

<style scoped>
main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;
}

.field {
    border: 1px solid rgb(239, 239, 239);
    padding: 1rem;
    display: flex;
    flex-direction: column;
}

.actions {
    padding-block: 1rem;
    justify-content: space-between;
    display: flex;
    gap: 1rem;
}
</style>