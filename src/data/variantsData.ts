/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DocumentVariantId = 'full' | 'executive' | 'questionnaire' | 'technical' | 'audit_case';

export interface DocumentVariantConfig {
  id: DocumentVariantId;
  name: string;
  tag: string;
  badge: string;
  coverTitle: string;
  coverSubtitle: string;
  targetAudience: string;
  estimatedPages: string;
  accentColor: string;
  sections: string[]; // section IDs to display
  description: string;
  recommendedFileName: string;
}

export const DOCUMENT_VARIANTS: Record<DocumentVariantId, DocumentVariantConfig> = {
  full: {
    id: 'full',
    name: '全景综合完整版',
    tag: '全模块归档 / 方案全集',
    badge: '典藏全集 · 14章节全收录',
    coverTitle: '企业多智能体架构落地实施方案',
    coverSubtitle: '技术全景、安全监察体系、康源标杆实战与10维度落地问卷白皮书（全集）',
    targetAudience: '集团高管、技术总监、数字化办公室、外部评审专家',
    estimatedPages: '约 16-20 页 (A4)',
    accentColor: 'indigo',
    sections: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'],
    description: '包含全部 6 大核心模块与 14 个章节，涵盖安全哲学、双门模型、考勤薪资精算流水线、主流框架横评、康源智脑标杆工程、三级审计闭环及 10 维度调研问卷全集。',
    recommendedFileName: '企业多智能体架构落地实施方案_全景完整版.pdf'
  },
  executive: {
    id: 'executive',
    name: '管理决策战略版',
    tag: '董事会 / 总裁办专属',
    badge: '高管呈阅 · 聚焦战略与ROI',
    coverTitle: '康源智脑标杆工程与战略规划方案',
    coverSubtitle: '多智能体赋能康养产业数字化转型 · 业务全景、实施路线与投资回报 (ROI)',
    targetAudience: '董事长、总裁、总经理办公会、投资人与战略决策委员会',
    estimatedPages: '约 6-8 页 (A4)',
    accentColor: 'emerald',
    sections: ['section-1', 'section-3', 'section-4'],
    description: '浓缩管理决策核心：剥离底层 Python 代码与数十项具体问卷，重点呈现核心安全思想、框架横评选型、康源智脑三层架构、四大子智能体矩阵、四阶段演进路线及量化 ROI 效益。',
    recommendedFileName: '康源智脑实施方案_管理层战略决策版.pdf'
  },
  questionnaire: {
    id: 'questionnaire',
    name: '业务调研 SOP 问卷版',
    tag: '各业务部门填报下发',
    badge: '下发填报 · 附真实参考范例',
    coverTitle: '企业多智能体系统部署 · 信息采集标准问卷 (SOP)',
    coverSubtitle: '10 维度系统化需求调研、康源示范参考、数据精度规范与多部门审签表',
    targetAudience: '人力资源部、财务部、各院区/事业部负责人、IT 信息中心',
    estimatedPages: '约 5-6 页 (A4)',
    accentColor: 'amber',
    sections: ['section-6'],
    description: '专供项目前期需求摸底与部门调研下发使用。包含信息采集 6 步 SOP 流程图、10 维度详细问卷表、康源真实示范范例、附录 A 数据精度标准与附录 B 多部门审签盖章表。',
    recommendedFileName: '企业多智能体部署_10维度信息采集标准问卷(SOP).pdf'
  },
  technical: {
    id: 'technical',
    name: '技术工程与安全版',
    tag: '研发 / 架构 / 安全专用',
    badge: '技术规范 · 代码与契约落地',
    coverTitle: '零幻觉薪资精算与多智能体安全审计手册',
    coverSubtitle: '双门模型、刚性算法池、Python 隔离脚本、JSON 契约与持续审计熔断机制',
    targetAudience: '技术架构师、算法工程师、全栈研发、内网安全合规团队',
    estimatedPages: '约 8-10 页 (A4)',
    accentColor: 'sky',
    sections: ['section-1', 'section-2', 'section-3', 'section-5'],
    description: '面向工程交付与研发团队：深入解析双门模型、钉钉考勤清洗到财务算子流水线、20行隔离 Python 脚本、JSON Schema 数据契约以及 Pre/Runtime/Post-Run 三级审计与 L1-L3 熔断机制。',
    recommendedFileName: '零幻觉薪资精算与多智能体安全审计技术手册.pdf'
  },
  audit_case: {
    id: 'audit_case',
    name: '康源智脑实战与持续审计版',
    tag: '行业标杆 / 监察合规专版',
    badge: '工程范式 · 产业智脑与三级审计',
    coverTitle: '康源智脑落地实战与多智能体监察体系',
    coverSubtitle: '陕西康源 213 项标准代码化、四大子智能体协同与 Pre/Runtime/Post-Run 三级审计',
    targetAudience: '医养集团运营总监、质量风控部、内控审计专家、数字化工程督导',
    estimatedPages: '约 7-9 页 (A4)',
    accentColor: 'purple',
    sections: ['section-1', 'section-4', 'section-5'],
    description: '聚焦医养结合场景真实落地：系统阐述 213 项康源标准代码化方法、四大子智能体（运营聚合、标准审计、人才辅导、决策顾问）实操体系，以及 Pre-Run 沙盘推演、Runtime 实时交叉核验、Post-Run 闭环决策与 L1-L3 异常熔断机制。',
    recommendedFileName: '康源智脑落地实战与持续审计合规手册.pdf'
  }
};

