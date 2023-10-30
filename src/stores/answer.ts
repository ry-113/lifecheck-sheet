import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
type AnswersObject = {
  [K in string]: any;
};

export const useAnswerStore = defineStore('answer', () => {

  const today: string = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).split("/").join("-");

  const morningAnswerInit: AnswersObject = {
    mailQuestion: {isRecording: false},
    todayDate: today,
    attendStatus: "",
    bedTime: "",
    wakeUpTime: "",
    medicationCheck: {lastNight: false,beforeSleep: false,thisMorning: false, noon: false},
    otherMedication: "",
    sleepQuality: 0,
    awakeFeeling: 0,
    condition: "",
    feelingBeforePractice: 0,
    conditionBeforePractice: 0,
    consultRequest: "",
    consultDetails: "",
  };
  const morningAnswer = ref(morningAnswerInit);

  const eveningAnswerInit: AnswersObject = {
    mailQuestion: {isRecording: false},
    todayDate: today,
    goodPoint: "",
    badPoint: "",
    tomorrowGoal: "",
    thoughts: "",
    feelingAfterPractice: 0,
    conditionAfterPractice: 0,
    period1: "",
    period2: "",
    period3: "",
    period4: "",
    period5: "",
    period6: "",
    period7: "",
    period8: "",
  };
  const eveningAnswer = ref(eveningAnswerInit);

  const updateAnswer = (answer:any , formName: "morning"|"evening", questionName: keyof AnswersObject, itemName?: keyof AnswersObject):void => {
    if(formName === "morning") {

      if(typeof morningAnswer.value[questionName] === 'object' && itemName !== undefined) {
        morningAnswer.value[questionName][itemName] = answer;
      } else {
        morningAnswer.value[questionName] = answer;
      }

    } else {
      
      if(typeof eveningAnswer.value[questionName] === 'object' && itemName !== undefined) {
        eveningAnswer.value[questionName][itemName] = answer;
      } else {
        eveningAnswer.value[questionName] = answer;
      }
    }
  };

  const resetAnswer = (timeZone: string):void => {
    if(timeZone === "morning") {
      morningAnswer.value = {
        mailQuestion: {isRecording: false},
        todayDate: today,
        attendStatus: "",
        bedTime: "",
        wakeUpTime: "",
        medicationCheck: {lastNight: false,beforeSleep: false,thisMorning: false, noon: false},
        otherMedication: "",
        sleepQuality: 0,
        awakeFeeling: 0,
        condition: "",
        feelingBeforePractice: 0,
        conditionBeforePractice: 0,
        consultRequest: "",
        consultDetails: "",
      };
    } else {
      eveningAnswer.value = {
        mailQuestion: {isRecording: false},
        todayDate: today,
        goodPoint: "",
        badPoint: "",
        tomorrowGoal: "",
        thoughts: "",
        feelingAfterPractice: 0,
        conditionAfterPractice: 0,
        period1: "",
        period2: "",
        period3: "",
        period4: "",
        period5: "",
        period6: "",
        period7: "",
        period8: "",
      };
    }
  };

  return { morningAnswer, eveningAnswer, updateAnswer, resetAnswer }
});
