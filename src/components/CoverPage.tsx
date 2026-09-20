/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, BookOpen, Layers, CheckCircle, Calendar, Hash, Building2, Tag, Printer } from 'lucide-react';
import { DocumentVariantId, DesignVariationId } from '../types';
import { DOCUMENT_VARIANTS } from '../data/variantsData';

interface CoverPageProps {
  currentVariant?: DocumentVariantId;
  currentDesign?: DesignVariationId;
  onStartReading: () => void;
  onPrint: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ 
  currentVariant = 'full', 
  currentDesign = 'variation-7',
  onStartReading, 
  onPrint 
}) => {
  const variant = DOCUMENT_VARIANTS[currentVariant] || DOCUMENT_VARIANTS.full;

  // VARIATION 7: Warm Paper Architectural Monograph Cover (Exact match to Design Specification)
  if (currentDesign === 'variation-7') {
    return (
      <div className="w-full bg-white border border-[rgba(28,28,26,0.12)] p-8 sm:p-14 lg:p-20 my-4 pdf-avoid-break text-[#1C1C1A] flex flex-col justify-between min-h-[820px] relative">
        <div>
          {/* Top header meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[rgba(28,28,26,0.12)]">
            <div>
              <div className="font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-[rgb(204,85,0)] font-bold mb-1">
                System-Arch // 01 · Enterprise Architecture Series
              </div>
              <div className="text-xs text-[rgba(28,28,26,0.6)] font-sans">
                陕西康源投资（集团）有限公司 · 数字化转型办公室 权威发布
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-[#F8F7F4] text-[#1C1C1A] border border-[rgba(28,28,26,0.15)] text-xs font-space-mono font-bold">
                {variant.badge}
              </span>
              <span className="px-3 py-1 bg-[#1C1C1A] text-white text-xs font-space-mono font-bold">
                RELEASE V2.6.0-PRO
              </span>
            </div>
          </div>

          {/* Section Title with Large Cormorant Garamond Serif */}
          <div className="pt-14 pb-10 max-w-4xl">
            <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[0.92] tracking-tight mb-8 text-[#1C1C1A]">
              企业多智能体架构<br />
              <span className="text-[rgba(28,28,26,0.85)]">落地实施方案</span>
            </h1>

            <p className="text-base sm:text-lg leading-[1.8] text-[rgba(28,28,26,0.65)] max-w-3xl font-sans mb-10">
              包含全部 6 大核心模块与 14 个章节，涵盖安全哲学、双门模型、考勤薪资精算流水线、主流框架横评、康源智脑标杆工程、三级审计闭环及 10 维度调研问卷全集。
            </p>

            <div className="flex flex-wrap gap-4 no-print">
              <button 
                onClick={onStartReading}
                className="btn-v7-primary"
              >
                <BookOpen className="w-3.5 h-3.5 mr-2" />
                <span>阅读白皮书</span>
              </button>
              <button 
                onClick={onPrint}
                className="btn-v7-secondary"
              >
                <Printer className="w-3.5 h-3.5 mr-2" />
                <span>下载 PDF 副本</span>
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy Block at bottom */}
        <section className="philosophy pt-10 border-t border-[rgba(28,28,26,0.12)] mt-8">
          <div className="label font-space-mono text-[0.6rem] uppercase tracking-[0.15em] text-[rgb(204,85,0)] font-bold mb-2">
            核心哲学 // 01
          </div>
          <h2 className="font-cormorant text-2xl sm:text-3xl font-normal mb-3 text-[#1C1C1A]">
            "左移确定性"铁律
          </h2>
          <p className="text-sm sm:text-base leading-[1.8] text-[rgba(28,28,26,0.6)] max-w-2xl font-sans">
            大语言模型本质是下一代 Token 的概率预测机。在要求 100% 绝对精确的严肃企业场景（财务计算、医疗监护、法律履约）中，绝对不能让模型在运行时“现场推导演算”业务公式。
          </p>

          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[rgba(28,28,26,0.08)] text-xs text-[rgba(28,28,26,0.5)] font-space-mono">
            <div>CONFIDENTIAL // ENTERPRISE ARCHITECTURE</div>
            <div>VER 2.6.0-PRO</div>
          </div>
        </section>
      </div>
    );
  }

  // VARIATION 1: Warm Eggshell Paper Executive Report (Exact match to User Design Variation 1)
  if (currentDesign === 'variation-1') {
    return (
      <div className="w-full max-w-[1000px] mx-auto p-6 sm:p-10 bg-white border border-[#E8E3DF] shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-[4px] my-6 text-[#2D2824] pdf-avoid-break min-h-[1400px] flex flex-col justify-between">
        <div>
          {/* Top Label */}
          <div className="font-space-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#CC5500] opacity-80 mb-4 font-bold">
            White Paper / Architecture 2026
          </div>

          {/* Section Header with 2px accent bottom border */}
          <div className="border-b-2 border-[#CC5500] pb-4 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-[#2D2824] tracking-[-0.02em] leading-tight m-0">
              企业多智能体架构<br />
              <span className="text-[#CC5500]">落地实施方案</span>
            </h1>
            <p className="text-[#666] text-base sm:text-[1.1rem] mt-4 font-normal leading-relaxed">
              技术全景、安全监察体系、康源智脑实战与10维度落地调研白皮书
            </p>
          </div>

          {/* Grid Layout: 2fr main, 1fr aside */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main column (2fr) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="border border-[#E8E3DF] p-6 sm:p-8 rounded-[4px] bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2824] mt-0 mb-3 tracking-[-0.02em]">
                  核心理念：左移确定性
                </h3>
                <p className="text-[0.95rem] leading-[1.8] text-[#444] m-0">
                  业界对自主智能体失控的担忧，本质是决策权让渡给不可控概率算法。我们提出“左移确定性”原则：在工程前期构建刚性规则库，由模型完成从自然语言到状态逻辑的精准翻译，确保执行端永远锁定在静态可控的安全路径中。
                </p>
              </div>

              <div className="border border-[#E8E3DF] p-6 sm:p-8 rounded-[4px] bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2824] mt-0 mb-3 tracking-[-0.02em]">
                  多智能体分工机制
                </h3>
                <ul className="pl-5 leading-[2] text-[#444] text-[0.95rem] m-0 list-disc">
                  <li><strong>运营聚合师：</strong>非结构化数据清洗 (DeepSeek-V3)</li>
                  <li><strong>标准审计员：</strong>合规性规则审计 (Claude 3.5)</li>
                  <li><strong>人才辅导员：</strong>福祉实操评测 (Qwen-2.5)</li>
                  <li><strong>战略决策顾问：</strong>政策研判与 ROI 测算 (GPT-4o)</li>
                </ul>
              </div>
            </div>

            {/* Aside column (1fr) */}
            <div className="space-y-4">
              <div className="border border-[#E8E3DF] p-6 sm:p-8 rounded-[4px] bg-[#FDF5F0]">
                <div className="font-space-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#CC5500] opacity-80 mb-4 font-bold">
                  Quick Stats
                </div>
                <div className="text-4xl sm:text-[2.5rem] font-extrabold text-[#CC5500] leading-none mb-1">
                  98%
                </div>
                <div className="text-[0.8rem] font-semibold text-[#2D2824] mb-4">
                  业务执行提效
                </div>
                <hr className="my-4 border-0 border-t border-[#E8E3DF]" />
                <div className="text-base font-semibold text-[#2D2824] mb-0.5">
                  213
                </div>
                <div className="text-[0.8rem] text-[#2D2824] opacity-70">
                  标准化代码资产
                </div>
              </div>

              {/* Action buttons matching design */}
              <div className="space-y-3 no-print">
                <button
                  onClick={onPrint}
                  className="w-full bg-[#2D2824] hover:bg-[#1C1C1A] text-white py-3 px-4 font-semibold cursor-pointer border-0 uppercase text-xs tracking-[0.05em] transition-colors rounded-[2px] flex items-center justify-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Download PDF Report</span>
                </button>
                <button
                  onClick={onStartReading}
                  className="w-full bg-white hover:bg-[#FDF5F0] text-[#2D2824] border border-[#E8E3DF] py-2.5 px-4 font-semibold cursor-pointer text-xs tracking-wider transition-colors rounded-[2px] flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#CC5500]" />
                  <span>阅读全文与各章节</span>
                </button>
              </div>
            </div>
          </div>

          {/* Methodology Block */}
          <div className="border border-[#E8E3DF] p-6 sm:p-8 rounded-[4px] bg-white mt-8">
            <div className="font-space-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#CC5500] opacity-80 mb-3 font-bold">
              Methodology
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2824] mt-0 mb-4 tracking-[-0.02em]">
              独立监察与持续可观测审计 (3-Tier Audit)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="border-l-2 border-[#CC5500] pl-4">
                <strong className="block text-sm font-bold text-[#2D2824] mb-1">
                  01. 仿真推演
                </strong>
                <span className="text-[0.85rem] text-[#666]">
                  落地前通过数字孪生沙盘验证
                </span>
              </div>
              <div className="border-l-2 border-[#CC5500] pl-4">
                <strong className="block text-sm font-bold text-[#2D2824] mb-1">
                  02. 实时校验
                </strong>
                <span className="text-[0.85rem] text-[#666]">
                  运行期逻辑勾稽与异常熔断
                </span>
              </div>
              <div className="border-l-2 border-[#CC5500] pl-4">
                <strong className="block text-sm font-bold text-[#2D2824] mb-1">
                  03. 周期复盘
                </strong>
                <span className="text-[0.85rem] text-[#666]">
                  季度数据一致性与策略优化
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info in CoverPage */}
        <div className="mt-12 pt-6 border-t border-[#E8E3DF] flex flex-wrap items-center justify-between gap-4 text-xs text-[#666] font-space-mono">
          <div>CONFIDENTIAL // ENTERPRISE ARCHITECTURE 2026</div>
          <div>陕西康源投资（集团）有限公司 · 数字化转型办公室</div>
        </div>
      </div>
    );
  }

  // VARIATION 2: Swiss Clean Grid Architecture Cover
  if (currentDesign === 'variation-2') {
    return (
      <div className="w-full bg-white rounded-none border-2 border-slate-900 p-8 sm:p-12 my-4 pdf-avoid-break text-slate-900 flex flex-col justify-between min-h-[760px]">
        <div>
          {/* Top Swiss Monospace Meta Bar */}
          <div className="border-b-2 border-slate-900 pb-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="font-bold flex items-center space-x-3">
              <span className="bg-slate-900 text-white px-2 py-0.5">ARCH-01</span>
              <span>SHAANXI KANGYUAN INVESTMENT GROUP</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <span>EDITION: 2026-VER.2.6</span>
              <span>|</span>
              <span className="text-slate-900 font-bold">STATUS: PRODUCTION AUDITED</span>
            </div>
          </div>

          {/* Geometric Title Block */}
          <div className="pt-10 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-2">
                [ 00 / WHITE PAPER OVERVIEW ]
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase">
                {variant.coverTitle}
              </h1>
              <div className="text-lg font-bold text-slate-700 mt-3">
                {variant.coverSubtitle}
              </div>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed max-w-2xl font-mono">
                {variant.description}
              </p>
            </div>

            {/* Right Structural Grid Box */}
            <div className="lg:col-span-4 border border-slate-900 p-5 space-y-3 font-mono text-xs">
              <div className="font-bold border-b border-slate-200 pb-2 flex justify-between">
                <span>SPECIFICATION</span>
                <span>VALUE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">DETERMINISM:</span>
                <span className="font-bold">100.0% (CODE-SANDBOX)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">STANDARDS CODIFIED:</span>
                <span className="font-bold">213 MODULES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SPEEDUP FACTOR:</span>
                <span className="font-bold">98% / 10-MINUTES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AGENT ARRAY:</span>
                <span className="font-bold">4 DEDICATED ROLES</span>
              </div>
            </div>
          </div>

          {/* Monospace 4-column breakdown */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-t-2 border-slate-900 font-mono text-xs">
            <div className="p-3 bg-slate-50 border border-slate-300">
              <div className="text-slate-500">01 / SHIFT-LEFT</div>
              <div className="font-bold text-sm text-slate-900 mt-1">代码接管确定性</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-300">
              <div className="text-slate-500">02 / SANDBOX</div>
              <div className="font-bold text-sm text-slate-900 mt-1">Python四则运算隔离</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-300">
              <div className="text-slate-500">03 / CONTINUOUS AUDIT</div>
              <div className="font-bold text-sm text-slate-900 mt-1">Pre/Runtime/Post熔断</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-300">
              <div className="text-slate-500">04 / BENCHMARK</div>
              <div className="font-bold text-sm text-slate-900 mt-1">康源 7家医养真实落地</div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center space-x-3 no-print">
            <button
              onClick={onStartReading}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all flex items-center cursor-pointer"
            >
              [ EXECUTE: READ_DOC ]
            </button>
            <button
              onClick={onPrint}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-900 font-bold transition-all flex items-center cursor-pointer"
            >
              [ EXPORT_PDF ]
            </button>
          </div>
          <div className="text-slate-500">
            REF: MAS-KY-2026-CH01 · RESTRICTED DISTRIBUTION
          </div>
        </div>
      </div>
    );
  }

  // VARIATION 4: Executive Consulting Briefing Cover (Clean Ivory / Navy Accent)
  if (currentDesign === 'variation-4') {
    return (
      <div className="w-full bg-[#FAFAFA] rounded-xl border-l-8 border-l-indigo-700 border border-slate-200/90 shadow-md p-8 sm:p-12 my-4 pdf-avoid-break text-slate-900 flex flex-col justify-between min-h-[760px]">
        <div>
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold text-indigo-700 tracking-wider uppercase">
                EXECUTIVE MANAGEMENT STRATEGY BRIEFING
              </div>
              <div className="text-xs text-slate-500 font-medium">
                呈阅对象：董事长、总裁、集团投资决策委员会、各事业部总经理
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-indigo-100/70 text-indigo-800 rounded text-xs font-bold">
                高管决策专阅
              </span>
              <span className="px-3 py-1 bg-white border border-slate-300 text-slate-700 rounded text-xs font-mono">
                VER 2.6.4
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="py-10">
            <div className="text-sm font-bold text-indigo-600 mb-2">
              数字化转型攻坚 · 落地实战指南
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {variant.coverTitle}
            </h1>
            <div className="text-lg font-semibold text-slate-700 max-w-3xl mb-6">
              {variant.coverSubtitle}
            </div>

            {/* Executive Callout Box */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs max-w-4xl mb-8">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                核心决策要点（EXECUTIVE TAKEAWAYS）
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed text-slate-700">
                <div className="border-l-2 border-indigo-600 pl-3">
                  <strong className="block text-slate-900 font-bold mb-1">确定性架构重构</strong>
                  AI负责复杂意图理解，代码沙箱接管财务与算力，消除幻觉风险。
                </div>
                <div className="border-l-2 border-emerald-600 pl-3">
                  <strong className="block text-slate-900 font-bold mb-1">213项资产代码化</strong>
                  将老专家脑中规则沉淀为企业数字资产，防止人才流失导致标准失传。
                </div>
                <div className="border-l-2 border-amber-600 pl-3">
                  <strong className="block text-slate-900 font-bold mb-1">可量化商业回报</strong>
                  报表核算提效 98%，违规风险实时阻断，全面支撑医养板块跨区域扩张。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3 no-print">
            <button
              onClick={onStartReading}
              className="px-6 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-sm font-semibold transition-all flex items-center shadow-md cursor-pointer"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              阅读战略正文
            </button>
            <button
              onClick={onPrint}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-sm font-semibold transition-all flex items-center cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 mr-1.5 text-emerald-600" />
              导出决策研报 PDF
            </button>
          </div>
          <div className="text-xs text-slate-500">
            陕西康源投资（集团）有限公司 · 商业机密
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT (VARIATION 3 & 5): Popular Half-White Dual Tone Cover
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden my-4 pdf-avoid-break grid grid-cols-1 lg:grid-cols-12 min-h-[760px]">
      {/* LEFT HALF (60% width on desktop): Pure Crisp White Editorial Panel */}
      <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white text-slate-900">
        <div>
          {/* Top metadata badge & organization line */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-600/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider text-indigo-700 uppercase">
                  陕西康源投资（集团）有限公司 · 联合发布
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  企业级数字化转型与落地交付全景白皮书
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-xs font-semibold">
                {variant.badge}
              </span>
              <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-full text-xs font-mono font-medium">
                VER 2.6.4
              </span>
            </div>
          </div>

          {/* Main Title Section */}
          <div className="pt-8 pb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{variant.tag} · {variant.estimatedPages}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              {variant.coverTitle}
            </h1>

            <div className="text-lg sm:text-xl font-bold text-indigo-600 tracking-tight mb-5">
              {variant.coverSubtitle}
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {variant.description}
            </p>
          </div>

          {/* Quick Metadata Matrix (Clear & Structured) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 pb-6 border-t border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px] font-medium">目标受众</span>
              <span className="text-slate-800 font-semibold mt-0.5 block">{variant.targetAudience}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] font-medium">标杆实战单位</span>
              <span className="text-slate-800 font-semibold mt-0.5 block">康源智脑医养工程</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] font-medium">核心数据资产</span>
              <span className="text-slate-800 font-semibold mt-0.5 block">213项康源标准代码化</span>
            </div>
          </div>
        </div>

        {/* Bottom Actions & Document Reference */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3 no-print">
            <button
              onClick={onStartReading}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all flex items-center shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              进入正文研读
            </button>
            <button
              onClick={onPrint}
              className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-sm font-semibold transition-all flex items-center shadow-2xs cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 mr-1.5 text-emerald-600" />
              打印 / 导出 PDF
            </button>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center">
            <Hash className="w-3.5 h-3.5 mr-1 text-slate-400" />
            MAS-KY-2026-{currentVariant.toUpperCase()}
          </div>
        </div>
      </div>

      {/* RIGHT HALF (40% width on desktop): Deep Executive Navy Architectural Showcase Panel */}
      <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16"></div>

        <div className="relative z-10">
          {/* Top Panel Tag */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                SYSTEM OPERATIONAL
              </span>
            </div>
            <div className="flex items-center text-xs text-slate-400">
              <Shield className="w-3.5 h-3.5 mr-1 text-indigo-400" />
              商业机密 · 内部审签
            </div>
          </div>

          <div className="pt-6 pb-4">
            <div className="text-xs font-bold text-indigo-300 tracking-widest uppercase mb-1">
              Architecture Core Metrics
            </div>
            <h3 className="text-lg font-extrabold text-white">
              落地交付硬性工程指标
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              以 100% 确定性执行杜绝大模型随机幻觉，实现医养业务自动化闭环。
            </p>
          </div>

          {/* High-Impact Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 shadow-xs">
              <div className="text-xs text-slate-400 font-medium">执行确定性</div>
              <div className="text-2xl sm:text-3xl font-black text-indigo-400 mt-1">100%</div>
              <p className="text-[11px] text-slate-400 mt-1">
                刚性四则运算隔离 Python 执行，财务计算零幻觉。
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 shadow-xs">
              <div className="text-xs text-slate-400 font-medium">规范代码化</div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">213项</div>
              <p className="text-[11px] text-slate-400 mt-1">
                康源医养全业务标准转为机器规则与自动审计器。
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 shadow-xs">
              <div className="text-xs text-slate-400 font-medium">报告周期提效</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">98%</div>
              <p className="text-[11px] text-slate-400 mt-1">
                从 3~5 工作日缩短至 10 分钟全集团实时生成。
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 shadow-xs">
              <div className="text-xs text-slate-400 font-medium">四大智能体</div>
              <div className="text-2xl sm:text-3xl font-black text-sky-400 mt-1">4 阵列</div>
              <p className="text-[11px] text-slate-400 mt-1">
                运营聚合 / 标准审计 / 人才辅导 / 决策顾问。
              </p>
            </div>
          </div>
        </div>

        {/* Pipeline Mini Visualizer */}
        <div className="relative z-10 pt-4 border-t border-slate-800 text-xs">
          <div className="text-[11px] text-slate-400 font-semibold mb-2">
            三级持续审计与动态熔断流水线:
          </div>
          <div className="flex items-center justify-between bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60 text-[11px] text-slate-300 font-mono">
            <span className="text-sky-300">① Pre-Run推演</span>
            <span className="text-slate-500">➔</span>
            <span className="text-emerald-300">② Runtime交叉</span>
            <span className="text-slate-500">➔</span>
            <span className="text-amber-300">③ Post-Run熔断</span>
          </div>
        </div>
      </div>
    </div>
  );
};

