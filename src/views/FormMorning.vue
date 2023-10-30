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
    answerStore.updateAnswer(answer, 'morning', questionName, itemName);
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

const attendStatus = {
    name: "attendStatus",
    title: '出席状況',
    dropdownList: ['出席' ,'遅刻', '早退'],
};

const bedTime = {
    name: "bedTime",
    title: '就寝時刻',
    question: '24時制で入力してください。 例）23:11',
};

const wakeUpTime = {
    name: "wakeUpTime",
    title: '起床時刻',
    question: '起きた時刻を入力してください。 例）6:45'
};


const medicationCheck = {
    name: "medicationCheck",
    title: '定期服薬',
    checkList: [
        {id: 'lastNight', question: '昨夜'},
        {id: 'beforeSleep', question: '就寝前'},
        {id: 'thisMorning', question: '今朝'},
        {id: 'noon', question: '昼'},
    ],
    required: false,
};

const otherMedication = {
    name: "otherMedication",
    title: "その他の服薬",
    required: false,
};

const sleepQuality = {
    name: "sleepQuality",
    title: "睡眠の質",
    good: "眠れた",
    bad: "不眠",
    radioNum: 4,
};

const awakeFeeling = {
    name: "awakeFeeling",
    title: "目覚めた感じ",
    good: "すっきり",
    bad: "悪い",
    radioNum: 4,
};

const condition = {
    name: "condition",
    title: "体調",
    required: true
};

const feelingBeforePractice = {
    name: "feelingBeforePractice",
    title: "訓練開始前の気分",
    good: "良い",
    bad: "悪い",
    radioNum: 11,
};

const conditionBeforePractice = {
    name: "conditionBeforePractice",
    title: "訓練開始前の体調",
    good: "良い",
    bad: "悪い",
    radioNum: 11,
};

const consultRequest = {
    name: "consultRequest",
    title: "相談希望",
    dropdownList: ["なし","訓練","対人関係", "就職関係", "家庭", "その他"],
};

const consultDetails = {
    name: "consultDetails",
    title: "相談内容",
    required: false,
};

const onFormSubmit = ():void => {
    let confirm: boolean = window.confirm("朝のフォームを送信します。");
    if(confirm) {
        router.push({name: "FormResult", params: {timeZone:'morning'}});
    }
};
</script>

<template>
    <h2>朝礼時のフォーム</h2>
    <p><span class="red">*</span>は必須項目です。</p>
    <form action="#" @submit.prevent="onFormSubmit">
        <FormCheckbox v-bind="mailQuestion" @changeValue="updateAnswer"/>
        <FormCalender v-bind="todayDate" @changeValue="updateAnswer"/>
        <FormDropdown v-bind="attendStatus" @changeValue="updateAnswer"/>
        <FormInputTime v-bind="bedTime" @changeValue="updateAnswer"/>
        <FormInputTime v-bind="wakeUpTime" @changeValue="updateAnswer"/>
        <FormCheckbox v-bind="medicationCheck" @changeValue="updateAnswer"/>
        <FormTextarea v-bind="otherMedication" @changeValue="updateAnswer"/>
        <FormRadio v-bind="sleepQuality" @changeValue="updateAnswer" />
        <FormRadio v-bind="awakeFeeling" @changeValue="updateAnswer" />
        <FormTextarea v-bind="condition" @changeValue="updateAnswer"/>
        <FormRadio v-bind="feelingBeforePractice" @changeValue="updateAnswer"/>
        <FormRadio v-bind="conditionBeforePractice" @changeValue="updateAnswer"/>
        <FormDropdown v-bind="consultRequest" @changeValue="updateAnswer"/>
        <FormTextarea v-bind="consultDetails" @changeValue="updateAnswer"/>
        <SubmitButton/>
    </form>
</template>