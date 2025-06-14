# SoftKern's Personal Website

这是一个使用 Astro 构建的现代化个人网站，集成了博客系统、项目展示等功能。

## 🚀 功能特性

- 📝 博客系统：支持 Markdown/MDX 写作
- 🎨 现代化设计：简约风格，支持深色模式
- 📱 响应式布局：完美适配各种设备
- 🔍 文章搜索：快速找到感兴趣的内容
- 📚 文章目录：方便长文阅读
- 💻 代码高亮：展示技术文章中的代码
- 💬 评论系统：与读者互动
- 📊 阅读进度：提升阅读体验
- 🔎 SEO 优化：提高网站可见度

## 🛠️ 技术栈

- [Astro](https://astro.build) - 现代化的静态站点生成器
- [UnoCSS](https://unocss.dev) - 原子化 CSS 引擎
- [MDX](https://mdxjs.com) - Markdown 增强版
- [Biome](https://biomejs.dev) - 代码格式化和检查工具

## 🏗️ 项目结构

```text
/
├── public/          # 静态资源文件
├── src/
│   ├── components/  # 可复用组件
│   ├── layouts/     # 页面布局组件
│   ├── pages/       # 页面文件
│   ├── styles/      # 全局样式
│   ├── utils/       # 工具函数
│   └── content/     # 博客文章内容
├── astro.config.mjs # Astro 配置
└── package.json     # 项目依赖
```

## 🚀 开发指南

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm lint` | 运行代码检查 |
| `pnpm format` | 格式化代码 |

### 开发规范

1. **代码风格**
   - 使用 Biome 进行代码格式化和检查
   - 遵循 TypeScript 严格模式
   - 组件使用 PascalCase 命名
   - 工具函数使用 camelCase 命名

2. **Git 提交规范**
   - feat: 新功能
   - fix: 修复问题
   - docs: 文档更新
   - style: 代码格式调整
   - refactor: 代码重构
   - test: 测试相关
   - chore: 构建过程或辅助工具的变动

3. **组件开发规范**
   - 组件文件使用 `.astro` 或 `.tsx` 扩展名
   - 每个组件都需要添加适当的注释
   - 组件 props 需要类型定义
   - 复杂组件需要添加使用示例

## 📝 博客写作指南

1. 文章放在 `src/content/blog` 目录下
2. 使用 Markdown 或 MDX 格式编写
3. 文章需要包含 frontmatter 信息：
   ```markdown
   ---
   title: 文章标题
   description: 文章描述
   pubDate: 发布日期
   tags: [标签1, 标签2]
   ---
   ```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
