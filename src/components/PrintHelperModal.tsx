/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Printer, 
  Download, 
  Check, 
  Copy, 
  AlertCircle, 
  X, 
  Sliders, 
  FileText, 
  Sparkles, 
  Layers, 
  Briefcase, 
  FileSpreadsheet, 
  Cpu, 
  ArrowRight,
  Archive,
  Info
} from 'lucide-react';
import { DocumentVariantId } from '../types';
import { DOCUMENT_VARIANTS, DocumentVariantConfig } from '../data/variantsData';
import { generateVariantMarkdown, downloadFile } from '../utils/markdownExporter';
import { openPrintableTab, generatePrintableHtml, generateWysiwygHtml } from '../utils/htmlExporter';
import { 
  ExternalLink,
  Globe,
  FileCode2,
  Zap,
  HelpCircle,
  Eye
} from 'lucide-react';

interface PrintHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentVariant: DocumentVariantId;
  onSelectVariant: (variantId: DocumentVariantId) => void;
  onConfirmPrint: () => void;
}

export const PrintHelperModal: React.FC<PrintHelperModalProps> = ({
  isOpen,
  onClose,
  currentVariant,
  onSelectVariant,
  onConfirmPrint
}) => {
  const [copied, setCopied] = useState(false);
  const [downloadedVariant, setDownloadedVariant] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const variantsList = Object.values(DOCUMENT_VARIANTS);

  // Print a specific variant reliably (handles iframe sandboxing)
  const handlePrintVariant = (variantId: DocumentVariantId) => {
    onSelectVariant(variantId);
    setStatusMessage(`正在调起「${DOCUMENT_VARIANTS[variantId].name}」打印...`);
    
    const inIframe = window.self !== window.top;
    if (inIframe) {
      // In iframe, direct window.print() is often blocked by browsers
      openPrintableTab(variantId, true);
      setTimeout(() => {
        setStatusMessage(null);
        onClose();
      }, 800);
    } else {
      onClose();
      setTimeout(() => {
        onConfirmPrint();
      }, 180);
    }
  };

  // Open in new tab for direct browser print (bypasses all iframe restrictions)
  const handleOpenNewTab = (variantId: DocumentVariantId) => {
    onSelectVariant(variantId);
    openPrintableTab(variantId, true);
    setStatusMessage(`已在新窗口打开「${DOCUMENT_VARIANTS[variantId].name}」`);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  // Direct download self-contained HTML publication (classic standalone)
  const handleDownloadHtml = (variantId: DocumentVariantId) => {
    const variant = DOCUMENT_VARIANTS[variantId];
    const html = generatePrintableHtml(variantId);
    downloadFile(html, `企业多智能体白皮书_${variant.name}_独立排版版.html`, 'text/html;charset=utf-8;');
    setStatusMessage(`已下载「${variant.name}」独立排版 HTML 文件`);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  // Direct download 100% pixel-perfect WYSIWYG HTML (exact match with screen)
  const handleDownloadWysiwygHtml = (variantId: DocumentVariantId) => {
    onSelectVariant(variantId);
    const variant = DOCUMENT_VARIANTS[variantId];
    const html = generateWysiwygHtml(variantId);
    downloadFile(html, `企业多智能体白皮书_${variant.name}_所见即所得极高保真版.html`, 'text/html;charset=utf-8;');
    setStatusMessage(`已下载「${variant.name}」所见即所得 HTML（与右侧画面 100% 像素级一致）`);
    setTimeout(() => setStatusMessage(null), 3500);
  };

  // Download markdown of a specific variant
  const handleDownloadMarkdown = (variantId: DocumentVariantId) => {
    const variant = DOCUMENT_VARIANTS[variantId];
    const md = generateVariantMarkdown(variantId);
    downloadFile(md, `${variant.name}_企业多智能体白皮书.md`);
    setDownloadedVariant(variantId);
    setStatusMessage(`已下载「${variant.name}」Markdown 文件`);
    setTimeout(() => {
      setDownloadedVariant(null);
      setStatusMessage(null);
    }, 3000);
  };

  // Download all 4 variants in markdown
  const handleDownloadAllMarkdown = () => {
    variantsList.forEach((v, idx) => {
      setTimeout(() => {
        const md = generateVariantMarkdown(v.id);
        downloadFile(md, `[变体0${idx + 1}]_${v.name}.md`);
      }, idx * 250);
    });
    setStatusMessage('已开始批量下载全部 5 种变体 Markdown');
    setTimeout(() => setStatusMessage(null), 3500);
  };

  // Copy current document text
  const handleCopyMarkdown = () => {
    const md = generateVariantMarkdown(currentVariant);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setStatusMessage('已将当前变体全文复制到剪贴板');
    setTimeout(() => {
      setCopied(false);
      setStatusMessage(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-5 sm:p-7 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 my-auto">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>多变体导出工作站 &amp; PDF 打印向导</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-normal">
                  支持 5 种专属版本
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                无论是高管决策简报、部门调研问卷还是研发技术规范，均可独立导出出版级 PDF、独立排版 HTML 或 Markdown
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Toast Banner */}
        {statusMessage && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 text-xs text-emerald-800 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">{statusMessage}</span>
            </div>
            <span className="text-[11px] text-emerald-600 font-mono">100% 就绪</span>
          </div>
        )}

        {/* Featured Card: Full Comprehensive All-in-One Definitive Edition */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-4 sm:p-5 mb-4 shadow-lg border border-indigo-700/50 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <span className="bg-amber-400 text-slate-950 font-black text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                ⭐ 推荐 · 全量一体化超级白皮书
              </span>
              <span className="text-indigo-200 text-xs font-mono">PART 01 ~ PART 10 全收录</span>
            </div>
            <span className="text-[11px] bg-white/10 text-white px-2.5 py-0.5 rounded-full border border-white/20">
              约 20-25 页 A4 / 完整无删减
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
            <span>企业多智能体架构落地实施方案 · 全景全集典藏版</span>
          </h4>
          <p className="text-xs text-indigo-200/90 leading-relaxed mb-4 max-w-2xl">
            收录全部 10 个技术与管理章节：双门模型、薪资精算、<strong>原生离线多智能体交互仿真沙盘</strong>、陕西康源 213 项标准代码化、主流框架横评、混合云部署、3-Tier 审计闭环、四阶响应矩阵、三年 ROI 测算及 10 维度 24+ 道 SOP 调研问卷全集与真实示范。
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* 100% WYSIWYG HTML Export */}
            <button
              onClick={() => handleDownloadWysiwygHtml('full')}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs shadow-md flex items-center transition-all cursor-pointer transform hover:-translate-y-0.5"
              title="实时抓取右侧主屏幕正在渲染的完整 DOM 树与 Tailwind 样式，与右侧预览区 100% 像素级一致"
            >
              <Eye className="w-4 h-4 mr-1.5 text-slate-950" />
              <span>🌟 导出所见即所得 HTML (与右侧屏幕100%一致)</span>
            </button>

            {/* 100% WYSIWYG PDF Print */}
            <button
              onClick={() => handleOpenNewTab('full')}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow-md border border-indigo-400/30 flex items-center transition-all cursor-pointer transform hover:-translate-y-0.5"
              title="在新标签页中以高保真所见即所得模式打开，直接调起打印机另存为高清 A4 PDF"
            >
              <Printer className="w-4 h-4 mr-1.5 text-white" />
              <span>🖨️ 导出全量出版级 PDF (所见即所得 A4)</span>
            </button>

            {/* Standalone Interactive Sandbox HTML */}
            <button
              onClick={() => handleDownloadHtml('full')}
              className="px-3 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium rounded-xl text-xs flex items-center transition-all cursor-pointer"
              title="导出轻量纯文本静态排版与独立仿真沙盘"
            >
              <Zap className="w-3.5 h-3.5 mr-1 text-amber-400" />
              <span>⚡ 导出轻量离线沙盘 HTML</span>
            </button>
          </div>
          
          <div className="mt-3 text-[11px] text-indigo-200/80 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>已启用<strong>「所见即所得 (WYSIWYG) 实时抓取引擎」</strong>：完整包含双门模型图、算薪流水线图、康源智脑拓扑图、监察审计图等全部矢量图表与主题排版。</span>
          </div>
        </div>

        {/* User Question Answer & Fidelity Notice Banner */}
        <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3.5 mb-4 text-xs text-amber-950">
          <div className="flex items-start space-x-2.5">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-amber-900 block font-semibold mb-1">
                💡 为什么此前导出的效果和右侧区域看到的不一样？
              </strong>
              <p className="text-amber-800/90 mb-1.5">
                <strong>原因解析：</strong>右侧预览区是由 React + Tailwind CSS 动态编译的现代交互界面，内嵌了 5 个高精度 SVG 矢量架构拓扑图（双门模型、算薪流水线、康源智脑中枢、3-Tier监察闭环等）和定制图标卡片。此前导出的单文件为了兼容极老旧浏览器采用了一套脱网基础排版模板，因而没有内联这些矢量图与现代卡片样式。
              </p>
              <p className="text-amber-900 font-medium">
                <strong>现已完美解决：</strong>推荐直接点击上方金色按钮<strong>「🌟 导出所见即所得 HTML」</strong>或<strong>「🖨️ 导出全量出版级 PDF」</strong>，系统已升级为<strong>实时抽取右侧屏幕真实 DOM 树与编译样式表</strong>，导出文件与您在右侧屏幕看到的<strong>100% 像素级完全一致，分毫不差</strong>！
              </p>
            </div>
          </div>
        </div>

        {/* Operating Guide: How to export multiple variants & interactive sandbox */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-5 text-xs text-slate-800">
          <div className="flex items-center justify-between font-bold text-slate-900 mb-1.5">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>【三种导出媒介的最佳使用场景】</span>
            </div>
            <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-mono border border-indigo-200">场景速查</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="font-bold text-indigo-900 mb-0.5 flex items-center">
                <Printer className="w-3.5 h-3.5 mr-1 text-indigo-600" />
                ① 静态纸质版 (PDF)
              </div>
              <div className="text-slate-600 text-[11px] leading-relaxed">
                适合汇报审阅、纸质打印与红头归档。点击<strong>「导出 PDF」</strong>，在浏览器打印窗口中选择目标为<strong>「另存为 PDF」</strong>并勾选<strong>「背景图形」</strong>。
              </div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="font-bold text-amber-900 mb-0.5 flex items-center">
                <Eye className="w-3.5 h-3.5 mr-1 text-amber-600" />
                ② 所见即所得版 (.html 推荐)
              </div>
              <div className="text-slate-600 text-[11px] leading-relaxed">
                点击<strong>「🌟 导出所见即所得 HTML」</strong>，下载纯单文件。离线双击即可用任何浏览器打开，视觉效果、矢量拓扑图与右侧完全一致。
              </div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="font-bold text-emerald-900 mb-0.5 flex items-center">
                <Globe className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                ③ 在线完整分享 (Share URL)
              </div>
              <div className="text-slate-600 text-[11px] leading-relaxed">
                点击右上角<strong>「Share」</strong>生成公开或内部分享链接，同事或领导点开即可直接体验多智能体推演沙盘、切换设计变体。
              </div>
            </div>
          </div>
        </div>

        {/* 4 Variant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
          {variantsList.map((v) => {
            const isCurrent = currentVariant === v.id;
            return (
              <div 
                key={v.id}
                className={`rounded-xl p-4 border transition-all relative flex flex-col justify-between ${
                  isCurrent 
                    ? 'border-indigo-500 bg-indigo-50/30 shadow-md ring-2 ring-indigo-500/20' 
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900 text-sm">{v.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        {v.estimatedPages}
                      </span>
                    </div>
                    {isCurrent && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-indigo-600 text-white flex items-center shrink-0">
                        <Check className="w-2.5 h-2.5 mr-1" /> 当前选择
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-2 leading-relaxed">
                    {v.description}
                  </p>

                  <div className="text-[11px] text-slate-500 mb-3 space-y-0.5">
                    <div>
                      <span className="font-medium text-slate-700">受众对象：</span>{v.targetAudience}
                    </div>
                    <div className="font-mono text-slate-400 text-[10px] truncate">
                      文件：{v.recommendedFileName}
                    </div>
                  </div>
                </div>

                {/* Actions for this variant */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => handlePrintVariant(v.id)}
                    className="flex-1 min-w-[120px] px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center justify-center transition-colors cursor-pointer"
                    title="调起打印机对话框（目标：另存为 PDF）"
                  >
                    <Printer className="w-3.5 h-3.5 mr-1.5" />
                    导出 PDF / 打印
                  </button>

                  <button
                    onClick={() => handleOpenNewTab(v.id)}
                    className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-medium flex items-center transition-colors cursor-pointer"
                    title="在全新干净标签页中打开并打印（有效绕过 iframe 拦截）"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1" />
                    <span className="text-[11px]">新标签打开</span>
                  </button>

                  <button
                    onClick={() => handleDownloadWysiwygHtml(v.id)}
                    className="px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold flex items-center transition-colors cursor-pointer"
                    title="下载与右侧屏幕视觉效果 100% 像素级一致的所见即所得 HTML 独立文件"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-700 mr-1" />
                    <span className="text-[11px]">高保真 HTML</span>
                  </button>

                  <button
                    onClick={() => handleDownloadMarkdown(v.id)}
                    className="px-2 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium flex items-center transition-colors cursor-pointer"
                    title="下载 Markdown (.md) 纯文本文档"
                  >
                    {downloadedVariant === v.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Download className="w-3.5 h-3.5 text-slate-600" />
                    )}
                    <span className="ml-1 text-[11px]">.md</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global actions & print configuration reminders */}
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-slate-800">打印参数配置：</span>
            <span>纸张：<strong>A4</strong></span>
            <span>目标：<strong>另存为 PDF</strong></span>
            <span className="text-rose-600 font-bold">★ 背景图形：务必勾选</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownloadAllMarkdown}
              className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded font-medium transition-colors flex items-center cursor-pointer text-xs"
              title="分别下载全套 5 种变体的 Markdown 文档"
            >
              <Archive className="w-3 h-3 mr-1 text-indigo-600" />
              下载全部 5 个变体 MD
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded font-medium transition-colors flex items-center cursor-pointer text-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 mr-1 text-emerald-600" />
                  已复制当前文本
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 mr-1" />
                  复制当前变体纯文本
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleDownloadHtml(currentVariant)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs shadow-xs flex items-center transition-colors cursor-pointer"
              title="下载离线单文件，内嵌完整多智能体协同仿真沙盘，脱网双击即可自由交互！"
            >
              <Zap className="w-4 h-4 mr-1.5 text-slate-950 fill-current" />
              <span>⚡ 下载离线完整交互版 (.html)</span>
            </button>

            <button
              onClick={() => handleOpenNewTab(currentVariant)}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              <span>新标签页全屏打印 (另存为 PDF)</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            完成并关闭
          </button>
        </div>
      </div>
    </div>
  );
};
