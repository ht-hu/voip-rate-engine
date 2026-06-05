# voip-rate-engine

VOIP 通话计费引擎项目骨架，用于后续实现通话上下文建模、计费规则编排和费率计算。

## 项目背景

本项目目标是实现一个简洁、可测试、可扩展的 VOIP 通话计费引擎。当前阶段只搭建目录结构与基础占位代码，不包含完整业务规则。

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

## 项目结构说明

```text
src/
  domain/            领域模型与业务概念
  application/       应用服务与用例编排
  infrastructure/    基础设施适配层
tests/               自动化测试
docs/                设计、提示词与交付文档
```
