/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Workflow, 
  FileText, 
  AlertTriangle, 
  Lock, 
  CheckCircle2, 
  Server, 
  Cloud, 
  ArrowRight,
  Database,
  UserCheck,
  Zap,
  Eye
} from 'lucide-react';

/**
 * Diagram 1: 康源智脑三层技术架构图 (三层结构 + 本地/云端混合分层)
 */
export const KangyuanBrainDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-xl p-6 border border-slate-700 shadow-md my-6 overflow-hidden pdf-avoid-break">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <h4 className="text-base font-semibold text-white tracking-wide">
            【架构图 1.1】"康源智脑"多智能体系统端云协同三层总体架构
          </h4>
        </div>
        <span className="text-xs px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">
          高可用分布式架构
        </span>
      </div>

      <div className="space-y-4">
        {/* Layer 1: 交互呈现层 */}
        <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 flex items-center">
              <Eye className="w-3.5 h-3.5 mr-1.5" /> 第一层：用户交互与终端触达层 (Presentation Layer)
            </span>
            <span className="text-[11px] text-slate-400">多角色按需分级展现</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-900/90 p-2.5 rounded border border-slate-700/60 text-center">
              <div className="text-sm font-medium text-white">集团管理层大屏看板</div>
              <div className="text-xs text-slate-400 mt-0.5">入住率大盘 / 战略投资 / 财务月结透视</div>
            </div>
            <div className="bg-slate-900/90 p-2.5 rounded border border-slate-700/60 text-center">
              <div className="text-sm font-medium text-white">7大养老机构运营终端</div>
              <div className="text-xs text-slate-400 mt-0.5">院长台账 / 护理合规排班 / 异常事件快报</div>
            </div>
            <div className="bg-slate-900/90 p-2.5 rounded border border-slate-700/60 text-center">
              <div className="text-sm font-medium text-white">康源订单班教学智训端</div>
              <div className="text-xs text-slate-400 mt-0.5">学员实操评测 / 错题微课 / 技能晋升路径</div>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center -my-1">
          <div className="w-0.5 h-4 bg-indigo-500/40"></div>
        </div>

        {/* Layer 2: 总指挥 Orchestrator */}
        <div className="bg-gradient-to-r from-indigo-950/80 via-slate-800 to-indigo-950/80 rounded-lg p-3.5 border border-indigo-500/40 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200 flex items-center">
              <Workflow className="w-3.5 h-3.5 mr-1.5 text-indigo-400" /> 第二层：总指挥中心 Orchestrator (LangGraph / CrewAI 状态机)
            </span>
            <span className="text-[11px] text-indigo-300 font-mono">Status: 状态路由与熔断仲裁中枢</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2 bg-slate-900/70 rounded border border-indigo-500/20 text-slate-300">① 业务意图与任务拆解</div>
            <div className="p-2 bg-slate-900/70 rounded border border-indigo-500/20 text-slate-300">② Agent 动态调度与通信</div>
            <div className="p-2 bg-slate-900/70 rounded border border-indigo-500/20 text-slate-300">③ 结构化 JSON Schema 校验</div>
            <div className="p-2 bg-slate-900/70 rounded border border-indigo-500/20 text-slate-300">④ 异常阻断与人工介入开关</div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center -my-1">
          <div className="w-0.5 h-4 bg-indigo-500/40"></div>
        </div>

        {/* Layer 3: 4大子Agent集群 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Agent 1 */}
          <div className="bg-slate-800/90 rounded-lg p-3 border-l-4 border-l-emerald-500 border border-slate-700">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-emerald-400">Agent 1: 运营聚合师</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-emerald-950 text-emerald-300 rounded font-mono">DeepSeek-V3</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              清洗多院异构台账、AIoT床垫设备流，输出标准JSON。
            </p>
            <div className="text-[11px] text-slate-400 border-t border-slate-700/60 pt-1.5 flex items-center justify-between">
              <span>数据定位:</span>
              <span className="text-emerald-300 font-medium">企业私有内网</span>
            </div>
          </div>

          {/* Agent 2 */}
          <div className="bg-slate-800/90 rounded-lg p-3 border-l-4 border-l-indigo-500 border border-slate-700">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-indigo-400">Agent 2: 标准审计员</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-indigo-950 text-indigo-300 rounded font-mono">Claude 3.5</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              严格对照213项康源美宏条款，发现巡查/翻身漏洞与异常。
            </p>
            <div className="text-[11px] text-slate-400 border-t border-slate-700/60 pt-1.5 flex items-center justify-between">
              <span>规则固化:</span>
              <span className="text-indigo-300 font-medium">JSON规则宪法</span>
            </div>
          </div>

          {/* Agent 3 */}
          <div className="bg-slate-800/90 rounded-lg p-3 border-l-4 border-l-sky-500 border border-slate-700">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-sky-400">Agent 3: 人才辅导员</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-sky-950 text-sky-300 rounded font-mono">Qwen-2.5</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              订单班学情分析与在职护理员微课推送，缩短培训30%。
            </p>
            <div className="text-[11px] text-slate-400 border-t border-slate-700/60 pt-1.5 flex items-center justify-between">
              <span>应用场景:</span>
              <span className="text-sky-300 font-medium">福祉教育实操</span>
            </div>
          </div>

          {/* Agent 4 */}
          <div className="bg-slate-800/90 rounded-lg p-3 border-l-4 border-l-purple-500 border border-slate-700">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-purple-400">Agent 4: 战略决策顾问</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-purple-950 text-purple-300 rounded font-mono">GPT-4o-mini</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              抓取国家政策红利，研判床位扩张收益与成本优化。
            </p>
            <div className="text-[11px] text-slate-400 border-t border-slate-700/60 pt-1.5 flex items-center justify-between">
              <span>外部连接:</span>
              <span className="text-purple-300 font-medium">脱敏智能路由</span>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center -my-1">
          <div className="w-0.5 h-4 bg-indigo-500/40"></div>
        </div>

        {/* Layer 4: 数据与安全边界 */}
        <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 flex items-center">
              <Database className="w-3.5 h-3.5 mr-1.5" /> 第三层：底层数据存储与物理隔离网关 (Data & Tool Security Layer)
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900/90 p-2.5 rounded border border-emerald-500/30">
              <div className="text-emerald-400 font-semibold mb-1 flex items-center">
                <Lock className="w-3 h-3 mr-1" /> 【企业私有内网】数据绝不出域
              </div>
              <div className="text-slate-300 space-y-0.5">
                <div>• 老人健康病历档案 / 身份证号 / 紧急联系人</div>
                <div>• 7家养老机构员工薪资及用友财务明细</div>
                <div>• 固化在本地的213项康源美宏标准JSON规则库</div>
              </div>
            </div>
            <div className="bg-slate-900/90 p-2.5 rounded border border-indigo-500/30">
              <div className="text-indigo-400 font-semibold mb-1 flex items-center">
                <Cloud className="w-3 h-3 mr-1" /> 【云端智能API】脱敏推理通道
              </div>
              <div className="text-slate-300 space-y-0.5">
                <div>• 仅传递纯文本脱敏指标（如"入住率82.4%，环比增加1.2%"）</div>
                <div>• 实时抓取民政部、卫健委普惠养老政策全文</div>
                <div>• 密钥环境变量注入与毫秒级连接熔断机制</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Diagram 2: 考勤与薪酬核算多智能体闭环流程图
 */
