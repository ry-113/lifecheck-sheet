<script setup lang="ts">
import {ref} from "vue";
interface Props {
    name: string;
    title: string;
    good: string;
    bad: string;
    radioNum: number;
}

const props = defineProps<Props>();

const selected = ref("");

interface Emits {
  (event: string, answer: number | boolean | string, questionName: string, itemName?: string):void;
}
const emit = defineEmits<Emits>();
const onChangeValue = (event: Event):void => {
  const element = event.target as HTMLInputElement;
  const answer = Number(element.value);
  emit("changeValue", answer, props.name);
};
</script>

<template>
    <div class="form-card">
        <h3 class="title required">{{ props.title }}</h3>
        <div class="container">
            <p>{{ props.bad }}</p>
            <template v-for="num in radioNum" :key="num">
                <div class="radio">
                    <label>{{ num - 1 }}</label>
                    <input type="radio" :value="num - 1" :name="props.name" class="radio" @change="onChangeValue" required>
                </div>
            </template>
            <p>{{ props.good }}</p>
        </div>
        
    </div>
</template>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    column-gap: 30px;
}
.radio {
    display: flex;
    flex-direction: column;
}
input.radio {
    margin: 0;
    appearance:none;
    width: 24px;
    height: 24px;
    background: #eeeeee;
    box-shadow:
        inset 0 0 0 .4em white,
        0 0 0 .1em;
    border-radius: 50%;
    transition: .2s;
    cursor:pointer;
    color: #66686e;
}
  input.radio:hover,
  input.radio:checked {
    background: #66686e;
    box-shadow:
    inset 0 0 0 .3em white,
    0 0 0 .3em;
  }
  
  input.radio:checked {
    background: #0078D7;
    box-shadow:
      inset 0 0 0 .3em white,
      0 0 0 .2em #0078D7;
  } 

  input.radio:focus { outline: 0; }

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

  label {
    text-align: center;
    padding-right: 2px;
    padding-bottom: 2px;
  }

</style>