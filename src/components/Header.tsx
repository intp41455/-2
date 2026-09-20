/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Printer, 
  BookOpen, 
  Sliders, 
  Search, 
  Sparkles, 
  Layers, 
  Download,
  Eye,
  FileText,
  ChevronDown,
  Menu,
  X,
  Palette
} from 'lucide-react';
import { DocumentViewMode, DocumentVariantId, DesignVariationId } from '../types';
import { DOCUMENT_VARIANTS, DESIGN_VARIATIONS } from '../data/variantsData';

interface HeaderProps {
  viewMode: DocumentViewMode;
  onChangeViewMode: (mode: DocumentViewMode) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onOpenPrintModal: () => void;
  activeSectionId: string;
  currentVariant: DocumentVariantId;
  onSelectVariant: (v: DocumentVariantId) => void;
  currentDesign: DesignVariationId;
  onSelectDesign: (d: DesignVariationId) => void;
  onToggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onChangeViewMode,
  searchTerm,
  onSearchChange,
  onOpenPrintModal,
  activeSectionId,
  currentVariant,
  onSelectVariant,
  currentDesign,
  onSelectDesign,
  onToggleMobileMenu,
  isMobileMenuOpen
}) => {
  const currentVariantConfig = DOCUMENT_VARIANTS[currentVariant] || DOCUMENT_VARIANTS.full;
  const currentDesignConfig = DESIGN_VARIATIONS[currentDesign] || DESIGN_VARIATIONS['variation-5'];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs no-print">
      <div className="w-full px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left branding & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2.5 shrink-0">
          {currentDesign === 'variation-5' && onToggleMobileMenu && (
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="切换侧边栏导航"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}

          <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-2xs">
            <Layers className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                企业多智能体架构白皮书
              </h1>
              {/* Content Variant Selector Dropdown */}
              <div className="relative inline-block">
                <select
                  value={currentVariant}
                  onChange={(e) => onSelectVariant(e.target.value as DocumentVariantId)}
                  className="bg-indigo-50 text-indigo-700 text-xs font-semibold py-0.5 pl-2 pr-6 rounded-md border border-indigo-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer appearance-none"
                  title="切换文档内容版本 (全景/战略/SOP/技术/审计)"
                >
                  <option value="full">📖 全景综合版 (全集 6模块)</option>
                  <option value="executive">👔 管理决策战略版</option>
                  <option value="questionnaire">📋 业务调研SOP问卷版</option>
                  <option value="technical">🛠️ 技术工程与安全版</option>
                  <option value="audit_case">🛡️ 康源智脑实战与审计版</option>
                </select>
                <ChevronDown className="w-3 h-3 text-indigo-500 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <p className="text-[11px] text-slate-500 hidden md:block">
              {currentVariantConfig.tag} · {currentVariantConfig.estimatedPages}
            </p>
          </div>
        </div>

        {/* Center: Design Variation Style Switcher */}
        <div className="flex items-center space-x-2 bg-slate-100/90 border border-slate-200/80 px-2 sm:px-3 py-1 rounded-xl">
          <Palette className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
              设计风格变体:
            </span>
            <div className="relative inline-block">
              <select
                value={currentDesign}
                onChange={(e) => onSelectDesign(e.target.value as DesignVariationId)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer pr-4 appearance-none hover:text-[rgb(204,85,0)] transition-colors"
                title="切换设计风格变体"
              >
                <option value="variation-1">📄 Variation 1 · 暖白出版研报风 (暖白纸感 / 焦糖重音 / 2:1网格)</option>
                <option value="variation-7">🏛️ Variation 7 · 建筑典雅出版风 (暖纸底色 / Cormorant衬线 / 赭石重音)</option>
                <option value="variation-2">📐 Variation 2 · 瑞士结构网格风 (纯白底色 / 严谨逻辑)</option>
                <option value="variation-3">🖥️ Variation 3 · 现代白底双栏工作台 (大屏双栏 / 清晰目录)</option>
                <option value="variation-4">📑 Variation 4 · 咨询战略简报风 (雅致米白 / 高管决策)</option>
                <option value="variation-5">✨ Variation 5 · 现代科技简约风 (半白半深双拼 / 指标Hero)</option>
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Center Search */}
        <div className="relative max-w-xs w-full hidden lg:block">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="搜索规则、Agent、问卷或公式..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg border border-transparent transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="text-xs text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2"
            >
              ×
            </button>
          )}
        </div>

        {/* Right View Modes & Print action */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* View switcher */}
          <div className="bg-slate-100 p-1 rounded-lg border border-slate-200 flex items-center text-xs">
            <button
              onClick={() => onChangeViewMode('paged')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                viewMode === 'paged'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="A4 装订分页排版预览"
            >
              <span className="flex items-center">
                <FileText className="w-3.5 h-3.5 mr-1" />
                <span className="hidden sm:inline">A4装订</span>视图
              </span>
            </button>

            <button
              onClick={() => onChangeViewMode('continuous')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                viewMode === 'continuous'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="无缝流式长文阅读"
            >
              <span className="flex items-center">
                <BookOpen className="w-3.5 h-3.5 mr-1" />
                <span className="hidden sm:inline">流式</span>阅读
              </span>
            </button>

            <button
              onClick={() => onChangeViewMode('interactive')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="交互式计算沙盘与流程图透视"
            >
              <span className="flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                <span className="hidden sm:inline">仿真</span>沙盘
              </span>
            </button>
          </div>

          {/* Export PDF button */}
          <button
            onClick={onOpenPrintModal}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center shadow-sm shadow-emerald-600/20 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 mr-1.5" />
            <span className="font-medium">导出 / 打印 PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
