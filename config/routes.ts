/**
 * 路由项应该有有效的路径和key：路径：externalPath、redirect、path三者需要有一个（都有优先级依次降低）。
 *
 * path:路由
 * redirect：重定向路由
 * routes：子路由
 * name: 菜单与tabs名
 * icon: 菜单栏图标
 * hideChildrenInMenu：是否隐藏子菜单
 * hideInMenu: 隐藏菜单
 * hideInTabs: 隐藏tabs
 * externalPath：扩展外部的链接
 * keepAlive: 对象，用于keepAlive组件的属性配置
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './Login',
          },
        ],
      },
    ],
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'GroupOutlined',
    component: '@/pages/dashboard',
    wrappers: [
      '@/wrappers/RouteLayoutWrapper',
      '@/wrappers/PageProgressWrapper',
      '@/wrappers/KeepAliveWrapper',
    ],
  },
  {
    path: '/nest',
    name: 'nest',
    icon: 'HeatMapOutlined',
    component: '@/pages/nest',
    wrappers: [
      '@/wrappers/RouteLayoutWrapper',
      '@/wrappers/PageProgressWrapper',
      '@/wrappers/KeepAliveWrapper',
    ],
    routes: [
      {
        path: '/nest',
        redirect: '/nest/nest-1',
      },
      {
        path: 'nest-1',
        name: 'nest-1',
        component: '@/pages/nest/nest-1',
      },
      {
        path: 'nest-2',
        name: 'nest-2',
        component: '@/pages/nest/nest-2',
        routes: [
          {
            path: 'nest-2-1',
            name: 'nest-2-1',
            component: '@/pages/nest/nest-2/nest-2-1',
          },
          {
            path: 'nest-2-2',
            name: 'nest-2-2',
            component: '@/pages/nest/nest-2/nest-2-2',
          },
          {
            hideInMenu: true,
            path: 'nest-2-3',
            name: 'nest-2-3',
            component: '@/pages/nest/nest-2/nest-2-2',
            activeMenu: '/nest/nest-2/nest-2-1',
          },
          {
            redirect: '/nest/nest-2/nest-2-1',
          },
        ],
      },
    ],
  },
  {
    path: '/component',
    name: 'Component',
    icon: 'RadarChartOutlined',
    component: '@/pages/component',
    wrappers: ['@/wrappers/RouteLayoutWrapper', '@/wrappers/PageProgressWrapper'],
    routes: [
      {
        path: '/component',
        redirect: '/component/Switch',
      },
      {
        path: 'Switch',
        name: 'Switch',
        component: '@/pages/component/Switch',
      },
    ],
  },

  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