export const PayrollFlowchartDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-xl p-6 border border-slate-700 shadow-md my-6 overflow-hidden pdf-avoid-break">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Workflow className="w-5 h-5 text-emerald-400" />
          <h4 className="text-base font-semibold text-white tracking-wide">
            【流程图 1.2】非结构化打卡到确定性财务薪资的多智能体协作链条
          </h4>
        </div>
        <span className="text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
          零幻觉财务标准
        </span>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
          {/* Step 1 */}
          <div className="bg-slate-800 rounded-lg p-3 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1.5 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-slate-700 text-slate-200 text-xs flex items-center justify-center font-bold">1</span>
                <span className="text-xs font-semibold text-white">原始输入</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <p className="bg-slate-900/80 p-1.5 rounded font-mono text-[10px] text-amber-300">
                  钉钉导出打卡记录<br />
                  "张三9:08打卡, 请事假1天"
                </p>
                <p className="text-slate-400 text-[10px]">非结构化口语与零碎审批</p>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-slate-400 text-center">
              人工导出与预脱敏
            </div>
          </div>

          {/* Step 2: Agent 1 */}
          <div className="bg-slate-800 rounded-lg p-3 border-l-4 border-l-emerald-500 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1.5 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                <span className="text-xs font-semibold text-emerald-400">Agent 1 翻译官</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <p className="text-[10px] text-slate-300 leading-tight">
                  语义解析迟到、病假、事假与补卡标签。
                </p>
                <div className="bg-slate-900/80 p-1 rounded font-mono text-[9px] text-emerald-300">
                  {`{"name":"张三","事假":1}`}
                </div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-emerald-400 font-semibold text-center">
              输出标准 JSON Schema
            </div>
          </div>

          {/* Step 3: Agent 2 */}
          <div className="bg-slate-800 rounded-lg p-3 border-l-4 border-l-blue-500 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1.5 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                <span className="text-xs font-semibold text-blue-400">Agent 2 计算员</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <p className="text-[10px] text-slate-300 leading-tight">
                  套用 21.75 计薪天数、扣款比例与全勤奖规则。
                </p>
                <div className="bg-slate-900/80 p-1 rounded font-mono text-[9px] text-blue-300">
                  实发: 5758.62 (四舍五入)
                </div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-blue-400 font-semibold text-center">
              只输出纯数字，无文字
            </div>
          </div>

          {/* Step 4: Agent 3 */}
          <div className="bg-slate-800 rounded-lg p-3 border-l-4 border-l-amber-500 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1.5 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                <span className="text-xs font-semibold text-amber-400">Agent 3 审计员</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <p className="text-[10px] text-slate-300 leading-tight">
                  环比波动比对(±20%)、抽样复验与逻辑反常拦截。
                </p>
                <div className="bg-slate-900/80 p-1 rounded font-mono text-[9px] text-amber-300">
                  Result: "PASS" / "BLOCK"
                </div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-amber-400 font-semibold text-center">
              阻断异常，输出裁决单
            </div>
          </div>

          {/* Step 5: Final Output */}
          <div className="bg-slate-800 rounded-lg p-3 border-l-4 border-l-emerald-400 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1.5 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-bold">5</span>
                <span className="text-xs font-semibold text-emerald-300">财务落表</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <p className="text-[10px] text-slate-300 leading-tight">
                  本地死代码写入《本月工资表_终稿.xlsx》，不覆盖原件。
                </p>
                <p className="text-emerald-400 text-[10px] font-medium">✓ 人工抽验并签字归档</p>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-emerald-300 font-semibold text-center">
              100% 确定性生成
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Diagram 3: 独立监察与三级持续审计体系原理图
 */
