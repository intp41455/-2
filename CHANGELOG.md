# 更新日志

> **关于历史记录**：本仓库此前的开发过程未按版本提交留痕，Git 提交历史只有 `Initial commit` 与初始化提交两条。
> 因此本文件**不虚构历史版本条目**，只记录两件事：
> ① 从代码中可核实的版本标识；② 自本文件建立之日起的真实变更。

---

## 版本标识（从代码中核实）

| 位置 | 值 |
|---|---|
| `App.tsx` 页脚 | `MAS-KY-2026-FINAL · Ver 2.6.4` |
| `markdownExporter.ts` 题注 | `版本: V2.6.4` |
| 导出文件建议名 | 由 `variantsData.ts` 的 `recommendedFileName` 决定，无版本号 |

**当前版本：`2.6.4`**

---

## [2.6.4] — 2026-09-20

### 新增
- **文档补齐**：新增 `README.md`（仓库主页）、`docs/` 五册技术文档、`LICENSE`（MIT）、本变更日志

### 变更
- 修正 `package.json` 元信息：`name` 由 AI Studio 模板默认值 `react-example` 改为 `enterprise-multi-agent-whitepaper`，并补充 `description` / `version` / `license` / `private`

### 说明
本次提交为**纯文档补齐 + 元信息修正**，未改动任何应用代码、内容数据或视觉逻辑。

---

## 未版本化的早期开发（可核实的功能沉淀）

以下内容均可在当前代码中直接验证，作为功能清单留档（非提交历史）：

| 功能 | 实现位置 |
|---|---|
| 5 种文档变体 | `src/data/variantsData.ts` → `DOCUMENT_VARIANTS` |
| 6 套设计风格 | `src/data/variantsData.ts` → `DESIGN_VARIATIONS` |
| 4 种阅读视图 | `src/types.ts` → `DocumentViewMode` |
| 交互仿真沙盘（4 组预置用例） | `src/components/InteractivePlayground.tsx` → `PRESET_CASES` |
| 5 张 SVG 图解 | `src/components/Diagrams.tsx` |
| iframe 打印拦截规避 | `src/App.tsx` → `handleConfirmPrint()` |
| 离线单文件 HTML 导出 | `src/utils/htmlExporter.ts` → `generatePrintableHtml()` |
| Markdown 变体导出 | `src/utils/markdownExporter.ts` → `generateVariantMarkdown()` |
| 3-Tier 审计 + L1/L2/L3 熔断矩阵 | `src/data/auditData.ts` |
| 康源标杆数据（7 机构 / 1051 床 / 213 项标准） | `src/data/caseStudyData.ts` → `KANGYUAN_METRICS` |
| 6 家框架横评 | `src/data/frameworksData.ts` |
| 精算 3 岗位 + 6 项公式池 | `src/data/payrollData.ts` |
| 10 部分问卷 + 6 步 SOP | `src/data/questionnaireData.ts` |
