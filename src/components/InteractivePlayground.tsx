/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  FileCode,
  Terminal,
  Sparkles
} from 'lucide-react';

interface SimulationResult {
  agent1Json: any;
  agent2Result: any;
  agent3Verdict: any;
}

const PRESET_CASES = [
  {
    name: '张三 (事假1天 + 正常出勤)',
    baseSalary: 8000,
    rawText: '张三本月应出勤22天，打卡记录均在08:50前完成，仅9月2日因私事提交事假申请1天已审批通过。',
    lastMonthSalary: 7200
  },
  {
    name: '李四 (迟到25分钟 + 满勤)',
    baseSalary: 10000,
    rawText: '李四本月全勤出勤22天，9月10日因暴雨09:25打卡迟到25分钟，无其他请假或缺卡。',
    lastMonthSalary: 7900
  },
  {
    name: '王五 (严重异常：旷工1天 + 迟到)',
    baseSalary: 9000,
    rawText: '王五9月15日未打卡且未提交任何补卡审批单；9月18日10:15严重迟到，其余日期正常打卡。',
    lastMonthSalary: 7300
  },
  {
    name: '赵六 (全勤模范生：无异常)',
    baseSalary: 8500,
    rawText: '赵六全月22天每日于08:45前打卡，无任何请假、旷工、迟到记录，全勤表现优异。',
    lastMonthSalary: 6700
  }
];

