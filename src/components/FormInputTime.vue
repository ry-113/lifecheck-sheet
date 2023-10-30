<script setup lang="ts">
import {ref, computed} from 'vue';
interface Props {
    name: string;
    title: string;
    question: string;
}
const props = defineProps<Props>();
const time = ref("");

interface Emits {
  (event: string, answer: number | boolean | string, questionName: string, itemName?: string):void;
}
const emit = defineEmits<Emits>();
const onChangeValue = (event: Event):void => {
  const element = event.target as HTMLInputElement;
  const answer = element.value;
  emit("changeValue", answer, props.name);
};
</script>

<template>
    <div class="form-card">
        <h3 class="title required">{{ props.title }}</h3>
        <p class="question">{{ props.question }}</p>
        <input type="time" :value="time" @change="onChangeValue" required>
    </div>
    
</template>

<style scoped>
 .form-card {
    width: 80%;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #0078D7;
    border-radius: 5px;
    background-color: #fff;
  }

  .form-card .title {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  .form-card input {
    width: 100px;
  }
</style>