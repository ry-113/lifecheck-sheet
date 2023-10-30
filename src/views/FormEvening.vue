<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
//フォーム部品のインポート
import FormCheckbox from '@/components/FormCheckbox.vue';
import FormDropdown from '@/components/FormDropdown.vue';
import FormInputTime from '@/components/FormInputTime.vue';
import FormRadio from '@/components/FormRadio.vue';
import FormTextarea from '@/components/FormTextarea.vue';
import FormCalender from '@/components/FormCalender.vue';
import SubmitButton from '@/components/SubmitButton.vue';

//Piniaに接続
import {useAnswerStore} from "@/stores/answer";

const answerStore = useAnswerStore();
//子コンポーネントのフォーム部品から来たデータをPiniaに取り次ぐ
const updateAnswer = (answer: any, questionName: string, itemName?: string):void => {
    answerStore.updateAnswer(answer, 'evening', questionName, itemName);
};

const mailQuestion = {
    name: "mailQuestion",
    title: 'メール',
    checkList: [{id: 'isRecording', question:'返信に表示するメールアドレスとしてxxxxx@example.comを記録する'}],
    required: true,
};

const todayDate = {
    name: 'todayDate',
    title: '日付',
    question: '今日の日付を選んでください。'
};

const goodPoint = {
    name: "goodPoint",
    title: "良かった点",
    required: true,
};

const badPoint = {
    name: "badPoint",
    title: "より良くしたい点",
    required: true,
};

const tomorrowGoal = {
    name: "tomorrowGoal",
    title: "明日の目標",
    required: true,
};

const thoughts = {
    name: "thoughts",
    title: "感想",
    required: true,
};

const feelingAfterPractice = {
    name: "feelingAfterPractice",
    title: "訓練終了時の気分",
    good: "良い",
    bad: "悪い",
    radioNum: 11,
};

const conditionAfterPractice = {
    name: "conditionAfterPractice",
    title: "訓練終了時の体調",
    good: "良い",
    bad: "悪い",
    radioNum: 11,
};

const trainingContents = [
    {
        name: "period1",
        title: "1限目の訓練内容",
        required: true,
    },
    {
        name: "period2",
        title: "2限目の訓練内容",
        required: true,
    },
    {
        name: "period3",
        title: "3限目の訓練内容",
        required: true,
    },
    {
        name: "period4",
        title: "4限目の訓練内容",
        required: true,
    },
    {
        name: "period5",
        title: "5限目の訓練内容",
        required: true,
    },
    {
        name: "period6",
        title: "6限目の訓練内容",
        required: true,
    },
    {
        name: "period7",
        title: "7限目の訓練内容",
        required: false,
    },
    {
        name: "period8",
        title: "8限目の訓練内容",
        required: false,
    },
];

const onFormSubmit = ():void => {
    let confirm:boolean = window.confirm("夕方のフォームを送信します。");
    if(confirm) {
       router.push({name: "FormResult", params: {timeZone:'evening'}}); 
    }
};
</script>

<template>
    <h2>夕礼時のフォーム</h2>
    <p><span class="red">*</span>は必須項目です。</p>
    <form action="#" @submit.prevent="onFormSubmit">
        <FormCheckbox v-bind="mailQuestion" @changeValue="updateAnswer"/>
        <FormCalender v-bind="todayDate" @changeValue="updateAnswer"/>
        <FormTextarea v-bind="goodPoint" @changeValue="updateAnswer"/>
        <FormTextarea v-bind="badPoint" @changeValue="updateAnswer"/>
        <FormTextarea v-bind="tomorrowGoal" @changeValue="updateAnswer"/>
        <FormTextarea v-bind="thoughts" @changeValue="updateAnswer"/>
        <FormRadio v-bind="feelingAfterPractice" @changeValue="updateAnswer" />
        <FormRadio v-bind="conditionAfterPractice" @changeValue="updateAnswer" />
        <FormTextarea 
        v-for="period in trainingContents"
        :key="period.name"
        v-bind="period"
        @changeValue="updateAnswer"/>
        <SubmitButton/>
    </form>
</template>