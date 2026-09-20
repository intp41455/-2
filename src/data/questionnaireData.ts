/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuestionnaireSection } from '../types';

export const QUESTIONNAIRE_SECTIONS: QuestionnaireSection[] = [
  {
    id: 'sec-1',
    partNumber: '第一部分',
    title: '企业基本信息与数字化转型现状',
    description: '确立企业法人身份、所属产业细分、集团分支规模及当前信息化与AI应用基线。',
    questions: [
      {
        key: '1.1-name',
        question: '企业全称及细分所属行业',
        instruction: '填写工商注册全称，注明主行业及细分赛道（如养老服务-医养结合型机构）',
        kangyuanExample: '陕西康源投资集团有限公司 / 养老服务（机构养老+社区居家+养老教育+智慧养老）'
      },
      {
        key: '1.1-scale',
        question: '成立时间、总部所在地、分支机构与员工体量',
        instruction: '分支机构需涵盖全资子公司、分支机构及日间照料中心等，员工总数含全职与护理外包',
        kangyuanExample: '2004年成立 / 陕西省西安市高新区 / 7家养老机构（西安4、成都2、云南曲靖1）+ 30余个社区日间照料中心 / 全体员工约500人'
      },
      {
        key: '1.1-segments',
        question: '核心业务板块及营收结构占比',
        instruction: '列出各板块的业务属性及各自对集团营收的贡献比率',
        kangyuanExample: '机构养老运营（60%）、社区居家养老（20%）、养老教育福祉培训（15%）、智慧养老软硬件（5%）'
      },
      {
        key: '1.2-it-status',
        question: '现有核心IT业务系统清单及数字化现状',
        instruction: '标注各系统供应商、上线时间，评估是否存在跨系统数据孤岛',
        kangyuanExample: '智慧康养大数据平台（深圳瑞康瀚云自研，2024上线）；各机构OA（钉钉，2021上线）；财务系统（用友NC，2018上线）。各院数据格式未完全统一，存在明显孤岛。'
      }
    ]
  },
  {
    id: 'sec-2',
    partNumber: '第二部分',
    title: '组织架构与人员画像 (系统受众)',
    description: '剖析集团与分支机构的治理模式、各层级人员的数字化素养与核心使用诉求。',
    questions: [
      {
        key: '2.1-org-struct',
        question: '集团总部与分支机构的管控模式及数据流转链路',
        instruction: '直管/矩阵/加盟独立？数据由谁录入、谁审核、谁需要基于数据决策？',
        kangyuanExample: '直管与垂直职能矩阵结合。各养老院日常运营数据由院内行政与护士长录入，院长初审，月度汇总至集团质控部与财务部，最终由集团高管做战略调控。'
      },
      {
        key: '2.2-user-persona',
        question: '系统核心使用者角色规模、素养及诉求',
        instruction: '详述各角色的痛点与核心期望',
        kangyuanExample: '① 集团高管（约10人）：关注跨院宏观看板与决策建议，数字化素养高；② 各机构院长（7人）：关注床位收益与合规，素养中等；③ 财务（15人）：关注极速月结，素养高；④ 护理主管（30人）：关注排班交接，素养偏弱；⑤ IT中台（8人）：具备基础运维与开发能力。'
      }
    ]
  },
  {
    id: 'sec-3',
    partNumber: '第三部分',
    title: '各业务板块微观数据详情',
    description: '摸清各个业务板块的资产底数、数据源类型、更新频次及历史存量。',
    questions: [
      {
        key: '3.1-metrics-scale',
        question: '机构养老板块的运营规模与数据口径',
        instruction: '提供床位数、入住率、核心指标与数据收集频次',
        kangyuanExample: '总床位1051张，常态入住率约82.4%。数据源包含各机构Excel台账与部分智慧床垫AIoT数据流。每日手动更新考勤与巡查记录，历史数据留存约3年。'
      },
      {
        key: '3.2-bottlenecks',
        question: '当前数据统计报告的耗时瓶颈与易错环节',
        instruction: '明确数据流转中最消耗人力的节点',
        kangyuanExample: '每月汇总7家机构运营报表需3-5个工作日。各机构表格格式不统一、非结构化请假备注需人工复核、老人跨院换床编号不一致是最大痛点。'
      }
    ]
  },
  {
    id: 'sec-4',
    partNumber: '第四部分',
    title: '现有 IT 基础设施与数据治理环境',
    description: '考察网络带宽、硬件服务器、API开放能力及数据防丢备份机制。',
    questions: [
      {
        key: '4.1-api-capability',
        question: '现有系统的接口开放度与数据导出能力',
        instruction: '是否具备开放API？能否定时自动输出CSV/JSON？',
        kangyuanExample: '钉钉开放平台支持调用考勤API；自研智慧大数据平台支持PostgreSQL直连与REST API；用友财务系统目前仅支持月度手动导出Excel。'
      },
      {
        key: '4.2-hardware-env',
        question: '网络专线、本地机房与云基础设施情况',
        instruction: '是否有自建服务器？是否有阿里云/腾讯云账号？',
        kangyuanExample: '各机构均接入500M光纤宽带；集团总部设有独立机房与本地NAS服务器；同时拥有阿里云企业版账号，具备运行私有容器与微服务的技术条件。'
      }
    ]
  },
  {
    id: 'sec-5',
    partNumber: '第五部分',
    title: '业务规则、标准化体系与异常边界',
    description: '把企业经验沉淀为机器可解析的规则基座，明晰异常与例外情形。',
    questions: [
      {
        key: '5.1-standards',
        question: '现行标准化制度总数、类别与固化程度',
        instruction: '列明成文标准的数量与执行方式',
        kangyuanExample: '已建立《康源美宏养老服务标准化体系》，包含213项标准：服务提供98项、服务保障83项、岗位工作11项、评价改进21项。目前处于V3.0版，由人工纸质+Excel核查执行。'
      },
      {
        key: '5.2-exception-cases',
        question: '业务中高频的例外情况与边缘处置逻辑',
        instruction: '列举老员工依靠经验处理的典型非标场景',
        kangyuanExample: '① 迟到但因陪护急救老人：需院方紧急医疗证明，方可免除扣款；② 医保定点审批滞后老人的押金冲抵；③ 订单班学生实习中途退班的学分折算。'
      }
    ]
  },
  {
    id: 'sec-6',
    partNumber: '第六部分',
    title: '外部数据、政策监控与行业对标',
    description: '明确系统对外界知识、监管政策与行业大盘的感知需求。',
    questions: [
      {
        key: '6.1-policy-sources',
        question: '重点监控的国家与地方政策来源',
        instruction: '指定需要自动爬取并解读新规的部委和门户',
        kangyuanExample: '民政部、国家卫健委、国家医保局、陕西省老龄产业协会官网、西安市民政局涉老补贴新政、普惠养老专项再贷款政策。'
      },
      {
        key: '6.2-policy-reaction',
        question: '政策变动的期望响应时效与交互形式',
        instruction: '希望系统如何辅助管理层消化新政策？',
        kangyuanExample: '出台新规后24小时内完成抓取与AI摘要，自动评估对集团各机构床位补贴与医保结算的影响，在《高管月报》中单列"政策红利申报建议"。'
      }
    ]
  },
  {
    id: 'sec-7',
    partNumber: '第七部分',
    title: '合规安全、数据主权与物理隔离',
    description: '划定数据安全的红线与底线，明确何种数据坚决不可流出内网。',
    questions: [
      {
        key: '7.1-data-privacy',
        question: '涉及的核心敏感数据类型与监管要求',
        instruction: '梳理个人隐私、医疗健康数据与商业财务机密',
        kangyuanExample: '老人健康病历档案、身份证号、家属紧急联系方式、员工薪资台账属于绝对敏感数据。依据《数据安全法》与《个人信息保护法》，严禁明文离开企业私有云。'
      },
      {
        key: '7.2-security-level',
        question: '网络等保要求、访问控制与审计留痕要求',
        instruction: '是否要求等保二级/三级？操作日志保留时长？',
        kangyuanExample: '符合等保二级规范，启用角色分级授权（RBAC）；系统操作与Agent调用日志必须保留不少于180天，支持全流程安全溯源。'
      }
    ]
  },
  {
    id: 'sec-8',
    partNumber: '第八部分',
    title: '用户交互偏好与体验设计需求',
    description: '定义前端界面的触达形态、可视化风格与告警通路。',
    questions: [
      {
        key: '8.1-interaction-modes',
        question: '首选访问终端与使用形态',
        instruction: 'Web桌面大屏、手机端APP、企业微信/钉钉消息推送？',
        kangyuanExample: '集团高管与财务首选Web端大屏可视化看板；各机构院长与护士长更青睐钉钉工作台直接推送的移动端图文简报。'
      },
      {
        key: '8.2-alert-channels',
        question: '异常告警通知的分级推送路径',
        instruction: '不同严重等级的警报如何触达责任人？',
        kangyuanExample: 'L1轻微异常：次日日志汇总与钉钉待办提醒；L2一般异常：实时钉钉+邮件给院总；L3严重违规（如连续3天数据中断）：短信即时呼叫集团副总。'
      }
    ]
  },
  {
    id: 'sec-9',
    partNumber: '第九部分',
    title: '技术约束、模型选型与集成偏好',
    description: '界定技术栈路线、大模型供应商偏好及二次开发能力。',
    questions: [
      {
        key: '9.1-tech-stack',
        question: '编程语言、框架底座与大模型选型偏好',
        instruction: 'Python/Java？开源自建 vs 商业API？',
        kangyuanExample: '推荐Python技术栈配合LangGraph/CrewAI；底座优先选择国产高性价比开源模型（DeepSeek-V3 / Qwen-2.5）做本地推理，云端配合Claude/GPT做高阶复核。'
      },
      {
        key: '9.2-maintenance',
        question: '系统的长期维护方式与培训交付诉求',
        instruction: '自研团队维护还是第三方代维？',
        kangyuanExample: '首期由专业实施团队主导交付，同步对瑞康瀚云自研团队进行为期2周的系统架构培训与源码移交，实现后续自主迭代规则库。'
      }
    ]
  },
  {
    id: 'sec-10',
    partNumber: '第十部分',
    title: '投资预算、推进里程碑与成功验收标准',
    description: '明确商务预算口径、时间节点与可量化的项目ROI考核指标。',
    questions: [
      {
        key: '10.1-budget-scope',
        question: '项目首期投资预算范围与硬件采购口径',
        instruction: '注明是否包含本地GPU服务器采购及后续维保',
        kangyuanExample: '首期实施预算约30~50万元人民币，包含2台本地边缘推理服务器采购、多智能体编排开发及一期系统集成。'
      },
      {
        key: '10.2-milestone-kpi',
        question: '期望上线时间节点与可量化的成功衡量标准',
        instruction: '写出具有硬性考核意义的业务KPI目标',
        kangyuanExample: '合同签署后90天内完成中成·城市颐养中心试点上线。量化KPI：月度运营报表产出由3天压减至10分钟；213项标准审计覆盖率达到100%；AI报表与人工结果比对误差率低于1.5%。'
      }
    ]
  }
];

export const QUESTIONNAIRE_WORKFLOW_STEPS = [
  { step: '01', title: '问卷发放', desc: '方案立项前1-2周，由总架构师下发问卷至企业', icon: 'FileSpreadsheet' },
  { step: '02', title: '指定协调人', desc: '企业指定项目负责人，负责统筹内部各业务口', icon: 'UserCheck' },
  { step: '03', title: '业务分头填报', desc: '机构运营、财务、质控、人事分头填写对应章节', icon: 'Users' },
  { step: '04', title: '统一汇总格式化', desc: '协调人整理脱敏附件、消除矛盾项与口径分歧', icon: 'FolderSync' },
  { step: '05', title: '内部审签与盖章', desc: '分管领导审核确认，签署保密知悉与真实性承诺', icon: 'FileSignature' },
  { step: '06', title: '交付方案策划', desc: '架构团队基于精准输入，定制100%可落地方案', icon: 'Rocket' }
];
