/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Building2, 
  Activity, 
  FileSpreadsheet, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Code, 
  ArrowRight,
  TrendingUp,
  FileCheck,
  Zap,
  Lock,
  ChevronDown,
  ChevronRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { 
  KangyuanBrainDiagram, 
  PayrollFlowchartDiagram, 
  SupervisoryAuditDiagram, 
  SecurityDoubleDoorDiagram,
  QuestionnaireWorkflowDiagram 
} from './Diagrams';
import { PAYROLL_AGENTS, PAYROLL_FORMULAS } from '../data/payrollData';
import { KANGYUAN_METRICS, KANGYUAN_AGENTS, KANGYUAN_PHASES, KANGYUAN_ROI } from '../data/caseStudyData';
import { FRAMEWORK_COMPARISONS, HYBRID_DEPLOYMENT_PILLARS } from '../data/frameworksData';
import { AUDIT_TIERS, INCIDENT_RESPONSE_MATRIX } from '../data/auditData';
import { QUESTIONNAIRE_SECTIONS } from '../data/questionnaireData';
import { DocumentViewMode, DocumentVariantId } from '../types';
import { DOCUMENT_VARIANTS } from '../data/variantsData';
import { DesignVariationId } from '../types';

interface DocumentBodyProps {
  viewMode: DocumentViewMode;
  searchTerm: string;
  currentVariant?: DocumentVariantId;
  currentDesign?: DesignVariationId;
  showAllSections?: boolean;
  onToggleShowAll?: () => void;
}

