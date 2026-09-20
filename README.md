# 企业多智能体架构落地实施与技术白皮书

> 一套「可读、可导出、可下发」的企业级多智能体架构方案文献系统。
> 同一套内容引擎，输出 **5 种读者视角的文档变体** × **6 种排版设计风格**，并支持高保真 A4 PDF / Markdown / 离线单文件 HTML 三路导出。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6.svg)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646cff.svg)](https://vite.dev)

| 项目 | 说明 |
|---|---|
| 应用类型 | Google AI Studio 单页 Web 应用（纯前端，无后端服务） |
| 本地运行 | `npm install && npm run dev` → http://localhost:3000 |
| 目录 | `src/` 14 个源文件 · 约 **6,876 行** TS/TSX/CSS |
| 文档版本 | V2.6.4（文档编号 `MAS-KY-2026-FINAL`） |
| 页面密级 | 内部商业机密（页面自带密级标识，导出档同步携带） |

---

## 1. 这个项目解决什么问题

一份企业级技术方案在白皮书形态下，通常会死在这一步：**同一份内容要发给四拨完全不同的读者，而他们的阅读诉求互相冲突。**

| 读者 | 想看的 | 不想看的 |
|---|---|---|
| 董事长 / 总裁办公会 | 战略、路线图、ROI | Python 代码、字段级问卷 |
| 业务部门负责人 | 要填什么、怎么填、范例 | 框架横评、审计机制 |
| 研发 / 架构 / 安全 | 双门模型、数据契约、熔断机制 | 战略叙事 |
| 行业评审 / 监察合规 | 213 项标准怎么代码化、三级审计闭环 | 预算测算 |

传统做法是维护 4 份 Word，然后它们互相发散、再也对不齐。

本项目的做法是：**内容只写一遍，读者视角由「变体」表达，视觉呈现由「设计风格」表达，两者正交。** 变体控制**显示哪些章节**，风格控制**怎么排版**——组合出 30 种输出形态，而底层内容零重复。

### 1.1 一句话方法论（本项目正文的核心论点）

> **AI 提供可能性，代码提供确定性。**

方案的所有安全设计都从这句话推导：模型只做「自然语言 → 结构化」的翻译，不做计算；执行护栏必须落在本地死代码里，而不是指望云端内容护栏。

---

## 2. 功能总览

| 模块 | 能力 |
|---|---|
| **阅读引擎** | 4 种视图模式、滚动联动目录、全文关键词检索、返回顶部、移动端抽屉导航 |
| **内容变体** | 5 种读者视角（全集 / 高管 / 问卷 / 技术 / 标杆），切换即重新裁剪章节与封面 |
| **设计风格** | 6 套排版体系，含单栏 / 双栏 / 研报网格三种版式骨架，顶栏可实时热切换 |
| **交互沙盘** | 内嵌「薪资考勤精算」多智能体链路仿真器，4 组预置用例，三阶段逐步回放 |
| **SVG 图版** | 5 张手绘级矢量图解（双门模型 / 精算流水线 / 康源智脑架构 / 三级审计 / 问卷 SOP） |
| **导出** | A4 打印、离线单文件 HTML（内含可运行 JS 沙盘）、Markdown 全量导出 |
| **打印适配** | `@media print` 分页、页眉页脚、打印助手弹窗（含浏览器设置指引） |

---

## 3. 内容体系：6 大模块 / 14 节

正文由 `src/components/DocumentBody.tsx` 承载，按 `section-1` ~ `section-6` 六个锚点分节；目录结构定义在 `TOC_SECTIONS`（`src/components/TableOfContents.tsx`）。

| 锚点 | 编号 | 章节标题 | 子节 |
|---|---|---|---|
| `section-1` | 01 | 序言与核心安全哲学：AI 本质与不可逆执行风险 | 1.1 模型失控与沙盒逃逸的法理剖析 · 1.2「左移确定性」铁律 · 1.3 云端内容护栏 vs 本地执行护栏（双门模型） · 1.4 架构师角色演进 |
| `section-2` | 02 | 实战场景：多智能体薪资考勤自动化精算体系 | 2.1 钉钉非结构化考勤文本与数据口径映射 · 2.2 三大核心智能体岗位定义 · 2.3 刚性算法公式池与四则运算隔离原则 · 2.4 零幻觉生产级 Python 隔离执行脚本 |
| `section-3` | 03 | 主流智能体框架深度横评与混合架构选型 | 3.1 CrewAI vs LangGraph vs Dify vs Hermes · 3.2 多维雷达评价矩阵 · 3.3 黄金三角混合部署架构 |
| `section-4` | 04 | 企业标杆实战：陕西康源集团「康源智脑」落地策划 | 4.1 集团业务版图与 213 项标准化体系 · 4.2 三层端云协同技术架构 · 4.3 四大子智能体角色分工 · 4.4 四阶段落地路线图与量化 ROI |
| `section-5` | 05 | 独立监察与持续可观测审计体系（3-Tier Audit） | 5.1 层级 1 数字孪生沙盘推演 · 5.2 层级 2「三明治」实时交叉验证 · 5.3 层级 3 周期性复盘闭环 · 5.4 异常分级应急响应矩阵（L1/L2/L3 熔断） |
| `section-6` | 06 | 企业多智能体部署 · 10 维度信息采集标准问卷 | 6.1 使用说明与 SOP 流转图 · 6.2 十部分问卷 + 真实填报示范 · 6.3 附录 A 数据精度原则 / 附录 B 多部门签署单 |

---

## 4. 五种文档变体

配置集中在 `src/data/variantsData.ts` 的 `DOCUMENT_VARIANTS`。变体通过 `sections: string[]` 白名单决定哪些章节参与渲染——`DocumentBody` 的 `isSectionVisible()` 逐个判断。

| ID | 名称 | 目标读者 | 收录章节 | 预估篇幅 |
|---|---|---|---|---|
| `full` | 全景综合完整版 | 集团高管、技术总监、数字化办公室、外部评审 | 1-2-3-4-5-6 | 约 16-20 页 A4 |
| `executive` | 管理决策战略版 | 董事长、总经理办公会、投资人 | 1-3-4 | 约 6-8 页 A4 |
| `questionnaire` | 业务调研 SOP 问卷版 | 人力、财务、各院区负责人、IT 信息中心 | 6（含附录） | 约 5-6 页 A4 |
| `technical` | 技术工程与安全版 | 研发、架构、安全团队 | 1-2-3-4-5 | 约 10-12 页 A4 |
| `audit_case` | 康源智脑实战与持续审计版 | 行业评审、监察合规 | 1-4-5 | 约 8-10 页 A4 |

每个变体除了章节白名单，还携带自己的 `coverTitle` / `coverSubtitle` / `badge` / `accentColor` / `recommendedFileName`——所以切换变体时封面与建议导出文件名会一起变，不会出现「高管版封面写着全集标题」这种事故。

---

## 5. 六套设计风格

配置在 `src/data/variantsData.ts` 的 `DESIGN_VARIATIONS`，版式骨架由 `App.tsx` 的 `getContainerClasses()` 与 `isTwoColumnLayout` 分流。

| ID | 名称 | 定位 | 版式 |
|---|---|---|---|
| `variation-7` | 建筑典雅出版风 | 暖纸底 `#F8F7F4` / 赭石重音 `#CC5500` / Cormorant Garamond 衬线 | 双栏 + 侧栏导航 |
| `variation-1` | 暖白出版研报风 | 暖蛋壳 `#FDFBFA` / 炭焙黑 `#2D2824` / 2:1 研报网格 | 居中单栏 |
| `variation-2` | 瑞士结构网格风 | 纯白 + 包豪斯国际主义网格线 + 等宽编号 | 居中单栏（深色描边框） |
| `variation-3` | 现代白底双栏工作台 | 左灰树状目录 + 右白卡片阅读流 | 双栏 + 侧栏导航 |
| `variation-4` | 咨询战略简报风 | 雅致米白 `#FAFAFA` + 深海蓝微标线，结论与 ROI 置顶 | 居中单栏（圆角卡片） |
| `variation-5` | 现代科技简约风 | 半白半深双拼封面 + 指标 Hero 看板 | 双栏 + 侧栏导航 |

> **实现要点**：风格切换是**纯 class 组合**，不复制内容、不重挂组件。`variation-7 / 5 / 3` 走双栏分支并渲染 `EditorialHero` 指标看板；`variation-1 / 2 / 4` 走居中单栏分支。新增风格只需在 `DESIGN_VARIATIONS` 加一项 + 在 `getContainerClasses()` 加一个 case。

---

## 6. 四种阅读视图

`Header` 上的视图切换对应 `DocumentViewMode` 类型：

| 视图 | 用途 | 打印表现 |
|---|---|---|
| `paged` | **A4 装订分页排版预览**——按 A4 比例切页，所见即所得 | 按 A4 分页输出 |
| `continuous` | 连续长流阅读，适合屏幕通读 | 连续输出 |
| `interactive` | **动态交互仿真沙盘**——正文上方插入 `InteractivePlayground` | 沙盘不参与打印 |
| `presentation` | 逐页演示模式 | — |

### 6.1 交互仿真沙盘（`InteractivePlayground.tsx`）

把「模型只翻译、代码算钱」这条铁律做成可亲手跑的仿真器：

- **4 组预置用例**：张三（事假 1 天 + 正常出勤）/ 李四（迟到 25 分钟 + 满勤）/ 王五（旷工 1 天 + 迟到，严重异常）/ 赵六（全勤模范生），各带底薪、原始考勤文本、上月薪资
- **三阶段逐级回放**：Agent 1 抽取 JSON → Agent 2 本地算子精算 → Agent 3 独立审计裁决
- 结果**确定性计算**，不走网络、不调模型——沙盘本身就是方法论的示范

---

## 7. 导出链路

三个导出器都在 `src/utils/`，全部纯前端、无服务端依赖：

| 导出器 | 函数 | 产物 | 特点 |
|---|---|---|---|
| `htmlExporter.ts` | `generatePrintableHtml(variantId)` | 离线单文件 HTML | 自包含：内联样式 + 内联全部数据 + **可运行的原生 JS 沙盘**，双击即用 |
| `htmlExporter.ts` | `generateWysiwygHtml(variantId)` | 所见即所得 HTML | 按当前风格还原版式 |
| `htmlExporter.ts` | `openPrintableTab(variantId, download)` | 新窗口 / 下载 | 沙箱 iframe 中 `window.print()` 常被浏览器拦截，此函数提供替代通道 |
| `markdownExporter.ts` | `generateVariantMarkdown(variantId)` | `.md` 全文 | 按变体裁剪，带版本号 / 受众 / 密级题注 |
| `markdownExporter.ts` | `downloadFile(content, filename, mimeType)` | 通用下载 | Blob + `URL.createObjectURL` |

### 7.1 打印 / PDF 的工程细节

```text
用户点击「打印 / 导出为 PDF」
        │
        ├─ 检测是否在 iframe 内（window.self !== window.top）
        │     ├─ 在内 → 直接走 openPrintableTab()，绕开浏览器对沙箱打印的拦截
        │     └─ 不在 → 尝试 window.print()，异常则回落 openPrintableTab()
        │
        └─ PrintHelperModal 提供 5 种变体的导出入口 + 浏览器打印设置指引
```

想拿到**最干净的 A4 PDF**，推荐路径是：`导出离线单文件 HTML` → 浏览器打开 → `Ctrl+P` → 边距「默认」、勾选「背景图形」。离线文件里已经写好了 `@media print` 分页规则（`pdf-page-break`）与页眉页脚。

---

## 8. 技术架构

```text
src/
├── main.tsx                    入口
├── App.tsx                     顶层状态机：viewMode / variant / design / search
├── index.css                   Tailwind 4 主题 + @media print 规则
├── types.ts                    全部领域类型
│
├── components/
│   ├── Header.tsx              顶栏：视图切换 · 变体选择 · 风格选择 · 搜索 · 打印
│   ├── SidebarNav.tsx          双栏版式下的左侧章节导航（移动端抽屉）
│   ├── EditorialHero.tsx       指标 Hero 看板（v7 / v5 版式专用）
│   ├── CoverPage.tsx           封面页：随变体切换标题 / 副标题 / 徽标
│   ├── TableOfContents.tsx     TOC_SECTIONS 定义 + 目录组件
│   ├── DocumentBody.tsx        正文六章（约 52 KB，全项目最大的单文件）
│   ├── Diagrams.tsx            5 张 SVG 图解
│   ├── InteractivePlayground.tsx  交互仿真沙盘
│   └── PrintHelperModal.tsx    打印 / 导出助手弹窗
│
├── data/                       内容层（改文案只改这里，不动组件）
│   ├── variantsData.ts         5 变体 + 6 风格配置
│   ├── auditData.ts            3-Tier 审计 + 异常响应矩阵
│   ├── caseStudyData.ts        康源集团指标 / 四大智能体 / 四阶段 / ROI
│   ├── frameworksData.ts       6 家框架横评（含可控度 / 安全度评分）
│   ├── payrollData.ts          精算智能体岗位定义 + 公式池
│   └── questionnaireData.ts    10 部分问卷 + 6 步 SOP
│
└── utils/
    ├── htmlExporter.ts         离线 HTML 导出（约 52 KB）
    └── markdownExporter.ts     Markdown 导出
```

**关注点分离**：`data/` 只管内容，`components/` 只管呈现，`utils/` 只管导出。新增一个章节 = 改 `DocumentBody` + 在 `TOC_SECTIONS` 登记 + 在目标变体白名单加 ID，不需要碰导出器（导出器直接读 `data/` 层）。

---

## 9. 快速开始

### 9.1 在 Google AI Studio 中运行

本项目由 Google AI Studio 生成与托管，`metadata.json` 声明了运行能力：

```json
{
  "name": "企业多智能体架构落地实施与技术白皮书",
  "majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]
}
```

### 9.2 本地开发

```bash
npm install
npm run dev        # http://localhost:3000（--host=0.0.0.0，局域网可访问）

npm run lint       # tsc --noEmit 类型检查
npm run build      # vite build → dist/
npm run preview    # 预览构建产物
```

> `vite.config.ts` 里监听了 `DISABLE_HMR` 环境变量：AI Studio 内编辑代码时会置为 `true` 关闭文件监听以防闪烁。本地开发保持未设置即可。

### 9.3 环境变量

复制 `.env.example` 为 `.env`：

| 变量 | 用途 | 当前是否需要 |
|---|---|---|
| `GEMINI_API_KEY` | Gemini API 调用密钥 | **暂时不需要**——当前版本所有内容均为静态数据 + 本地确定性计算，未发起模型调用 |
| `APP_URL` | 应用自身 URL（回链、OAuth 回调） | 可选 |

---

## 10. 二次开发指引

| 想改什么 | 改哪个文件 |
|---|---|
| 正文文案、表格、结论 | `src/data/*.ts`（优先）或 `src/components/DocumentBody.tsx` |
| 新增 / 调整章节 | `DocumentBody.tsx` 加 `<section id="section-N">` + `TOC_SECTIONS` 登记 + 变体 `sections` 白名单 |
| 新增读者视角 | `variantsData.ts` 的 `DOCUMENT_VARIANTS` 加一项 |
| 新增排版风格 | `variantsData.ts` 的 `DESIGN_VARIATIONS` 加一项 + `App.tsx` 的 `getContainerClasses()` 加 case |
| 换封面 | `CoverPage.tsx`（文案来自变体配置） |
| 加图解 | `Diagrams.tsx` 新增 `export const XxxDiagram`，在 `DocumentBody` 里插入 |
| 改沙盘用例 | `InteractivePlayground.tsx` 的 `PRESET_CASES` |
| 改导出内容 | `utils/htmlExporter.ts` / `utils/markdownExporter.ts`（都从 `data/` 层取数） |

---

## 11. 文档索引

| 文档 | 内容 |
|---|---|
| [docs/01-内容架构与章节体系.md](docs/01-内容架构与章节体系.md) | 六章正文的论证脉络、每章要点与数据来源 |
| [docs/02-变体与设计风格体系.md](docs/02-变体与设计风格体系.md) | 变体 × 风格的正交模型，配置结构，新增方式 |
| [docs/03-导出链路与打印适配.md](docs/03-导出链路与打印适配.md) | 三路导出实现、iframe 打印拦截、A4 分页规则 |
| [docs/04-数据层参考.md](docs/04-数据层参考.md) | 6 个数据模块的结构、字段语义与维护约定 |
| [docs/05-本地开发与部署.md](docs/05-本地开发与部署.md) | 环境要求、命令、构建产物、部署选项 |
| [CHANGELOG.md](CHANGELOG.md) | 版本变更记录 |

---

## 12. 已知限制（诚实记录）

| 项 | 说明 |
|---|---|
| **`@google/genai` / `motion` / `express` 已声明未使用** | AI Studio 模板遗留依赖。当前版本零模型调用、零后端、零动画库，`npm run clean` 里引用的 `server.js` 也不存在。如需精简可移除这三项。 |
| **`DocumentBody.tsx` 单文件偏大** | 约 52 KB。文案密集是内容属性使然，若继续增长建议按章节拆分。 |
| **正文内容与康源集团强绑定** | 标杆章节含真实业务指标。对外分发前请按密级要求评估是否需替换为脱敏版本。 |
| **无自动化测试** | 项目以静态内容为主，目前依赖 `tsc --noEmit` 与人工核对。 |
| **PDF 分页依赖浏览器** | 不同浏览器的 `@media print` 实现有细微差异，极端情况下可能出现孤行。已提供离线 HTML + 设置指引降低差异。 |

---

## 13. 许可

MIT License — 见 [LICENSE](./LICENSE)。

---

_文档编号 MAS-KY-2026-FINAL · 版本 V2.6.4_
