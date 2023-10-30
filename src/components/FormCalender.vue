<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import {ref} from 'vue';

const inputDate = ref();

interface Props {
    name: string;
    title: string;
    question: string;
}

const props = defineProps<Props>();

interface Emits {
  (event: string, answer: number | boolean | string, questionName: string):void;
}
const emit = defineEmits<Emits>();
const onChangeValue = (answer: string):void => {
  inputDate.value = answer;
  emit("changeValue", answer, props.name);
  
};
</script>

<template>
    <div class="form-card">
        <h3 class="title required">{{ props.title }}</h3>
        <p class="question">{{ props.question }}</p>
        <div class="date-picker">
            <VueDatePicker
            :model-value="inputDate"
            @update:model-value="onChangeValue"
            format="yyyy//MM/dd"
            model-type="yyyy-MM-dd" 
            required/>
            <!-- inputDateで取得可能 -->
        </div>
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

  .form-card label {
    padding-right: 30px;
  }

  .form-card .title {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  .date-picker {
    width: 25%;
  }
</style>