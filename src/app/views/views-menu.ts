export interface MenuItem {
  title: string;
  iconClass: string;
  link: string;
  leaf: boolean;
  children: MenuItem[];
}

export const HY_NAV_OPTIONS: MenuItem[] = [
  {
    title: '首页',
    iconClass: 'icon-index',
    link: '',
    leaf: true,
    children: null
  },
  {
    title: '分析报表',
    iconClass: 'icon-analysisReport',
    link: '',
    leaf: false,
    children: [
      {
        title: '关键指标',
        iconClass: null,
        link: '/views/kpiIndex',
        leaf: true,
        children: null
      },
      {
        title: '收视分析',
        iconClass: null,
        link: '/viewingAnalyze',
        leaf: true,
        children: null
      },
      {
        title: '观众流向',
        iconClass: null,
        link: '/timeFlow',
        leaf: true,
        children: null
      },
      {
        title: '互动分析',
        iconClass: null,
        link: '/analysisData',
        leaf: true,
        children: null
      },
      {
        title: '用户分析',
        iconClass: null,
        link: '/views/userAnalyze',
        leaf: true,
        children: null
      },
    ]
  }
];
