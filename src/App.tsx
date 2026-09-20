/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { SidebarNav } from './components/SidebarNav';
import { EditorialHero } from './components/EditorialHero';
import { CoverPage } from './components/CoverPage';
import { TableOfContents, TOC_SECTIONS } from './components/TableOfContents';
import { DocumentBody } from './components/DocumentBody';
import { InteractivePlayground } from './components/InteractivePlayground';
import { PrintHelperModal } from './components/PrintHelperModal';
import { DocumentViewMode, DocumentVariantId, DesignVariationId } from './types';
import { DOCUMENT_VARIANTS, DESIGN_VARIATIONS } from './data/variantsData';
import { openPrintableTab } from './utils/htmlExporter';
import { 
  Printer, 
  ArrowUp, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Share2, 
  FileDown,
  Sparkles,
  Palette,
  Info
} from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<DocumentViewMode>('paged');
  const [currentVariant, setCurrentVariant] = useState<DocumentVariantId>('full');
  const [currentDesign, setCurrentDesign] = useState<DesignVariationId>('variation-1');
  const [showAllSections, setShowAllSections] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('section-1');
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showDesignNotice, setShowDesignNotice] = useState<boolean>(true);

  // Monitor scroll for back to top
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartReading = () => {
    const targetSection = currentVariant === 'questionnaire' ? 'section-6' : 'section-1';
    handleScrollToSection(targetSection);
  };

  const handleConfirmPrint = () => {
    // In sandboxed iframes, window.print() is often blocked by browsers.
    // openPrintableTab opens a clean print-ready tab or triggers a self-contained HTML download.
    const inIframe = window.self !== window.top;
    if (inIframe) {
      openPrintableTab(currentVariant, true);
    } else {
      try {
        window.print();
      } catch (err) {
        openPrintableTab(currentVariant, true);
      }
    }
  };

  const currentConfig = DOCUMENT_VARIANTS[currentVariant] || DOCUMENT_VARIANTS.full;
  const currentDesignConfig = DESIGN_VARIATIONS[currentDesign] || DESIGN_VARIATIONS['variation-1'];

  // Determine root container background based on design style variation
  const getContainerClasses = () => {
    switch (currentDesign) {
      case 'variation-1':
        return 'min-h-screen bg-[#FDFBFA] text-[#2D2824] flex flex-col antialiased selection:bg-[#CC5500] selection:text-white';
      case 'variation-7':
        return 'min-h-screen bg-[#F8F7F4] text-[#1C1C1A] flex flex-col antialiased selection:bg-[rgb(204,85,0)] selection:text-white';
      case 'variation-2':
        return 'min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-slate-900 selection:text-white';
      case 'variation-3':
        return 'min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-indigo-600 selection:text-white';
      case 'variation-4':
        return 'min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col antialiased selection:bg-indigo-700 selection:text-white';
      case 'variation-5':
      default:
        return 'min-h-screen bg-[#F9FAFB] text-[#111827] flex flex-col antialiased selection:bg-indigo-600 selection:text-white';
    }
  };

  const isTwoColumnLayout = currentDesign === 'variation-7' || currentDesign === 'variation-5' || currentDesign === 'variation-3';

  return (
    <div className={getContainerClasses()}>
      {/* Top Application Bar (hidden during printing) */}
      <Header
        viewMode={viewMode}
        onChangeViewMode={(mode) => setViewMode(mode)}
        searchTerm={searchTerm}
        onSearchChange={(term) => setSearchTerm(term)}
        onOpenPrintModal={() => setShowPrintModal(true)}
        activeSectionId={activeSection}
        currentVariant={currentVariant}
        onSelectVariant={(v) => {
          setCurrentVariant(v);
          setShowAllSections(false);
        }}
        currentDesign={currentDesign}
        onSelectDesign={(d) => {
          setCurrentDesign(d);
          setShowDesignNotice(true);
        }}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Design Variation Active Notification Banner (dismissible) */}
      {showDesignNotice && (
        <div className="bg-indigo-900 text-white px-4 py-2 text-xs flex items-center justify-between no-print shadow-sm">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-indigo-300" />
              <span>
                当前设计风格变体：<strong className="font-semibold text-indigo-200">{currentDesignConfig.name}</strong>（{currentDesignConfig.tag}）。
              </span>
              <span className="hidden md:inline text-indigo-300 text-[11px]">
                — 您可在顶栏随时自由切换全部 5 种历史设计风格。
              </span>
            </div>
            <button
              onClick={() => setShowDesignNotice(false)}
              className="text-indigo-300 hover:text-white text-xs px-2 py-0.5 rounded cursor-pointer transition-colors"
            >
              ✕ 知道了
            </button>
          </div>
        </div>
      )}

      {/* Main Workspace Layout based on Design Variation */}
      {isTwoColumnLayout ? (
        /* Variation 7, 5 & 3: Two-column layout with fixed aside & rich main content */
        <div className="flex-1 flex w-full relative">
          {/* Left Aside Navigation */}
          <SidebarNav
            activeSection={activeSection}
            onSelectSection={handleScrollToSection}
            currentVariant={currentVariant}
            onSelectVariant={(v) => {
              setCurrentVariant(v);
              setShowAllSections(false);
            }}
            onOpenPrintModal={() => setShowPrintModal(true)}
            currentDesign={currentDesign}
            isOpenMobile={isMobileMenuOpen}
            onCloseMobile={() => setIsMobileMenuOpen(false)}
          />

          {/* Right Main Content Stream */}
          <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-6 sm:py-8 max-w-6xl mx-auto">
            {/* Editorial Hero Section (Rendered in Variation 7 & 5) */}
            {(currentDesign === 'variation-7' || currentDesign === 'variation-5') && (
              <EditorialHero
                currentVariant={currentVariant}
                currentDesign={currentDesign}
                onOpenPrintModal={() => setShowPrintModal(true)}
                onStartReading={handleStartReading}
              />
            )}

            {/* Printable Document Container */}
            <div id="printable-document" className="w-full pdf-container">
              <CoverPage 
                currentVariant={currentVariant}
                currentDesign={currentDesign}
                onStartReading={handleStartReading} 
                onPrint={() => setShowPrintModal(true)} 
              />

              <TableOfContents 
                currentVariant={currentVariant}
                activeSection={activeSection}
                onSelectSection={handleScrollToSection}
                currentDesign={currentDesign}
              />

              {viewMode === 'interactive' && (
                <div className="my-6">
                  <div className="bg-indigo-900/10 border border-indigo-500/30 p-4 rounded-xl text-xs text-indigo-900 mb-4 flex items-center justify-between">
                    <span className="font-semibold flex items-center">
                      <Sparkles className="w-4 h-4 mr-1.5 text-indigo-600" />
                      当前处于【动态交互仿真沙盘模式】：您可自由试运行多智能体执行链路，点击下方全文档回到阅读流。
                    </span>
                    <button
                      onClick={() => setViewMode('paged')}
                      className="px-3 py-1 bg-white border border-indigo-200 rounded text-indigo-700 font-medium hover:bg-indigo-50 cursor-pointer"
                    >
                      返回 A4 精装排版
                    </button>
                  </div>
                  <InteractivePlayground />
                </div>
              )}

              <DocumentBody 
                viewMode={viewMode}
                searchTerm={searchTerm}
                currentVariant={currentVariant}
                currentDesign={currentDesign}
                showAllSections={showAllSections}
                onToggleShowAll={() => setShowAllSections(!showAllSections)}
              />
            </div>
          </main>
        </div>
      ) : (
        /* Variations 1, 2, 4: Centered single-column reading flow with clean white/light styling */
        <main className="flex-1 w-full max-w-[1020px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Printable Document Container */}
          <div id="printable-document" className={`w-full pdf-container ${
            currentDesign === 'variation-1' ? 'p-0 bg-transparent' :
            currentDesign === 'variation-2' ? 'border-2 border-slate-900 p-2 sm:p-4 bg-white' :
            currentDesign === 'variation-4' ? 'border border-slate-200/90 p-2 sm:p-4 rounded-2xl bg-[#FAFAFA]' :
            'p-0 bg-white'
          }`}>
            
            {/* Executive Cover Page */}
            <CoverPage 
              currentVariant={currentVariant}
              currentDesign={currentDesign}
              onStartReading={handleStartReading} 
              onPrint={() => setShowPrintModal(true)} 
            />

            {/* Interactive Table of Contents */}
            <TableOfContents 
              currentVariant={currentVariant}
              activeSection={activeSection}
              onSelectSection={handleScrollToSection}
              currentDesign={currentDesign}
            />

            {/* Interactive Simulation Sandbox */}
            {viewMode === 'interactive' && (
              <div className="my-6">
                <div className="bg-indigo-900/10 border border-indigo-500/30 p-4 rounded-xl text-xs text-indigo-900 mb-4 flex items-center justify-between">
                  <span className="font-semibold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1.5 text-indigo-600" />
                    当前处于【动态交互仿真沙盘模式】：您可自由试运行多智能体执行链路，点击下方全文档回到阅读流。
                  </span>
                  <button
                    onClick={() => setViewMode('paged')}
                    className="px-3 py-1 bg-white border border-indigo-200 rounded text-indigo-700 font-medium hover:bg-indigo-50 cursor-pointer"
                  >
                    返回 A4 精装排版
                  </button>
                </div>
                <InteractivePlayground />
              </div>
            )}

            {/* Full Detailed Document Body */}
            <DocumentBody 
              viewMode={viewMode}
              searchTerm={searchTerm}
              currentVariant={currentVariant}
              currentDesign={currentDesign}
              showAllSections={showAllSections}
              onToggleShowAll={() => setShowAllSections(!showAllSections)}
            />
          </div>
        </main>
      )}

      {/* Floating Action Button for Back to Top (screen only) */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-600/30 transition-all cursor-pointer no-print flex items-center justify-center"
          title="返回文档顶部"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Multi-Variant Export & Print Helper Modal */}
      <PrintHelperModal
        isOpen={showPrintModal}
        onClose={() => setShowPrintModal(false)}
        currentVariant={currentVariant}
        onSelectVariant={(v) => {
          setCurrentVariant(v);
          setShowAllSections(false);
        }}
        onConfirmPrint={handleConfirmPrint}
      />

      {/* Web Footer (screen only) */}
      <footer className="mt-12 bg-white border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="label text-[10px]">© 2026</span>
            <span>企业级多智能体架构落地实施方案 · 陕西康源投资集团工程标杆</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowPrintModal(true)}
              className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer"
            >
              打印 / 导出为 PDF ({currentConfig.name})
            </button>
            <span>•</span>
            <span className="font-mono text-slate-400">MAS-KY-2026-FINAL · Ver 2.6.4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
