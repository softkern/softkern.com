import type { Toolset } from '@types'

const development: Toolset = {
  title: '开发环境',
  description: '用于编程开发的生产力工具',
  items: [
    {
      name: 'VS Code',
      description: '常用代码编辑器，主要用来写前端',
      url: 'https://code.visualstudio.com',
    },
    {
      name: 'Kitty Terminal',
      description: '好用且高性能的终端模拟器',
      url: 'https://sw.kovidgoyal.net/kitty/',
    },
    {
      name: 'OrbStack',
      description: 'Mac平台的轻量级容器运行平台，还能跑虚拟机',
      url: 'https://orbstack.dev/',
    },
  ],
}

export default development
