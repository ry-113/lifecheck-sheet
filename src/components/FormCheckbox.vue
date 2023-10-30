<script setup lang="ts">
import {ref} from 'vue';

interface checkItem {
    id: string;
    question: string;
}
interface Props {
    name: string;
    title: string;
    checkList: checkItem[];
    required: boolean;
}
const props = defineProps<Props>();

interface Emits {
  (event: string, answer: number | boolean | string, questionName: string, itemName: string):void;
}
const emit = defineEmits<Emits>();
const onChangeValue = (event: Event):void => {
  const element = event.target as HTMLInputElement;
  const answer = element.checked;
  const itemName = element.id;
  emit("changeValue", answer, props.name, itemName);
};
</script>

<template>
    <div class="form-card">
        <h3 class="title" :class="{required: props.required}">{{ props.title }}</h3>
        <div class="container">
            <template v-for="checkItem in props.checkList" :key="checkItem.id">
                <label class="ECM_CheckboxInput" :for="checkItem.id">
                  <input 
                    class="ECM_CheckboxInput-Input" 
                    type="checkbox" :id="checkItem.id" 
                    :value="false" @change="onChangeValue" 
                    :required="props.required"
                  >
                  <span class="ECM_CheckboxInput-DummyInput"></span>
                  <span class="ECM_CheckboxInput-LabelText">{{ checkItem.question }}</span>
                </label>
            </template>
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

  .form-card .title {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    column-gap: 30px;
    width: 80%;
    margin: 0 auto;
  }
  .ECM_CheckboxInput {
  padding: 12px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.ECM_CheckboxInput-Input {
  margin: 0;
  width: 0;
  opacity: 0;
}
.ECM_CheckboxInput:hover{
  background: rgba(0,0,0,.05);
}

.ECM_CheckboxInput-Input:checked + .ECM_CheckboxInput-DummyInput {
  background: #0078D7;
}
.ECM_CheckboxInput-Input:checked + .ECM_CheckboxInput-DummyInput::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 4px;
  border-radius: 2px;
  transform: translate(-5px, 3px) rotateZ(-135deg);
  transform-origin: 2px 2px;
  background: #FFFFFF;
}
.ECM_CheckboxInput-Input:checked + .ECM_CheckboxInput-DummyInput::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 4px;
  border-radius: 2px;
  transform: translate(-5px, 3px) rotateZ(-45deg);
  transform-origin: 2px 2px;
  background: #FFFFFF;
}
.ECM_CheckboxInput-DummyInput {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 24px;
  height: 24px;
  border: solid 2px transparent;
  background: rgba(0, 0, 0, .15);
  border-radius: 15%;
  transition: all .15s linear;
}
.ECM_CheckboxInput-LabelText {
  margin-left: 12px;
  display: block;
  font-size: 1rem;
}
</style>