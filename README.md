# voip-rate-engine

VOIP 通话计费引擎，用于实现通话上下文建模、计费规则编排和费率计算。

## 项目背景

本项目已实现基础 VOIP 通话计费核心逻辑，支持按国家区号计算基础费率、按客户类型应用折扣、夜间优惠，以及按整分钟向上取整计费。

## 技术栈

- TypeScript
- Vitest
- Node.js 类型定义
- pnpm

## 安装命令

```bash
pnpm install
```

## 测试命令

```bash
pnpm test
```

## 代码规范

本项目使用 ESLint 和 Prettier 保持代码风格一致。

```bash
pnpm lint
pnpm lint:fix
pnpm format
```

- `pnpm lint`: 检查 TypeScript 代码规范。
- `pnpm lint:fix`: 自动修复可修复的 ESLint 问题。
- `pnpm format`: 使用 Prettier 格式化项目文件。

## 项目结构说明

```text
src/
  domain/            领域模型与业务概念
  application/       应用服务与用例编排
  infrastructure/    基础设施适配层
tests/               自动化测试
docs/                设计、提示词与交付文档
```
