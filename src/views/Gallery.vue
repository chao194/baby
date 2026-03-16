<template>
  <div class="gallery">
    <div class="container">
      <!-- <h2 class="section-title">照片集</h2> -->

      <!-- 分类标签 -->
      <!-- <div class="gallery-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="gallery-tabs__button"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id">
          {{ tab.name }}
        </button>
      </div> -->

      <!-- 照片网格 -->
      <div class="gallery-grid">
        <div
          v-for="(item, index) in currentImages"
          :key="index"
          class="gallery-item"
          @click="openLightbox(item)">
          <img :src="item.url" :alt="item.title" class="gallery-item__image" loading="lazy" />
          <div class="gallery-item__overlay">
            <span class="gallery-item__title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片灯箱 - 移到 container 外面以避免被导航栏遮挡 -->
    <div v-if="lightboxVisible" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <img :src="lightboxImage.url" :alt="lightboxImage.title" class="lightbox-image" />
        <div class="lightbox-title">{{ lightboxImage.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 照片集组件
 * @功能：分类展示照片，支持点击放大查看
 * @依赖 Element Plus：无需直接依赖
 * @样式：使用 SCSS 编写，引入全局变量
 * @适配版本 Vue3.2+、sass@^1.60.0
 */
import { ref, computed } from 'vue'
import Callery1 from '@/assets/images/gallery-1.jpg'
import Callery2 from '@/assets/images/gallery-2.jpg'
import Callery3 from '@/assets/images/gallery-3.jpg'
import Callery4 from '@/assets/images/gallery-4.jpg'
import Callery5 from '@/assets/images/gallery-5.jpg'
import Callery6 from '@/assets/images/gallery-6.jpg'
import Callery7 from '@/assets/images/gallery-7.jpg'
import Callery8 from '@/assets/images/gallery-8.jpg'
import Callery9 from '@/assets/images/gallery-9.jpg'
import Callery10 from '@/assets/images/gallery-10.jpg'
import Callery11 from '@/assets/images/gallery-11.jpg'
import Callery12 from '@/assets/images/gallery-12.jpg'
import Callery13 from '@/assets/images/gallery-13.jpg'
import Callery14 from '@/assets/images/gallery-14.jpg'
import Callery15 from '@/assets/images/gallery-15.jpg'
import Callery16 from '@/assets/images/gallery-16.jpg'
import Callery17 from '@/assets/images/gallery-17.jpg'
import Callery18 from '@/assets/images/gallery-18.jpg'
import Callery19 from '@/assets/images/gallery-19.jpg'
import Callery20 from '@/assets/images/gallery-20.jpg'
import Callery21 from '@/assets/images/gallery-21.jpg'
import Callery22 from '@/assets/images/gallery-22.jpg'
import Callery23 from '@/assets/images/gallery-23.jpg'
import Callery24 from '@/assets/images/gallery-24.jpg'
import Callery25 from '@/assets/images/gallery-25.jpg'
import Callery26 from '@/assets/images/gallery-26.jpg'
import Callery27 from '@/assets/images/gallery-27.jpg'
import Callery28 from '@/assets/images/gallery-28.jpg'
import Callery29 from '@/assets/images/gallery-29.jpg'
import Callery30 from '@/assets/images/gallery-30.jpg'
import Callery31 from '@/assets/images/gallery-31.jpg'
import Callery32 from '@/assets/images/gallery-32.jpg'
import Callery33 from '@/assets/images/gallery-33.jpg'
import Callery34 from '@/assets/images/gallery-34.jpg'
import Callery35 from '@/assets/images/gallery-35.jpg'
import Callery36 from '@/assets/images/gallery-36.jpg'
import Callery37 from '@/assets/images/gallery-37.jpg'
import Callery38 from '@/assets/images/gallery-38.jpg'
import Callery39 from '@/assets/images/gallery-39.jpg'
import Callery40 from '@/assets/images/gallery-40.jpg'
import Callery41 from '@/assets/images/gallery-41.jpg'
import Callery42 from '@/assets/images/gallery-42.jpg'
import Callery43 from '@/assets/images/gallery-43.jpg'
import Callery44 from '@/assets/images/gallery-44.jpg'
import Callery45 from '@/assets/images/gallery-45.jpg'
import Callery46 from '@/assets/images/gallery-46.jpg'
import Callery47 from '@/assets/images/gallery-47.jpg'
import Callery48 from '@/assets/images/gallery-48.jpg'
import Callery49 from '@/assets/images/gallery-49.jpg'
import Callery50 from '@/assets/images/gallery-50.jpg'
import Callery51 from '@/assets/images/gallery-51.jpg'
import Callery52 from '@/assets/images/gallery-52.jpg'
import Callery53 from '@/assets/images/gallery-53.jpg'
import Callery54 from '@/assets/images/gallery-54.jpg'
import Callery55 from '@/assets/images/gallery-55.jpg'
import Callery56 from '@/assets/images/gallery-56.jpg'
import Callery57 from '@/assets/images/gallery-57.jpg'
import Callery58 from '@/assets/images/gallery-58.jpg'
import Callery59 from '@/assets/images/gallery-59.jpg'
import Callery60 from '@/assets/images/gallery-60.jpg'
import Callery61 from '@/assets/images/gallery-61.jpg'
import Callery62 from '@/assets/images/gallery-62.jpg'
import Callery63 from '@/assets/images/gallery-63.jpg'
import Callery64 from '@/assets/images/gallery-64.jpg'
import Callery65 from '@/assets/images/gallery-65.jpg'
import Callery66 from '@/assets/images/gallery-66.jpg'
import Callery67 from '@/assets/images/gallery-67.jpg'
import Callery68 from '@/assets/images/gallery-68.jpg'
import Callery69 from '@/assets/images/gallery-69.jpg'
import Callery70 from '@/assets/images/gallery-70.jpg'
import Callery71 from '@/assets/images/gallery-71.jpg'
import Callery72 from '@/assets/images/gallery-72.jpg'
import Callery73 from '@/assets/images/gallery-73.jpg'
import Callery74 from '@/assets/images/gallery-74.jpg'
import Callery75 from '@/assets/images/gallery-75.jpg'
import Callery76 from '@/assets/images/gallery-76.jpg'
import Callery77 from '@/assets/images/gallery-77.jpg'
import Callery78 from '@/assets/images/gallery-78.jpg'
import Callery79 from '@/assets/images/gallery-79.jpg'
import Callery80 from '@/assets/images/gallery-80.jpg'
import Callery81 from '@/assets/images/gallery-81.jpg'
import Callery82 from '@/assets/images/gallery-82.jpg'
import Callery83 from '@/assets/images/gallery-83.jpg'
import Callery84 from '@/assets/images/gallery-84.jpg'
import Callery85 from '@/assets/images/gallery-85.jpg'
import Callery86 from '@/assets/images/gallery-86.jpg'
import Callery87 from '@/assets/images/gallery-87.jpg'
import Callery88 from '@/assets/images/gallery-88.jpg'
import Callery89 from '@/assets/images/gallery-89.jpg'
import Callery90 from '@/assets/images/gallery-90.jpg'
import Callery91 from '@/assets/images/gallery-91.jpg'
import Callery92 from '@/assets/images/gallery-92.jpg'
import Callery93 from '@/assets/images/gallery-93.jpg'
import Callery94 from '@/assets/images/gallery-94.jpg'
import Callery95 from '@/assets/images/gallery-95.jpg'
import Callery96 from '@/assets/images/gallery-96.jpg'
import Callery97 from '@/assets/images/gallery-97.jpg'
import Callery98 from '@/assets/images/gallery-98.jpg'
import Callery99 from '@/assets/images/gallery-99.jpg'
import Callery100 from '@/assets/images/gallery-100.jpg'
import Callery101 from '@/assets/images/gallery-101.jpg'
import Callery102 from '@/assets/images/gallery-102.jpg'
import Callery103 from '@/assets/images/gallery-103.jpg'
import Callery104 from '@/assets/images/gallery-104.jpg'
import Callery105 from '@/assets/images/gallery-105.jpg'
import Callery106 from '@/assets/images/gallery-106.jpg'
import Callery107 from '@/assets/images/gallery-107.jpg'
import Callery108 from '@/assets/images/gallery-108.jpg'
import Callery109 from '@/assets/images/gallery-109.jpg'
import Callery110 from '@/assets/images/gallery-110.jpg'
import Callery111 from '@/assets/images/gallery-111.jpg'
import Callery112 from '@/assets/images/gallery-112.jpg'
import Callery113 from '@/assets/images/gallery-113.jpg'
import Callery114 from '@/assets/images/gallery-114.jpg'
import Callery115 from '@/assets/images/gallery-115.jpg'
import Callery116 from '@/assets/images/gallery-116.jpg'
import Callery117 from '@/assets/images/gallery-117.jpg'
import Callery118 from '@/assets/images/gallery-118.jpg'
import Callery119 from '@/assets/images/gallery-119.jpg'
import Callery121 from '@/assets/images/gallery-121.jpg'
import Callery122 from '@/assets/images/gallery-122.jpg'
import Callery123 from '@/assets/images/gallery-123.jpg'
import Callery124 from '@/assets/images/gallery-124.jpg'
import Callery125 from '@/assets/images/gallery-125.jpg'
import Callery126 from '@/assets/images/gallery-126.jpg'
import Callery127 from '@/assets/images/gallery-127.jpg'
import Callery128 from '@/assets/images/gallery-128.jpg'
import Callery129 from '@/assets/images/gallery-129.jpg'
import Callery130 from '@/assets/images/gallery-130.jpg'
import Callery131 from '@/assets/images/gallery-131.jpg'
import Callery132 from '@/assets/images/gallery-132.jpg'
import Callery133 from '@/assets/images/gallery-133.jpg'
import Callery134 from '@/assets/images/gallery-134.jpg'
import Callery135 from '@/assets/images/gallery-135.jpg'
import Callery136 from '@/assets/images/gallery-136.jpg'
import Callery137 from '@/assets/images/gallery-137.jpg'
import Callery138 from '@/assets/images/gallery-138.jpg'
import Callery139 from '@/assets/images/gallery-139.jpg'
import Callery140 from '@/assets/images/gallery-140.jpg'
import Callery141 from '@/assets/images/gallery-141.jpg'
import Callery142 from '@/assets/images/gallery-142.jpg'
import Callery143 from '@/assets/images/gallery-143.jpg'
import Callery144 from '@/assets/images/gallery-144.jpg'
import Callery145 from '@/assets/images/gallery-145.jpg'
import Callery146 from '@/assets/images/gallery-146.jpg'
import Callery147 from '@/assets/images/gallery-147.jpg'
import Callery148 from '@/assets/images/gallery-148.jpg'
import Callery149 from '@/assets/images/gallery-149.jpg'
import Callery150 from '@/assets/images/gallery-150.jpg'
import Callery151 from '@/assets/images/gallery-151.jpg'

// 分类标签
// const tabs = [
//   { id: 'all', name: '全部' },
//   { id: 'dating', name: '约会日常' },
//   { id: 'travel', name: '旅行记忆' },
//   { id: 'funny', name: '搞怪瞬间' }
// ]

// 激活的标签
const activeTab = ref('all')

// 照片数据
const images = ref([
  {
    id: 1,
    url: Callery1,
    title: '看电影',
    category: 'dating'
  },
  {
    id: 2,
    url: Callery2,
    title: '猪猪与龟龟',
    category: 'dating'
  },
  {
    id: 3,
    url: Callery3,
    title: '蛙乐门',
    category: 'travel'
  },
  {
    id: 4,
    url: Callery4,
    title: '邻家巷子',
    category: 'travel'
  },
  {
    id: 5,
    url: Callery5,
    title: '黄记煌',
    category: 'funny'
  },
  {
    id: 6,
    url: Callery6,
    title: '贰官',
    category: 'funny'
  },
  {
    id: 7,
    url: Callery7,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 8,
    url: Callery8,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 9,
    url: Callery9,
    title: '石膏娃娃',
    category: 'funny'
  },
  {
    id: 10,
    url: Callery10,
    title: '宝宝和果果',
    category: 'funny'
  },
  {
    id: 11,
    url: Callery11,
    title: '海底捞',
    category: 'funny'
  },
  {
    id: 12,
    url: Callery12,
    title: '炊牛大烩',
    category: 'funny'
  },
  {
    id: 13,
    url: Callery13,
    title: '串珠',
    category: 'funny'
  },
  {
    id: 14,
    url: Callery14,
    title: '手印画',
    category: 'funny'
  },
  {
    id: 15,
    url: Callery15,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 16,
    url: Callery16,
    title: '食磨坊湖北菜',
    category: 'funny'
  },
  {
    id: 17,
    url: Callery17,
    title: '楚味·亮亮蒸虾',
    category: 'funny'
  },
  {
    id: 18,
    url: Callery18,
    title: '黑鸭煲',
    category: 'funny'
  },
  {
    id: 19,
    url: Callery19,
    title: '',
    category: 'funny'
  },
  {
    id: 20,
    url: Callery20,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 21,
    url: Callery21,
    title: '',
    category: 'funny'
  },
  {
    id: 22,
    url: Callery22,
    title: '',
    category: 'funny'
  },
  {
    id: 23,
    url: Callery23,
    title: '',
    category: 'funny'
  },
  {
    id: 24,
    url: Callery24,
    title: '德华楼',
    category: 'funny'
  },
  {
    id: 25,
    url: Callery25,
    title: '看电影',
    category: 'funny'
  },
  {
    id: 26,
    url: Callery26,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 27,
    url: Callery27,
    title: '打平伙',
    category: 'funny'
  },
  {
    id: 28,
    url: Callery28,
    title: '邻家巷子',
    category: 'funny'
  },
  {
    id: 29,
    url: Callery29,
    title: 'DQ',
    category: 'funny'
  },
  {
    id: 30,
    url: Callery30,
    title: '万寿宫',
    category: 'funny'
  },
  {
    id: 31,
    url: Callery31,
    title: '姜太公烤鱼',
    category: 'funny'
  },
  {
    id: 32,
    url: Callery32,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 33,
    url: Callery33,
    title: '南昌之星',
    category: 'funny'
  },
  {
    id: 34,
    url: Callery34,
    title: '私锅子烧菜馆',
    category: 'funny'
  },
  {
    id: 35,
    url: Callery35,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 36,
    url: Callery36,
    title: '蓝熙花园·西餐酒廊',
    category: 'funny'
  },
  {
    id: 37,
    url: Callery37,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 38,
    url: Callery38,
    title: '',
    category: 'funny'
  },
  {
    id: 39,
    url: Callery39,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 40,
    url: Callery40,
    title: '鲜芋仙',
    category: 'funny'
  },
  {
    id: 41,
    url: Callery41,
    title: '堂瓦里',
    category: 'funny'
  },
  {
    id: 42,
    url: Callery42,
    title: '绿茶餐厅',
    category: 'funny'
  },
  {
    id: 43,
    url: Callery43,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 44,
    url: Callery44,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 45,
    url: Callery45,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 46,
    url: Callery46,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 47,
    url: Callery47,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 48,
    url: Callery48,
    title: '平潭岛',
    category: 'funny'
  },
  {
    id: 49,
    url: Callery49,
    title: '',
    category: 'funny'
  },
  {
    id: 50,
    url: Callery50,
    title: '',
    category: 'funny'
  },
  {
    id: 51,
    url: Callery51,
    title: '',
    category: 'funny'
  },
  {
    id: 52,
    url: Callery52,
    title: '炭蛙',
    category: 'funny'
  },
  {
    id: 53,
    url: Callery53,
    title: '热辣宗师',
    category: 'funny'
  },
  {
    id: 54,
    url: Callery54,
    title: '看电影',
    category: 'funny'
  },
  {
    id: 55,
    url: Callery55,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 56,
    url: Callery56,
    title: '赵记传承',
    category: 'funny'
  },
  {
    id: 57,
    url: Callery57,
    title: '',
    category: 'funny'
  },
  {
    id: 58,
    url: Callery58,
    title: '季季红',
    category: 'funny'
  },
  {
    id: 59,
    url: Callery59,
    title: '',
    category: 'funny'
  },
  {
    id: 60,
    url: Callery60,
    title: '',
    category: 'funny'
  },
  {
    id: 61,
    url: Callery61,
    title: '',
    category: 'funny'
  },
  {
    id: 62,
    url: Callery62,
    title: '',
    category: 'funny'
  },
  {
    id: 63,
    url: Callery63,
    title: '辣小鲜',
    category: 'funny'
  },
  {
    id: 64,
    url: Callery64,
    title: '',
    category: 'funny'
  },
  {
    id: 65,
    url: Callery65,
    title: '',
    category: 'funny'
  },
  {
    id: 66,
    url: Callery66,
    title: '打平伙',
    category: 'funny'
  },
  {
    id: 67,
    url: Callery67,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 68,
    url: Callery68,
    title: '贰官',
    category: 'funny'
  },
  {
    id: 69,
    url: Callery69,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 70,
    url: Callery70,
    title: '',
    category: 'funny'
  },
  {
    id: 71,
    url: Callery71,
    title: 'KFC',
    category: 'funny'
  },
  {
    id: 72,
    url: Callery72,
    title: '',
    category: 'funny'
  },
  {
    id: 73,
    url: Callery73,
    title: '抓娃娃',
    category: 'funny'
  },
  {
    id: 74,
    url: Callery74,
    title: '',
    category: 'funny'
  },
  {
    id: 75,
    url: Callery75,
    title: '',
    category: 'funny'
  },
  {
    id: 76,
    url: Callery76,
    title: '',
    category: 'funny'
  },
  {
    id: 77,
    url: Callery77,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 78,
    url: Callery78,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 79,
    url: Callery79,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 80,
    url: Callery80,
    title: '黔林山公园',
    category: 'funny'
  },
  {
    id: 81,
    url: Callery81,
    title: '',
    category: 'funny'
  },
  {
    id: 82,
    url: Callery82,
    title: '',
    category: 'funny'
  },
  {
    id: 83,
    url: Callery83,
    title: '',
    category: 'funny'
  },
  {
    id: 84,
    url: Callery84,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 85,
    url: Callery85,
    title: '蛙先生',
    category: 'funny'
  },
  {
    id: 86,
    url: Callery86,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 87,
    url: Callery87,
    title: '',
    category: 'funny'
  },
  {
    id: 88,
    url: Callery88,
    title: '',
    category: 'funny'
  },
  {
    id: 89,
    url: Callery89,
    title: '',
    category: 'funny'
  },
  {
    id: 90,
    url: Callery90,
    title: '贰拾秋',
    category: 'funny'
  },
  {
    id: 91,
    url: Callery91,
    title: '',
    category: 'funny'
  },
  {
    id: 92,
    url: Callery92,
    title: '',
    category: 'funny'
  },
  {
    id: 93,
    url: Callery93,
    title: '打平伙',
    category: 'funny'
  },
  {
    id: 94,
    url: Callery94,
    title: '蛙乐门',
    category: 'funny'
  },
  {
    id: 95,
    url: Callery95,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 96,
    url: Callery96,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 97,
    url: Callery97,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 98,
    url: Callery98,
    title: '',
    category: 'funny'
  },
  {
    id: 99,
    url: Callery99,
    title: '贵锅锅地摊火锅',
    category: 'funny'
  },
  {
    id: 100,
    url: Callery100,
    title: '打平伙',
    category: 'funny'
  },
  {
    id: 101,
    url: Callery101,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 102,
    url: Callery102,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 103,
    url: Callery103,
    title: '牛博士自助烧烤',
    category: 'funny'
  },
  {
    id: 104,
    url: Callery104,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 105,
    url: Callery105,
    title: '蛙乐门',
    category: 'funny'
  },
  {
    id: 106,
    url: Callery106,
    title: '',
    category: 'funny'
  },
  {
    id: 107,
    url: Callery107,
    title: '',
    category: 'funny'
  },
  {
    id: 108,
    url: Callery108,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 109,
    url: Callery109,
    title: '领蟹祥记',
    category: 'funny'
  },
  {
    id: 110,
    url: Callery110,
    title: '',
    category: 'funny'
  },
  {
    id: 111,
    url: Callery111,
    title: '邻家小巷',
    category: 'funny'
  },
  {
    id: 112,
    url: Callery112,
    title: '',
    category: 'funny'
  },
  {
    id: 113,
    url: Callery113,
    title: '',
    category: 'funny'
  },
  {
    id: 114,
    url: Callery114,
    title: '',
    category: 'funny'
  },
  {
    id: 115,
    url: Callery115,
    title: '',
    category: 'funny'
  },
  {
    id: 116,
    url: Callery116,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 117,
    url: Callery117,
    title: '',
    category: 'funny'
  },
  {
    id: 118,
    url: Callery118,
    title: '罍街',
    category: 'funny'
  },
  {
    id: 119,
    url: Callery119,
    title: '古逍遥津',
    category: 'funny'
  },
  {
    id: 121,
    url: Callery121,
    title: '',
    category: 'funny'
  },
  {
    id: 122,
    url: Callery122,
    title: '',
    category: 'funny'
  },
  {
    id: 123,
    url: Callery123,
    title: '',
    category: 'funny'
  },
  {
    id: 124,
    url: Callery124,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 125,
    url: Callery125,
    title: '',
    category: 'funny'
  },
  {
    id: 126,
    url: Callery126,
    title: '',
    category: 'funny'
  },
  {
    id: 127,
    url: Callery127,
    title: '',
    category: 'funny'
  },
  {
    id: 128,
    url: Callery128,
    title: '',
    category: 'funny'
  },
  {
    id: 129,
    url: Callery129,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 130,
    url: Callery130,
    title: '宝宝做饭',
    category: 'funny'
  },
  {
    id: 131,
    url: Callery131,
    title: '打平伙',
    category: 'funny'
  },
  {
    id: 132,
    url: Callery132,
    title: '宝宝和妹妹',
    category: 'funny'
  },
  {
    id: 133,
    url: Callery133,
    title: '',
    category: 'funny'
  },
  {
    id: 134,
    url: Callery134,
    title: '80小馆',
    category: 'funny'
  },
  {
    id: 135,
    url: Callery135,
    title: '辣小鲜',
    category: 'funny'
  },
  {
    id: 136,
    url: Callery136,
    title: '',
    category: 'funny'
  },
  {
    id: 137,
    url: Callery137,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 138,
    url: Callery138,
    title: '有幸小食院',
    category: 'funny'
  },
  {
    id: 139,
    url: Callery139,
    title: '宝宝',
    category: 'funny'
  },
  {
    id: 140,
    url: Callery140,
    title: '',
    category: 'funny'
  },
  {
    id: 141,
    url: Callery141,
    title: '',
    category: 'funny'
  },
  {
    id: 142,
    url: Callery142,
    title: '',
    category: 'funny'
  },
  {
    id: 143,
    url: Callery143,
    title: '茉莉奶绿',
    category: 'funny'
  },
  {
    id: 144,
    url: Callery144,
    title: '领蟹祥记',
    category: 'funny'
  },
  {
    id: 145,
    url: Callery145,
    title: '领蟹祥记',
    category: 'funny'
  },
  {
    id: 146,
    url: Callery146,
    title: '80小馆',
    category: 'funny'
  },
  {
    id: 147,
    url: Callery147,
    title: '',
    category: 'funny'
  },
  {
    id: 148,
    url: Callery148,
    title: '豪德亨',
    category: 'funny'
  },
  {
    id: 149,
    url: Callery149,
    title: '柚子家甘草梅汁水果',
    category: 'funny'
  },
  {
    id: 150,
    url: Callery150,
    title: '黑鸭煲',
    category: 'funny'
  },
  {
    id: 151,
    url: Callery151,
    title: '季季红',
    category: 'funny'
  }
])

// 当前显示的照片
const currentImages = computed(() => {
  if (activeTab.value === 'all') {
    return images.value
  }
  return images.value.filter((item) => item.category === activeTab.value)
})

// 灯箱相关
const lightboxVisible = ref(false)
const lightboxImage = ref({ url: '', title: '' })

const openLightbox = (item) => {
  lightboxImage.value = item
  lightboxVisible.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxVisible.value = false
  document.body.style.overflow = ''
}
</script>

<style lang="scss" scoped>
.gallery {
  padding: 30px 0 40px 0;
  background-color: #f9f0f4; /* 浪漫粉色背景 */
  position: relative;
  overflow: hidden;

  /* 添加浪漫装饰元素 */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 182, 193, 0.1) 0%, transparent 70%);
    z-index: 0;
  }
}