export const SupervisoryAuditDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-xl p-6 border border-slate-700 shadow-md my-6 overflow-hidden pdf-avoid-break">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-sky-400" />
          <h4 className="text-base font-semibold text-white tracking-wide">
            【原理解释图 1.3】独立监察与持续可观测审计三层闭环架构 (3-Tier Audit)
          </h4>
        </div>
        <span className="text-xs px-2.5 py-1 bg-sky-500/20 text-sky-300 rounded border border-sky-500/30">
          全周期安全护栏
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tier 1 */}
        <div className="bg-slate-800/90 rounded-lg p-4 border-t-4 border-t-blue-500 border border-slate-700">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            第一层：落地前可行性预判
          </div>
          <div className="text-sm font-semibold text-white mb-2">数字孪生沙盘推演</div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            在投入正式编码前，使用6个月历史数据与50+极端场景（如入住率腰斩、突发封院）在封闭容器内模拟运行。
          </p>
          <div className="bg-slate-900 p-2.5 rounded text-xs space-y-1 text-slate-300 border border-slate-700/60">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">测试用例:</span>
              <span className="text-white font-mono">50+ 极端案例</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">准入阈值:</span>
              <span className="text-emerald-400 font-mono">一致性 ≥ 95%</span>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              输出《可行性推演报告》，杜绝概念化烂尾。
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="bg-slate-800/90 rounded-lg p-4 border-t-4 border-t-indigo-500 border border-slate-700">
          <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
            第二层：运行中实时监控
          </div>
          <div className="text-sm font-semibold text-white mb-2">"三明治"交叉验证机制</div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            毫秒级拦截上游Agent向流转管道投递的异常数据包，三层防线同时绿灯方可释放执行锁。
          </p>
          <div className="bg-slate-900 p-2.5 rounded text-xs space-y-1.5 border border-slate-700/60">
            <div className="flex items-center text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
              <strong>结构性校验：</strong> 字段无缺失，Schema完全合规
            </div>
            <div className="flex items-center text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-1.5"></span>
              <strong>逻辑自洽性：</strong> 跨机构勾稽关系无矛盾冲突
            </div>
            <div className="flex items-center text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-1.5"></span>
              <strong>时效新鲜度：</strong> 时间戳未超期，杜绝陈旧误判
            </div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="bg-slate-800/90 rounded-lg p-4 border-t-4 border-t-purple-500 border border-slate-700">
          <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            第三层：周期性复盘改进
          </div>
          <div className="text-sm font-semibold text-white mb-2">闭环反馈与模型迭代</div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            持续跟踪高管建议采纳率与合规误报率，消除歧义规则，动态平滑升级更优性价比的底座模型。
          </p>
          <div className="bg-slate-900 p-2.5 rounded text-xs space-y-1 text-slate-300 border border-slate-700/60">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">建议采纳率跟踪:</span>
              <span className="text-purple-300 font-mono">目标 &gt; 75%</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">合规审计误报率:</span>
              <span className="text-emerald-400 font-mono">严格 &lt; 2.0%</span>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              季度评测新开源模型，规则库热插拔补丁。
            </div>
          </div>
        </div>
      </div>

      {/* Emergency levels */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2">
        <span className="font-semibold text-slate-400 flex items-center">
          <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-400" />
          异常分级快速响应机制:
        </span>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-700/50 rounded">L1 轻微: 自动重试与日志记录</span>
          <span className="px-2 py-0.5 bg-amber-950 text-amber-300 border border-amber-700/50 rounded">L2 一般: 单点挂起与主管确认</span>
          <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-700/50 rounded">L3 严重: 物理熔断与双人秘钥解封</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Diagram 4: 安全"双门模型"原理结构图
 */
export const SecurityDoubleDoorDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-xl p-6 border border-slate-700 shadow-md my-6 overflow-hidden pdf-avoid-break">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Lock className="w-5 h-5 text-amber-400" />
          <h4 className="text-base font-semibold text-white tracking-wide">
            【原理解释图 1.4】AI安全核心防线——"云端嘴"与"本地手"的双门模型
          </h4>
        </div>
        <span className="text-xs px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
          权限边界核心法理
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Door 1: Cloud content door */}
        <div className="bg-slate-800/90 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">A</span>
            <h5 className="text-sm font-semibold text-indigo-300">第一道门：内容护栏 (服务商云端服务器)</h5>
          </div>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            <strong>约束对象：</strong>模型的"嘴"（生成的文本与建议）。<br />
            <strong>控制权：</strong>死死焊在OpenAI / Anthropic云端机房核心网关上。
          </p>
          <div className="bg-slate-900 p-2.5 rounded text-xs space-y-1 border border-slate-700 text-slate-300">
            <div className="text-emerald-400 font-medium">✓ 防护效果：</div>
            <div>• 拦截暴恐、违禁文本与初级提权指令</div>
            <div>• 普通个人用户在Web端绝对安全，无法破坏服务器</div>
            <div className="text-slate-400 text-[10px] mt-1">但注意：模型通过API返回合法JSON参数时，这道门判定为合法通过！</div>
          </div>
        </div>

        {/* Door 2: Local execution door */}
        <div className="bg-slate-800/90 rounded-lg p-4 border-2 border-amber-500/60">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">B</span>
            <h5 className="text-sm font-semibold text-amber-300">第二道门：执行护栏 (开发者本地主机)</h5>
          </div>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            <strong>约束对象：</strong>操作系统的"手"（代码执行与系统Shell）。<br />
            <strong>控制权：</strong>完全交到了本地开发者手里（钥匙在本地）。
          </p>
          <div className="bg-slate-900 p-2.5 rounded text-xs space-y-1 border border-amber-500/30 text-slate-300">
            <div className="text-rose-400 font-medium">⚠ 核心风险漏洞点：</div>
            <div>• 若开发者写了 <code className="text-amber-300">os.system(模型建议)</code> 且一路按同意</div>
            <div>• 流量从本地路由器发出，攻击造成实质性破坏</div>
            <div className="text-amber-300 font-semibold text-[10px] mt-1">
              法律判定：攻击者为主机部署者，AI无法人格，人类承担全部刑责！
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-indigo-950/40 rounded border border-indigo-500/30 text-xs text-indigo-200 flex items-start space-x-2">
        <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <strong>黄金治理铁律：</strong>
          永远将模型视为"输入法"（只提建议数值），绝对不将其当成"操作系统"（不赋予直接系统指令权限）；所有文件写入与网络请求必须经过本地静态写死的高阶白名单过滤。
        </div>
      </div>
    </div>
  );
};

