/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuditTier } from '../types';

export const AUDIT_TIERS: AuditTier[] = [
  {
    tierNumber: 1,
    name: '方案落地前审计：数字孪生沙盘推演 (Pre-Launch Sandbox)',
    stage: '正式进入生产环境编码前',
    purpose: '在耗费昂贵工程人力前，用历史真实数据与极端地雷场景验证方案拓扑是否会"跑飞"',
    coreMechanism: '抽取过去6个月的真实运营与考勤脱敏数据，人工构造50+极端边界案例（如入住率骤降至50%、节假日排班真空、三机构同时更换院长等）。监察Agent在封闭沙箱中模拟执行，比对AI裁决与人类历史处理结果。',
    passStandard: '常规场景一致性 ≥ 95%，且5%极端边缘场景均被安全拦截并触发人工兜底预案，方可进入下一开发阶段。',
    actionItems: [
      '构建包含50个典型地雷的《金标准沙盘测试集》',
      '在隔离Docker容器内执行压力推演，观测死循环与幻觉率',
      '输出《可行性推演裁决报告》，修复冲突条款'
    ]
  },
  {
    tierNumber: 2,
    name: '运行中实时监控："三明治"交叉验证 (Runtime Sandwich Check)',
    stage: '生产环境每次任务流转时实时触发',
    purpose: '在数据从上游Agent传递至下游Agent的毫秒级窗口内进行阻断式校验，不让脏数据污染全局',
    coreMechanism: '结构性校验（格式与字段完整度） + 逻辑一致性校验（跨Agent数据勾稽关系，如报到率与打卡人数冲突） + 时效性校验（数据时间戳新鲜度，防止陈旧日志误判）。',
    passStandard: '三道防线全部呈绿色通行信号，下游写入模块方可获取执行锁；任一失败即刻原地刹车。',
    actionItems: [
      '第一重：JSON Schema校验，字段缺漏或类型错误直接拦截',
      '第二重：业务逻辑自洽性校验，识别前后矛盾数据',
      '第三重：时间戳新鲜度核验，超期未同步节点触发陈旧预警'
    ]
  },
  {
    tierNumber: 3,
    name: '周期性复盘审计：反馈闭环与自进化 (Periodic Review & Feedback Loop)',
    stage: '每月例行总结与每季度战略复盘',
    purpose: '评估AI系统实际商业产出，消除误报与死板规则，推动知识库和底层模型迭代',
    coreMechanism: '统计《智慧决策顾问建议采纳率月报》（目标>75%），统计《标准合规审计员误报率跟踪表》（目标<2%），定期对213项标准歧义项进行语意对齐，评估更优性价比的最新开源模型。',
    passStandard: '系统健康度KPI维持在稳态区间，误报率呈现月度递减趋势。',
    actionItems: [
      '汇总月度建议采纳率与业务部门满意度问卷',
      '对误报案例组织复盘，将新增特例沉淀为规则库补丁',
      '季度评估新开源模型（如DeepSeek新迭代版本）的平滑升级'
    ]
  }
];

export const INCIDENT_RESPONSE_MATRIX = [
  {
    level: 'L1 - 轻微异常 (Minor Alert)',
    trigger: '单家分支机构单日某一非关键字段缺失（如某日日照中心餐食满意度未及时同步）',
    responseAction: '系统记录异常审计日志，向本院信息对接人推送轻度催办提醒，次日凌晨自动重试，不中断主流程。',
    humanIntervention: '无需人工接管，自愈或顺延重试即可。',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    level: 'L2 - 一般异常 (Moderate Risk)',
    trigger: 'Agent输出数据格式损坏、字段与Schema不符，或出现明显的内部勾稽矛盾（如实发工资环比突变>20%）',
    responseAction: '立即挂起该子Agent的工作流，自动重试1次；若仍异常，立即阻断向下一节点推送，并向集团技术主管及业务主管发送邮件与企微告警。',
    humanIntervention: '需业务主管登录管理看板，查看差额明细并点击"人工确认放行"或"驳回重新计算"。',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    level: 'L3 - 严重致命异常 (Critical Emergency)',
    trigger: '连续3天机构核心数据中断、多Agent输出严重逻辑悖论、检测到疑似提示词注入攻击或越权操作指令',
    responseAction: '全面触发物理熔断机制！总指挥Orchestrator立即封锁所有对外API，冻结本地写入脚本，系统回退至只读状态，触发紧急安全警报。',
    humanIntervention: '必须由系统架构师与集团分管副总亲自排查根因，在控制台输入双人独立动态秘钥后方可解除系统封锁。',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
  }
];
