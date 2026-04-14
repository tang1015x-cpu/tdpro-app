# 待办清单 Pro - Android APP

## 快速构建（推荐：GitHub Actions 在线构建）

### 方法一：GitHub Actions（5分钟，无需配置环境）

1. 在 GitHub 创建新仓库（private 或 public 都可）
2. 将此文件夹的内容全部上传（或 git push）
3. 进入仓库 → Actions → "Build Android APK" → Run workflow
4. 等待约 5-8 分钟，从 Artifacts 下载 APK

### 方法二：本地构建

**前提条件**
- Node.js 18+
- JDK 17（非 JDK 8！）
- Android Studio 或 Android SDK（API 22+）

```bash
# 安装依赖
npm install

# 添加 Android 平台
npx cap add android

# 同步文件
npx cap sync android

# 复制图标
node copy-icons.js

# 构建 Debug APK
cd android && ./gradlew assembleDebug
# APK 位置：android/app/build/outputs/apk/debug/app-debug.apk
```

## 项目结构

```
tdpro-app/
├── www/                    # Web 资源
│   ├── index.html          # 主应用（已适配 Capacitor）
│   ├── manifest.json       # Web App Manifest
│   └── icons/              # Web 图标
├── res/
│   └── icons/              # 各尺寸 APP 图标和启动画面
├── .github/
│   └── workflows/
│       └── build-apk.yml   # GitHub Actions 构建脚本
├── capacitor.config.json   # Capacitor 配置
├── package.json
└── README.md
```

## APP 特性

### 已适配的移动端功能
- ✅ 沉浸式状态栏（颜色随主题切换）
- ✅ 安全区适配（刘海屏、底部手势导航）
- ✅ 键盘弹出不错位（adjustResize）
- ✅ 下滑关闭番茄钟弹窗（保留）
- ✅ Android 返回键关闭面板
- ✅ 数据自动持久化（WebView localStorage）
- ✅ 深色/浅色主题切换同步状态栏颜色

### 核心功能（全部保留）
- 📋 待办清单（增删改、优先级、截止日期、子任务、标签、拖拽排序）
- 🍅 番茄钟（计时器、下滑关闭手势）
- 📅 日历视图
- 📌 看板（Kanban）
- 📝 笔记
- 🗺 思维导图
- 🔁 周期任务（每日/每周/每月）
- 🌙/☀️ 深色/浅色主题
- ⚙️ 模块显示/隐藏设置

## iOS 版本

iOS 需要 Mac + Xcode。在 Mac 上执行：
```bash
npm install
npx cap add ios
npx cap sync ios
npx cap open ios
# 在 Xcode 中 Build & Run
```

## 注意事项

- APK 为 Debug 版本，安装时需开启"允许未知来源"
- 如需 Release 签名版本，需配置 keystore（见 Gradle 文档）
