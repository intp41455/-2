/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FrameworkComparison } from '../types';

export const FRAMEWORK_COMPARISONS: FrameworkComparison[] = [
  {
    name: 'CrewAI',
    category: '开发框架',
    positioning: '像导演组建剧组：基于"角色扮演 (Role-Playing)"的多智能体敏捷协作框架',
    bestFor: '业务板块职责清晰、分工明确、需要快速打样验证的企业敏捷团队',
    codeRequirement: '中 (基础代码)',
    controllabilityScore: 8,
    securityScore: 8,
    easeOfUseScore: 9,
    costEfficiency: '高 (轻量开源，无平台抽水)',
    strengths: [
      '上手极快，20分钟即可搭建出第一套三角色协作原型',
      '心智模型天然契合人类团队结构（翻译官、计算员、审计员）',
      '社区活跃度高，内置大量现成的工具集成与任务记忆机制'
    ],
    risksOrLimitations: [
      '在处理具有高度复杂分支和死循环防御的图结构时相对单薄',
      '需要自行搭建生产级部署与异常恢复监控'
    ]
  },
  {
    name: 'LangGraph',
    category: '开发框架',
    positioning: '像程序员绘制精细状态流转图：基于"有向循环图 (Cyclic Graphs)"的工业级编排底座',
    bestFor: '金融、医疗、财务等对流程确定性、状态回滚和断点续跑要求极高的生产环境',
    codeRequirement: '高 (全代码)',
    controllabilityScore: 10,
    securityScore: 9,
    easeOfUseScore: 6,
    costEfficiency: '极高 (完全掌控代码级运行开销)',
    strengths: [
      '状态流转与拓扑控制达到数学级确定性，支持细粒度节点人工介入 (Human-in-the-loop)',
      '原生支持持久化存储、分支条件路由与任意步骤回退',
      '无黑盒抽象，排查Bug与链路追踪极其清晰透明'
    ],
    risksOrLimitations: [
      '学习曲线陡峭，要求团队熟悉LangChain与图论编程心智',
      '样板代码较多，原型搭建耗时明显高于CrewAI'
    ]
  },
  {
    name: 'Dify / 扣子 (Coze)',
    category: '低代码平台',
    positioning: '像搭乐高积木：拖拽式画布与可视化全功能工作流管理平台',
    bestFor: '产品经理、业务骨干主导的内部管理流程，无需编写繁重工程代码',
    codeRequirement: '零 / 极低代码',
    controllabilityScore: 7,
    securityScore: 7,
    easeOfUseScore: 10,
    costEfficiency: '中 (云端托管按量计费，或私有化部署)',
    strengths: [
      '全图形化交互，所见即所得，支持多模型自由挂载与RAG知识库配置',
      '国内网络与国产大模型（DeepSeek、通义、文心等）生态集成度极佳',
      '支持一键发布为Web应用、微信机器人、飞书/钉钉集成插件'
    ],
    risksOrLimitations: [
      '面对高频并发或极为独特的边缘逻辑时，图形节点受平台能力限制',
      '云托管版本对敏感财务/隐私数据存在合规审核阻力'
    ]
  },
  {
    name: 'Hermes / OpenClaw',
    category: '自主智能体',
    positioning: '像聘用全能个人助理：具备长程持久记忆与自动化调用工具能力的自主底座',
    bestFor: '极客个人工作流自动化、自托管研发助手、环境探针',
    codeRequirement: '高 (全代码)',
    controllabilityScore: 5,
    securityScore: 4,
    easeOfUseScore: 7,
    costEfficiency: '中 (API调用频繁，需设预算阈值)',
    strengths: [
      '具备强大的自主探索、跨会话长期记忆与自主编写并封装新Skill的能力',
      '能深度调用操作系统Shell与浏览器自动化工具'
    ],
    risksOrLimitations: [
      '高权限自主行动风险大，缺乏沙箱限制时容易造成文件损坏或不可逆网络请求',
      '如果无脑批准审批弹窗，易触发"内爆-外爆-反噬"毁灭三部曲'
    ]
  },
  {
    name: '腾讯 WorkBuddy (专家团)',
    category: '企业级应用',
    positioning: '像开箱即用的AI专家智囊团：内置百种行业专家角色的成熟桌面端数字员工',
    bestFor: '依托腾讯会议、企微生态的中大型企业办公协同与通用方案研讨',
    codeRequirement: '零 / 极低代码',
    controllabilityScore: 7,
    securityScore: 8,
    easeOfUseScore: 9,
    costEfficiency: '中高 (按席位授权或企业订阅)',
    strengths: [
      '开箱即用，无需配置复杂的开发环境，内置多领域资深专家提示词',
      '深度打通企微、腾讯文档等协同生态，企业信赖感强'
    ],
    risksOrLimitations: [
      '属于通用产品，无法深度定制企业内部独特的"奇葩规则"与离线边缘业务',
      '数据需通过腾讯云端中转，完全本地化离线部署难度高'
    ]
  },
  {
    name: 'Harness',
    category: 'DevOps平台',
    positioning: '像严谨的发布质检官：嵌入CI/CD流水线中的企业级AI代码审查与安全防护门禁',
    bestFor: '大型技术研发团队的软件交付管线、PR合规审查与自动化漏洞修复',
    codeRequirement: '高 (全代码)',
    controllabilityScore: 9,
    securityScore: 10,
    easeOfUseScore: 7,
    costEfficiency: '高 (为大型工程节省数千小时质检成本)',
    strengths: [
      '专注于工程交付阶段的质量审计，分析影响面精准，输出阻断/放行决议',
      '具备成熟的权限治理、安全隔离与合规审计日志机制'
    ],
    risksOrLimitations: [
      '极度垂直于软件开发与DevOps，无法跨界用于财务或行政运营'
    ]
  }
];

export const HYBRID_DEPLOYMENT_PILLARS = [
  {
    title: '本地核心骨架 (安全底线)',
    desc: '敏感核心数据（员工薪资、老人健康档案、财务凭证）100%保留在企业私有容器内，物理不出域。由本地开源小模型（如 DeepSeek/Qwen-7B/14B）或死代码负责日常清洗和私有计算。'
  },
  {
    title: '云端智能插件 (能力上限)',
    desc: '当需要理解复杂的国家新政、长篇法律条文或进行高难度数学证明时，系统通过智能路由器将完全去隐私化的抽象文本抛给云端最强前沿大模型（Claude 3.7 / GPT-4o），仅返回结论文本，既保密又聪明。'
  },
  {
    title: '精细化规则引擎 (核心壁垒)',
    desc: '把企业所有"奇葩个性化规则"（如哺乳期打卡宽容、异地调休系数）用JSON Schema写死在确定性工作流中。大厂通用产品永远不会为你微调，这构成了企业不可替代的数字护城河。'
  }
];
