<template>
  <div class="quiz">
    <div class="container">
      <h2 class="section-title">情侣问答</h2>
      <p class="quiz-description">测试一下你对我们的了解程度吧！</p>
      
      <div class="quiz-container">
        <div v-if="!showResult" class="quiz-question">
          <h3 class="quiz-question__title">问题 {{ currentQuestionIndex + 1 }} / {{ questions.length }}</h3>
          <p class="quiz-question__text">{{ currentQuestion.question }}</p>
          <div class="quiz-question__options">
            <el-radio-group v-model="selectedOption">
              <el-radio 
                v-for="(option, index) in currentQuestion.options" 
                :key="index"
                :label="option"
                class="quiz-question__option"
              >
                {{ option }}
              </el-radio>
            </el-radio-group>
          </div>
          <div class="quiz-question__actions">
            <el-button 
              type="primary" 
              @click="submitAnswer"
              :disabled="!selectedOption"
            >
              提交答案
            </el-button>
          </div>
        </div>

        <div v-else class="quiz-result">
          <h3 class="quiz-result__title">测试结果</h3>
          <div class="quiz-result__score">
            你的得分：{{ score }} / {{ questions.length }}
          </div>
          <div class="quiz-result__message">
            {{ getResultMessage() }}
          </div>
          <div class="quiz-result__actions">
            <el-button type="primary" @click="resetQuiz">重新测试</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 情侣问答组件
 * @功能：测试对方对你们的了解程度，使用选择题形式
 * @依赖 Element Plus：ElRadioGroup、ElRadio、ElButton
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、Element Plus2.3.0+、sass@^1.60.0
 */
import { ref, computed } from 'vue'

// 问题数据
const questions = ref([
  {
    question: '我们第一次见面是在哪里？',
    options: ['咖啡店', '朋友聚会', '电影院', '公园'],
    answer: '朋友聚会'
  },
  {
    question: '我们第一次约会看的电影是什么？',
    options: ['爱情片', '喜剧片', '科幻片', '恐怖片'],
    answer: '爱情片'
  },
  {
    question: '我最喜欢的颜色是什么？',
    options: ['红色', '蓝色', '粉色', '紫色'],
    answer: '粉色'
  },
  {
    question: '我们第一次旅行去的地方是哪里？',
    options: ['海边', '山区', '城市', '乡村'],
    answer: '海边'
  },
  {
    question: '我最害怕的东西是什么？',
    options: ['虫子', '黑暗', '高处', '孤独'],
    answer: '虫子'
  }
])

// 状态
const currentQuestionIndex = ref(0)
const selectedOption = ref('')
const score = ref(0)
const showResult = ref(false)

// 当前问题
const currentQuestion = computed(() => {
  return questions.value[currentQuestionIndex.value]
})

// 提交答案
const submitAnswer = () => {
  if (selectedOption.value === currentQuestion.value.answer) {
    score.value++
  }
  
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    selectedOption.value = ''
  } else {
    showResult.value = true
  }
}

// 获取结果消息
const getResultMessage = () => {
  const percentage = (score.value / questions.value.length) * 100
  if (percentage === 100) {
    return '太棒了！你对我们的了解程度是100%，你是我最亲密的人！'
  } else if (percentage >= 80) {
    return '很好！你对我们的了解程度很高，继续保持哦！'
  } else if (percentage >= 60) {
    return '不错！你对我们有一定的了解，再接再厉！'
  } else {
    return '加油！你对我们的了解还不够，多花点时间了解我吧！'
  }
}

// 重置测试
const resetQuiz = () => {
  currentQuestionIndex.value = 0
  selectedOption.value = ''
  score.value = 0
  showResult.value = false
}
</script>

<style lang="scss" scoped>
.quiz {
  padding: $spacing-xxl 0;
  background-color: $bg-color-primary;
}

.quiz-description {
  text-align: center;
  color: $text-color-regular;
  margin-bottom: $spacing-xl;
  font-size: $font-size-lg;
}

.quiz-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: $bg-color-secondary;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  box-shadow: $shadow-base;
}

.quiz-question {
  &__title {
    font-size: $font-size-lg;
    color: $text-color-primary;
    margin-bottom: $spacing-md;
  }

  &__text {
    font-size: $font-size-md;
    color: $text-color-regular;
    margin-bottom: $spacing-lg;
    line-height: 1.6;
  }

  &__options {
    margin-bottom: $spacing-lg;

    .quiz-question__option {
      display: block;
      margin-bottom: $spacing-sm;
      padding: $spacing-sm;
      border-radius: $border-radius-base;
      transition: $transition-base;

      &:hover {
        background-color: rgba($color-primary, 0.1);
      }
    }
  }

  &__actions {
    text-align: center;
  }
}

.quiz-result {
  text-align: center;

  &__title {
    font-size: $font-size-xl;
    color: $text-color-primary;
    margin-bottom: $spacing-md;
  }

  &__score {
    font-size: $font-size-xxl;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-md;
  }

  &__message {
    font-size: $font-size-lg;
    color: $text-color-regular;
    margin-bottom: $spacing-lg;
    line-height: 1.6;
  }

  &__actions {
    margin-top: $spacing-lg;
  }
}
</style>