<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="app-nav">
      <div class="container">
        <h1 class="app-nav__title">愉愉&超超 一周年纪念</h1>
        <ul class="app-nav__menu">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/timeline">时光轴</router-link></li>
          <li><router-link to="/gallery">照片集</router-link></li>
          <li><router-link to="/wishlist">心愿清单</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- 主内容 -->
    <main class="app-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="app-footer">
      <div class="container">
        <p>© 2026 一周年纪念 | 爱你的人</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
/**
 * App 根组件
 * @依赖 Vue Router：实现页面路由导航
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、Vue Router4.2.4+
 */
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-nav {
  background: linear-gradient(135deg, #f9f0f4, #ffd1dc);
  box-shadow: 0 4px 15px rgba(255, 182, 193, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 10px 0;

  /* 浪漫装饰元素 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b9d, #f85c64);
  }

  &__title {
    font-size: 1.8rem;
    color: #c2185b;
    margin: 0;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(255, 182, 193, 0.4);
    font-family: 'Georgia', serif;
    letter-spacing: 2px;
    position: relative;

    &::after {
      content: '✨';
      margin-left: 10px;
      font-size: 1.2rem;
    }
  }

  &__menu {
    display: flex;
    list-style: none;
    gap: 24px;

    a {
      color: #880e4f;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      padding: 8px 12px;
      border-radius: 20px;

      // &::before {
      //   content: '';
      //   position: absolute;
      //   bottom: 0;
      //   left: 50%;
      //   transform: translateX(-50%);
      //   width: 0;
      //   height: 2px;
      //   background: linear-gradient(90deg, #ff6b9d, #f8b500);
      //   transition: width 0.3s ease;
      // }

      &:hover,
      &.router-link-active {
        color: #c2185b;
        background-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 2px 8px rgba(255, 182, 193, 0.3);

        &::before {
          width: 80%;
        }
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }

  // 移动端响应式设计
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      align-items: center !important;
    }

    &__title {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    &__menu {
      width: 100%;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
  }
}

.app-content {
  flex: 1;
}

.app-footer {
  background-color: $bg-color-primary;
  border-top: 1px solid $border-color-base;
  padding: $spacing-md 0;
  // margin-top: $spacing-xl;

  p {
    text-align: center;
    color: $text-color-light;
    font-size: $font-size-sm;
  }
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app-nav .container {
    flex-direction: column;
    gap: $spacing-sm;
    align-items: flex-start;
  }

  .app-nav__menu {
    flex-wrap: wrap;
    gap: $spacing-md;
  }
}
</style>
