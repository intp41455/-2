/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DocumentVariantId, DOCUMENT_VARIANTS } from '../data/variantsData';

/**
 * Generates clean, well-formatted Markdown content for a specific document variant.
 */
export function generateVariantMarkdown(variantId: DocumentVariantId): string {
  const variant = DOCUMENT_VARIANTS[variantId] || DOCUMENT_VARIANTS.full;
  const dateStr = '2026年9月';

  let md = `# ${variant.coverTitle}\n`;
  md += `## ${variant.coverSubtitle}\n\n`;
  md += `> **版本**: V2.6.4 | **适用受众**: ${variant.targetAudience} | **日期**: ${dateStr} | **密级**: 内部商业机密\n\n`;
  md += `---\n\n`;

  // Brief abstract
  md += `### 【${variant.name} · 内容导读】\n\n`;
  md += `${variant.description}\n\n`;
  md += `---\n\n`;

  // Include sections based on variant
  if (variant.sections.includes('section-1')) {
    md += `## 第一部分：序言与核心安全哲学 —— AI本质与不可逆执行风险\n\n`;
    md += `### 1.1 模型失控与沙盒逃逸的法理剖析\n`;
    md += `- 大语言模型（LLM）本质是基于概率统计的非确定性“续写引擎”，其生成过程具有天然的随机性与偶发幻觉。\n`;
    md += `- **核心法理认知**：如果将具有“写”权限、数据库删除权限或外部资金划拨权限的物理工具直接赋予LLM自主调用，发生不可逆风险的概率随着调用链条长度呈指数级上升。\n\n`;

    md += `### 1.2 "左移确定性"铁律 (Left-Shift Determinism)\n`;
    md += `> **铁律原则**：AI负责发散、提炼与意图理解（提供可能性），底层刚性代码（Python / Go）负责校验、计算与落地关门（提供100%确定性）。\n\n`;

    md += `### 1.3 双门安全模型 (The Double-Door Security Architecture)\n`;
    md += `- **第一道门：云端内容安全门（大模型的“嘴”）**\n`;
    md += `  - 过滤敏感政治言论、暴力血腥、基础 Prompt 注入攻击。\n`;
    md += `- **第二道门：本地代码执行安全门（操作系统的“手”）**\n`;
    md += `  - 严格限制本地系统调用，输入必须经过 JSON Schema 强校验，四则运算走本地确定性算子。\n\n`;
  }

  if (variant.sections.includes('section-2')) {
    md += `## 第二部分：实战场景 —— 多智能体薪资考勤自动化精算体系\n\n`;
    md += `### 2.1 三大智能体分工矩阵\n`;
    md += `1. **Agent 1 (考勤数据清洗师)**: 负责解析钉钉/企微打卡日志与非结构化请假文本，提炼标准结构体。\n`;
    md += `2. **Agent 2 (刚性公式执行员)**: 本地安全容器调用预设四则运算函数，绝对禁止LLM算数。\n`;
    md += `3. **Agent 3 (薪酬合规审计师)**: 交叉对比最低工资标准、五险一金比例与异常阈值。\n\n`;

    md += `### 2.2 核心算法公式池\n`;
    md += `- **日薪基准**: 计薪日薪 = 基本底薪 / 21.75\n`;
    md += `- **病假保障**: 病假扣款 = 计薪日薪 * 病假天数 * 40% (依法发放60%)\n`;
    md += `- **迟到惩罚**: 单次扣20元，全勤奖500元清零\n`;
    md += `- **旷工惩罚**: 旷工扣减 = 计薪日薪 * 3.0\n\n`;

    md += `### 2.3 生产级隔离计算脚本 (Python核心范式)\n`;
    md += `\`\`\`python
# 生产级隔离环境计算示范
def calculate_net_salary(emp, daily_rate=21.75):
    base = emp["底薪"]
    leave_deduct = emp["事假天数"] * (base / daily_rate)
    sick_deduct = emp["病假天数"] * (base / daily_rate) * 0.4 # 发60%
    late_deduct = emp["迟到次数"] * 20.0
    absent_deduct = emp["旷工天数"] * (base / daily_rate) * 3.0
    bonus = 500.0 if (emp["事假天数"]==0 and emp["迟到次数"]==0 and emp["旷工天数"]==0) else 0.0
    taxable = base - leave_deduct - sick_deduct - late_deduct - absent_deduct + bonus
    social_fund = round(base * (0.105 + 0.12), 2)
    return round(taxable - social_fund, 2)
\`\`\`\n\n`;
  }

  if (variant.sections.includes('section-3')) {
    md += `## 第三部分：主流智能体框架横评与选型矩阵\n\n`;
    md += `| 框架名称 | 定位分类 | 代码门槛 | 可控度 (1-10) | 安全性 (1-10) | 核心适用场景 |\n`;
    md += `| :--- | :--- | :--- | :---: | :---: | :--- |\n`;
    md += `| **CrewAI** | 角色化多Agent协作 | 中等 (Python) | 7.5 | 6.8 | 创意策划、内容生成流水线 |\n`;
    md += `| **LangGraph** | 状态机/有向无环图 | 高 (全代码) | **9.5** | **9.2** | 严苛企业复杂事务工作流、财务核算 |\n`;
    md += `| **Dify / Coze** | 敏捷低代码平台 | 零/低代码 | 6.5 | 7.0 | 部门级智能问答、知识库检索检索增强 |\n`;
    md += `| **Hermes / OpenClaw** | 自主终端执行智能体 | 高 (底层协议) | 8.0 | 8.8 | 服务器运维、本地化安全沙盒执行 |\n\n`;

    md += `### 黄金三角混合部署架构：\n`;
    md += `- **本地稳态骨架** (LangGraph / FastAPI)：状态流转、用户鉴权、数据库落盘\n`;
    md += `- **云端智能插件** (DeepSeek / Claude)：自然语言清洗、泛化理解、非结构化归纳\n`;
    md += `- **精细化规则引擎** (本地只读沙盒)：四则运算、合规审计、告警与L1-L3熔断机制\n\n`;
  }

  if (variant.sections.includes('section-4')) {
    md += `## 第四部分：企业标杆实战 —— 陕西康源投资集团“康源智脑”\n\n`;
    md += `### 4.1 集团概况与标准化资产\n`;
    md += `- **资产规模**: 7 家医养结合机构（西安4、成都2、曲靖1），1,051 张总床位（入住率 82.4%），30 余所社区日间照料中心\n`;
    md += `- **标准资产**: 213 项康源美宏标准机器代码化（服务提供98项、服务保障83项、岗位工作11项、评价改进21项）\n\n`;

    md += `### 4.2 四大子智能体矩阵\n`;
    md += `1. **Agent 1 (运营数据聚合师)**: 调度 DeepSeek-V3，聚合 7 院区日常运营、床位使用与长者饮食日志\n`;
    md += `2. **Agent 2 (标准合规审计员)**: 调度 Claude 3.5 Sonnet，毫秒级逐条比对 213 项护理标准\n`;
    md += `3. **Agent 3 (人才培训辅助师)**: 调度 Qwen-2.5，结合养老订单班教案进行实操问答训练\n`;
    md += `4. **Agent 4 (智慧决策顾问)**: 调度 GPT-4o-mini，测算床位周转率与医保核销合规率\n\n`;

    md += `### 4.3 量化 ROI 商业价值\n`;
    md += `- 月度运营分析报告出具时间：从 3~5 个工作日缩减至 **10 分钟**（效能提升 98%）\n`;
    md += `- 机构安全与合规审计覆盖率：从 10% 随机抽检提升至 **100% 全量日审**（提升 10 倍）\n`;
    md += `- 新入职护理员培训周期：从 30 天缩短至 **21 天**（效率提升 30%）\n\n`;
  }

  if (variant.sections.includes('section-5')) {
    md += `## 第五部分：独立监察与持续可观测审计体系 (3-Tier Audit)\n\n`;
    md += `### 5.1 监察审计三层闭环架构\n`;
    md += `1. **层级 1 (Pre-Run)**: 方案落地前数字孪生沙盘推演，跑完 50+ 极限地雷场景（断网、乱码、违规请假等）\n`;
    md += `2. **层级 2 (Runtime)**: 运行中“三明治”实时交叉验证，结构性+逻辑性+时效性三重闸门拦截\n`;
    md += `3. **层级 3 (Post-Run)**: 周期性复盘与决策建议采纳闭环，跟踪长效ROI与异常复盘\n\n`;

    md += `### 5.2 异常分级应急响应 (L1~L3 熔断矩阵)\n`;
    md += `- **L1 (黄色预警)**: 数据格式不规范、字段轻微缺损 -> 自动降级解析并通知填报人补全\n`;
    md += `- **L2 (橙色告警)**: 单项薪资计算差异 > 500元或合规红线违规 -> 冻结当前流水线，触发人工审批\n`;
    md += `- **L3 (红色熔断)**: 提示词注入攻击、越权调用、数据库批量更新异常 -> 瞬间切断外部 API 调度，启动离线只读模式\n\n`;
  }

  if (variant.sections.includes('section-6')) {
    md += `## 第六部分：企业多智能体部署 · 10维度信息采集标准问卷 (SOP)\n\n`;
    md += `> **说明**：本部分为标准化下发需求调研资产，可直接打印下发至各部门填报。\n\n`;
    md += `### 10 大核心调研维度概览：\n`;
    md += `1. **企业基本信息与组织架构**：法人信息、注册资本、分工层级\n`;
    md += `2. **组织架构与人员画像**：在册员工规模、一线护理员与管理人员画像\n`;
    md += `3. **各业务板块微观数据资产**：机构数、床位数、长者建档完整率\n`;
    md += `4. **现有 IT 基础设施与数据中台**：ERP/HIS/考勤打卡系统、API开放度\n`;
    md += `5. **核心业务规则沉淀与异常边界**：213项标准体系、工伤与特批报销流程\n`;
    md += `6. **外部政策法规监控与行业监管**：医保结算红线、长护险申报政策监控\n`;
    md += `7. **合规安全与数据主权底线**：老人医疗健康隐私数据不出域、本地加密\n`;
    md += `8. **最终用户交互偏好与触达形态**：院长微信服务号推送、大屏看板展示\n`;
    md += `9. **技术与基础设施硬性约束**：内网私有化部署、国产信创兼容性\n`;
    md += `10. **项目预算、周期与里程碑期望**：分阶段实施周期与核心考核ROI指标\n\n`;

    md += `### 附录 A：填报数据精度标注规范\n`;
    md += `- \`[精确]\`：具备官方红头文件、审计凭证或系统直接导出之精确数值。\n`;
    md += `- \`[估算]\`：无精确记录，但由部门负责人根据近3个月经验推导出的合理区间。\n`;
    md += `- \`[初步]\`：尚在探讨或规划阶段，后期实施中允许 ±30% 浮动调整。\n\n`;

    md += `### 附录 B：多部门协同审签确认授权单\n`;
    md += `| 审签角色 | 部门名称 | 负责人签署 | 签署日期 | 审签结论 |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- |\n`;
    md += `| **业务责任人** | 集团运营管理部 | _____________ | 2026年___月___日 | [ ] 同意立项  [ ] 需补充数据 |\n`;
    md += `| **财务责任人** | 集团财务资产部 | _____________ | 2026年___月___日 | [ ] 预算审核通过 |\n`;
    md += `| **技术负责人** | 信息技术中心 | _____________ | 2026年___月___日 | [ ] 技术与安全可行 |\n`;
    md += `| **分管领导** | 集团副总裁 / 总裁 | _____________ | 2026年___月___日 | [ ] 批准进入实施阶段 |\n\n`;
  }

  md += `---\n`;
  md += `*本文档由企业多智能体架构落地实施系统自动生成 · 遵循 Apache-2.0 协议 · 2026*\n`;

  return md;
}

/**
 * Triggers a browser download for text file content.
 */
export function downloadFile(content: string, filename: string, mimeType: string = 'text/markdown;charset=utf-8;') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
