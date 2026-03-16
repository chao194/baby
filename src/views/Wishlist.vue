<template>
  <div class="wishlist">
    <div class="container">
      <!-- <h2 class="section-title">心愿清单</h2> -->
      <p class="wishlist-description">未来想和宝宝一起做的事情</p>

      <div class="wishlist-container">
        <div
          v-for="(item, index) in wishlist"
          :key="index"
          class="wishlist-item"
          :class="{ 'wishlist-item--completed': item.completed }">
          <div class="wishlist-item__icon">
            <el-checkbox v-model="item.completed" @change="saveWishlist" />
          </div>
          <span class="wishlist-item__text">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 心愿清单组件
 * @功能：列出未来想一起做的事情，支持标记完成状态和添加新心愿
 * @依赖 Element Plus：ElCheckbox、ElInput、ElButton
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、Element Plus2.3.0+、sass@^1.60.0
 */
import { ref, onMounted } from 'vue'

// 心愿清单数据
const wishlist = ref([
  {
    text: '一起去爬山，挑战更高的山峰',
    completed: false
  },
  {
    text: '一起学做一道菜，享受烹饪的乐趣',
    completed: false
  },
  {
    text: '一起去旅行，探索不同的地方',
    completed: false
  },
  {
    text: '一起看一场演唱会，感受音乐的魅力',
    completed: false
  },
  {
    text: '一起养一只宠物，给它取一个可爱的名字',
    completed: false
  },
  {
    text: '一起去迪士尼乐园，体验童话世界的乐趣',
    completed: false
  },
  {
    text: '一起过每一个节日，创造属于我们的回忆',
    completed: false
  },
  {
    text: '一起看遍所有的四季，感受大自然的变化',
    completed: false
  },
  {
    text: '一起去露营，看星星听虫鸣',
    completed: false
  },
  {
    text: '一起规划未来，为我们的生活努力',
    completed: false
  }
])

const newWish = ref('')

// 从本地存储加载数据
onMounted(() => {
  const savedWishlist = localStorage.getItem('wishlist')
  if (savedWishlist) {
    wishlist.value = JSON.parse(savedWishlist)
  }
})

// 保存到本地存储
const saveWishlist = () => {
  localStorage.setItem('wishlist', JSON.stringify(wishlist.value))
}

// 添加新心愿
const addWish = () => {
  if (newWish.value.trim()) {
    wishlist.value.push({
      text: newWish.value.trim(),
      completed: false
    })
    newWish.value = ''
    saveWishlist()
  }
}
</script>

<style lang="scss" scoped>
.wishlist {
  height: 100%;
  min-height: calc(100vh - 64px - 54px);
  padding: $spacing-xxl 0;
  background-color: #fef8f8; // 浪漫淡粉色背景
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 192, 203, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(219, 112, 147, 0.1) 0%, transparent 20%);
}

.section-title {
  text-align: center;
  color: $color-primary;
  font-size: $font-size-xxl;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-md;
  text-shadow: 2px 2px 4px rgba(255, 107, 107, 0.1);
  letter-spacing: 2px;
  font-family: 'Courier New', monospace;
}

.wishlist-description {
  text-align: center;
  color: $text-color-regular;
  margin-bottom: $spacing-xl;
  font-size: $font-size-lg;
  font-style: italic;
  color: #d64161;
}

.wishlist-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 192, 203, 0.3);
}

.wishlist-item {
  display: flex;
  align-items: center;
  padding: $spacing-md;
  border-radius: $border-radius-base;
  margin-bottom: $spacing-sm;
  transition: all 0.3s ease;
  background-color: #fff9f9;
  border-left: 4px solid transparent;

  &:hover {
    background-color: #fef0f0;
    transform: translateX(5px);
    border-left-color: $color-primary;
  }

  &--completed {
    background-color: #f0f9ff;
    border-left-color: #4ecdc4;

    .wishlist-item__text {
      text-decoration: line-through;
      color: $text-color-light;
    }
  }

  &__icon {
    margin-right: $spacing-sm;

    :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
      background-color: $color-primary;
      border-color: $color-primary;
    }
  }

  &__text {
    font-size: $font-size-md;
    color: $text-color-primary;
    line-height: 1.5;
    flex: 1;
  }
}

.wishlist-add {
  display: flex;
  gap: $spacing-md;
  margin-top: $spacing-lg;
  padding-top: $spacing-lg;
  border-top: 1px dashed rgba(255, 107, 107, 0.3);

  &__input {
    flex: 1;

    :deep(.el-input__wrapper) {
      border-radius: $border-radius-lg;
      border: 1px solid rgba(255, 192, 203, 0.5);

      &:focus-within {
        box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
        border-color: $color-primary;
      }
    }
  }

  &__button {
    border-radius: $border-radius-lg;
    background-color: $color-primary;
    border: none;
    padding: 0 $spacing-lg;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff5252;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
    }
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .wishlist-container {
    padding: $spacing-md;
    margin: 0 $spacing-sm;
  }

  .wishlist-add {
    flex-direction: column;
  }

  .section-title {
    font-size: $font-size-xl;
  }

  .wishlist-description {
    font-size: $font-size-md;
  }
}
</style>
