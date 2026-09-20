/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Download, Sparkles, Shield, ArrowRight, Layers, FileText, BookOpen } from 'lucide-react';
import { DocumentVariantId, DesignVariationId } from '../types';
import { DOCUMENT_VARIANTS } from '../data/variantsData';

interface EditorialHeroProps {
  currentVariant: DocumentVariantId;
  onOpenPrintModal: () => void;
  onStartReading: () => void;
  currentDesign?: DesignVariationId;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  currentVariant,
  onOpenPrintModal,
  onStartReading,
  currentDesign = 'variation-7'
}) => {
  const variant = DOCUMENT_VARIANTS[currentVariant] || DOCUMENT_VARIANTS.full;

  // Variation 1 Warm Eggshell Executive Hero (Exact match to User Design Variation 1)
  if (currentDesign === 'variation-1') {
    return (
      <div className="w-full max-w-[1000px] mx-auto p-6 sm:p-10 bg-white border border-[#E8E3DF] shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-[4px] mb-8 text-[#2D2824] pdf-avoid-break">
        {/* Top Label */}
        <div className="font-space-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#CC5500] opacity-80 mb-4 font-bold">
          White Paper / Architecture 2026
        </div>

        {/* Section Header with 2px accent bottom border */}
        <div className="border-b-2 border-[#CC5500] pb-4 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold text-[#2D2824] tracking-[-0.02em] leading-tight m-0">
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
                onClick={onOpenPrintModal}
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
                <span>阅读白皮书全文</span>
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
    );
  }

  // Variation 7 Architectural Hero (Exact match to Design Specification)
  if (currentDesign === 'variation-7') {
    return (
      <div className="bg-white border border-[rgba(28,28,26,0.12)] p-8 sm:p-14 lg:p-16 mb-8 pdf-avoid-break text-[#1C1C1A]">
        {/* Section Header with Large Cormorant Serif Title */}
        <div className="section-header">
          <div className="font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-[rgb(204,85,0)] font-bold mb-4">
            System-Arch // Enterprise Multi-Agent Specification
          </div>
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.92] tracking-tight mb-6 text-[#1C1C1A]">
            企业多智能体架构<br />
            落地实施方案
          </h1>
        </div>
        
        {/* Lead Paragraph */}
        <p className="text-base sm:text-lg leading-[1.8] text-[rgba(28,28,26,0.65)] max-w-3xl font-sans mb-8">
          包含全部 6 大核心模块与 14 个章节，涵盖安全哲学、双门模型、考勤薪资精算流水线、主流框架横评、康源智脑标杆工程、三级审计闭环及 10 维度调研问卷全集。
        </p>
        
        {/* Action Button Group */}
        <div className="cta-group flex flex-wrap gap-4 mb-14 no-print">
          <button 
            onClick={onStartReading}
            className="btn-v7-primary"
          >
            <BookOpen className="w-3.5 h-3.5 mr-2" />
            <span>阅读白皮书</span>
          </button>
          <button 
            onClick={onOpenPrintModal}
            className="btn-v7-secondary"
          >
            <Printer className="w-3.5 h-3.5 mr-2" />
            <span>下载 PDF 副本</span>
          </button>
        </div>

        {/* Philosophy Block */}
        <section className="philosophy pt-10 border-t border-[rgba(28,28,26,0.12)]">
          <div className="label font-space-mono text-[0.6rem] uppercase tracking-[0.15em] text-[rgb(204,85,0)] font-bold mb-2">
            核心哲学 // 01
          </div>
          <h2 className="font-cormorant text-2xl sm:text-3xl font-normal mb-3 text-[#1C1C1A]">
            "左移确定性"铁律
          </h2>
          <p className="text-sm sm:text-base leading-[1.8] text-[rgba(28,28,26,0.6)] max-w-2xl font-sans">
            大语言模型本质是下一代 Token 的概率预测机。在要求 100% 绝对精确的严肃企业场景（财务计算、医疗监护、法律履约）中，绝对不能让模型在运行时“现场推导演算”业务公式。
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="hero bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs mb-8 pdf-avoid-break">
      {/* Top micro label & Action pill */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <span className="label">Implementation Whitepaper</span>
            <span className="badge-tag">{variant.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">
            {variant.coverTitle}
          </h1>
          <div className="text-base sm:text-xl font-semibold text-indigo-600 mt-1">
            {variant.coverSubtitle}
          </div>
        </div>

        <div className="flex items-center space-x-3 shrink-0 no-print">
          <button
            onClick={onStartReading}
            className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
          >
            阅读正文
          </button>
          <button
            onClick={onOpenPrintModal}
            className="button-primary"
          >
            <Printer className="w-4 h-4" />
            <span>导出 PDF 文档</span>
          </button>
        </div>
      </div>

      {/* Description text */}
      <p className="max-w-3xl text-slate-600 text-sm sm:text-base leading-relaxed mt-5">
        {variant.description}
      </p>

      {/* 3 Metric stat cards matching Variation 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-50/70 p-4 sm:p-5 rounded-xl border border-slate-200/80">
          <span className="label">确定性 (Determinism)</span>
          <span className="stat mt-1">100%</span>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            代码逻辑提供绝对执行保障，杜绝大模型在财务与敏感业务上的随机幻觉。
          </p>
        </div>

        <div className="bg-slate-50/70 p-4 sm:p-5 rounded-xl border border-slate-200/80">
          <span className="label">标准体系 (Standards)</span>
          <span className="stat mt-1">213项</span>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            康源美宏标准机器代码化，实现医养场景毫米级规范校验与自动合规审计。
          </p>
        </div>

        <div className="bg-slate-50/70 p-4 sm:p-5 rounded-xl border border-slate-200/80">
          <span className="label">效能跃升 (Efficiency)</span>
          <span className="stat mt-1">98%</span>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            月度全集团运营分析报告出具时间由 3~5 个工作日缩减至 10 分钟。
          </p>
        </div>
      </div>
    </div>
  );
};