import { DesignVariationId } from '../types';

export interface DesignVariationConfig {
  id: DesignVariationId;
  name: string;
  shortName: string;
  tag: string;
  description: string;
  features: string[];
}

export const DESIGN_VARIATIONS: Record<DesignVariationId, DesignVariationConfig> = {
  'variation-7': {
    id: 'variation-7',
    name: 'Variation 7 · 建筑典雅出版风 (当前激活)',
    shortName: 'V7 典雅出版',
    tag: '暖纸底色 / 赭石重音 / 典雅衬线',
    description: '采用 Warm Paper (#F8F7F4) 纸感底色、Cormorant Garamond 衬线大标题、Space Mono 架构微标与赭石重音 (Terracotta #CC5500)，沉静高级，逻辑架构一目了然。',
    features: ['暖纸底色 (#F8F7F4) + 纯白出版画框', 'Cormorant Garamond 典雅衬线标题', 'Space Mono 等宽技术微标体系', '赭石焦糖 (Terracotta #CC5500) 架构重音', '左侧 280px 极简系统目录导航']
  },
  'variation-1': {
    id: 'variation-1',
    name: 'Variation 1 · 暖白出版研报风 (当前推荐)',
    shortName: 'V1 暖白研报',
    tag: '暖白纸感 / 焦糖重音 / 2:1网格',
    description: '采用 Warm Eggshell (#FDFBFA) 暖白纸感底色、#2D2824 炭焙黑字阶、#CC5500 赭石焦糖重音线、2:1 研报核心架构网格与三级审计监察看板。',
    features: ['暖白纸感底色 (#FDFBFA) + 1000px 居中精装画框', '焦糖重音下划线与 2:1 核心架构网格', 'Quick Stats 研报量化看板 (98% / 213项)', '独立监察与持续可观测审计 (3-Tier Audit) 柱阵', 'Space Mono 精准技术微标体系']
  },
  'variation-2': {
    id: 'variation-2',
    name: 'Variation 2 · 瑞士结构网格风',
    shortName: 'V2 瑞士网格',
    tag: '纯白底色 / 严谨逻辑 / 结构一目了然',
    description: '包豪斯国际主义网格系统，纯白底色配微灰工程网格线与等宽编号，横平竖直，信息架构层次分明，逻辑极度清晰，一目了然。',
    features: ['纯白底色 + 严谨网格对齐', '等宽编号 [01] ~ [06] 结构导引', '模块间清晰边界与横向标尺', '理科架构师首选逻辑之美']
  },
  'variation-3': {
    id: 'variation-3',
    name: 'Variation 3 · 现代白底双栏工作台',
    shortName: 'V3 白底双栏',
    tag: '大屏工作台 / 树状目录 / 白底卡片',
    description: '左侧纯净浅灰树状章节目录，右侧大方白色卡片阅读流，支持快速点击锚点定位，层级分明，既有大屏高效率又有极简呼吸感。',
    features: ['左侧常驻树状结构目录 (280px)', '纯白圆角内容卡片群', '阅读位置实时平滑指示器', '大屏工程研读与查找效率倍增']
  },
  'variation-4': {
    id: 'variation-4',
    name: 'Variation 4 · 咨询战略简报风',
    shortName: 'V4 战略简报',
    tag: '雅致米白 / 商业汇报 / 决策看板',
    description: '麦肯锡/波士顿咨询式白皮书质感，雅致米白底色，深海蓝微标线，核心结论与量化 ROI 置顶突出，专为高管战略决策呈现。',
    features: ['雅致米白底色 (#FAFAFA)', '深蓝典雅标线与核心摘要框', '量化指标与投资回报置顶', '适合向董事会及高管汇报呈阅']
  },
  'variation-5': {
    id: 'variation-5',
    name: 'Variation 5 · 现代科技简约风',
    shortName: 'V5 科技简约',
    tag: '温润浅灰白 / 指标Hero / 微标体系',
    description: '半白半深双拼精装封面，温润 #F9FAFB 底色，顶部 Editorial Hero 指标看板，微标系统与现代双栏交互，兼具科技感与大方简约。',
    features: ['半白半深双拼高管封面', '顶置 3 大量化指标看板', '科技微标与工程架构图解', '功能丰富度与视觉质感兼备']
  }
};
