# 史前巨兽 · 虚拟博物馆（静态站点模板）

## 快速部署到 GitHub Pages（几分钟）
1. 创建 GitHub 仓库
   - 登录 GitHub，点击右上角 **New repository**
   - 填写仓库名，例如 `dino-virtual-museum`
   - 选择 Public（或 Private + GitHub Pages 付费），然后 Create repository

2. 将本地代码推送到仓库
   - 在本地文件夹 (dino-virtual-museum) 中打开终端
   - 初始化 git 并推送：
     ```bash
     git init
     git add .
     git commit -m "Initial commit - virtual museum template"
     git branch -M main
     git remote add origin https://github.com/<你的用户名>/dino-virtual-museum.git
     git push -u origin main
     ```

3. 启用 GitHub Pages
   - 进入仓库页面 → Settings → Pages（或左侧菜单 Pages）
   - Source 选择 `Deploy from a branch` -> Branch: `main` -> / (root) -> Save
   - GitHub 会给你一个发布地址，形如 `https://<你的用户名>.github.io/dino-virtual-museum/`
   - 等待几分钟（通常 30-60 秒）即可访问上线页面

## 可选：用 Netlify / Vercel 一键部署（自动 CI/CD）
- Netlify：直接连接你的 GitHub 仓库 → Auto deploy（更灵活，支持自定义域名）
- Vercel：类似 → 支持自定义构建流程与预览

## 替换图片与模型
- 图片：把 `img src` 的链接替换为你已拿到授权的高分图 URL（建议放到 CDN 或 GitHub repository 的 `assets/` 文件夹并引用 raw URL）
- 3D 模型：将 glTF/glb 上传到 CDN 或 GitHub release（或使用公共 CDN），把 `model-viewer` 的 `src` 替换为真实链接

## 建议工作流
1. 本地修改并测试（双击 index.html 或用 Live Server）
2. 修好后 push 到 GitHub，自动发布
3. 若需多语言或 CMS，考虑添加：Netlify CMS / Forestry / Strapi 接入
