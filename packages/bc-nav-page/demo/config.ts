// 配置项
export const config = {
  projectTitle: 'XXXX导航标题展示平台', // 项目名称
  projectIconShow: false, // 是否展示项目图标
  // projectIcon: require('../src/image/logo.png'), // 自定义项目图标路径
  navTitle: '功能模块', // 当navTpye 为square_时起作用，左/右模块标题
  navList: [
    {
      icon: 'gis',
      name: 'gis实时指挥',
      url: '/flowable/centre/dealtask',
      // iconCustom: true,
      // iconCustomUrl: require('./image/danger-check.svg'),
      // iconCustomSelUrl: require('./image/danger-check-sel.svg'),
      // bgShow: true,
      // bgShowUrl: require(`./image/nav-gis.png`)
      // clickCustom: (e) => console.log(e),
    },
    {
      icon: 'address-list',
      name: '通讯录',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'contingency-plan',
      name: '应急预案',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'risk-prevention',
      name: '风险防控',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'dynamic-perception',
      name: '统计分析',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'electronic-sand',
      name: '电子沙盘',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'info-diffusion',
      name: '信息发布',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'dynamic-perception',
      name: '动态感知',
      url: '/flowable/centre/dealtask',
    },
  ],
  extraTitle: '配置管理',
  extraList: [
    {
      icon: 'system-configuration',
      name: '系统配置',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'message-info',
      name: '消息',
      url: '/flowable/centre/dealtask',
      bgShow: true,
    },
    {
      icon: 'message-note',
      name: '短信',
      url: '/flowable/centre/dealtask',
    },
    {
      icon: 'property',
      name: '资产',
      url: '/flowable/centre/dealtask',
    },
  ],
};
