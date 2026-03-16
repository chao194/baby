<template>
  <div class="messages">
    <div class="container">
      <h2 class="section-title">悄悄话</h2>
      
      <!-- 情书墙 -->
      <div class="messages-cards">
        <!-- 感谢的话 -->
        <el-card class="messages-card">
          <template #header>
            <div class="messages-card__header">
              <h3>感谢的话</h3>
            </div>
          </template>
          <div class="messages-card__content">
            <p>亲爱的，谢谢你在这一年里的陪伴和包容。</p>
            <p>谢谢你在我低落时给我鼓励，在我开心时与我分享。</p>
            <p>谢谢你为我做的每一件小事，让我感受到了被爱的幸福。</p>
            <p>谢谢你选择了我，让我成为你生命中的一部分。</p>
          </div>
        </el-card>

        <!-- 未来的期许 -->
        <el-card class="messages-card">
          <template #header>
            <div class="messages-card__header">
              <h3>未来的期许</h3>
            </div>
          </template>
          <div class="messages-card__content">
            <p>我希望我们能一直这样幸福下去，一起走过更多的春夏秋冬。</p>
            <p>我希望我们能一起面对生活中的困难，互相支持，共同成长。</p>
            <p>我希望我们能有一个属于自己的家，充满欢声笑语。</p>
            <p>我希望我们能一起变老，直到白发苍苍，依然手牵手。</p>
          </div>
        </el-card>

        <!-- 想一起完成的清单 -->
        <el-card class="messages-card">
          <template #header>
            <div class="messages-card__header">
              <h3>想一起完成的清单</h3>
            </div>
          </template>
          <div class="messages-card__content">
            <ul class="wish-list">
              <li>一起去看海，在海边看日出日落</li>
              <li>一起去爬山，挑战更高的山峰</li>
              <li>一起学做一道菜，享受烹饪的乐趣</li>
              <li>一起去旅行，探索不同的地方</li>
              <li>一起看一场演唱会，感受音乐的魅力</li>
              <li>一起养一只宠物，给它取一个可爱的名字</li>
              <li>一起过每一个节日，创造属于我们的回忆</li>
              <li>一起看遍所有的四季，感受大自然的变化</li>
            </ul>
          </div>
        </el-card>
      </div>

      <!-- 她的留言区 -->
      <div class="messages-message-board">
        <h3 class="messages-message-board__title">她的留言区</h3>
        <el-card class="messages-message-board__card">
          <div class="messages-message-board__input">
            <el-input
              v-model="messageContent"
              type="textarea"
              :rows="4"
              placeholder="写下你想对我说的话..."
            />
            <el-button type="primary" @click="addMessage" class="mt-4">发送留言</el-button>
          </div>
          <div class="messages-message-board__list">
            <div 
              v-for="(message, index) in messages" 
              :key="index"
              class="messages-message-board__item"
            >
              <div class="messages-message-board__item-content">{{ message.content }}</div>
              <div class="messages-message-board__item-time">{{ message.time }}</div>
            </div>
            <div v-if="messages.length === 0" class="messages-message-board__empty">
              还没有留言，快来写下第一条吧！
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 悄悄话/情书墙组件
 * @功能：展示感谢的话、未来的期许、想一起完成的清单，以及留言功能
 * @依赖 Element Plus：ElCard、ElInput、ElButton
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、Element Plus2.3.0+、sass@^1.60.0
 */
import { ref } from 'vue'

// 留言数据
const messageContent = ref('')
const messages = ref([])

// 添加留言
const addMessage = () => {
  if (messageContent.value.trim()) {
    const newMessage = {
      content: messageContent.value.trim(),
      time: new Date().toLocaleString()
    }
    messages.value.push(newMessage)
    messageContent.value = ''
  }
}
</script>

<style lang="scss" scoped>
.messages {
  padding: $spacing-xxl 0;
  background-color: $bg-color-secondary;
}

.messages-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
}

.messages-card {
  transition: $transition-base;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-md;
  }

  &__header {
    h3 {
      margin: 0;
      font-size: $font-size-lg;
      color: $text-color-primary;
    }
  }

  &__content {
    p {
      margin-bottom: $spacing-sm;
      line-height: 1.6;
      color: $text-color-regular;
    }

    .wish-list {
      list-style: none;

      li {
        position: relative;
        padding-left: $spacing-md;
        margin-bottom: $spacing-sm;
        line-height: 1.6;
        color: $text-color-regular;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: $color-primary;
          font-weight: $font-weight-bold;
        }
      }
    }
  }
}

.messages-message-board {
  &__title {
    font-size: $font-size-xl;
    color: $text-color-primary;
    margin-bottom: $spacing-lg;
    text-align: center;
  }

  &__card {
    max-width: 800px;
    margin: 0 auto;
  }

  &__input {
    margin-bottom: $spacing-lg;
  }

  &__list {
    border-top: 1px solid $border-color-base;
    padding-top: $spacing-lg;
  }

  &__item {
    background-color: $bg-color-secondary;
    border-radius: $border-radius-base;
    padding: $spacing-md;
    margin-bottom: $spacing-md;

    &-content {
      margin-bottom: $spacing-xs;
      line-height: 1.6;
      color: $text-color-primary;
    }

    &-time {
      font-size: $font-size-xs;
      color: $text-color-light;
      text-align: right;
    }
  }

  &__empty {
    text-align: center;
    color: $text-color-light;
    padding: $spacing-xl 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .messages-cards {
    grid-template-columns: 1fr;
  }
}
</style>