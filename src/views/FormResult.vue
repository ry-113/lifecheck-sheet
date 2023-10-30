<script setup lang="ts">
import {computed} from "vue";
import { useAnswerStore } from '@/stores/answer';
const answerStore = useAnswerStore();
const morningAnswer = computed(() => {
    return answerStore.morningAnswer;
});
const eveningAnswer = computed(() => {
    return answerStore.eveningAnswer;
});

interface Props {
    timeZone: string;
}
const props = defineProps<Props>();

const renderObj = computed(() => {
    const renderObj = props.timeZone === 'morning' ? morningAnswer : eveningAnswer;
    return Object.entries(renderObj.value);
});

type Questions = {
    [K in string]: string;
}
const questions: Questions = {
    mailQuestion: "メール",
    todayDate: "日付",
    attendStatus: "出席状況",
    bedTime: "就寝時刻",
    wakeUpTime: "起床時刻",
    medicationCheck: "定期服薬",
    otherMedication: "その他の服薬",
    sleepQuality: "睡眠の質",
    awakeFeeling: "目覚めた感じ",
    condition: "体調",
    feelingBeforePractice: "訓練開始前の気分",
    conditionBeforePractice: "訓練開始前の体調",
    consultRequest: "相談希望",
    consultDetails: "相談内容",
    isRecording: "登録",
    lastNight: "昨夜",
    beforeSleep: "就寝前",
    thisMorning: "今朝",
    noon: "昼",
    goodPoint: "良かった点",
    badPoint: "より良くしたい点",
    tomorrowGoal: "明日の目標",
    thoughts: "感想",
    feelingAfterPractice: "訓練終了時の気分",
    conditionAfterPractice: "訓練終了時の体調",
    period1: "1限目の訓練内容",
    period2: "2限目の訓練内容",
    period3: "3限目の訓練内容",
    period4: "4限目の訓練内容",
    period5: "5限目の訓練内容",
    period6: "6限目の訓練内容",
    period7: "7限目の訓練内容",
    period8: "8限目の訓練内容",
};

const convertQuestions = (key: keyof Questions) => {
    return questions[key];
};
</script>

<template>
    <h2>送信結果</h2>
    <ul class="answers-list">
        <li v-for="[key, answer] in renderObj" :key="key" class="answer-item">
            <h3>{{ convertQuestions(key) }} : </h3>
            <ul v-if="(typeof answer === 'object')" class="nested-list">
                <li v-for="(nestedAnswer, nestedKey) in answer">
                    <p>{{ convertQuestions(nestedKey.toString()) }} : {{ nestedAnswer ? "はい" : "いいえ" }}</p>
                </li>
            </ul>
            <p v-else>{{ answer }}</p>
        </li>
    </ul>
    <button>
        <RouterLink :to="{name: 'AppTop'}" @click="answerStore.resetAnswer(props.timeZone)">トップへ戻る</RouterLink>
    </button>
</template>

<style scoped>
answers-list > * {
    display: inline-block;
}
.answers-list {
    list-style: none;
    padding: 0 10%;
}

.answer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fff;
    margin: 20px 0;
    padding: 8px 16px;
    border: 1px solid #0078D7;
    border-radius: 5px;
}

button {
    background-color: #0078D7;
    border-radius: 5%;
    display: block;
    margin: 0 auto;
    padding: 0;
    border: none;
}
button a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
}
</style>