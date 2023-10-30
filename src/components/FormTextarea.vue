<script setup lang="ts">
import {ref, computed} from 'vue';
interface Props {
    name: string;
    title: string;
    required: boolean;
}
const props = defineProps<Props>();
const string = ref("");

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
        <h3 class="title" :class="{required: props.required}">{{ props.title }}</h3>
        <textarea type="text" placeholder="回答を入力" :value="string" @change="onChangeValue" :required="props.required"></textarea>
    </div>
    
</template>

<style scoped>
 .form-card {
    width: 80%;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid#0078D7;
    border-radius: 5px;
    background-color: #fff;
  }

  .form-card .title {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  .form-card textarea {
    width: 90%;
    padding: 4px;
    line-height: 1.7;
  }

  textarea[type="text"]:focus {
  border-color: #0078D7;
  box-shadow: 0 0 8px 0 #0078D7;
  outline: none;
}
</style>