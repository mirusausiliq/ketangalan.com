import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteSitemap from 'vite-plugin-sitemap';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// 1. 讀取你的辭典資料
const dictData = JSON.parse(
  readFileSync(resolve(__dirname, 'src/data/li2014dict.json'), 'utf-8')
);

// 2. 生成單字詳情頁的路徑清單
const wordRoutes = dictData.map((entry: any) => `/dictionary/${entry.id}`);

// 3. 定義靜態頁面
const staticRoutes = [
  '/',
  '/about',
  '/news',
  '/resources',
  '/dictionary',
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteSitemap({
    hostname: 'https://ketangalan.com',
      dynamicRoutes: [
        ...staticRoutes,
        ...wordRoutes, // 將生成的數百個單字路徑塞進去
      ],
      // 可選：設定檔案名稱與擴充功能
      readable: true, // 讓產出的 XML 格式整齊好讀
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/dictionary': 0.9,
        '/dictionary/**': 0.7, // 所有的單字權重稍微低一點
      },
  })],
  base: "/"
})
