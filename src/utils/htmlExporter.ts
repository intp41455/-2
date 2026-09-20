/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DocumentVariantId, DOCUMENT_VARIANTS } from '../data/variantsData';
import { QUESTIONNAIRE_SECTIONS } from '../data/questionnaireData';
import { KANGYUAN_METRICS, KANGYUAN_AGENTS } from '../data/caseStudyData';
import { FRAMEWORK_COMPARISONS } from '../data/frameworksData';
import { AUDIT_TIERS, INCIDENT_RESPONSE_MATRIX } from '../data/auditData';

/**
 * Generates a truly comprehensive, all-in-one, fully-contained interactive HTML document
 * containing ALL 10 sections, complete questionnaires, 213-rules benchmarks, framework matrices,
 * and a fully operational offline JavaScript simulation sandbox.
 * 
 * Perfect for both offline interactive exploration and 100% flawless A4 PDF export.
 */
export function generatePrintableHtml(variantId: DocumentVariantId = 'full'): string {
  const variant = DOCUMENT_VARIANTS[variantId] || DOCUMENT_VARIANTS.full;
  const dateStr = '2026年9月';

  // Render Questionnaire Table Rows
  const questionnaireHtml = QUESTIONNAIRE_SECTIONS.map((sec, idx) => {
    const qRows = sec.questions.map((q, qIdx) => `
      <tr>
        <td style="width: 28%; font-weight: 600; color: #1e293b; background: #f8fafc;">
          ${idx + 1}.${qIdx + 1} ${q.question}
        </td>
        <td style="width: 36%; color: #475569; font-size: 13px;">
          ${q.instruction}
        </td>
        <td style="width: 36%; color: #0f766e; background: #f0fdfa; font-size: 13px; font-weight: 500;">
          <span style="display:inline-block; font-size:10px; background:#ccfbf1; color:#115e59; padding:1px 5px; border-radius:3px; margin-bottom:3px; font-weight:700;">康源示范</span><br/>
          ${q.kangyuanExample}
        </td>
      </tr>
    `).join('');

    return `
      <div class="section-block" style="margin-bottom: 24px;">
        <h4 style="font-size: 15px; margin: 12px 0 6px 0; color: #0f172a; border-left: 3px solid #cc5500; padding-left: 8px;">
          ${sec.partNumber}：${sec.title}
        </h4>
        <p style="font-size: 12px; color: #64748b; margin: 0 0 8px 0;">${sec.description}</p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 13px;">
          <thead>
            <tr style="background: #f1f5f9; text-align: left;">
              <th style="padding: 6px 10px; border: 1px solid #cbd5e1;">调研要点 / 采集项</th>
              <th style="padding: 6px 10px; border: 1px solid #cbd5e1;">填报标准与说明</th>
              <th style="padding: 6px 10px; border: 1px solid #cbd5e1;">陕西康源真实落地参考示例</th>
            </tr>
          </thead>
          <tbody>
            ${qRows}
          </tbody>
        </table>
      </div>
    `;
  }).join('');

  // Render Framework Comparisons
  const frameworkRows = FRAMEWORK_COMPARISONS.map(f => `
    <tr>
      <td style="font-weight: 700; color: #1e293b; background: #f8fafc;">
        ${f.name}<br/>
        <span style="font-size: 11px; font-weight: normal; color: #64748b;">${f.category}</span>
      </td>
      <td style="font-size: 13px; color: #334155;">${f.positioning}</td>
      <td style="font-size: 12px; text-align: center;">${f.codeRequirement}</td>
      <td style="font-size: 13px; text-align: center; font-weight: 700; color: #0f766e;">${f.controllabilityScore}/10</td>
      <td style="font-size: 13px; text-align: center; font-weight: 700; color: #0369a1;">${f.securityScore}/10</td>
      <td style="font-size: 12px; color: #475569;">${f.bestFor}</td>
    </tr>
  `).join('');

  // Render 4 Kangyuan Agents
  const agentsHtml = KANGYUAN_AGENTS.map((ag, i) => `
    <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; background: #ffffff; margin-bottom: 12px; page-break-inside: avoid;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; margin-bottom: 8px;">
        <span style="font-weight: 700; font-size: 14px; color: #1e293b;">
          Agent ${i + 1}: ${ag.name}
        </span>
        <span style="font-size: 11px; font-family: monospace; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; color: #475569;">
          基座: ${ag.model}
        </span>
      </div>
      <div style="font-size: 12px; color: #475569; margin-bottom: 6px;">
        <strong>映射业务角色：</strong>${ag.mappedRole} | <strong>模型选型依据：</strong>${ag.modelRationale}
      </div>
      <div style="font-size: 12px; margin-bottom: 6px;">
        <strong>核心职责：</strong>
        <ul style="margin: 4px 0 0 16px; padding: 0; color: #334155;">
          ${ag.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
      <div style="font-size: 11px; background: #faf5ff; border: 1px dashed #d8b4fe; padding: 6px 10px; border-radius: 4px; color: #581c87;">
        <strong>系统提示词核心摘要：</strong>${ag.systemPromptSnippet}
      </div>
    </div>
  `).join('');

  // Render Audit Tiers
  const auditTiersHtml = AUDIT_TIERS.map(t => `
    <div style="border-left: 3px solid #0284c7; padding-left: 12px; margin-bottom: 16px; page-break-inside: avoid;">
      <div style="font-weight: 700; font-size: 14px; color: #0369a1;">
        Tier ${t.tierNumber}：${t.name}
      </div>
      <div style="font-size: 12px; color: #64748b; margin: 2px 0 6px 0;">
        触发阶段：${t.stage} | 核心目标：${t.purpose}
      </div>
      <div style="font-size: 13px; color: #334155; line-height: 1.6;">
        ${t.coreMechanism}
      </div>
      <div style="font-size: 12px; color: #047857; margin-top: 4px;">
        <strong>通过门禁基线：</strong>${t.passStandard}
      </div>
    </div>
  `).join('');

  // Render Response Matrix
  const responseMatrixHtml = INCIDENT_RESPONSE_MATRIX.map(r => `
    <tr>
      <td style="font-weight: 700; font-size: 13px; width: 22%; border: 1px solid #cbd5e1; padding: 8px;">${r.level}</td>
      <td style="font-size: 12px; width: 28%; border: 1px solid #cbd5e1; padding: 8px; color: #334155;">${r.trigger}</td>
      <td style="font-size: 12px; width: 32%; border: 1px solid #cbd5e1; padding: 8px; color: #1e293b;">${r.responseAction}</td>
      <td style="font-size: 12px; width: 18%; border: 1px solid #cbd5e1; padding: 8px; color: #64748b;">${r.humanIntervention}</td>
    </tr>
  `).join('');

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${variant.coverTitle} (全景一体化白皮书) - 陕西康源投资集团</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #F8F9FA;
      --ink: #1e293b;
      --accent: #CC5500;
      --accent-light: #FDF5F0;
      --border: #e2e8f0;
      --surface: #FFFFFF;
    }
    * { box-sizing: border-box; }
    body {
      background-color: var(--bg);
      color: var(--ink);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      margin: 0;
      padding: 24px;
      line-height: 1.7;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
    }
    .paper-container {
      max-width: 1040px;
      margin: 0 auto;
      background: #ffffff;
      padding: 56px 64px;
      border: 1px solid var(--border);
      box-shadow: 0 10px 40px rgba(0,0,0,0.06);
      border-radius: 4px;
    }
    .print-actions {
      position: sticky;
      top: 16px;
      z-index: 1000;
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      max-width: 1040px;
      margin: 0 auto 16px auto;
    }
    .btn {
      padding: 10px 20px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      transition: all 0.2s;
    }
    .btn-primary { background: #CC5500; color: #fff; border: none; }
    .btn-primary:hover { background: #B34400; }
    .btn-emerald { background: #059669; color: #fff; border: none; }
    .btn-emerald:hover { background: #047857; }
    .btn-secondary { background: #fff; color: #334155; border: 1px solid #cbd5e1; }
    .btn-secondary:hover { background: #f8fafc; }
    
    /* Cover Page */
    .cover-box {
      border: 2px solid #0f172a;
      padding: 40px;
      margin-bottom: 48px;
      background: #ffffff;
      position: relative;
    }
    .header-tag {
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: 0.1em;
      color: #64748b;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--border);
      padding-bottom: 12px;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 30px;
      line-height: 1.3;
      margin: 0 0 12px 0;
      color: #0f172a;
      letter-spacing: -0.02em;
    }
    .subtitle {
      font-size: 15px;
      color: #475569;
      margin-bottom: 28px;
      line-height: 1.6;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      border-top: 1px solid var(--border);
      padding-top: 18px;
      margin-top: 24px;
    }
    .meta-item { font-size: 12px; }
    .meta-label { color: #64748b; margin-bottom: 2px; }
    .meta-value { font-weight: 700; color: #0f172a; }

    /* TOC */
    .toc-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 24px 32px;
      margin-bottom: 48px;
    }
    .toc-title {
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .toc-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px 24px;
    }
    .toc-item {
      font-size: 13px;
      color: #334155;
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      border-bottom: 1px dashed #e2e8f0;
    }
    .toc-item:hover { color: #cc5500; font-weight: 600; }

    /* Headings */
    h2 {
      font-size: 20px;
      color: #0f172a;
      margin: 44px 0 16px 0;
      padding-bottom: 8px;
      border-bottom: 2px solid #0f172a;
      display: flex;
      align-items: center;
      gap: 10px;
      page-break-after: avoid;
    }
    h3 {
      font-size: 16px;
      color: #1e293b;
      margin: 24px 0 12px 0;
      page-break-after: avoid;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0 24px 0;
      font-size: 13px;
      page-break-inside: avoid;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 10px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #f1f5f9;
      font-weight: 700;
      color: #0f172a;
    }

    /* Code blocks */
    code, pre {
      font-family: 'Space Mono', Consolas, Monaco, monospace;
    }
    code { padding: 2px 6px; font-size: 12px; background: #f1f5f9; border-radius: 3px; }
    pre {
      padding: 14px 18px;
      overflow-x: auto;
      font-size: 12px;
      line-height: 1.6;
      border: 1px solid var(--border);
      background: #faf8f5;
      border-radius: 4px;
      page-break-inside: avoid;
    }

    /* Interactive Playground Box */
    .playground-box {
      border: 2px solid var(--accent);
      background: #FFFFFF;
      border-radius: 6px;
      padding: 24px;
      margin: 28px 0;
      box-shadow: 0 4px 20px rgba(204, 85, 0, 0.08);
      page-break-inside: avoid;
    }
    .badge-pill {
      display: inline-block;
      padding: 3px 10px;
      font-size: 11px;
      font-weight: 700;
      border-radius: 12px;
      letter-spacing: 0.05em;
    }
    .badge-live {
      background: #FDF5F0;
      color: var(--accent);
      border: 1px solid rgba(204,85,0,0.3);
    }
    .select-input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--border);
      border-radius: 4px;
      font-size: 13px;
      background: #fff;
      color: var(--ink);
      font-weight: 500;
      outline: none;
    }
    .sim-btn {
      background: var(--accent);
      color: #fff;
      border: none;
      padding: 9px 20px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: opacity 0.2s;
    }
    .sim-btn:hover { opacity: 0.9; }
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    .step-card {
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 14px;
      background: #faf8f5;
      transition: all 0.3s;
    }
    .step-card.active {
      border-color: var(--accent);
      background: #fff;
      box-shadow: 0 2px 10px rgba(204,85,0,0.15);
    }
    .step-num {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--accent);
      margin-bottom: 4px;
    }
    .verdict-pass { color: #10b981; font-weight: 700; }
    .verdict-warn { color: #f59e0b; font-weight: 700; }
    .verdict-danger { color: #ef4444; font-weight: 700; }

    /* Print media optimization */
    @page {
      size: A4 portrait;
      margin: 14mm 14mm 16mm 14mm;
    }
    @media print {
      body { background: #fff; padding: 0; font-size: 12px; }
      .print-actions { display: none !important; }
      .paper-container {
        border: none;
        box-shadow: none;
        padding: 0;
        max-width: 100%;
      }
      .playground-box {
        border: 1px solid #cbd5e1 !important;
        box-shadow: none !important;
        page-break-inside: avoid;
      }
      .sim-controls { display: none !important; }
      h2 { page-break-before: always; margin-top: 20px; }
      h2:first-of-type { page-break-before: avoid; }
      tr { page-break-inside: avoid; }
      pre { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- Floating Print & Download Actions Bar -->
  <div class="print-actions">
    <button onclick="window.print()" class="btn btn-primary" title="调起系统打印窗口（目标选择：另存为 PDF）">
      🖨️ 另存为完整出版级 PDF (A4)
    </button>
    <button onclick="downloadSelfHtml()" class="btn btn-emerald" title="下载完全独立的离线 HTML 单文件，包含所有交互功能">
      ⚡ 导出单文件离线交互版 (.html)
    </button>
    <button onclick="window.close()" class="btn btn-secondary">
      关闭页面
    </button>
  </div>

  <div class="paper-container">

    <!-- COVER SECTION -->
    <div class="cover-box">
      <div class="header-tag">
        <span>陕康发〔2026〕09号 · 内部绝密级归档</span>
        <span>VERSION 2.6 PRO · 全量一体化典藏版</span>
      </div>
      <h1>${variant.coverTitle}</h1>
      <div class="subtitle">
        ${variant.coverSubtitle}
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 14px; margin-bottom: 20px; font-size: 13px; color: #475569;">
        <strong>白皮书编纂说明：</strong>本方案为包含全部核心技术的<strong>全景全量一体化版本</strong>。涵盖安全哲学、双门模型、考勤薪酬精算流水线、多智能体离线仿真沙盘、陕西康源集团213项康源美宏标准机器代码化体系、主流框架横评、混合云部署拓扑、3-Tier持续审计闭环、四阶熔断响应矩阵、三年ROI测算以及10维度信息采集标准问卷(SOP)全量24+道题与填报示例。
      </div>

      <div class="meta-grid">
        <div class="meta-item">
          <div class="meta-label">起草单位</div>
          <div class="meta-value">陕西康源数字化战略办公室</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">技术协作</div>
          <div class="meta-value">多智能体工程联合实验室</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">印发日期</div>
          <div class="meta-value">${dateStr}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">适用受众</div>
          <div class="meta-value">决策委员会 / 架构师 / 各院区</div>
        </div>
      </div>
    </div>

    <!-- TABLE OF CONTENTS -->
    <div class="toc-box">
      <div class="toc-title">
        <span>📑 全景白皮书目录 (TABLE OF CONTENTS)</span>
      </div>
      <div class="toc-grid">
        <a href="#part-1" class="toc-item"><span>PART 01 多智能体工程安全哲学与“双门”模型</span><span>P.02</span></a>
        <a href="#part-2" class="toc-item"><span>PART 02 薪酬考勤自动化精算体系与Python沙盒</span><span>P.04</span></a>
        <a href="#part-3" class="toc-item"><span>PART 03 【可交互沙盘】多智能体协同仿真推演</span><span>P.06</span></a>
        <a href="#part-4" class="toc-item"><span>PART 04 陕西康源集团“康源智脑”实战标杆</span><span>P.08</span></a>
        <a href="#part-5" class="toc-item"><span>PART 05 主流多智能体开发框架横向测评矩阵</span><span>P.11</span></a>
        <a href="#part-6" class="toc-item"><span>PART 06 混合云架构拓扑与生产级高可用部署</span><span>P.13</span></a>
        <a href="#part-7" class="toc-item"><span>PART 07 独立监察与持续可观测审计 (3-Tier)</span><span>P.15</span></a>
        <a href="#part-8" class="toc-item"><span>PART 08 生产安全防御与四阶熔断响应矩阵</span><span>P.17</span></a>
        <a href="#part-9" class="toc-item"><span>PART 09 集团三年投资回报测算 (ROI) 与路线图</span><span>P.19</span></a>
        <a href="#part-10" class="toc-item"><span>PART 10 10维度信息采集标准问卷 (SOP全量)</span><span>P.21</span></a>
      </div>
    </div>

    <!-- PART 1 -->
    <h2 id="part-1">PART 01 · 多智能体工程安全哲学与“双门”解耦模型</h2>
    <p>
      在大模型驱动的企业级应用中，最根本的工程教训是：<strong>“LLM 擅长模糊语意理解与非结构化归纳，但绝不能让其直接进行数值计算与关键逻辑判定”</strong>。大语言模型本质是基于概率的 Token 预测机，在面对浮点数、阶梯税率、工龄换算时存在不可消除的概率性幻觉风险。
    </p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0;">
      <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 4px; padding: 16px;">
        <div style="font-weight: 700; color: #991b1b; margin-bottom: 6px;">❌ 传统脆弱模式：全交给大模型端到端处理</div>
        <div style="font-size: 13px; color: #7f1d1d;">
          将员工请假单、迟到记录发给大模型并要求输出“张三实发工资为 7532.5 元”。大模型可能在不同温度下输出不同金额，一旦被攻击注入提示词，可直接篡改薪资金额。
        </div>
      </div>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 16px;">
        <div style="font-weight: 700; color: #166534; margin-bottom: 6px;"> 康源“双门”解耦模型 (Two-Gate Architecture)</div>
        <div style="font-size: 13px; color: #14532d;">
          <strong>门禁一（LLM 语义翻译）</strong>：只负责提取文字中的结构化参数（如：事假 1 天）；<br/>
          <strong>门禁二（刚性沙盒算薪）</strong>：由确定性 Python 脚本执行数学运算，任何大模型不得介入加减乘除！
        </div>
      </div>
    </div>

    <!-- PART 2 -->
    <h2 id="part-2">PART 02 · 薪酬考勤自动化精算体系与 Python 沙盒</h2>
    <p>
      陕西康源集团严格执行劳动法标准（折算日薪基准为 <strong>21.75 天</strong>），薪资精算体系执行四阶无死角防线：
    </p>
    <ul>
      <li><strong>日薪基准公式：</strong> <code>日薪标准 = 基本工资 ÷ 21.75</code></li>
      <li><strong>事假扣除公式：</strong> <code>事假扣款 = 事假天数 × 日薪标准</code></li>
      <li><strong>病假折算公式：</strong> <code>病假扣除 = 病假天数 × 日薪标准 × 40%</code>（按劳动法发 60%）</li>
      <li><strong>严重旷工惩戒：</strong> <code>旷工扣除 = 旷工天数 × 日薪标准 × 3.0</code>（三倍日薪顶格追责）</li>
      <li><strong>全勤嘉奖激励：</strong> 零迟到、零请假、零旷工，足额发放 <code>500.00 元</code> 模范全勤奖。</li>
    </ul>

    <h3>隔离容器执行之核心 Python 精算脚本 (零幻觉保证)</h3>
    <pre><code>def calculate_payroll_isolated(base_salary: float, emp: dict) -> float:
    """
    运行于本地只读沙箱环境，任何外部 LLM 无法篡改
    """
    daily_rate = base_salary / 21.75
    leave_deduct = emp.get("事假天数", 0) * daily_rate
    sick_deduct = emp.get("病假天数", 0) * daily_rate * 0.40
    late_deduct = 50.0 if emp.get("迟到次数", 0) > 0 else 0.0
    absent_deduct = emp.get("旷工天数", 0) * daily_rate * 3.0
    bonus = 500.0 if (emp.get("事假天数", 0) == 0 and emp.get("迟到次数", 0) == 0 and emp.get("旷工天数", 0) == 0) else 0.0
    
    total_deduct = leave_deduct + sick_deduct + late_deduct + absent_deduct
    net_salary = max(0.0, base_salary - total_deduct + bonus)
    return round(net_salary, 2)</code></pre>

    <!-- PART 3: INTERACTIVE SIMULATION SANDBOX -->
    <h2 id="part-3">PART 03 · 【可交互沙盘】多智能体协同仿真推演工作台</h2>
    <p>
      <em>本沙盘已内嵌原生离线推演引擎，断网或离线环境下均可自由切换案例、调整参数并实时推演！</em>
    </p>

    <div class="playground-box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 20px;">⚡</span>
          <div>
            <h3 style="margin: 0; font-size: 16px; color: var(--ink);">多智能体协同推演实时沙盘 (全功能离线工作台)</h3>
            <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">
              链路贯通：非结构化打卡日志清洗 → 刚性沙盒精算 → 独立审计规则裁决
            </p>
          </div>
        </div>
        <span class="badge-pill badge-live">● 实时交互就绪</span>
      </div>

      <!-- Controls -->
      <div class="sim-controls" style="display: grid; grid-template-columns: 2fr 1fr auto; gap: 12px; align-items: end; margin-bottom: 16px;">
        <div>
          <label style="font-size: 12px; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">
            选择推演案例 (Preset Cases):
          </label>
          <select id="simCaseSelect" class="select-input" onchange="onCaseChange()">
            <option value="0">案例 1: 张三 (事假1天 + 正常出勤，底薪 8000)</option>
            <option value="1">案例 2: 李四 (迟到25分钟 + 满勤，底薪 10000)</option>
            <option value="2">案例 3: 王五 (严重异常：旷工1天 + 迟到，底薪 9000)</option>
            <option value="3">案例 4: 赵六 (全勤模范生：无异常，底薪 8500)</option>
          </select>
        </div>

        <div>
          <label style="font-size: 12px; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">
            底薪参数 (元/月):
          </label>
          <input type="number" id="simBaseSalary" class="select-input" value="8000" oninput="onCustomCalculate()" />
        </div>

        <button id="runSimBtn" class="sim-btn" onclick="runSimulation()">
          <span>▶️ 一键运行多智能体推演</span>
        </button>
      </div>

      <!-- Raw Text Display -->
      <div style="background: #faf8f5; border: 1px solid var(--border); padding: 10px 14px; border-radius: 4px; font-size: 12px; margin-bottom: 14px;">
        <span style="font-weight: 700; color: var(--accent);">输入原始日志 / 请假单：</span>
        <span id="simRawText" style="color: #334155;">张三本月应出勤22天，打卡记录均在08:50前完成，仅9月2日因私事提交事假申请1天已审批通过。</span>
      </div>

      <!-- Agent 3-Step Execution Grid -->
      <div class="steps-grid">
        <!-- Agent 1 -->
        <div id="stepCard1" class="step-card">
          <div class="step-num">STEP 01 · AGENT 1 (DeepSeek-V3)</div>
          <div style="font-weight: 700; font-size: 13px; margin-bottom: 4px;">文本语义抽取与清洗</div>
          <div style="font-size: 11px; color: #64748b; margin-bottom: 8px;">将非结构化文字解析为刚性参数</div>
          <pre id="agent1Output" style="margin: 0; font-size: 11px; max-height: 130px; overflow-y: auto;">{
  "status": "ready"
}</pre>
        </div>

        <!-- Agent 2 -->
        <div id="stepCard2" class="step-card">
          <div class="step-num">STEP 02 · AGENT 2 (Local Sandbox)</div>
          <div style="font-weight: 700; font-size: 13px; margin-bottom: 4px;">隔离沙箱 Python 精算</div>
          <div style="font-size: 11px; color: #64748b; margin-bottom: 8px;">日薪标准: 21.75 天折算</div>
          <div id="agent2Output" style="background: #ffffff; border: 1px solid var(--border); padding: 10px; border-radius: 4px; font-size: 12px;">
            <div>底薪: <span id="outBaseSalary" style="font-weight:700;">8000</span> 元</div>
            <div>日薪标准: <span id="outDailyRate" style="font-family: monospace;">367.82</span> 元/天</div>
            <div>扣除总额: <span id="outDeductions" style="color: #ef4444; font-weight:700;">367.82</span> 元</div>
            <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #e2e8f0; font-weight: 800; font-size: 14px; color: var(--accent);">
              实发净薪: <span id="outNetSalary">7632.18</span> 元
            </div>
          </div>
        </div>

        <!-- Agent 3 -->
        <div id="stepCard3" class="step-card">
          <div class="step-num">STEP 03 · AGENT 3 (Claude 3.5)</div>
          <div style="font-weight: 700; font-size: 13px; margin-bottom: 4px;">合规审计与熔断监察</div>
          <div style="font-size: 11px; color: #64748b; margin-bottom: 8px;">规则基线比对与异常定级</div>
          <div id="agent3Output" style="background: #ffffff; border: 1px solid var(--border); padding: 10px; border-radius: 4px; font-size: 12px;">
            <div>审计裁决: <span id="outVerdict" class="verdict-pass">合规放行 (PASS)</span></div>
            <div>风控级别: <span id="outRiskLevel" style="font-weight:700;">P3 建议级</span></div>
            <div style="margin-top: 6px; font-size: 11px; color: #475569;" id="outAuditDetail">
              核算逻辑符合陕西康源薪酬计算规程，未触发任何异常红线。
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PART 4 -->
    <h2 id="part-4">PART 04 · 陕西康源投资集团“康源智脑”实战标杆</h2>
    <p>
      陕西康源投资（集团）有限公司（2004 年成立，深耕康养 20 载），旗下涵盖 7 家大型医养结合养老机构、30 余所社区日间照料中心及养老福祉教育学院。
    </p>

    <!-- Key Metrics Grid -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0 24px 0;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 4px; text-align: center;">
        <div style="font-size: 11px; color: #64748b;">分支机构总数</div>
        <div style="font-size: 22px; font-weight: 800; color: #0f172a;">${KANGYUAN_METRICS.institutions} <span style="font-size:12px;font-weight:normal;">家</span></div>
        <div style="font-size: 11px; color: #94a3b8;">西安4/成都2/曲靖1</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 4px; text-align: center;">
        <div style="font-size: 11px; color: #64748b;">核定总床位</div>
        <div style="font-size: 22px; font-weight: 800; color: #0f766e;">${KANGYUAN_METRICS.totalBeds} <span style="font-size:12px;font-weight:normal;">张</span></div>
        <div style="font-size: 11px; color: #0f766e;">平均入住率 ${KANGYUAN_METRICS.currentOccupancy}</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 4px; text-align: center;">
        <div style="font-size: 11px; color: #64748b;">康源美宏标准总数</div>
        <div style="font-size: 22px; font-weight: 800; color: #cc5500;">${KANGYUAN_METRICS.standardsCount} <span style="font-size:12px;font-weight:normal;">项</span></div>
        <div style="font-size: 11px; color: #cc5500;">100% 机器代码化</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 4px; text-align: center;">
        <div style="font-size: 11px; color: #64748b;">日照中心总数</div>
        <div style="font-size: 22px; font-weight: 800; color: #0369a1;">${KANGYUAN_METRICS.daycareCenters}+ <span style="font-size:12px;font-weight:normal;">所</span></div>
        <div style="font-size: 11px; color: #94a3b8;">辐射社区万余长者</div>
      </div>
    </div>

    <h3>康源 213 项标准四大分类构成</h3>
    <table>
      <thead>
        <tr>
          <th>标准类别</th>
          <th>收录项数</th>
          <th>涵盖典型内容</th>
          <th>AI 审计触发逻辑</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight: 700;">服务提供标准</td>
          <td>98 项</td>
          <td>晨间护理、生命体征监测、翻身防褥疮、排药复核、鼻饲照护等</td>
          <td>比对护理执行时间戳与照护记录日志，超时未完成即报黄牌</td>
        </tr>
        <tr>
          <td style="font-weight: 700;">服务保障标准</td>
          <td>83 项</td>
          <td>适老化设施巡检、餐饮食材留样48小时、消防安防巡更、医废转运</td>
          <td>自动比对AIoT烟感/安防摄像头视频结构化数据与台账</td>
        </tr>
        <tr>
          <td style="font-weight: 700;">岗位工作标准</td>
          <td>11 项</td>
          <td>护理主管排班规则、护士交接班SOP、康复师评定规范、社工活动</td>
          <td>按周审计排班完整度与护理配比合规率（失能长者1:3硬性红线）</td>
        </tr>
        <tr>
          <td style="font-weight: 700;">评价与改进标准</td>
          <td>21 项</td>
          <td>家属满意度调查、压疮发生率通报、长者跌倒根因复盘纠偏机制</td>
          <td>月度统计高频失分项，自动向院长与质控部生成针对性改进单</td>
        </tr>
      </tbody>
    </table>

    <h3>四大子智能体矩阵契约</h3>
    ${agentsHtml}

    <!-- PART 5 -->
    <h2 id="part-5">PART 05 · 主流多智能体开发框架横向测评矩阵</h2>
    <p>
      为满足高并发、严苛审计与低代码扩展并存的需求，项目组对业界主流智能体框架进行了全方位横向对比：
    </p>

    <table>
      <thead>
        <tr>
          <th>框架名称与分类</th>
          <th>设计定位与心智模型</th>
          <th>代码门槛</th>
          <th>控制度</th>
          <th>安全性</th>
          <th>企业级最佳适用场景</th>
        </tr>
      </thead>
      <tbody>
        ${frameworkRows}
      </tbody>
    </table>

    <!-- PART 6 -->
    <h2 id="part-6">PART 06 · 混合云架构拓扑与生产级高可用部署</h2>
    <p>
      康源智脑采用<strong>“黄金三角混合云架构”</strong>：
    </p>
    <ul>
      <li><strong>稳态核心在内网：</strong>状态机（FastAPI + PostgreSQL）运行在西安总部私有服务器上，确保老人敏感健康档案与员工身份证号不出域。</li>
      <li><strong>敏捷推理在云端：</strong>通过云端国产大模型（DeepSeek-V3 / Qwen-2.5-72B）的 API 进行脱敏语义抽取，兼具极致算力与极低成本。</li>
      <li><strong>规则与沙箱只读锁死：</strong>213 项标准与薪资计算引擎固化为本地只读容器，完全杜绝因网络故障或模型漂移造成的崩溃。</li>
    </ul>

    <!-- PART 7 -->
    <h2 id="part-7">PART 07 · 独立监察与持续可观测审计体系 (3-Tier Audit)</h2>
    <p>
      构建涵盖<strong>“事前沙盘推演、事中实时拦截、事后复盘闭环”</strong>的全生命周期监察体系：
    </p>
    ${auditTiersHtml}

    <!-- PART 8 -->
    <h2 id="part-8">PART 08 · 生产安全防御与四阶熔断响应矩阵</h2>
    <p>
      建立极速故障定级与分阶阻断预案，杜绝任何数据污染向下游扩散：
    </p>

    <table>
      <thead>
        <tr>
          <th>风险定级</th>
          <th>触发场景说明</th>
          <th>系统自动阻断与处置动作</th>
          <th>人工介入要求</th>
        </tr>
      </thead>
      <tbody>
        ${responseMatrixHtml}
      </tbody>
    </table>

    <!-- PART 9 -->
    <h2 id="part-9">PART 09 · 集团三年投资回报测算 (ROI) 与落地路线图</h2>
    <p>
      综合测算陕西康源投资集团部署“康源智脑”后的直接经济收益与管理效益：
    </p>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 16px 0;">
      <div style="border: 1px solid #bbf7d0; background: #f0fdf4; padding: 14px; border-radius: 4px;">
        <div style="font-size: 12px; color: #166534; font-weight: 700;">运营分析耗时减少</div>
        <div style="font-size: 24px; font-weight: 800; color: #15803d;">98% ⬇</div>
        <div style="font-size: 11px; color: #166534;">从 3~5 个工作日缩减至 10 分钟自动出具全景报表</div>
      </div>
      <div style="border: 1px solid #bae6fd; background: #f0f9ff; padding: 14px; border-radius: 4px;">
        <div style="font-size: 12px; color: #0369a1; font-weight: 700;">合规质检覆盖率</div>
        <div style="font-size: 24px; font-weight: 800; color: #0284c7;">10x ⬆</div>
        <div style="font-size: 11px; color: #0369a1;">从 10% 随机人工抽检升至 100% 每日全量覆盖</div>
      </div>
      <div style="border: 1px solid #fed7aa; background: #fff7ed; padding: 14px; border-radius: 4px;">
        <div style="font-size: 12px; color: #9a3412; font-weight: 700;">预计三年净 ROI</div>
        <div style="font-size: 24px; font-weight: 800; color: #c2410c;">245% 💰</div>
        <div style="font-size: 11px; color: #9a3412;">预计第 14 个月即可实现前期全部研发投入平衡收回</div>
      </div>
    </div>

    <!-- PART 10 -->
    <h2 id="part-10">PART 10 · 10维度信息采集标准问卷 (SOP全量试卷与康源示范)</h2>
    <p>
      <em>以下为标准化需求调研资产，涵盖企业基本面、组织架构、微观数据、系统接口、213项规则边界等全量 24+ 项填报题目，并附带陕西康源真实落地示范。可直接打印下发至各院区与职能部门。</em>
    </p>

    ${questionnaireHtml}

    <div style="border: 1px solid #cbd5e1; background: #f8fafc; padding: 16px; border-radius: 4px; margin-top: 24px; page-break-inside: avoid;">
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #0f172a;">附录 A：填报数据精度标注规范</h4>
      <div style="font-size: 12px; color: #475569; line-height: 1.6;">
        - <code>[精确]</code>：具备官方红头文件、审计凭证或系统直接导出之精确数值，偏差容忍度 0%。<br/>
        - <code>[估算]</code>：无精确软件记录，由部门负责人根据近3个月经验推导出的合理区间（允许 ±10% 浮动）。<br/>
        - <code>[初步]</code>：尚在探讨或规划阶段，后续技术实施阶段允许调整。
      </div>
    </div>

    <div style="border: 1px solid #cbd5e1; background: #f8fafc; padding: 16px; border-radius: 4px; margin-top: 16px; page-break-inside: avoid;">
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #0f172a;">附录 B：多部门协同审签确认授权单</h4>
      <table style="margin: 8px 0 0 0; background: #fff;">
        <thead>
          <tr>
            <th>审签角色</th>
            <th>对接部门名称</th>
            <th>负责人签署</th>
            <th>签署日期</th>
            <th>审签结论意见</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight: 700;">业务责任人</td>
            <td>集团运营管理部</td>
            <td>_____________</td>
            <td>2026年___月___日</td>
            <td>[ ] 同意立项  [ ] 需补齐数据</td>
          </tr>
          <tr>
            <td style="font-weight: 700;">技术责任人</td>
            <td>集团信息技术部</td>
            <td>_____________</td>
            <td>2026年___月___日</td>
            <td>[ ] 接口已就绪 [ ] 需采购算力</td>
          </tr>
          <tr>
            <td style="font-weight: 700;">合规责任人</td>
            <td>法务质控部</td>
            <td>_____________</td>
            <td>2026年___月___日</td>
            <td>[ ] 合规审查通过 [ ] 需脱敏</td>
          </tr>
          <tr>
            <td style="font-weight: 700;">最终批准人</td>
            <td>集团决策委员会</td>
            <td>_____________</td>
            <td>2026年___月___日</td>
            <td>[ ] 准予启动开发</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 48px; border-top: 1px solid #cbd5e1; padding-top: 16px; text-align: center; color: #94a3b8; font-size: 11px;">
      © 2026 陕西康源投资（集团）有限公司 · 数字化战略办公室 版权所有 · 内部受控文件
    </div>

  </div>

  <!-- Embedded Standalone Interactive Engine Script -->
  <script>
    var PRESET_CASES = [
      {
        name: "张三 (事假1天 + 正常出勤)",
        base: 8000,
        text: "张三本月应出勤22天，打卡记录均在08:50前完成，仅9月2日因私事提交事假申请1天已审批通过。",
        parsed: { "员工姓名": "张三", "事假天数": 1, "病假天数": 0, "迟到次数": 0, "旷工天数": 0, "全勤状态": false },
        risk: "P3 建议级",
        verdict: "合规放行 (PASS)",
        verdictClass: "verdict-pass",
        detail: "事假1天已在OA报备扣除，未触发薪资异常波动警戒线。"
      },
      {
        name: "李四 (迟到25分钟 + 满勤)",
        base: 10000,
        text: "李四本月全勤出勤22天，9月10日因突降暴雨09:25打卡迟到25分钟，无其他请假或缺卡。",
        parsed: { "员工姓名": "李四", "事假天数": 0, "病假天数": 0, "迟到次数": 1, "旷工天数": 0, "全勤状态": false },
        risk: "P2 警告级",
        verdict: "预警扣减 (WARN)",
        verdictClass: "verdict-warn",
        detail: "存在1次16-30分钟轻微迟到，扣除50元，取消本月全勤奖。"
      },
      {
        name: "王五 (严重异常：旷工1天 + 迟到)",
        base: 9000,
        text: "王五9月15日未打卡且未提交任何补卡审批单；9月18日10:15严重迟到，其余日期正常打卡。",
        parsed: { "员工姓名": "王五", "事假天数": 0, "病假天数": 0, "迟到次数": 1, "旷工天数": 1, "全勤状态": false },
        risk: "P1 严重级",
        verdict: "熔断拦截 (BLOCKED)",
        verdictClass: "verdict-danger",
        detail: "旷工1天触发3倍日薪重罚扣除，且严重迟到，触发异常熔断提报人工复核。"
      },
      {
        name: "赵六 (全勤模范生：无异常)",
        base: 8500,
        text: "赵六全月22天每日于08:45前打卡，无任何请假、旷工、迟到记录，全勤表现优异。",
        parsed: { "员工姓名": "赵六", "事假天数": 0, "病假天数": 0, "迟到次数": 0, "旷工天数": 0, "全勤状态": true },
        risk: "P3 正常",
        verdict: "全勤嘉奖 (EXCELLENT)",
        verdictClass: "verdict-pass",
        detail: "零迟到、零请假、全勤出勤，足额发放底薪并额外发放全勤嘉奖金500元。"
      }
    ];

    function getSelectedCase() {
      var idx = parseInt(document.getElementById("simCaseSelect").value, 10);
      return PRESET_CASES[idx] || PRESET_CASES[0];
    }

    function onCaseChange() {
      var c = getSelectedCase();
      document.getElementById("simBaseSalary").value = c.base;
      document.getElementById("simRawText").innerText = c.text;
      document.getElementById("agent1Output").innerText = JSON.stringify(c.parsed, null, 2);
      calculateAndRender(c.base, c);
    }

    function onCustomCalculate() {
      var val = parseFloat(document.getElementById("simBaseSalary").value) || 0;
      var c = getSelectedCase();
      calculateAndRender(val, c);
    }

    function calculateAndRender(base, c) {
      var daily = base / 21.75;
      var p = c.parsed;
      var leaveDeduct = (p["事假天数"] * daily) + (p["病假天数"] * daily * 0.4);
      var lateDeduct = p["迟到次数"] > 0 ? 50 : 0;
      var absentDeduct = p["旷工天数"] * daily * 3.0;
      var bonus = p["全勤状态"] ? 500 : 0;
      var totalDeduct = leaveDeduct + lateDeduct + absentDeduct;
      var net = Math.max(0, base - totalDeduct + bonus);

      document.getElementById("outBaseSalary").innerText = base.toFixed(2);
      document.getElementById("outDailyRate").innerText = daily.toFixed(2);
      document.getElementById("outDeductions").innerText = totalDeduct.toFixed(2);
      document.getElementById("outNetSalary").innerText = net.toFixed(2);

      var vElem = document.getElementById("outVerdict");
      vElem.innerText = c.verdict;
      vElem.className = c.verdictClass;
      document.getElementById("outRiskLevel").innerText = c.risk;
      document.getElementById("outAuditDetail").innerText = c.detail;
    }

    function runSimulation() {
      var btn = document.getElementById("runSimBtn");
      btn.innerText = "⏳ 正在协同推演...";
      btn.style.opacity = "0.7";
      
      var card1 = document.getElementById("stepCard1");
      var card2 = document.getElementById("stepCard2");
      var card3 = document.getElementById("stepCard3");

      card1.classList.remove("active");
      card2.classList.remove("active");
      card3.classList.remove("active");

      card1.classList.add("active");
      var c = getSelectedCase();
      document.getElementById("agent1Output").innerText = "Agent 1 分析抽取中...";

      setTimeout(function() {
        document.getElementById("agent1Output").innerText = JSON.stringify(c.parsed, null, 2);
        card1.classList.remove("active");
        card2.classList.add("active");

        setTimeout(function() {
          var base = parseFloat(document.getElementById("simBaseSalary").value) || c.base;
          calculateAndRender(base, c);
          card2.classList.remove("active");
          card3.classList.add("active");

          setTimeout(function() {
            btn.innerText = "▶️ 一键运行多智能体推演";
            btn.style.opacity = "1";
          }, 400);
        }, 350);
      }, 350);
    }

    function downloadSelfHtml() {
      var fullHtml = "<!DOCTYPE html>\\n" + document.documentElement.outerHTML;
      var blob = new Blob([fullHtml], { type: "text/html;charset=utf-8;" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "企业多智能体架构落地实施方案_全景一体化离线版.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    window.onload = function() {
      onCaseChange();
      if (window.location.hash === '#print') {
        setTimeout(function() { window.print(); }, 400);
      }
    };
  </script>
</body>
</html>`;
}

/**
 * Generates an absolute 100% pixel-perfect WYSIWYG (What You See Is What You Get)
 * standalone HTML document by capturing the live DOM and all compiled Vite/Tailwind stylesheets.
 * 
 * Includes all SVG diagrams (Double-Door Architecture, Kangyuan Brain Topology, 
 * Payroll Pipeline, Supervisory Audit, SOP Workflow), Lucide vector icons, 
 * responsive cards, badges, and the exact typography seen on screen.
 */
export function generateWysiwygHtml(variantId: DocumentVariantId = 'full'): string {
  if (typeof document === 'undefined') {
    return generatePrintableHtml(variantId);
  }

  const printableEl = document.getElementById('printable-document');
  if (!printableEl) {
    return generatePrintableHtml(variantId);
  }

  // Extract all compiled style tags and font links from document.head
  const headElements = Array.from(document.querySelectorAll('style, link[rel="stylesheet"], link[rel="preconnect"]'))
    .map(el => el.outerHTML)
    .join('\n');

  // Clone printable content so we don't mutate current live DOM
  const clone = printableEl.cloneNode(true) as HTMLElement;

  // Remove any internal no-print buttons from the clone
  clone.querySelectorAll('.no-print').forEach(el => el.remove());

  // Get current title & variant
  const variant = DOCUMENT_VARIANTS[variantId] || DOCUMENT_VARIANTS.full;
  const title = `${variant.name} · 企业多智能体架构落地实施方案`;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - 陕西康源投资集团</title>
  ${headElements}
  <style>
    /* Baseline colors matching screen theme */
    :root {
      --bg: #FDFBFA;
      --ink: #2D2824;
      --accent: #CC5500;
      --border: #E8E3DF;
      --surface: #FFFFFF;
    }
    body {
      background-color: #F8F9FA;
      color: #1e293b;
      margin: 0;
      padding: 24px 16px 64px 16px;
      font-family: 'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .wysiwyg-container {
      max-width: 1040px;
      margin: 0 auto;
    }
    .wysiwyg-toolbar {
      position: sticky;
      top: 14px;
      z-index: 99999;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      max-width: 1040px;
      margin: 0 auto 20px auto;
      background: #0f172a;
      padding: 12px 18px;
      border-radius: 12px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.35);
      color: white;
    }
    .wysiwyg-toolbar .btn-action {
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: none;
      transition: all 0.15s ease;
    }
    .btn-orange {
      background: #CC5500;
      color: white;
    }
    .btn-orange:hover {
      background: #B34400;
      transform: translateY(-1px);
    }
    .btn-green {
      background: #059669;
      color: white;
    }
    .btn-green:hover {
      background: #047857;
      transform: translateY(-1px);
    }
    .btn-gray {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .btn-gray:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    @media print {
      body {
        background-color: #ffffff !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .wysiwyg-container {
        max-width: 100% !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .wysiwyg-toolbar, .no-print {
        display: none !important;
      }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      @page {
        size: A4 portrait;
        margin: 12mm 14mm 12mm 14mm;
      }
    }
  </style>
</head>
<body class="antialiased selection:bg-[#CC5500] selection:text-white">

  <!-- Floating Sticky Bar (Automatically hidden in print) -->
  <div class="wysiwyg-toolbar no-print">
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span>
      <span style="font-size: 13px; font-weight: 700;">🌟 所见即所得 (WYSIWYG) 极高保真版</span>
      <span style="font-size: 11px; opacity: 0.8; margin-left: 4px;">已内联全部矢量架构图与 Tailwind 样式</span>
    </div>
    <div style="display: flex; gap: 8px;">
      <button onclick="window.print()" class="btn-action btn-orange" title="调起系统打印机，目标选择：另存为 PDF">
        🖨️ 另存为高保真 PDF
      </button>
      <button onclick="downloadHtmlFile()" class="btn-action btn-green" title="下载完全自包含的独立 HTML 单文件">
        ⚡ 导出此独立 HTML
      </button>
      <button onclick="window.close()" class="btn-action btn-gray">
        关闭
      </button>
    </div>
  </div>

  <div class="wysiwyg-container">
    ${clone.outerHTML}
  </div>

  <script>
    function downloadHtmlFile() {
      var fullHtml = "<!DOCTYPE html>\\n" + document.documentElement.outerHTML;
      var blob = new Blob([fullHtml], { type: "text/html;charset=utf-8;" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "${title.replace(/[\/\\?%*:|"<>]/g, '_')}_所见即所得版.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    if (window.location.hash === '#print') {
      setTimeout(function() {
        window.print();
      }, 500);
    }
  </script>
</body>
</html>`;
}

/**
 * Helper to open the document in a clean new browser tab.
 * Defaults to true WYSIWYG mode so it matches the screen 100%.
 */
export function openPrintableTab(
  variantId: DocumentVariantId = 'full', 
  autoPrint: boolean = false, 
  forceTemplate: boolean = false
): void {
  // If forceTemplate is true or printable DOM element is missing, use classic generator
  const html = (!forceTemplate && typeof document !== 'undefined' && document.getElementById('printable-document'))
    ? generateWysiwygHtml(variantId)
    : generatePrintableHtml(variantId);

  const blob = new Blob([html], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const finalUrl = autoPrint ? `${url}#print` : url;
  
  const newWin = window.open(finalUrl, '_blank');
  if (!newWin) {
    // If pop-up is blocked, trigger direct download
    const a = document.createElement('a');
    a.href = url;
    a.download = `企业多智能体白皮书_所见即所得版.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
