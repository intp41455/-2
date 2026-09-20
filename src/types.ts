/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DocumentViewMode = 'paged' | 'continuous' | 'interactive' | 'presentation';

export type DocumentVariantId = 'full' | 'executive' | 'questionnaire' | 'technical' | 'audit_case';

export type DesignVariationId = 'variation-7' | 'variation-5' | 'variation-1' | 'variation-2' | 'variation-3' | 'variation-4';

export interface TableOfContentsItem {
  id: string;
  title: string;
  pageNumber: number;
  iconName: string;
  subsections?: { id: string; title: string; pageNumber: number }[];
}

export interface AgentRoleDefinition {
  id: string;
  name: string;
  title: string;
  mappedRole: string; // e.g. "产品经理", "后端研发", "测试审计"
  model: string;
  modelRationale: string;
  color: string;
  responsibilities: string[];
  inputs: string[];
  outputs: string[];
  strictConstraints: string[];
  systemPromptSnippet: string;
}

export interface FrameworkComparison {
  name: string;
  category: '开发框架' | '低代码平台' | '自主智能体' | '企业级应用' | 'DevOps平台';
  positioning: string;
  bestFor: string;
  codeRequirement: '高 (全代码)' | '中 (基础代码)' | '零 / 极低代码';
  controllabilityScore: number; // 1-10
  securityScore: number; // 1-10
  easeOfUseScore: number; // 1-10
  costEfficiency: string;
  strengths: string[];
  risksOrLimitations: string[];
}

export interface KangyuanMetrics {
  institutions: number;
  totalBeds: number;
  daycareCenters: number;
  currentOccupancy: string;
  standardsCount: number;
  standardsBreakdown: {
    serviceProvision: number;
    serviceGuarantee: number;
    jobPosts: number;
    evaluationImprovement: number;
  };
}

export interface QuestionnaireSection {
  id: string;
  partNumber: string;
  title: string;
  description: string;
  questions: {
    key: string;
    question: string;
    instruction: string;
    kangyuanExample: string;
  }[];
}

export interface AuditTier {
  tierNumber: number;
  name: string;
  stage: string;
  purpose: string;
  coreMechanism: string;
  passStandard: string;
  actionItems: string[];
}
