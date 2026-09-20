/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Calculator, 
  Layers, 
  Building2, 
  Activity, 
  FileSpreadsheet, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { DocumentVariantId, DesignVariationId } from '../types';
import { DOCUMENT_VARIANTS } from '../data/variantsData';

interface TableOfContentsProps {
  currentVariant?: DocumentVariantId;
  activeSection: string;
  onSelectSection: (id: string) => void;
  currentDesign?: DesignVariationId;
}

export const TOC_SECTIONS = [
  {
    id: 'section-1',
    num: '01',
    title: '序言与核心安全哲学：AI本质与不可逆执行风险',
    icon: ShieldCheck,
    page: 2,
    subsections: [
      { id: 'sub-1-1', title: '1.1 模型失控与沙盒逃逸的法理剖析', page: 2 },
      { id: 'sub-1-2', title: '1.2 "左移确定性"铁律：AI出主意，代码把关门', page: 3 },
      { id: 'sub-1-3', title: '1.3 云端内容护栏 vs 本地执行护栏（双门模型）', page: 3 },
      { id: 'sub-1-4', title: '1.4 架构师角色演进：领域架构师的崛起', page: 4 }
    ]
  },
  {
    id: 'section-2',
    num: '02',
    title: '实战场景：多智能体薪资考勤自动化精算体系',
    icon: Calculator,
    page: 5,
    subsections: [
      { id: 'sub-2-1', title: '2.1 钉钉非结构化考勤文本与数据口径映射', page: 5 },
      { id: 'sub-2-2', title: '2.2 三大核心智能体岗位定义与工作说明书', page: 6 },
      { id: 'sub-2-3', title: '2.3 刚性算法公式池与四则运算隔离原则', page: 7 },
      { id: 'sub-2-4', title: '2.4 零幻觉生产级 Python 隔离执行脚本示范', page: 7 }
    ]
  },
  {
    id: 'section-3',
    num: '03',
    title: '主流智能体框架深度横评与混合架构选型',
    icon: Layers,
    page: 8,
    subsections: [
      { id: 'sub-3-1', title: '3.1 CrewAI vs LangGraph vs Dify vs Hermes 对比', page: 8 },
      { id: 'sub-3-2', title: '3.2 多维雷达评价矩阵（灵活性、可控度、安全性）', page: 9 },
      { id: 'sub-3-3', title: '3.3 黄金三角混合部署架构：本地骨架 + 云端插件', page: 9 }
    ]
  },
  {
    id: 'section-4',
    num: '04',
    title: '企业标杆实战：陕西康源集团"康源智脑"落地策划',
    icon: Building2,
    page: 10,
    subsections: [
      { id: 'sub-4-1', title: '4.1 集团业务版图与213项标准化体系概况', page: 10 },
      { id: 'sub-4-2', title: '4.2 "康源智脑"三层端云协同技术架构', page: 11 },
      { id: 'sub-4-3', title: '4.3 四大子智能体角色分工与差异化模型选型', page: 12 },
      { id: 'sub-4-4', title: '4.4 四阶段落地推进路线图与可量化 ROI 效益', page: 13 }
    ]
  },
  {
    id: 'section-5',
    num: '05',
    title: '独立监察与持续可观测审计体系 (3-Tier Audit)',
    icon: Activity,
    page: 14,
    subsections: [
      { id: 'sub-5-1', title: '5.1 层级1：方案落地前数字孪生沙盘推演', page: 14 },
      { id: 'sub-5-2', title: '5.2 层级2：运行中"三明治"实时交叉验证引擎', page: 15 },
      { id: 'sub-5-3', title: '5.3 层级3：周期性复盘与决策建议采纳闭环', page: 15 },
      { id: 'sub-5-4', title: '5.4 异常分级应急响应矩阵 (L1/L2/L3熔断机制)', page: 16 }
    ]
  },
  {
    id: 'section-6',
    num: '06',
    title: '企业多智能体部署 · 10维度信息采集标准问卷',
    icon: FileSpreadsheet,
    page: 17,
    subsections: [
      { id: 'sub-6-1', title: '6.1 问卷使用说明、保密知悉与SOP流转图', page: 17 },
      { id: 'sub-6-2', title: '6.2 完整十部分问卷内容与康源真实填报示范', page: 18 },
      { id: 'sub-6-3', title: '6.3 附录A填报精度原则与附录B多部门签署单', page: 22 }
    ]
  }
];

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  currentVariant = 'full',
  activeSection,
  onSelectSection,
  currentDesign = 'variation-1'
}) => {
  const variant = DOCUMENT_VARIANTS[currentVariant] || DOCUMENT_VARIANTS.full;
  const filteredSections = TOC_SECTIONS.filter(sec => variant.sections.includes(sec.id));
  const isV7 = currentDesign === 'variation-7';
  const isV1 = currentDesign === 'variation-1';

  const containerClasses = isV1
    ? 'bg-white border border-[#E8E3DF] p-6 md:p-8 text-[#2D2824] rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.03)]'
    : isV7
      ? 'bg-white border border-[rgba(28,28,26,0.12)] p-6 md:p-8 text-[#1C1C1A]'
      : 'bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm';

  const headerBorderClass = isV1 ? 'border-[#E8E3DF]' : isV7 ? 'border-[rgba(28,28,26,0.12)]' : 'border-slate-100';
  const iconColorClass = (isV1 || isV7) ? 'text-[#CC5500]' : 'text-indigo-600';

  return (
    <div className={`my-6 pdf-avoid-break ${containerClasses}`}>
      <div className={`flex flex-wrap items-center justify-between pb-4 mb-6 gap-2 border-b ${headerBorderClass}`}>
        <div className="flex items-center space-x-2.5">
          <BookOpen className={`w-5 h-5 ${iconColorClass}`} />
          <h2 className={`text-xl font-bold tracking-tight ${
            isV7 ? 'font-cormorant text-2xl font-semibold text-[#1C1C1A]' : isV1 ? 'text-[#2D2824]' : 'text-slate-900'
          }`}>
            文档目录索引 (Table of Contents)
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-xs px-2.5 py-1 rounded-md font-medium border ${
            isV1
              ? 'bg-[#FDF5F0] text-[#CC5500] border-[#E8E3DF] font-space-mono font-bold'
              : isV7 
                ? 'bg-[#F8F7F4] text-[#1C1C1A] border-[rgba(28,28,26,0.15)] font-space-mono font-bold' 
                : 'bg-indigo-50 text-indigo-700 border-indigo-200'
          }`}>
            {variant.name}
          </span>
          <span className={`text-xs font-mono ${(isV1 || isV7) ? 'font-space-mono text-[#666]' : 'text-slate-500'}`}>
            收录 {filteredSections.length} 个核心模块 / {variant.estimatedPages}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <div 
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`p-4 transition-all cursor-pointer border ${
                isV1
                  ? isActive 
                    ? 'bg-[#FDF5F0] border-[#CC5500] rounded-[4px] shadow-xs' 
                    : 'bg-white hover:bg-[#FDF5F0]/60 border-[#E8E3DF] rounded-[4px]'
                  : isV7
                    ? isActive 
                      ? 'bg-[#F8F7F4] border-[rgb(204,85,0)] shadow-xs' 
                      : 'bg-white hover:bg-[#F8F7F4]/50 border-[rgba(28,28,26,0.12)]'
                    : isActive
                      ? 'rounded-xl bg-indigo-50/70 border-indigo-300 shadow-sm'
                      : 'rounded-xl bg-slate-50/60 hover:bg-slate-100/80 border-slate-200/80'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className={`w-8 h-8 flex items-center justify-center ${
                    isV1
                      ? isActive 
                        ? 'bg-[#CC5500] text-white rounded-[2px]' 
                        : 'bg-[#FDF5F0] text-[#CC5500] border border-[#E8E3DF] rounded-[2px]'
                      : isV7
                        ? isActive 
                          ? 'bg-[rgb(204,85,0)] text-white' 
                          : 'bg-[#F8F7F4] text-[#1C1C1A] border border-[rgba(28,28,26,0.12)]'
                        : isActive 
                          ? 'rounded-lg bg-indigo-600 text-white' 
                          : 'rounded-lg bg-slate-200 text-slate-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${
                      (isV1 || isV7) ? 'font-space-mono text-[#CC5500]' : 'font-mono text-indigo-600'
                    }`}>
                      PART {sec.num}
                    </span>
                    <h3 className={`text-sm font-bold leading-snug line-clamp-1 ${
                      isV1 ? 'text-[#2D2824]' : isV7 ? 'font-sans text-[#1C1C1A]' : 'text-slate-900'
                    }`}>
                      {sec.title}
                    </h3>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 shrink-0 ml-2 border ${
                  isV1
                    ? 'font-space-mono text-[#666] bg-[#FDF5F0] border-[#E8E3DF] rounded-[2px]'
                    : isV7 
                      ? 'font-space-mono text-[rgba(28,28,26,0.6)] bg-white border-[rgba(28,28,26,0.12)]' 
                      : 'font-mono text-slate-400 bg-white rounded border-slate-200'
                }`}>
                  P.{sec.page}
                </span>
              </div>

              <div className={`mt-3 pt-2.5 space-y-1 border-t ${
                isV1 ? 'border-[#E8E3DF]' : isV7 ? 'border-[rgba(28,28,26,0.1)]' : 'border-slate-200/60'
              }`}>
                {sec.subsections.map((sub) => (
                  <div 
                    key={sub.id} 
                    className={`flex items-center justify-between text-xs transition-colors ${
                      (isV1 || isV7) 
                        ? 'text-[#666] hover:text-[#CC5500]' 
                        : 'text-slate-600 hover:text-indigo-600'
                    }`}
                  >
                    <span className="truncate pr-2">• {sub.title}</span>
                    <span className={`text-[10px] shrink-0 ${
                      (isV1 || isV7) ? 'font-space-mono text-[#888]' : 'font-mono text-slate-400'
                    }`}>
                      P.{sub.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