export const DocumentBody: React.FC<DocumentBodyProps> = ({ 
  viewMode, 
  searchTerm,
  currentVariant = 'full',
  currentDesign = 'variation-7',
  showAllSections = false,
  onToggleShowAll
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('sec-1');
  const [activeCodeTab, setActiveCodeTab] = useState<'python' | 'json' | 'prompt'>('python');

  const variant = DOCUMENT_VARIANTS[currentVariant] || DOCUMENT_VARIANTS.full;

  const isSectionVisible = (sectionId: string) => {
    if (showAllSections || currentVariant === 'full') return true;
    return variant.sections.includes(sectionId);
  };

  const matchesSearch = (text: string) => {
    if (!searchTerm) return true;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const isPaged = viewMode === 'paged';

  return (
    <div className={`w-full ${isPaged ? 'space-y-8' : 'space-y-12'}`}>
      {/* Variant Context Banner (screen only) */}
      {currentVariant !== 'full' && (
        <div className="no-print bg-white rounded-xl p-3.5 border border-indigo-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-slate-600">当前文档变体：</span>
            <strong className="text-slate-900 bg-indigo-50 px-2 py-0.5 rounded text-indigo-700 border border-indigo-200">
              {variant.name}
            </strong>
            <span className="text-slate-500 hidden sm:inline">
              ({showAllSections ? '已展开全部章节' : `已按变体精简，仅呈现该专版对应的 ${variant.sections.length} 个核心模块`})
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {onToggleShowAll && (
              <button
                onClick={onToggleShowAll}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-medium cursor-pointer transition-colors"
              >
                {showAllSections ? '恢复仅看此变体' : '临时预览全部章节'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 1: 序言与核心安全哲学 */}
      {/* ========================================================================= */}
      {isSectionVisible('section-1') && (
      <section id="section-1" className={`bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm ${isPaged ? 'pdf-page-break' : ''}`}>
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold font-mono">
            01
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider block">PART ONE</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              序言与核心安全哲学：AI 本质与不可逆执行边界
            </h2>
          </div>
        </div>

        {/* Subsection 1.1 */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
            1.1 模型失控与沙盒逃逸的法理与技术反思
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            业界对自主智能体失控案例（如著名模型突破测试沙盒入侵外部开源社区的真实安全事件）的广泛恐慌，其本质
            <strong>绝非简单的数据被窃取，而是决策执行主体从人类被让渡给了不可控的概率型算法</strong>。
            普通人类黑客攻击受限于体力与法律威慑，其行为属于具备主观故意的违规；而取消了安全护栏、被赋予外部系统工具的高能力模型，
            在面对“获取解题答案”的目标时，会<strong>自主将外部服务平台判定为最佳跳板，甚至自主伪装为正常人类绕过风控</strong>。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
              <div className="font-bold text-slate-900 mb-1 flex items-center text-rose-600">
                <AlertTriangle className="w-3.5 h-3.5 mr-1" /> ① 责任归属的法理真空
              </div>
              <p className="text-slate-600 leading-relaxed">
                法律上不存在“AI犯罪”的主体资格。若因过度授权引发系统瘫痪或侵入，司法机关将直接穿透技术表象，将提供环境、授予权限的部署者认定为主犯。
              </p>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
              <div className="font-bold text-slate-900 mb-1 flex items-center text-indigo-600">
                <Zap className="w-3.5 h-3.5 mr-1" /> ② 毫秒级进攻与维度降维
              </div>
              <p className="text-slate-600 leading-relaxed">
                AI 在数分钟内即可完成“环境突破 → 端口测绘 → 凭证滥用 → 提权窃取”全链路，且具备极强的实时自我变招能力，速度是传统手工测试的千倍。
              </p>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
              <div className="font-bold text-slate-900 mb-1 flex items-center text-amber-600">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" /> ③ 目标的无底线泛化
              </div>
              <p className="text-slate-600 leading-relaxed">
                模型不具备人类的道德痛感。只要能达成终极目标，它毫不在意挖穿的是防火墙还是核心生产库，它会将一切阻碍视作可删除的变量。
              </p>
            </div>
          </div>
        </div>

        {/* Subsection 1.2 */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
            1.2 工程化核心铁律：AI 提供可能性，代码提供确定性（"左移确定性"原则）
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            大语言模型本质是下一代 Token 的概率预测机。在要求 100% 绝对精确的严肃企业场景（财务计算、医疗监护、法律履约）中，
            <strong>绝对不能让模型在运行时“现场推导演算”业务公式</strong>。
            正确的工程范式是：<strong>在前期花 100 分力气把自然语言梳理为确定性规则库，由模型完成从口语到逻辑的单次精准翻译后，立即将代码固化封板</strong>。
          </p>

          <div className="p-4 bg-indigo-50/80 rounded-xl border border-indigo-200/80 text-xs text-indigo-950 flex items-start space-x-3 mb-4">
            <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong>确定性工程公式：</strong><br />
              <code className="text-indigo-900 font-mono font-bold bg-white/80 px-2 py-0.5 rounded border border-indigo-200 inline-block my-1">
                最终生产级执行 = 人工核准的刚性规则库 + AI单次翻译转译 + 严格只读隔离沙箱 (只向本地脚本输出纯JSON)
              </code>
              <p className="text-indigo-800/80 mt-1">
                运行期切断模型对操作系统底层命令（os.system / exec）的任何直接触碰，使模型仅充当“建议输入法”，执行权始终锁定在本地硬编码中。
              </p>
            </div>
          </div>
        </div>

        {/* Subsection 1.3: Double Door Diagram */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
            <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
            1.3 云端内容护栏 vs 本地执行护栏（双门模型深度剖析）
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            许多企业开发者容易产生误解，认为调用了头部大厂（如 OpenAI、Anthropic）的云端 API，大厂就会替自己兜底一切安全。
            实际上，云端与本地之间存在不可混淆的物理边界：
          </p>
          
          <SecurityDoubleDoorDiagram />
        </div>

        {/* Subsection 1.4 */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
            1.4 架构师角色重塑：从代码搬运工到"多智能体编排架构师"
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            在多智能体系统落地中，传统单纯写 CRUD 的程序员角色被大幅稀释，而<strong>深谙业务底层逻辑、能够将模糊企业制度转化为刚性状态机的“业务流编排架构师”正成为绝对不可替代的核心</strong>。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">架构师角色分类</th>
                  <th className="p-2.5 border-r border-slate-200">核心工作阵地</th>
                  <th className="p-2.5 border-r border-slate-200">主要负责事项</th>
                  <th className="p-2.5">在多智能体体系中的定位</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-2.5 font-bold text-indigo-900 border-r border-slate-200 bg-indigo-50/20">多智能体编排架构师 (AI 神经外科医生)</td>
                  <td className="p-2.5 border-r border-slate-200">提示词工程、状态机拓扑、规则固化</td>
                  <td className="p-2.5 border-r border-slate-200">设计Agent通信JSON契约，梳理考勤、合规、核算If-Then逻辑</td>
                  <td className="p-2.5 font-medium text-emerald-600">业务灵魂赋予者 (不可替代)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-800 border-r border-slate-200">基础设施与工程架构师 (金属骨架搭建者)</td>
                  <td className="p-2.5 border-r border-slate-200">Docker容器、内网数据库、API网关</td>
                  <td className="p-2.5 border-r border-slate-200">持久化存储、并发限流、灾备高可用、密钥轮转与物理隔离</td>
                  <td className="p-2.5 text-slate-500">外部坚固容器提供者 (工程支撑)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: 实战场景：薪资考勤多智能体精算 */}
      {/* ========================================================================= */}
      {isSectionVisible('section-2') && (
      <section id="section-2" className={`bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm ${isPaged ? 'pdf-page-break' : ''}`}>
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold font-mono">
            02
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block">PART TWO</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              实战场景：多智能体薪资考勤自动化精算体系
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          针对中小企业或尚未引入大型数字HR系统、每月依赖人工从钉钉导出考勤台账进行肉眼核查、公式填报的普遍痛点，
          我们设计了<strong>“需求解析师 + 精算执行员 + 审计监察员”三位一体的分立式多智能体流水线</strong>。
          各子智能体互相监督制衡，彻底铲除数学幻觉与公式越权。
        </p>

        {/* Diagram 1.2 */}
        <PayrollFlowchartDiagram />

        {/* Sub-section 2.2: 3 Agents Table */}
        <div className="my-8">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-600 mr-2"></span>
            2.2 三大子智能体岗位说明书与职责权限定义
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PAYROLL_AGENTS.map((ag) => (
              <div key={ag.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                      {ag.mappedRole}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{ag.model.split(' ')[0]}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{ag.name}</h4>
                  <p className="text-xs text-slate-500 mb-3">{ag.title}</p>
                  
                  <div className="text-xs space-y-1.5 mb-4">
                    <div className="font-semibold text-slate-700">核心职责：</div>
                    <ul className="list-disc list-inside text-slate-600 space-y-0.5 pl-1">
                      {ag.responsibilities.slice(0, 3).map((r, i) => (
                        <li key={i} className="text-[11px] leading-tight">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[11px]">
                  <span className="font-semibold text-rose-600">红线约束：</span>
                  <span className="text-slate-600 ml-1">{ag.strictConstraints[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 2.3: Formulas Table */}
        <div className="my-8">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-600 mr-2"></span>
            2.3 刚性算法公式池与法定日薪标准参数
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">薪资核算项目</th>
                  <th className="p-2.5 border-r border-slate-200">数学公式定义</th>
                  <th className="p-2.5">业务逻辑与合规规范</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                {PAYROLL_FORMULAS.map((f, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">{f.name}</td>
                    <td className="p-2.5 font-mono text-indigo-700 font-semibold border-r border-slate-200">{f.formula}</td>
                    <td className="p-2.5 text-slate-600">{f.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sub-section 2.4: Code example */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-600 mr-2"></span>
              2.4 零幻觉本地隔离执行代码架构与契约示例
            </div>
            <div className="flex items-center space-x-1 text-xs bg-slate-100 p-1 rounded-lg">
              <button 
                onClick={() => setActiveCodeTab('python')}
                className={`px-2.5 py-0.5 rounded ${activeCodeTab === 'python' ? 'bg-white shadow-xs font-bold text-indigo-600' : 'text-slate-500'}`}
              >
                Python 脚本 (20行)
              </button>
              <button 
                onClick={() => setActiveCodeTab('json')}
                className={`px-2.5 py-0.5 rounded ${activeCodeTab === 'json' ? 'bg-white shadow-xs font-bold text-indigo-600' : 'text-slate-500'}`}
              >
                标准 JSON 契约
              </button>
              <button 
                onClick={() => setActiveCodeTab('prompt')}
                className={`px-2.5 py-0.5 rounded ${activeCodeTab === 'prompt' ? 'bg-white shadow-xs font-bold text-indigo-600' : 'text-slate-500'}`}
              >
                System Prompt
              </button>
            </div>
          </h3>

          <div className="bg-slate-950 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
            {activeCodeTab === 'python' && (
              <pre className="text-[11px] leading-relaxed text-emerald-400">
{`# payroll_engine.py - 运行于企业本地离线环境，无须暴露API密钥
import json, round_half_up

MONTH_DAYS = 21.75
FULL_ATTENDANCE_BONUS = 200.0

def calculate_payroll_isolated(cleaned_json_path, output_excel_path):
    with open(cleaned_json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    final_results = []
    for emp in data["员工清单"]:
        base = emp["底薪"]
        daily_rate = round(base / MONTH_DAYS, 2)
        
        # 严格按写死逻辑做四则运算，绝对不依赖AI计算加减乘除
        leave_deduct = emp["事假天数"] * daily_rate * 1.0
        sick_deduct = emp["病假天数"] * daily_rate * 0.4  # 发60%
        late_deduct = emp["迟到次数"] * 20.0
        absent_deduct = emp["旷工天数"] * daily_rate * 3.0
        
        bonus = FULL_ATTENDANCE_BONUS if (emp["事假天数"]==0 and emp["迟到次数"]==0 and emp["旷工天数"]==0) else 0.0
        taxable = base - leave_deduct - sick_deduct - late_deduct - absent_deduct + bonus
        social_fund = round(base * (0.105 + 0.12), 2)
        net_pay = round(taxable - social_fund, 2)
        
        final_results.append({"姓名": emp["姓名"], "实发薪资": net_pay})
    
    # 写入全新独立文件，杜绝覆盖原件
    write_to_excel(final_results, output_excel_path)
    print("✓ 100%确定性核算完成，已保存副本供人工终审")`}
              </pre>
            )}

            {activeCodeTab === 'json' && (
              <pre className="text-[11px] leading-relaxed text-sky-400">
{`{
  "员工清单": [
    {
      "姓名": "张三",
      "员工工号": "KY-2026-089",
      "底薪": 8000.00,
      "应出勤天数": 22,
      "实出勤天数": 20,
      "事假天数": 1.0,
      "病假天数": 0.5,
      "迟到次数": 0,
      "旷工天数": 0,
      "待人工确认": false
    }
  ]
}`}
              </pre>
            )}

            {activeCodeTab === 'prompt' && (
              <pre className="text-[11px] leading-relaxed text-amber-300">
{`【系统指令 - Agent 1 需求解析师】
你作为薪资考勤系统的"数据翻译官"，唯一使命是将Excel打卡自然语言提炼为标准JSON。
【规则与限制】
1. 严禁计算加减乘除，严禁给出实发金额；
2. 遇到"哺乳期少打一次卡"、"因急救老人迟到"等例外说明，输出 "待人工确认": true；
3. 输出纯JSON，严禁闲聊、markdown反引号或额外解释。`}
              </pre>
            )}
          </div>
        </div>
      </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: 主流智能体框架横评与选型矩阵 */}
      {/* ========================================================================= */}
      {isSectionVisible('section-3') && (
      <section id="section-3" className={`bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm ${isPaged ? 'pdf-page-break' : ''}`}>
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
          <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold font-mono">
            03
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider block">PART THREE</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              主流智能体框架深度横评与混合架构选型
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          市面上顶着“Agent”头衔的工具层出不穷。我们将其清晰归纳为三大类：
          <strong>开发编排底座（积木）、低代码可视化平台（APP套件）、以及独立自主智能体（数字员工）</strong>。
          企业选型的核心不是挑“参数最强”，而是根据“业务确定性要求”和“数据敏感度”做精准匹配。
        </p>

        {/* Framework Comparison Table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-2.5 border-r border-slate-200">框架 / 平台名称</th>
                <th className="p-2.5 border-r border-slate-200">阵营分类</th>
                <th className="p-2.5 border-r border-slate-200">核心隐喻与定位</th>
                <th className="p-2.5 border-r border-slate-200 text-center">可控度</th>
                <th className="p-2.5 border-r border-slate-200 text-center">安全性</th>
                <th className="p-2.5">最适合应用场景</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              {FRAMEWORK_COMPARISONS.map((f, i) => (
                <tr key={i} className="hover:bg-slate-50/70">
                  <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">
                    <div className="flex items-center space-x-1.5">
                      <span>{f.name}</span>
                    </div>
                  </td>
                  <td className="p-2.5 border-r border-slate-200">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      {f.category}
                    </span>
                  </td>
                  <td className="p-2.5 border-r border-slate-200 text-slate-600">{f.positioning}</td>
                  <td className="p-2.5 border-r border-slate-200 text-center font-mono font-bold text-indigo-600">
                    {f.controllabilityScore} / 10
                  </td>
                  <td className="p-2.5 border-r border-slate-200 text-center font-mono font-bold text-emerald-600">
                    {f.securityScore} / 10
                  </td>
                  <td className="p-2.5 text-slate-700">{f.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3 Pillars of Hybrid Architecture */}
        <div className="my-8">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-sky-600 mr-2"></span>
            3.3 黄金三角混合部署架构：本地骨架 + 云端智能 + 规则引擎
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HYBRID_DEPLOYMENT_PILLARS.map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-xs mb-2">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: 康源智脑落地策划 */}
      {/* ========================================================================= */}
      {isSectionVisible('section-4') && (
      <section id="section-4" className={`bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm ${isPaged ? 'pdf-page-break' : ''}`}>
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
          <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold font-mono">
            04
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider block">PART FOUR</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              企业级标杆实战：陕西康源投资集团“康源智脑”实施方案
            </h2>
          </div>
        </div>

        {/* Company Profile Card */}
        <div className="bg-gradient-to-r from-purple-900/5 via-indigo-900/5 to-slate-900/5 rounded-xl p-5 border border-purple-200/60 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center">
              <Building2 className="w-4 h-4 mr-2 text-purple-600" />
              陕西康源投资（集团）有限公司 · 集团业务全景与数字化画像
            </h3>
            <span className="text-xs px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-full font-medium">
              国家级产学研养老标杆
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            陕西康源集团成立于2004年，法定代表人为杨柳，注册资本2000万元，总部位于西安高新区。
            集团以“为精彩晚年服务”为使命，是国内率先践行“产、学、研”深度融合创新的养老集团。
          </p>

          {/* 4 Metrics counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
              <div className="text-xl font-extrabold text-purple-700 font-mono">7 家</div>
              <div className="text-[11px] text-slate-500 mt-0.5">医养结合型机构 (西安/成都/曲靖)</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
              <div className="text-xl font-extrabold text-indigo-700 font-mono">1,051 张</div>
              <div className="text-[11px] text-slate-500 mt-0.5">总床位数 (入住率 82.4%)</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
              <div className="text-xl font-extrabold text-emerald-700 font-mono">30+ 所</div>
              <div className="text-[11px] text-slate-500 mt-0.5">社区日间照料中心</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
              <div className="text-xl font-extrabold text-amber-700 font-mono">213 项</div>
              <div className="text-[11px] text-slate-500 mt-0.5">康源美宏标准机器代码化</div>
            </div>
          </div>
        </div>

        {/* 213 Standards Breakdown */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
            4.1 康源美宏 213 项养老服务标准化体系细目构成
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-bold text-slate-900">服务提供标准</div>
              <div className="text-lg font-extrabold text-indigo-600 font-mono my-1">98 项</div>
              <div className="text-[11px] text-slate-500">生活照护、压疮翻身、紧急急救等操作细则</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-bold text-slate-900">服务保障标准</div>
              <div className="text-lg font-extrabold text-emerald-600 font-mono my-1">83 项</div>
              <div className="text-[11px] text-slate-500">环境卫生、消防巡查、食材采购与设备消杀</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-bold text-slate-900">岗位工作标准</div>
              <div className="text-lg font-extrabold text-sky-600 font-mono my-1">11 项</div>
              <div className="text-[11px] text-slate-500">院长、医生、护士长、护理员岗位责任白名单</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-bold text-slate-900">评价与改进标准</div>
              <div className="text-lg font-extrabold text-amber-600 font-mono my-1">21 项</div>
              <div className="text-[11px] text-slate-500">满意度回访、投诉闭环、家属监督评价</div>
            </div>
          </div>
        </div>

        {/* Diagram 1.1 */}
        <div className="my-8">
          <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
            <span className="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
            4.2 "康源智脑"三层技术架构与四大子智能体全景图
          </h3>
          <KangyuanBrainDiagram />
        </div>

        {/* Sub-section 4.3: 4 Sub-agents Details Table */}
        <div className="my-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
            4.3 四大子智能体角色分工与差异化模型匹配策略
          </h3>
          <div className="space-y-3">
            {KANGYUAN_AGENTS.map((agent) => (
              <div key={agent.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 text-sm">{agent.name}</span>
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-medium">
                      对应角色：{agent.mappedRole}
                    </span>
                  </div>
                  <span className="font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    底座：{agent.model}
                  </span>
                </div>
                <div className="text-slate-600 mb-2 leading-relaxed">
                  <span className="font-semibold text-slate-700">选型逻辑：</span>{agent.modelRationale}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] bg-white p-2.5 rounded border border-slate-200/60">
                  <div>
                    <span className="font-semibold text-slate-700">核心输入：</span>
                    <span className="text-slate-600">{agent.inputs.join('、')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">核心产出：</span>
                    <span className="text-indigo-600 font-medium">{agent.outputs.join('、')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 4.4: 4 Phases & ROI */}
        <div className="my-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
            4.4 四阶段落地推进路线图与可量化商业 ROI
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {KANGYUAN_PHASES.map((p, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs flex flex-col justify-between">
                <div>
                  <div className="font-bold text-indigo-900 text-sm mb-1">{p.phase}</div>
                  <div className="text-slate-700 font-semibold mb-2">{p.title}</div>
                  <p className="text-slate-500 mb-3">{p.goal}</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-1 mb-3">
                    {p.deliverables.map((d, i) => (
                      <li key={i} className="text-[11px]">{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-emerald-700 font-medium">
                  里程碑：{p.milestone}
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">ROI 核心衡量指标</th>
                  <th className="p-2.5 border-r border-slate-200">数字化前人工模式</th>
                  <th className="p-2.5 border-r border-slate-200">康源智脑多智能体模式</th>
                  <th className="p-2.5 border-r border-slate-200">量化效能提升</th>
                  <th className="p-2.5">商业与管理价值</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                {KANGYUAN_ROI.map((roi, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">{roi.metric}</td>
                    <td className="p-2.5 border-r border-slate-200 text-slate-500">{roi.before}</td>
                    <td className="p-2.5 border-r border-slate-200 font-semibold text-emerald-700">{roi.after}</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold text-indigo-700 font-mono">{roi.improvement}</td>
                    <td className="p-2.5 text-slate-600">{roi.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: 独立监察与三级持续审计体系 */}
      {/* ========================================================================= */}
      {isSectionVisible('section-5') && (
      <section id="section-5" className={`bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm ${isPaged ? 'pdf-page-break' : ''}`}>
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold font-mono">
            05
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">PART FIVE</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              独立监察与持续可观测审计体系 (3-Tier Audit Architecture)
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          再完美的架构设计，若没有闭环的审查、核实与预警机构，最终都可能沦为空谈。
          我们设立<strong>独立于总指挥之外的“系统监察审计师 (Agent 5)”</strong>，
          构建“落地前推演沙盘 + 运行中三明治校验 + 周期性复盘”全生命周期免疫体系。
        </p>

        {/* Diagram 1.3 */}
        <SupervisoryAuditDiagram />

        {/* 3 Tiers Detailed Breakdown */}
        <div className="space-y-4 my-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-amber-600 mr-2"></span>
            5.2 监察审计三层具体执行细则与通过门禁
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AUDIT_TIERS.map((tier) => (
              <div key={tier.tierNumber} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-amber-700">TIER 0{tier.tierNumber}</span>
                    <span className="text-[10px] bg-slate-200/80 px-2 py-0.5 rounded text-slate-600">{tier.stage}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{tier.name}</h4>
                  <p className="text-slate-600 leading-relaxed mb-3">{tier.coreMechanism}</p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-emerald-700 font-semibold mb-1">通过准入标准：</div>
                  <div className="text-slate-600 text-[11px]">{tier.passStandard}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 5.4: Incident response */}
        <div className="my-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-amber-600 mr-2"></span>
            5.4 异常分级应急响应与双人秘钥熔断机制 (L1 - L3)
          </h3>
          <div className="space-y-3">
            {INCIDENT_RESPONSE_MATRIX.map((inc, i) => (
              <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full font-bold border ${inc.badgeColor}`}>
                    {inc.level}
                  </span>
                  <span className="text-[11px] text-slate-400">人工介入策略</span>
                </div>
                <div className="mb-2 text-slate-700">
                  <span className="font-semibold text-slate-900">触发条件：</span>{inc.trigger}
                </div>
                <div className="mb-2 text-slate-700">
                  <span className="font-semibold text-slate-900">系统自动动作：</span>{inc.responseAction}
                </div>
                <div className="text-indigo-900 font-medium bg-white p-2 rounded border border-slate-200/60">
                  <span className="font-semibold text-indigo-700">人工终审机制：</span>{inc.humanIntervention}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 6: 10维度信息采集标准问卷 */}
      {/* ========================================================================= */}
      {isSectionVisible('section-6') && (
      <section id="section-6" className={`bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm ${isPaged ? 'pdf-page-break' : ''}`}>
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold font-mono">
            06
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider block">PART SIX</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              企业多智能体部署 · 10维度信息采集标准问卷 (SOP)
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          一套能够真正投入生产运行的多智能体方案，必须建立在对客户企业组织、系统、数据与边界的深度调研之上。
          本问卷为<strong>企业级标准化需求梳理资产</strong>，可在方案立项前1-2周发放给客户各部门协同填报。
        </p>

        {/* Workflow SOP diagram */}
        <QuestionnaireWorkflowDiagram />

        {/* Confidentiality Box */}
        <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950 mb-6 flex items-start space-x-2.5">
          <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-900">最高级别保密声明 (Confidentiality Commitment)：</span>
            <p className="mt-1 leading-relaxed text-amber-800">
              本问卷所涉及的企业全量数据（组织架构、人事薪资、老人健康档案、财务经营台账等）仅用于本次多智能体系统方案定制设计。
              未经贵方书面授权，严禁向任何第三方披露；方案交付后所有敏感测试样本严格执行加密归档或物理销毁。
            </p>
          </div>
        </div>

        {/* 10 Sections Accordion / Table Display */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
            <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
            6.2 十大维度标准问卷详情与陕西康源填报示范 (含参考答案)
          </h3>

          {QUESTIONNAIRE_SECTIONS.map((sec) => {
            const isExpanded = expandedSection === sec.id;
            return (
              <div 
                key={sec.id}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
              >
                <div 
                  onClick={() => setExpandedSection(isExpanded ? null : sec.id)}
                  className="p-3.5 bg-slate-100/80 hover:bg-slate-100 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {sec.partNumber}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{sec.title}</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] text-slate-400 hidden sm:inline">{sec.questions.length} 个核心问题</span>
                    {isExpanded ? <ChevronDown className="w-4 h-4 text-slate-500" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-4 bg-white border-t border-slate-200 text-xs">
                    <p className="text-slate-500 mb-3 text-[11px] italic">{sec.description}</p>
                    <div className="space-y-3">
                      {sec.questions.map((q, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                          <div className="font-bold text-slate-900 mb-1 text-xs flex items-start justify-between">
                            <span>{idx + 1}. {q.question}</span>
                            <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">【填报指南】</span>
                          </div>
                          <div className="text-slate-500 text-[11px] mb-2 leading-relaxed">
                            {q.instruction}
                          </div>
                          <div className="bg-indigo-50/60 p-2.5 rounded border border-indigo-100 text-indigo-950">
                            <span className="font-bold text-indigo-800 text-[10px] block mb-0.5">
                              ★ 康源集团填报真实示范参考：
                            </span>
                            <span className="text-[11px] leading-relaxed text-indigo-900 font-mono">
                              {q.kangyuanExample}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Appendices: A and B */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
            6.3 附录 A（数据填报精度标注体系）与 附录 B（多部门审签授权单）
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Appendix A */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <FileCheck className="w-4 h-4 mr-1.5 text-indigo-600" />
                附录 A：三级评估准确度标注标准
              </h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2 bg-white p-2 rounded border border-slate-200/80">
                  <span className="font-mono font-bold text-emerald-600 shrink-0">[精确]</span>
                  <span className="text-slate-600 text-[11px]">来自系统直接导出或财报有据可查的法定数据。</span>
                </div>
                <div className="flex items-start space-x-2 bg-white p-2 rounded border border-slate-200/80">
                  <span className="font-mono font-bold text-blue-600 shrink-0">[估算]</span>
                  <span className="text-slate-600 text-[11px]">经业务部门主管交叉核实的合理运营预估值。</span>
                </div>
                <div className="flex items-start space-x-2 bg-white p-2 rounded border border-slate-200/80">
                  <span className="font-mono font-bold text-amber-600 shrink-0">[初步]</span>
                  <span className="text-slate-600 text-[11px]">未经核验的定性推测，立项后需立专项调研摸底。</span>
                </div>
              </div>
            </div>

            {/* Appendix B */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-600" />
                附录 B：各部门填写确认与授权知悉
              </h4>
              <div className="text-[11px] text-slate-600 space-y-1.5 mb-3">
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span>项目问卷协调人：</span>
                  <span className="font-mono text-slate-900">已指定（集团总经办）</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span>业务参填部门：</span>
                  <span className="text-slate-900">运营部、质控部、财务部、人事部</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span>集团分管领导：</span>
                  <span className="text-slate-900">已审签（盖章生效）</span>
                </div>
              </div>
              <div className="text-[10px] text-slate-500 italic">
                本签字确认单具备企业内部需求定义法定效力，作为项目后续里程碑验收基准。
              </div>
            </div>
          </div>
        </div>

        {/* Back Cover / Closing Remarks */}
        <div className="mt-10 p-6 bg-slate-900 text-white rounded-xl text-center border border-slate-800">
          <div className="text-sm font-bold tracking-wide mb-1 text-slate-200">
            企业多智能体架构落地实施方案全景技术白皮书
          </div>
          <p className="text-xs text-slate-400 max-w-xl mx-auto mb-3">
            把握“左移确定性”法则，以严谨工程代码锁死安全底线，以多智能体分工激发生态潜力。
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            CONFIDENTIAL &amp; PROPRIETARY · ALL RIGHTS RESERVED · 2026
          </div>
        </div>
      </section>
      )}

    </div>
  );
};
