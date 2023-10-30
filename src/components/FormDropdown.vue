<script setup lang="ts">
import {ref} from "vue";
interface Props {
    name: string;
    title: string;
    dropdownList: string[];
}

const props = defineProps<Props>();

const selected = ref("");

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
        <label class="selectbox">
          <select :value="selected" @change="onChangeValue" required>
              <option disabled value="">選択</option>
              <option 
              v-for="status in props.dropdownList"
              :key="status">
                  {{ status }}
              </option>
          </select>
        </label>
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

.selectbox {
    position: relative;
}

.selectbox::before,
.selectbox::after {
    position: absolute;
    content: '';
    pointer-events: none;
}

.selectbox::before {
    right: 0;
    display: inline-block;
    width: 2.8em;
    height: 2.8em;
    border-radius: 0 3px 3px 0;
    background-color: #0078d7;
    opacity: .8;
    content: '';
}

.selectbox::after {
    position: absolute;
    top: 50%;
    right: 1.4em;
    transform: translate(50%, -50%) rotate(45deg);
    width: 6px;
    height: 6px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    content: '';
}

.selectbox select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    min-width: 230px;
    height: 2.8em;
    padding: .4em 3.6em .4em .8em;
    border-radius: 3px;
    color: #333333;
    font-size: 1em;
    cursor: pointer;
}

.selectbox select:focus {
    outline: 1px solid #0078d7;
}
  
</style>