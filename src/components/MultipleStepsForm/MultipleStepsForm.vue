<script setup>
// Depends
import steps from '../../data/steps'
import { ref } from 'vue'
const modelValue = defineModel({type: Object})

// Components
import Step1 from './steps/Step1.vue'
import Step2 from './steps/Step2.vue'
import Step3 from './steps/Step3.vue'
import Completed from './steps/Completed.vue'

const activeStepId = ref('step1') // 'step1', 'step2', 'step3', 'completed'

const setActiveStepId = id => activeStepId.value = id

const onCompletedForm = () => {
    const payload = steps.map((step) => {
        return {
            id: step.id,
            fields: step.fields.map((field) => {
                return {
                    key: field.key,
                    value: field.value
                }
            })
        }
    })
    modelValue.value = payload
    setActiveStepId('completed')
}
</script>

<template>
    <section class="multiple-steps-form">
        <header v-if="activeStepId !== 'completed'">
            <h1>Please fill out this form completely to apply for a job</h1>
            <p>We wish you good luck.</p>
        </header>

        <section v-if="activeStepId !== 'completed'" class="steps-number">
            <ul>
                <li v-for="step in steps" :key="step.id" :class="{active: step.id === activeStepId}"
                @click="activeStepId = step.id">
                    {{ step.number }}
                    <small>{{ step.title }}</small>
                </li>
            </ul>
        </section>

        <section class="active-step">
            <Step1 v-if="activeStepId === 'step1'" @step-is-completed="setActiveStepId('step2')" />
            <Step2 v-if="activeStepId === 'step2'" @step-is-completed="setActiveStepId('step3')" @go-previous-step="setActiveStepId('step1')" />
            <Step3 v-if="activeStepId === 'step3'" @step-is-completed="onCompletedForm" @go-previous-step="setActiveStepId('step2')" />
            <Completed v-if="activeStepId === 'completed'" />
        </section>
    </section>
</template>

<style scoped>
.multiple-steps-form {
    max-width: 1000px;
    margin: auto;
    border: 1px solid lightgray;
    padding: 1rem;
    border-radius: .5rem;

    & .active-step {
        padding-inline: 6rem;
    }

    & .steps-number ul {
        all: unset;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #eaeaea;
        padding: .3rem;
        border-radius: 2rem;

        & li {
            display: flex;
            flex-direction: column;
            text-align: center;

            &.active {
                background-color: #f3f3f3;
                padding: 1rem;
                border-radius: 2rem;
            }

            & small {
                font-size: .5rem;
            }
        }
    }
}
</style>
