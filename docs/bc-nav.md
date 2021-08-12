---
title: bc-nav(导航页)
nav:
  title: 组件
  path: /component
group:
  title: 组件
  path: /components
---

### 导航类型

四种类型导航页, 不同类型对应主题

- science_1-(否)
- science_2-(否)
- square_1-(science / light / dark)
- square_2-(bg_1 / bg_2 / bg_3)

### 软件依赖说明

- react | antd | loadsh | react-router/react-router-dom | react-lottie | less | prop-types

## 下载

```
$ yarn add @wxshylion/bc-nav
or
$ npm i @wxshylion/bc-nav
```

## 代码演示

### 基础用法

<code src="../packages/bc-nav/demo/index1.tsx" />

## 参数一览表

| 参数            | 说明                                  | 类型      | 默认值                   | 是否必填 | 版本  | 备注                                                                                                                            |
| --------------- | ------------------------------------- | --------- | ------------------------ | -------- | ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| navTpye         | 导航页类型                            | string    | science_1                | 是       | 1.0.1 | 字段为 science_1 / science_2 / square_1 / square_2 中                                                                           |
| theme           | 导航页主题/导航页背景                 | string    | 空                       | -        | 1.0.1 | 当 navTpye 为 science_1 以及 science_2 时，否; 当 square_1 时，为 science / light / dark ;当 square_2 时，为 bg_1 / bg_2 / bg_3 |
| projectTitle    | 项目名称                              | string    | 叙简科技统一模块监控平台 | 是       | 1.0.1 | 无                                                                                                                              |
| navList         | 导航具体数据                          | Option[]  | []                       | 是       | 1.0.1 | 见 navList.Option                                                                                                               |
| projectIconShow | 是否显示项目图标                      | boolean   | true                     | 否       | 1.0.1 | 无                                                                                                                              |
| projectIcon     | 自定义项目图标路径                    | isRequire | 空                       | 否       | 1.0.1 | 当 navTpye 为 science_2 时，需要注意图标大小的调整                                                                              |
| navTitle        | 当 navTpye 为 square_1 时的左模块标题 | string    | 功能模块                 | 否       | 1.0.1 | 当 navTpye 为 square_1 时起作用                                                                                                 |
| extraTitle      | 当 navTpye 为 square_1 时的右模块标题 | string    | 配置管理                 | 否       | 1.0.1 | 当 navTpye 为 square_1 时起作用                                                                                                 |
| extraList       | 额外的导航                            | Option[]  | []                       | -        | 1.0.1 | square_1 时必填，science_2 时非必填，见 extraList.Option                                                                        |
| userMenu        | 人员图标下拉列表                      | Option[]  | []                       | -        | 1.0.1 | 当数组为[]时不显示人员图标, 见 uerMenu.Option                                                                                   |
| settingMenu     | 设置图标下拉列表                      | Option[]  | []                       | -        | 1.0.1 | 当数组为[]时不显示人员图标, 见 settingMenu.Option                                                                               |

### navList.Option/extraList.Option

#### 特别注意：

1. 当 navType 为 science_1 以及 square_2 时，navList.length 限制在 6-8；
2. 当 navType 为 science_2 以及 square_1 时，navList.length 限制在 4-6；
3. extraList.length 限制在 4-6，只在 science_2 以及 square_1 生效
4. 不足的会自动补齐，多余的会截取；

| 参数             | 说明                             | 类型                | 是否必填                        | 版本  | 备注                                                                                                       |
| ---------------- | -------------------------------- | ------------------- | ------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------- |
| icon             | 模块图标名称，具体配置看参数说明 | string              | navType 为 science_2 时，非必填 | 1.0.1 | 图标对应的 icon 参见 [在线 api](http://192.168.106.145:8080/bc-nav/#/nav/api) 当 iconCustom 为 true 时失效 |
| name             | 模块名称                         | string              | 是                              | 1.0.1 | 建议在 4 字之内                                                                                            |
| url              | 模块点击跳转 url                 | string              | 是                              | 1.0.1 | 前端路由，在设置 clickCustom 时失效                                                                        |
| iconCustom       | 是否自定义模块图标               | boolean             | 否                              | 1.0.1 | 设置自定义 icon 时为 true                                                                                  |
| iconCustomUrl    | 自定义模块图标                   | isRequire           | 否                              | 1.0.1 | 无                                                                                                         |
| iconCustomSelUrl | 自定义鼠标悬浮模块图标           | isRequire           | 否                              | 1.0.1 | navType 为 science_1 时生效                                                                                |
| bgShow           | 是否采用导航背景图               | boolean             | 否                              | 1.0.1 | navType 为 square_1 时生效                                                                                 |
| bgShowUrl        | 导航背景图                       | isRequire           | 否                              | 1.0.1 | avType 为 square_1 时生效                                                                                  |
| clickCustom      | 自定义点击导航事件               | Function(menu: obj) | 否                              | 1.0.1 | 阻止页面的前端路由，自定义点击事件                                                                         |

### uerMenu.Option/settingMenu.Option

| 参数      | 说明         | 类型                  | 是否必填 | 版本  | 备注             |
| --------- | ------------ | --------------------- | -------- | ----- | ---------------- |
| menuName  | 下拉选项名称 | string                | 是       | 1.0.1 | 无               |
| menuKey   | 下拉选项 key | string                | 是       | 1.0.1 | 唯一 id 不可重复 |
| menuClick | 下拉点击函数 | Function(key: string) | 是       | 1.0.1 | 点击下拉选项事件 |

### 内置 icon 对应 name

1. 通讯录 -- address-list
2. 呼叫中心 1 -- call-centre
3. 应急预案 -- contingency-plan
4. 隐患排查 -- danger-check
5. 值班管理 -- duty-management
6. 动态感知 -- dynamic-perception
7. 预警预测 -- early-warning
8. 教育培训 -- education-training
9. 电子沙盘 -- electronic-sand
10. 应急保障 -- emergency-ensure
11. 呼叫中心 2 -- exchange-centre
12. 传真 -- fax
13. GIS -- gis
14. 信息发布 -- info-diffusion
15. 知识库 -- knowledge-base
16. 消息 -- message-info
17. 短信 -- message-note
18. 资产 -- property
19. 风险防控 -- risk-prevention
20. 录音 -- sound-record
21. 系统配置 -- system-configuration
22. 网络拓扑 -- topological-graph
23. 视频监控 -- video-monitor
24. 视频调度 -- video-schedule
25. 语音调度 -- voice-dispatch
