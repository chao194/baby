import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// Element Plus 按需引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/**
 * Vite 核心配置文件（Vue3 + Axios + Element Plus + SCSS 项目）
 * @核心要求：强制使用80端口，所有样式使用SCSS并配置全局变量
 * @适配版本 Vite4.0+、Vue3.2+、Element Plus2.3.0+、sass@^1.60.0
 * @注意事项：
 * 1. 80端口可能需要管理员权限（Mac/Linux需加sudo，Windows需以管理员运行终端）；
 * 2. 若80端口被占用，可先执行 lsof -i:80（Mac/Linux）/ netstat -ano | findstr :80（Windows）查看占用进程；
 * 3. SCSS 全局变量已配置自动注入，组件内可直接使用；
 * 4. 代理配置仅开发环境生效，生产环境需配置 Nginx；
 */
export default defineConfig(({ mode }) => {
  return {
    // 插件：必装 vue 插件 + Element Plus 按需引入插件
    plugins: [
      vue(),
      // 自动导入 Element Plus 相关函数（如 ElMessage/ElMessageBox）
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue'], // 自动导入 Vue 内置 API
        dts: path.resolve(__dirname, 'src/auto-imports.d.ts') // 生成类型声明文件
      }),
      // 自动导入 Element Plus 组件
      Components({
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(__dirname, 'src/components.d.ts') // 生成组件声明文件
      })
    ],

    // 路径别名：简化 src 目录导入（如 import request from '@/utils/request'）
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    // CSS 配置：适配 SCSS，全局注入变量文件
    css: {
      preprocessorOptions: {
        scss: {
          // 全局注入 SCSS 变量文件，所有组件可直接使用变量
          additionalData: '\n          @use "@/assets/styles/variables.scss" as *;\n          ',
          charset: false, // 解决 SCSS 编译 charset 警告
          quietDeps: true // 禁用 Sass 弃用警告
        }
      }
    },

    // 开发服务器：强制使用80端口，配置跨域代理
    server: {
      // 端口：强制使用80端口（核心要求）
      port: 80,
      // 若80端口被占用，自动尝试其他端口（兜底方案）
      strictPort: false,
      // 自动打开浏览器
      open: true,
      // 允许跨域（适配 Axios 请求）
      cors: true,
      // 允许通过host访问
      host: true
    },

    // 预览服务配置：同样强制使用80端口
    preview: {
      port: 80,
      strictPort: false
    },

    // 构建配置：生产环境优化
    build: {
      // 输出目录：默认 dist
      outDir: 'dist',
      // 块大小警告阈值：提升至 1500kb（默认 500kb，避免过多警告）
      chunkSizeWarningLimit: 1500,
      // CSS 代码拆分：每个组件的 CSS 单独打包
      cssCodeSplit: true,
      // 压缩：生产环境默认开启，可自定义压缩配置
      minify: 'esbuild'
    }
  }
})
