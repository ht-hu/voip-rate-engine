# Delivery

## 当前交付内容

- 完成 TypeScript 项目基础结构，包含 `src`、`tests` 和 `docs` 目录。
- 实现 VOIP 通话计费核心逻辑，支持国家基础费率、VIP 折扣、NORMAL 用户、夜间优惠、最终费率下限和通话时长向上取整。
- 定义 `CallContext` 和 `CustomerType`，用于表达计费所需的基础领域数据。
- 添加 Vitest 单元测试，覆盖题目中的主要计费规则。
- 补充 README、领域模型设计文档和 AI 协作阶段记录。
- 配置 ESLint、Prettier 和 EditorConfig。
- 添加 `build`、`test`、`lint`、`lint:fix` 和 `format` 脚本。

## 未包含内容

- 数据库。
- Web 服务、微服务或前端页面。
- 复杂 DDD 概念，例如聚合根、领域事件或仓储。

## 工程实践说明

- Git Commit History 记录了项目初始化、领域设计、核心实现、测试补充和工程化配置等关键阶段。
- AI 协助完成需求拆解、领域模型设计、计费逻辑实现、单元测试补充和文档整理。
- AI 输出经过人工审查后再纳入项目，文档中保留了阶段化协作记录。
- 核心计费逻辑采用纯函数风格，输入固定时输出固定，不依赖数据库或网络请求。
- 项目使用 ESLint、Prettier 和 EditorConfig 保持基础代码规范。
- 当前通过 `pnpm lint`、`pnpm test` 和 `pnpm build` 验证项目状态。
