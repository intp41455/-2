/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AgentRoleDefinition, KangyuanMetrics } from '../types';

export const KANGYUAN_METRICS: KangyuanMetrics = {
  institutions: 7,
  totalBeds: 1051,
  daycareCenters: 30,
  currentOccupancy: '82.4%',
  standardsCount: 213,
  standardsBreakdown: {
    serviceProvision: 98,
    serviceGuarantee: 83,
    jobPosts: 11,
    evaluationImprovement: 21
  }
};

export const KANGYUAN_AGENTS: AgentRoleDefinition[] = [
  {
    id: 'ky-agent-1',
    name: '运营数据聚合师 (Operations Aggregator)',
    title: '多机构多源异构数据实时规整智能体',
    mappedRole: '数据中台分析主管',
    model: 'DeepSeek-V3 / Qwen-2.5-72B',
    modelRationale: '处理中文长文本、复杂Excel表格及AIoT设备时序日志能力优越，极具性价比',
    color: 'emerald',
    responsibilities: [
      '自动连接西安、成都、曲靖等7家分支机构ERP及OA',
      '规整床位周转率、在住老人档案、护理交接班记录与食材采购流水',
      '消除"同一老人跨系统不同ID"等脏数据，生成全景JSON运营底座'
    ],
    inputs: ['各机构Excel台账', '智能床垫与手环AIoT数据流', '财务用友NC接口'],
    outputs: ['《康源集团月度运营全景数据集 (JSON)》'],
    strictConstraints: ['老人身份信息必须在内网完成脱敏，严禁明文外出'],
    systemPromptSnippet: '【角色定位】你是康源智脑的"数据总线"。从7家机构抽取日常运营与看护数据，做格式对齐与清洗，输出标准化全景指标。'
  },
  {
    id: 'ky-agent-2',
    name: '标准合规审计员 (Standards Auditor)',
    title: '213项康源美宏标准机器核验智能体',
    mappedRole: '集团质控部总监',
    model: 'Claude 3.5 Sonnet',
    modelRationale: '超高精度的长逻辑链推理，能严格将服务日志与213项条款进行细致条款比对',
    color: 'indigo',
    responsibilities: [
      '对照98项服务提供标准、83项服务保障标准与11项岗位细则进行逐条匹配',
      '发现诸如"失能老人翻身记录缺失"、"夜巡签到超时"等合规异常',
      '生成每日合规评分及黄红牌预警通知单'
    ],
    inputs: ['Agent 1输出的清洗运营数据', '本地固化的213项JSON标准规则库'],
    outputs: ['《机构标准化合规审计报告》与整改督办单'],
    strictConstraints: ['审计结果必须追溯至具体责任护理员及班次，杜绝泛化评价'],
    systemPromptSnippet: '【角色定位】你是康源美宏标准守护者。严格按213项细则核对护理操作记录，任何不合规项必须标注对应条款编号与扣分原因。'
  },
  {
    id: 'ky-agent-3',
    name: '人才培训辅助师 (Education & Training AI)',
    title: '订单班与在岗技能个性化智训智能体',
    mappedRole: '康源职业培训学院副院长',
    model: 'Qwen-2.5 / DeepSeek-V3',
    modelRationale: '教育语料丰富，具备强大的知识库问答与智能教案生成能力',
    color: 'sky',
    responsibilities: [
      '支撑与多所高职院校共建的"康源订单班"教学评估',
      '分析在岗护理员技能考核短板，生成微课推送与模拟情景题库',
      '自动生成新员工实操辅导路径，将上岗考核周期压缩30%'
    ],
    inputs: ['护理员操作评测数据', '康源护理教材库', '考勤合规失分记录'],
    outputs: ['个性化学习路径', '每周知识巩固题目', '实操技能晋升评估表'],
    strictConstraints: ['医学急救等高危实操标准必须由人类教研组最终把关'],
    systemPromptSnippet: '【角色定位】你是康源教育的数字导师。根据护理人员日常实操扣分弱项，精准推荐强化训练方案与实战模拟考核。'
  },
  {
    id: 'ky-agent-4',
    name: '智慧决策顾问 (Strategic Advisor)',
    title: '政策感知与扩张投资智慧参谋智能体',
    mappedRole: '集团董事长特别战略助理',
    model: 'GPT-4o-mini / Claude 3.5 Sonnet',
    modelRationale: '高层宏观推理敏锐，擅长政策抓取、经济测算与多维战略沙盘推演',
    color: 'purple',
    responsibilities: [
      '聚合全集团跨区域运营数据，研判各机构床位边际收益与入住率趋势',
      '抓取国家民政部、卫健委最新银发经济与医保补贴政策',
      '输出《集团月度高管决策简报》，提供新增床位选址与轻资产扩张测算'
    ],
    inputs: ['全业务板块脱敏汇总指标', '云端爬取的国家与陕西省老龄产业政策库'],
    outputs: ['《康源集团月度战略决策简报 (Executive Briefing)》'],
    strictConstraints: ['严禁直接输出未经置信度评估的财务投资指令'],
    systemPromptSnippet: '【角色定位】你是康源集团战略参谋。结合内外部数据，生成关于床位配比优化、降本增效及政策红利落地的决策支持。'
  }
];

