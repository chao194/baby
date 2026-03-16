<template>
  <div class="home">
    <!-- 封面区域 -->
    <section class="home-hero">
      <div class="home-hero__overlay">
        <div class="container">
          <h1 class="home-hero__title">一 周 年 快 乐</h1>
          <p class="home-hero__subtitle">
            我们在一起的第 <span class="days-highlight">{{ daysTogether }}</span> 天
          </p>
          <div class="home-hero__countdown">
            <div class="countdown-item">
              <span class="countdown-item__number">{{ countdown.hours }}</span>
              <span class="countdown-item__label">时</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-item__number">{{ countdown.minutes }}</span>
              <span class="countdown-item__label">分</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-item__number">{{ countdown.seconds }}</span>
              <span class="countdown-item__label">秒</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 简介区域 -->
    <section class="home-intro">
      <div class="container">
        <h2 class="section-title">关于我们</h2>
        <div class="home-intro__content">
          <p>
            亲爱的宝宝，不知不觉我们已经在一起一年了。这一年里，我们一起经历了许多美好的时光，有欢笑，有泪水，有感动，有成长。
          </p>
          <p>
            从第一次相遇到现在，每一个瞬间都值得我们珍藏。这个网站是我为我们的一周年纪念日准备的礼物，希望它能记录下我们的美好回忆，也能成为我们未来回忆的见证。
          </p>
          <p>让我们一起回顾过去的点点滴滴，展望未来的幸福生活。爱你宝宝，永远！</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * 首页组件
 * @功能：展示一周年纪念封面、纪念日倒计时
 * @依赖 Element Plus：无需直接依赖
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、sass@^1.60.0
 */
import { ref, onMounted, onUnmounted, computed } from 'vue'

// 纪念日倒计时
// 使用 UTC 时间创建开始日期，避免时区偏差
const startDate = new Date(Date.UTC(2025, 2, 16, 0, 0, 0)) // 注意：月份是 0-11，所以 3 月是 2
const daysTogether = computed(() => {
  const now = new Date()
  const diffTime = Math.abs(now - startDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
})

const countdown = ref({
  hours: 0,
  minutes: 0,
  seconds: 0
})

let countdownInterval = null

const updateCountdown = () => {
  // 创建当前 UTC 时间
  const now = new Date()
  const utcNow = new Date(
    Date.UTC(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    )
  )
  const diffTime = Math.abs(utcNow - startDate)
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
  const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000)

  countdown.value = {
    hours: diffHours.toString().padStart(2, '0'),
    minutes: diffMinutes.toString().padStart(2, '0'),
    seconds: diffSeconds.toString().padStart(2, '0')
  }
}

// 生命周期
onMounted(() => {
  // 启动倒计时
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style lang="scss" scoped>
.home-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;

  &__overlay {
    position: absolute;
    top: -200px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(255, 182, 193, 0.4), rgba(255, 105, 180, 0.6));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 4rem;
    color: #ff69b4;
    text-align: center;
    margin-bottom: $spacing-md;
    text-shadow: 0 2px 4px rgba(255, 105, 180, 0.5);
    font-weight: $font-weight-bold;
    animation: floatAnimation 3s ease-in-out infinite;
  }

  @keyframes floatAnimation {
    0% {
      transform: translateY(0) scale(1);
      color: #ff69b4;
      text-shadow: 0 2px 4px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 182, 193, 0.4);
    }
    20% {
      transform: translateY(-20px) scale(1.12);
      color: #ff69b4;
      text-shadow: 0 6px 16px rgba(255, 105, 180, 0.8), 0 0 70px rgba(255, 105, 180, 0.7),
        0 0 100px rgba(255, 182, 193, 0.5);
    }
    40% {
      transform: translateY(-8px) scale(1.05);
      color: #ff1493;
      text-shadow: 0 6px 16px rgba(255, 105, 180, 0.8), 0 0 60px rgba(255, 182, 193, 0.7);
    }
    60% {
      transform: translateY(-25px) scale(1.15);
      color: #ff1493;
      text-shadow: 0 8px 20px rgba(255, 105, 180, 0.9), 0 0 80px rgba(255, 182, 193, 0.8);
    }
    80% {
      transform: translateY(-15px) scale(1.12);
      color: #ff1493;
      text-shadow: 0 6px 16px rgba(255, 105, 180, 0.8), 0 0 70px rgba(255, 105, 180, 0.7),
        0 0 100px rgba(255, 182, 193, 0.5);
    }
    100% {
      transform: translateY(0) scale(1);
      color: #ff69b4;
      text-shadow: 0 2px 4px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 182, 193, 0.4);
    }
  }

  &__subtitle {
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    margin-bottom: $spacing-xl;
    text-shadow: 0 2px 4px rgba(255, 105, 180, 0.5);

    .days-highlight {
      font-size: 2rem;
      font-weight: $font-weight-bold;
      color: #ff1493;
      text-shadow: 0 0 10px rgba(255, 20, 147, 0.8);
      margin: 0 8px;
      animation: pulse 2s infinite;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  &__countdown {
    display: flex;
    justify-content: center;
    gap: $spacing-lg;

    .countdown-item {
      width: 100px;
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      border-radius: $border-radius-lg;
      padding: $spacing-md;
      text-align: center;
      border: 2px solid rgba(255, 105, 180, 0.5);

      &__number {
        display: block;
        font-size: 2rem;
        font-weight: $font-weight-bold;
        color: #ff69b4;
      }

      &__label {
        display: block;
        font-size: $font-size-sm;
        color: #ff1493;
        margin-top: $spacing-xs;
        font-weight: $font-weight-medium;
      }
    }
  }
}

.section-title {
  font-size: $font-size-xxl;
  color: $text-color-primary;
  text-align: center;
  margin-bottom: $spacing-lg;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: $color-primary;
    margin: $spacing-md auto 0;
    border-radius: $border-radius-full;
  }
}

.home-intro {
  padding: $spacing-xxl 0;
  background-color: $bg-color-secondary;

  &__content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    line-height: 1.8;

    p {
      margin-bottom: $spacing-md;
      color: $text-color-regular;
    }
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home-hero {
    // height: 700px;

    &__title {
      font-size: 2.5rem;
    }

    &__subtitle {
      font-size: 1.2rem;
    }

    &__countdown {
      gap: $spacing-md;

      .countdown-item {
        padding: $spacing-sm;

        &__number {
          font-size: 1.5rem;
        }
      }
    }
  }

  .section-title {
    font-size: $font-size-xl;
  }
}
</style>