/**
 * Diagram 5: 问卷实施流程全景图
 */
export const QuestionnaireWorkflowDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-xl p-6 border border-slate-700 shadow-md my-6 overflow-hidden pdf-avoid-break">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Workflow className="w-5 h-5 text-indigo-400" />
          <h4 className="text-base font-semibold text-white tracking-wide">
            【流程图 1.5】企业多智能体部署 · 10维度信息采集标准SOP工作流
          </h4>
        </div>
        <span className="text-xs px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">
          7-10个工作日周期
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold mx-auto mb-1.5">1</div>
          <div className="text-xs font-semibold text-white">问卷发放</div>
          <div className="text-[10px] text-slate-400 mt-1">立项前1-2周下发标准模板与保密声明</div>
        </div>
        <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold mx-auto mb-1.5">2</div>
          <div className="text-xs font-semibold text-white">指定协调人</div>
          <div className="text-[10px] text-slate-400 mt-1">企业设立项目专员，统筹对接各部门</div>
        </div>
        <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold mx-auto mb-1.5">3</div>
          <div className="text-xs font-semibold text-white">部门分头填报</div>
          <div className="text-[10px] text-slate-400 mt-1">运营、财务、HR各司其职提供数据</div>
        </div>
        <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold mx-auto mb-1.5">4</div>
          <div className="text-xs font-semibold text-white">汇总格式化</div>
          <div className="text-[10px] text-slate-400 mt-1">标注精度[精确/估算/初步]，打包附件</div>
        </div>
        <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold mx-auto mb-1.5">5</div>
          <div className="text-xs font-semibold text-white">内部审签盖章</div>
          <div className="text-[10px] text-slate-400 mt-1">分管领导审核确认，签署保密知悉</div>
        </div>
        <div className="bg-slate-800 p-2.5 rounded border border-emerald-500/50 text-center bg-emerald-950/20">
          <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold mx-auto mb-1.5">6</div>
          <div className="text-xs font-semibold text-emerald-300">启动方案定制</div>
          <div className="text-[10px] text-emerald-200/70 mt-1">交付100%可落地定制化多智能体系统</div>
        </div>
      </div>
    </div>
  );
};