.container {
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #c2185b;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #ff6b9d, #f8b500);
    border-radius: 2px;
  }

  /* 移动端响应式 */
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 30px;

    &::after {
      width: 80px;
      height: 2px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}

.gallery-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;

  &__button {
    padding: 8px 16px;
    border: 2px solid #ffb6c1;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #c2185b;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(255, 182, 193, 0.2);

    &:hover {
      border-color: #c2185b;
      color: #c2185b;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 182, 193, 0.3);
    }

    &.active {
      background-color: #c2185b;
      border-color: #c2185b;
      color: white;
      box-shadow: 0 4px 12px rgba(194, 24, 91, 0.4);
    }
  }
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(255, 182, 193, 0.3);
  }

  &__image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    transition: all 0.5s ease;

    .gallery-item:hover & {
      transform: scale(1.1);
    }
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(194, 24, 91, 0.8));
    padding: 24px;
    transition: all 0.3s ease;
    transform: translateY(20px);
    opacity: 0;

    .gallery-item:hover & {
      transform: translateY(0);
      opacity: 1;
      background: linear-gradient(transparent, rgba(194, 24, 91, 0.9));
    }
  }

  &__title {
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

/* 灯箱样式 */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(194, 24, 91, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: slideIn 0.4s ease;
}

.lightbox-close {
  position: absolute;
  top: -45px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #c2185b;
    transform: scale(1.1);
  }
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.lightbox-title {
  color: white;
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 20px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }

  .gallery-item__image {
    aspect-ratio: 1;
  }

  .gallery-item__title {
    font-size: 14px;
  }

  .lightbox-title {
    font-size: 16px;
  }
}
</style>
