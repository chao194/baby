<template>
  <div class="stories">
    <div class="container">
      <h2 class="section-title">我们的故事</h2>
      
      <div class="stories-list">
        <div 
          v-for="(story, index) in stories" 
          :key="index"
          class="story-item"
        >
          <div class="story-item__header">
            <h3 class="story-item__title">{{ story.title }}</h3>
            <div class="story-item__date">{{ story.date }}</div>
          </div>
          <div class="story-item__content">
            <p v-for="(paragraph, pIndex) in story.content" :key="pIndex">
              {{ paragraph }}
            </p>
          </div>
          <div v-if="story.image" class="story-item__image">
            <img :src="story.image" :alt="story.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 故事集组件
 * @功能：用文字讲述相遇、相知、相爱过程的小故事
 * @依赖 Element Plus：无需直接依赖
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、sass@^1.60.0
 */
import { ref } from 'vue'

// 故事数据
const stories = ref([
  {
    title: '相遇的那天',
    date: '2023-01-01',
    content: [
      '那是一个普通的周末，我和朋友约好一起聚会。当你走进房间的那一刻，我的目光就被你吸引了。你穿着一件白色的连衣裙，笑容像阳光一样灿烂。',
      '我们第一次说话是在游戏环节，你不小心把饮料洒在了我的衣服上，你紧张地道歉，我却觉得那是我最幸运的时刻。',
      '从那天开始，我就一直在想你，希望能再次见到你。'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=couple%20first%20meeting%20party&size=800x600'
  },
  {
    title: '第一次牵手',
    date: '2023-01-15',
    content: [
      '我们第一次约会，一起去看了电影。电影散场后，我们沿着街道散步，聊了很多关于彼此的事情。',
      '走到一个十字路口时，一辆车突然驶来，我本能地拉住了你的手。当我反应过来时，我们的手已经紧紧地握在一起。',
      '那是我第一次牵你的手，感觉就像触电一样，心跳得很快。从那一刻起，我就知道，我想一直牵着你的手，直到永远。'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=couple%20first%20hand%20holding&size=800x600'
  },
  {
    title: '情人节表白',
    date: '2023-02-14',
    content: [
      '情人节那天，我准备了很久。我买了一束玫瑰花，订了一家浪漫的餐厅，还准备了一个精心制作的视频，记录了我们认识以来的点点滴滴。',
      '当我拿出戒指，向你表白时，你感动得哭了。你说你也喜欢我，愿意和我在一起。',
      '那是我最幸福的一天，我终于和我喜欢的人在一起了。'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=valentine%27s%20day%20confession%20romantic&size=800x600'
  },
  {
    title: '第一次旅行',
    date: '2023-05-01',
    content: [
      '我们第一次一起旅行，去了海边。一路上，我们有说有笑，分享着彼此的故事。',
      '在海边，我们一起看日出，一起踩沙滩，一起吃海鲜。晚上，我们坐在沙滩上，听着海浪的声音，看着星星。',
      '那是我最难忘的一次旅行，因为有你在身边，一切都变得那么美好。'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=couple%20beach%20sunrise&size=800x600'
  },
  {
    title: '一周年纪念',
    date: '2024-01-01',
    content: [
      '时间过得真快，转眼间我们已经在一起一年了。这一年里，我们经历了许多美好的时光，也一起面对了一些困难。',
      '今天，我为你准备了这个网站，希望它能记录我们的美好回忆，也能成为我们未来的见证。',
      '我想对你说，我爱你，永远爱你。我希望我们能一直在一起，走过更多的春夏秋冬，创造更多的美好回忆。'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=1st%20anniversary%20couple%20celebration&size=800x600'
  }
])
</script>

<style lang="scss" scoped>

.stories {
  padding: $spacing-xxl 0;
  background-color: $bg-color-secondary;
}

.stories-list {
  max-width: 800px;
  margin: 0 auto;
}

.story-item {
  background-color: $bg-color-primary;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  margin-bottom: $spacing-xl;
  box-shadow: $shadow-base;
  transition: $transition-base;

  &:hover {
    box-shadow: $shadow-md;
    transform: translateY(-5px);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-md;
  }

  &__title {
    font-size: $font-size-xl;
    color: $text-color-primary;
    margin: 0;
  }

  &__date {
    font-size: $font-size-sm;
    color: $color-primary;
    font-weight: $font-weight-medium;
  }

  &__content {
    margin-bottom: $spacing-md;

    p {
      margin-bottom: $spacing-sm;
      line-height: 1.8;
      color: $text-color-regular;
    }
  }

  &__image {
    margin-top: $spacing-md;

    img {
      width: 100%;
      height: auto;
      border-radius: $border-radius-md;
      object-fit: cover;
    }
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .story-item {
    padding: $spacing-md;

    &__title {
      font-size: $font-size-lg;
    }
  }
}
</style>