export const InteractivePlayground: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentCase = PRESET_CASES[selectedCaseIndex];

  // Calculate results deterministically
  const runSimulation = () => {
    setIsProcessing(true);
    setActiveStep(1);

    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        setActiveStep(3);
        setIsProcessing(false);
      }, 400);
    }, 400);
  };

  const getResults = () => {
    const base = currentCase.baseSalary;
    const daily = Number((base / 21.75).toFixed(2));
    
    let leaveType = '无';
    let leaveDays = 0;
    let lateCount = 0;
    let absentDays = 0;
    let hasFullAttendance = false;
    let lateDeduction = 0;
    let leaveDeduction = 0;
    let absentDeduction = 0;

    if (selectedCaseIndex === 0) { // 张三
      leaveType = '事假';
      leaveDays = 1;
      leaveDeduction = daily * 1.0;
    } else if (selectedCaseIndex === 1) { // 李四
      lateCount = 1;
      lateDeduction = 50; // 16-60分钟
    } else if (selectedCaseIndex === 2) { // 王五
      absentDays = 1;
      absentDeduction = daily * 3;
      lateCount = 1;
      lateDeduction = daily * 0.5; // >60 min
    } else if (selectedCaseIndex === 3) { // 赵六
      hasFullAttendance = true;
    }

    const attendanceBonus = hasFullAttendance ? 200 : 0;
    const totalDeductions = leaveDeduction + lateDeduction + absentDeduction;
    const grossSalary = Number((base - totalDeductions + attendanceBonus).toFixed(2));
    const socialTax = Number((base * (0.105 + 0.12)).toFixed(2)); // 22.5%
    const netSalary = Number((grossSalary - socialTax).toFixed(2));

    const fluctuation = Number((((netSalary - currentCase.lastMonthSalary) / currentCase.lastMonthSalary) * 100).toFixed(1));
    const isFluctuationHigh = Math.abs(fluctuation) >= 20;

    return {
      agent1Json: {
        姓名: currentCase.name.split(' ')[0],
        基本工资: base,
        应出勤天数: 22,
        实出勤天数: 22 - leaveDays - absentDays,
        考勤状态: {
          请假类别: leaveType,
          请假天数: leaveDays,
          迟到次数: lateCount,
          旷工天数: absentDays,
          全勤资格: hasFullAttendance
        }
      },
      agent2Result: {
        法定日薪: daily,
        事假扣款: Number(leaveDeduction.toFixed(2)),
        迟到扣款: Number(lateDeduction.toFixed(2)),
        旷工惩罚扣款: Number(absentDeduction.toFixed(2)),
        全勤奖励: attendanceBonus,
        应发税前薪资: grossSalary,
        五险一金代扣: socialTax,
        实发打卡金额: netSalary
      },
      agent3Verdict: {
        上月核发基线: currentCase.lastMonthSalary,
        本月计算结果: netSalary,
        环比波动率: `${fluctuation > 0 ? '+' : ''}${fluctuation}%`,
        合规裁决: isFluctuationHigh || absentDays > 0 ? '需人工复核 (WARNING)' : '直接通过 (PASS)',
        审查日志: isFluctuationHigh 
          ? `提示：环比波动达 ${fluctuation}%（超基线±20%阈值），已阻断下游Excel写入，需财务复核。`
          : absentDays > 0
          ? '检测到旷工记录，已记录L2级人事审查，需考勤主管确认。'
          : '全量抽样复验与公式比对无偏差，误差<0.01元，核准放行。'
      }
    };
  };

  const results = getResults();

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-700 shadow-xl my-8 pdf-avoid-break">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center">
              多智能体零幻觉精算 · 在线模拟沙盘 (Interactive Simulator)
              <span className="ml-2 text-[10px] px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">
                实时计算验证
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              亲自体验三大智能体如何将非结构化考勤自然语言逐步转化为确定性高精度财务核算
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 no-print">
          <button
            onClick={runSimulation}
            disabled={isProcessing}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center shadow-md transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 mr-1.5" />
            {isProcessing ? 'Agent 集群推理中...' : '运行多智能体全流程流水线'}
          </button>
          <button
            onClick={() => setActiveStep(0)}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg text-xs transition-colors cursor-pointer"
            title="重置测试"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Case Selector */}
      <div className="mb-6">
        <div className="text-xs font-medium text-slate-400 mb-2">选择典型考勤测试场景：</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESET_CASES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedCaseIndex(idx);
                setActiveStep(0);
              }}
              className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                selectedCaseIndex === idx
                  ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-xs'
                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">底薪: ¥{item.baseSalary}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Raw input display */}
      <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 mb-6 text-xs">
        <div className="text-slate-400 mb-1 flex items-center">
          <FileCode className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
          【钉钉导出原始口语文本输入】
        </div>
        <div className="font-mono text-slate-200 bg-slate-900 p-2.5 rounded border border-slate-800">
          "{currentCase.rawText}"
        </div>
      </div>

      {/* 3 Steps Pipeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1: Agent 1 */}
        <div className={`p-4 rounded-xl border transition-all ${
          activeStep >= 1 ? 'bg-slate-800/90 border-emerald-500/60' : 'bg-slate-800/30 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-emerald-400 flex items-center">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] flex items-center justify-center mr-1.5">1</span>
              Agent 1: 需求解析师
            </span>
            <span className="text-[10px] font-mono text-slate-400">DeepSeek-V3</span>
          </div>
          <div className="text-[11px] text-slate-400 mb-2">自然语言清洗为标准化 JSON Schema</div>
          <div className="bg-slate-900 p-2.5 rounded font-mono text-[11px] text-emerald-300 overflow-x-auto border border-slate-800">
            <pre>{JSON.stringify(results.agent1Json, null, 2)}</pre>
          </div>
          <div className="mt-2 text-[10px] text-emerald-400/80 flex items-center">
            <CheckCircle2 className="w-3 h-3 mr-1 shrink-0" />
            已排除任何数学计算，确保纯净数据转译
          </div>
        </div>

        {/* Step 2: Agent 2 */}
        <div className={`p-4 rounded-xl border transition-all ${
          activeStep >= 2 ? 'bg-slate-800/90 border-blue-500/60' : 'bg-slate-800/30 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-blue-400 flex items-center">
              <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-300 text-[10px] flex items-center justify-center mr-1.5">2</span>
              Agent 2: 精算执行员
            </span>
            <span className="text-[10px] font-mono text-slate-400">Claude 3.5</span>
          </div>
          <div className="text-[11px] text-slate-400 mb-2">刚性四则运算与全勤五险一金代扣</div>
          <div className="bg-slate-900 p-2.5 rounded font-mono text-[11px] text-blue-300 overflow-x-auto border border-slate-800">
            <pre>{JSON.stringify(results.agent2Result, null, 2)}</pre>
          </div>
          <div className="mt-2 text-[10px] text-blue-400/80 flex items-center">
            <CheckCircle2 className="w-3 h-3 mr-1 shrink-0" />
            高精度四舍五入保留2位，无数学幻觉
          </div>
        </div>

        {/* Step 3: Agent 3 */}
        <div className={`p-4 rounded-xl border transition-all ${
          activeStep >= 3 ? 'bg-slate-800/90 border-amber-500/60' : 'bg-slate-800/30 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-400 flex items-center">
              <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 text-[10px] flex items-center justify-center mr-1.5">3</span>
              Agent 3: 审计监察员
            </span>
            <span className="text-[10px] font-mono text-slate-400">GPT-4o-mini</span>
          </div>
          <div className="text-[11px] text-slate-400 mb-2">基线比对与异常熔断阻断机制</div>
          <div className="bg-slate-900 p-2.5 rounded font-mono text-[11px] text-amber-300 overflow-x-auto border border-slate-800">
            <pre>{JSON.stringify(results.agent3Verdict, null, 2)}</pre>
          </div>
          <div className={`mt-2 text-[10px] flex items-center font-medium ${
            results.agent3Verdict.合规裁决.includes('WARNING') ? 'text-rose-400' : 'text-emerald-400'
          }`}>
            {results.agent3Verdict.合规裁决.includes('WARNING') ? (
              <AlertCircle className="w-3 h-3 mr-1 shrink-0 text-rose-400" />
            ) : (
              <ShieldCheck className="w-3 h-3 mr-1 shrink-0 text-emerald-400" />
            )}
            裁决状态: {results.agent3Verdict.合规裁决}
          </div>
        </div>
      </div>
    </div>
  );
};
