<template>
  <div class="timeline">
    <div class="container">
      <!-- <h2 class="section-title">我们的时光轴</h2> -->
      <div class="timeline-container">
        <div
          v-for="(item, index) in timelineData"
          :key="index"
          class="timeline-item"
          :class="{ 'timeline-item--right': index % 2 === 1 }"
          :style="{
            animationDelay: index * 0.2 + 's',
            transform:
              screenWidth > 768
                ? index % 2 === 0
                  ? 'translateY(0)'
                  : 'translateY(-100px)'
                : 'translateY(0)'
          }">
          <div class="timeline-item__content">
            <div class="timeline-item__date">{{ item.date }}</div>
            <h3 class="timeline-item__title">{{ item.title }}</h3>
            <p class="timeline-item__description">{{ item.description }}</p>
            <div v-if="item.image" class="timeline-item__image">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
          </div>
          <div class="timeline-item__dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 时光轴组件
 * @功能：按时间线记录关键节点，包括文字描述和照片
 * @依赖 Element Plus：无需直接依赖
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、sass@^1.60.0
 */
import { ref, onMounted, onUnmounted } from 'vue'

// 响应式状态：屏幕宽度
const screenWidth = ref(window.innerWidth)

// 检测屏幕宽度变化
const handleResize = () => {
  screenWidth.value = window.innerWidth
}

// 组件挂载时添加 resize 事件监听
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// 组件卸载时移除 resize 事件监听
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// 导入图片资源
import timeLine1 from '@/assets/images/time-line-1.jpg'
import timeLine2 from '@/assets/images/time-line-2.jpg'
import timeLine3 from '@/assets/images/time-line-3.jpg'
import timeLine4 from '@/assets/images/time-line-4.jpg'
import timeLine5 from '@/assets/images/time-line-5.jpg'
import timeLine6 from '@/assets/images/time-line-6.jpg'
import timeLine7 from '@/assets/images/time-line-7.jpg'
import timeLine8 from '@/assets/images/time-line-8.jpg'
import timeLine9 from '@/assets/images/time-line-9.jpg'
import timeLine10 from '@/assets/images/time-line-10.jpg'
import timeLine11 from '@/assets/images/time-line-11.jpg'
import timeLine12 from '@/assets/images/time-line-12.jpg'
import timeLine13 from '@/assets/images/time-line-13.jpg'
import timeLine14 from '@/assets/images/time-line-14.jpg'
import timeLine15 from '@/assets/images/time-line-15.jpg'
import timeLine16 from '@/assets/images/time-line-16.jpg'
import timeLine17 from '@/assets/images/time-line-17.jpg'

// 时光轴数据
const timelineData = ref([
  {
    date: '2025-03-29',
    title: '第一次见面',
    description: '我们的初次相遇，心跳如鼓。那一刻，我便认定你就是我一直在寻找的那个人。',
    image: timeLine1
  },
  {
    date: '2025-04-13',
    title: '第一次看电影',
    description:
      '我们一起看了《向阳·花》，这是我们的第一次电影约会。那一刻，我感觉自己是世界上最幸福的人。',
    image: timeLine2
  },
  {
    date: '2025-04-19',
    title: '第一次去海洋馆',
    description:
      '我们一起探索神秘的海洋世界，晚上还共进了温馨的晚餐。那一天过得太快，我多希望时间能永远停留在那一刻。',
    image: timeLine3
  },
  {
    date: '2025-04-26',
    title: '第一次合影',
    description: '我们一起在DIY手作馆度过了愉快的时光，留下了许多珍贵的回忆和第一张正式合影。',
    image: timeLine4
  },
  {
    date: '2025-05-01',
    title: '第一次旅行',
    description:
      '和宝宝的第一次旅行，我们来到了湖北武汉。这座城市的每一处风景，都因为有你而变得格外美丽。',
    image: timeLine5
  },
  {
    date: '2025-05-11',
    title: '第一次坐摩天轮',
    description: '我们一起乘坐南昌之星摩天轮，俯瞰城市夜景。在最高点时，我觉得整个世界都属于我们。',
    image: timeLine6
  },
  {
    date: '2025-05-20',
    title: '520',
    description:
      '在这个充满爱意的日子里，我们一起享用了浪漫的西餐。宝宝送我的礼物让我感动不已，那一刻我确信自己是世界上最幸福的人。',
    image: timeLine7
  },
  {
    date: '2025-06-01',
    title: '平潭岛之旅',
    description: '我们一起前往平潭岛，看蔚蓝的大海，听海浪拍岸。这是一段让人心旷神怡的美好时光。',
    image: timeLine8
  },
  {
    date: '2025-08-30',
    title: '第一次给宝宝做饭',
    description:
      '我精心准备了一顿晚餐，希望能给宝宝一个惊喜。看到你开心的样子，我觉得所有的努力都值得。',
    image: timeLine9
  },
  {
    date: '2025-09-30',
    title: '抓娃娃大作战',
    description:
      '宝宝真是抓娃娃小能手，实力爆表，我们满载而归！看着你开心的笑容，我比自己抓到娃娃还高兴。',
    image: timeLine10
  },
  {
    date: '2025-10-03',
    title: '贵州贵阳之行',
    description: '宝宝穿上苗服的样子美极了，仿佛画中走出来的仙女。这趟旅行因为有你而变得更加难忘。',
    image: timeLine11
  },
  {
    date: '2025-10-19',
    title: '宝宝陪我过生日',
    description: '有宝宝陪我过生日，收到了好多精心准备的礼物。这是我过得最开心的一个生日。',
    image: timeLine12
  },
  {
    date: '2025-01-01',
    title: '安徽合肥之旅',
    description:
      '这是我们幸福的转折点，从这里开始，我们的感情更加坚定。合肥的每一个角落都留下了我们的足迹。',
    image: timeLine13
  },
  {
    date: '2025-01-10',
    title: '在一起300天',
    description:
      '为宝宝准备了好多小惊喜和礼物，看到你喜欢的样子，我的心都要融化了。300天的相处，让我更加珍惜我们的感情。',
    image: timeLine14
  },
  {
    date: '2025-02-14',
    title: "Happy Valentine's Day",
    description: '亲爱的宝宝，情人节快乐！愿我们的爱情像今天的玫瑰一样永远绽放。',
    image: timeLine15
  },
  {
    date: '2025-02-17',
    title: '一起跨年',
    description:
      '我们一起迎接新年的到来，互相发红包，许下对彼此的美好祝愿。新的一年，有你在身边就是最幸福的事。',
    image: timeLine16
  },
  {
    date: '2025-03-16',
    title: '一周年快乐',
    description:
      '转眼间我们已经在一起一年了，这一年里的点点滴滴都是我最珍贵的回忆。未来的日子，我会更加爱你、珍惜你。',
    image: timeLine17
  }
])
</script>