export const KANGYUAN_PHASES = [
  {
    phase: '第一阶段：规则化石 (第 1-2 个月)',
    title: '213项标准体系的代码化与机器可读化',
    goal: '消除经验主义，构建确定性业务逻辑基座',
    deliverables: [
      '98项服务提供标准、83项保障标准全部改写为 If...Then... 刚性规则',
      '构建《康源标准规则库 v1.0 (JSON Schema)》',
      '专家评审确认，形成不可篡改的业务宪法'
    ],
    milestone: '完成213项标准的逻辑无损转换与本地规则库封板'
  },
  {
    phase: '第二阶段：单点试点 (第 3-4 个月)',
    title: '标杆机构（康源中成·城市颐养中心）实战跑通',
    goal: '在真实业务闭环中验证Agent 1+2的准确度',
    deliverables: [
      '部署本地离线容器环境，连接单院ERP与考勤台账',
      '回测过去6个月历史数据（超180天连续工单）',
      '调整模型参数，消除误判与漏判'
    ],
    milestone: 'AI报表与人工核验误差率稳定低于 1.5%'
  },
  {
    phase: '第三阶段：规模化部署 (第 5-7 个月)',
    title: '全集团7大机构、日照中心及教育板块全线贯通',
    goal: '构建总指挥编排网络与4大智能体协同网络',
    deliverables: [
      '向西安、成都、曲靖部署本地边缘网关（数据物理不出域）',
      '上线Agent 3人才智训与Agent 4战略决策看板',
      '上线总指挥 Orchestrator 与实时安全审计层'
    ],
    milestone: '7家机构月度运营报告自动聚合时间缩短至 10 分钟'
  },
  {
    phase: '第四阶段：持续进化 (第 8 个月起)',
    title: '动态政策感知与自适应进化闭环',
    goal: '打造具备自我更新能力的敏捷银发产业智脑',
    deliverables: [
      '建立民政/医保新规一键解析与规则热插拔机制',
      '建立月度决策建议采纳率跟踪看板',
      '沉淀具有自主知识产权的医养多智能体行业解决方案'
    ],
    milestone: '形成行业级智慧康养标杆示范案例'
  }
];

export const KANGYUAN_ROI = [
  {
    metric: '月度全景运营报告产出耗时',
    before: '3 ~ 5 个工作日 (多部门手工录入汇总)',
    after: '10 分钟自动生成',
    improvement: '提效 98%',
    value: '极大加速管理层决策响应，消除信息时滞'
  },
  {
    metric: '213项标准化体系执行审计覆盖率',
    before: '5% ~ 10% (人工抽查、现场突击)',
    after: '100% 全量机器连续监控',
    improvement: '全覆盖 (10x 提升)',
    value: '杜绝护理死角与安全隐患，大幅降低医患纠纷'
  },
  {
    metric: '订单班与在岗护理新员工上岗周期',
    before: '平均 45 天现场跟班',
    after: '31 天 (AI个性化专项突击)',
    improvement: '缩短 30%',
    value: '有效化解养老行业护理师资荒与高流动率痛点'
  },
  {
    metric: '跨机构数据孤岛与协同成本',
    before: '每月召开跨区域碰头会，数据格式互不兼容',
    after: '端云协同，统一JSON数据契约实时透视',
    improvement: '沟通损耗下降 85%',
    value: '为集团异地复制新设养老院奠定轻量化中枢'
  }
];
