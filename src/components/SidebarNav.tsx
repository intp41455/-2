/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DocumentVariantId, DesignVariationId } from '../types';
import { DOCUMENT_VARIANTS } from '../data/variantsData';
import { 
  ShieldCheck, 
  Calculator, 
  Layers, 
  Building2, 
  Activity, 
  ClipboardList, 
  Printer, 
  FileDown, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SidebarNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  currentVariant: DocumentVariantId;
  onSelectVariant: (variant: DocumentVariantId) => void;
  onOpenPrintModal: () => void;
  currentDesign?: DesignVariationId;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

interface NavLinkItem {
  id: string;
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavLinkItem[] = [
  { id: 'section-1', num: '01', title: '核心哲学与架构', icon: ShieldCheck },
  { id: 'section-2', num: '02', title: '薪资考勤实战', icon: Calculator },
  { id: 'section-3', num: '03', title: '框架横评选型', icon: Layers },
  { id: 'section-4', num: '04', title: '康源智脑标杆', icon: Building2 },
  { id: 'section-5', num: '05', title: '审计监察体系', icon: Activity },
  { id: 'section-6', num: '06', title: '标准问卷调研', icon: ClipboardList },
];

export const SidebarNav: React.FC<SidebarNavProps> = ({
  activeSection,
  onSelectSection,
  currentVariant,
  onSelectVariant,
  onOpenPrintModal,
  currentDesign = 'variation-7',
  isOpenMobile = false,
  onCloseMobile
}) => {
  const currentConfig = DOCUMENT_VARIANTS[currentVariant] || DOCUMENT_VARIANTS.full;
  const isV7 = currentDesign === 'variation-7';

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile} 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden no-print"
        />
      )}

      {/* Main Aside Navigation */}
      <aside 
        className={`
          ${isV7 
            ? 'w-[280px] bg-white border-r border-[rgba(28,28,26,0.12)] px-8 py-10 text-[#1C1C1A]' 
            : 'w-72 bg-white border-r border-slate-200/80 p-6 text-slate-900'
          }
          flex flex-col justify-between shrink-0 no-print
          fixed lg:sticky top-0 h-screen z-40 overflow-y-auto transition-transform duration-200 ease-in-out
          ${isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div>
          {/* Top Header / Meta */}
          {isV7 ? (
            <div className="pb-6">
              <div className="meta font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-[rgb(204,85,0)] font-bold mb-2">
                System-Arch // 01
              </div>
              <h2 className="font-cormorant text-xl font-semibold text-[#1C1C1A] leading-tight">
                企业多智能体架构
              </h2>
              <div className="font-sans text-xs text-[rgba(28,28,26,0.6)] mt-0.5">
                落地实施方案 · V2.6.0
              </div>
            </div>
          ) : (
            <div className="pb-4 border-b border-slate-100">
              <div className="label">Architecture</div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 mt-1 flex items-center justify-between">
                <span>Enterprise Multi-Agent</span>
              </h2>
              <div className="text-xs text-slate-500 mt-1">
                企业级多智能体落地白皮书
              </div>
            </div>
          )}

          {/* Current Variant Switcher Card */}
          <div className={`my-4 p-3 rounded-lg border ${
            isV7 
              ? 'bg-[#F8F7F4]/70 border-[rgba(28,28,26,0.12)]' 
              : 'bg-slate-50 border-slate-200/80'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                isV7 ? 'font-space-mono text-[rgb(204,85,0)]' : 'text-slate-500 font-mono'
              }`}>
                {isV7 ? 'SCOPE // 专版选择' : 'Active Variant'}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-white text-[#1C1C1A] border border-[rgba(28,28,26,0.12)]">
                {currentConfig.estimatedPages}
              </span>
            </div>
            
            <select
              value={currentVariant}
              onChange={(e) => onSelectVariant(e.target.value as DocumentVariantId)}
              className="w-full bg-white text-slate-800 text-xs font-semibold py-1.5 px-2 rounded border border-[rgba(28,28,26,0.15)] focus:outline-none focus:ring-1 focus:ring-[rgb(204,85,0)] cursor-pointer"
            >
              <option value="full">📖 全景综合版 (全集 6模块)</option>
              <option value="executive">👔 管理决策战略版</option>
              <option value="questionnaire">📋 业务调研SOP问卷版</option>
              <option value="technical">🛠️ 技术工程与安全版</option>
              <option value="audit_case">🛡️ 康源智脑与审计版</option>
            </select>
          </div>

          {/* Sidebar Nav Links */}
          <nav className="section-nav mt-6">
            <div className={`mb-2 text-[10px] uppercase font-bold tracking-wider ${
              isV7 ? 'font-space-mono text-[rgba(28,28,26,0.5)]' : 'text-slate-400 font-mono'
            }`}>
              {isV7 ? 'Sections // 核心章节目录' : 'Navigation Sections'}
            </div>
            <ul className="space-y-0">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                const isIncluded = currentVariant === 'full' || currentConfig.sections.includes(item.id);

                if (isV7) {
                  return (
                    <li
                      key={item.id}
                      onClick={() => {
                        onSelectSection(item.id);
                        if (onCloseMobile) onCloseMobile();
                      }}
                      className={`
                        py-3 border-t border-[rgba(28,28,26,0.12)] text-[0.85rem] cursor-pointer transition-colors flex items-center justify-between
                        ${isActive 
                          ? 'text-[#1C1C1A] font-bold' 
                          : 'text-[rgba(28,28,26,0.6)] hover:text-[#1C1C1A]'
                        }
                        ${!isIncluded ? 'opacity-40' : ''}
                      `}
                    >
                      <span className="font-sans">
                        {item.num}. {item.title}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[rgb(204,85,0)]" />
                      )}
                    </li>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectSection(item.id);
                      if (onCloseMobile) onCloseMobile();
                    }}
                    className={`
                      w-full flex items-center justify-between py-2.5 px-2 text-left text-xs transition-colors rounded-lg cursor-pointer
                      border-b border-slate-100 last:border-b-0
                      ${isActive 
                        ? 'text-indigo-600 font-bold bg-indigo-50/70 border-indigo-100' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }
                      ${!isIncluded ? 'opacity-50' : ''}
                    `}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-semibold text-[11px] text-slate-400">
                        {item.num}
                      </span>
                      <span>{item.title}</span>
                    </div>

                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    ) : isIncluded ? (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    ) : (
                      <span className="text-[10px] text-slate-300 font-mono">精简</span>
                    )}
                  </button>
                );
              })}
            </ul>
          </nav>

          {/* Quick PDF Export CTA in Sidebar */}
          <div className="mt-8">
            <button
              onClick={onOpenPrintModal}
              className={isV7 
                ? "w-full btn-v7-primary justify-center text-xs" 
                : "w-full button-primary justify-center text-xs shadow-sm"
              }
            >
              <Printer className="w-3.5 h-3.5 mr-2" />
              <span>导出 PDF 副本</span>
            </button>
          </div>
        </div>

        {/* Footer Meta Info matching Variation 7 */}
        <div className={`mt-auto pt-6 border-t ${
          isV7 ? 'border-[rgba(28,28,26,0.12)]' : 'border-slate-200/80'
        }`}>
          {isV7 ? (
            <div>
              <div className="label font-space-mono text-[0.6rem] uppercase tracking-[0.15em] text-[rgb(204,85,0)] font-bold mb-1">
                Current Release
              </div>
              <div className="font-space-mono font-bold text-xs text-[#1C1C1A]">
                V2.6.0-PRO
              </div>
            </div>
          ) : (
            <div className="footer-meta text-xs">
              <div className="label">Document Ref</div>
              <div className="font-mono text-slate-800 font-semibold text-xs mt-0.5">
                MAS-KY-2026-FINAL
              </div>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <div>
                  <div className="label text-[10px]">Standard</div>
                  <div className="text-[11px] text-slate-600 font-medium">Ver 2.6.4</div>
                </div>
                <span className="badge-tag">
                  COMMERCIAL
                </span>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