<style lang="scss" scoped>
// 浪漫时光轴样式
.timeline {
  padding: $spacing-xl 0;
  background-color: #fef8f8; // 浪漫淡粉色背景
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 192, 203, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(219, 112, 147, 0.1) 0%, transparent 20%);
}

.section-title {
  text-align: center;
  color: #d63384;
  font-size: $font-size-xxl;
  margin-bottom: $spacing-xl;
  font-weight: $font-weight-bold;
  text-shadow: 2px 2px 4px rgba(214, 51, 132, 0.2);
}

.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 $spacing-lg 0;

  &::before {
    content: '';
    position: absolute;
    top: $spacing-lg;
    bottom: $spacing-lg;
    left: 50%;
    width: 3px;
    background: linear-gradient(to bottom, #d63384, #fd7e14); // 浪漫渐变色时间线
    transform: translateX(-50%);
    box-shadow: 0 0 10px rgba(214, 51, 132, 0.3);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: $spacing-xl;
  width: 45%;
  animation: fadeIn 0.8s ease-out forwards;
  transition: all 0.5s ease;

  &--right {
    margin-left: auto;
    margin-top: -$spacing-md;
  }

  &__content {
    background-color: #ffffff;
    border-radius: 20px;
    padding: $spacing-lg;
    box-shadow: 0 8px 20px rgba(214, 51, 132, 0.15);
    transition: all 0.3s ease;
    border: 1px solid rgba(214, 51, 132, 0.1);

    &:hover {
      box-shadow: 0 12px 30px rgba(214, 51, 132, 0.25);
      transform: translateY(-8px) scale(1.02);
    }
  }

  &__date {
    font-size: $font-size-sm;
    color: #d63384;
    font-weight: $font-weight-medium;
    margin-bottom: $spacing-xs;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__title {
    font-size: $font-size-xl;
    color: #333;
    margin-bottom: $spacing-sm;
    font-weight: $font-weight-bold;
    color: #d63384;
  }

  &__description {
    color: #666;
    line-height: 1.7;
    margin-bottom: $spacing-md;
    font-style: italic;
  }

  &__image {
    margin-top: $spacing-md;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &__dot {
    position: absolute;
    top: $spacing-lg;
    width: 24px;
    height: 24px;
    border-radius: $border-radius-full;
    background-color: #ffffff;
    border: 4px solid #d63384;
    box-shadow: 0 0 15px rgba(214, 51, 132, 0.4);
    animation: pulse 2s infinite;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border: 8px solid transparent;
    }
  }

  &:not(.timeline-item--right) .timeline-item__dot {
    right: -12px;
    transform: translateX(100%);

    &::before {
      right: 100%;
      border-right-color: #ffffff;
      transform: translateY(-50%);
    }
  }

  &.timeline-item--right .timeline-item__dot {
    left: -12px;
    transform: translateX(-100%);

    &::before {
      left: 100%;
      border-left-color: #ffffff;
      transform: translateY(-50%);
    }
  }
}

// 动画效果
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(214, 51, 132, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(214, 51, 132, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(214, 51, 132, 0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .timeline-container {
    &::before {
      left: 12px;
    }
  }

  .timeline-item {
    width: calc(100% - 30px); /* 减去左侧空间 */
    margin-left: 30px !important;
    box-sizing: border-box;

    &__content {
      padding: $spacing-md;
    }

    &__dot {
      left: -30px !important;
      right: auto !important;
      transform: translateX(0) !important;

      &::before {
        left: 100% !important;
        right: auto !important;
        border-left-color: #ffffff !important;
        border-right-color: transparent !important;
      }
    }
  }
}
</style>
