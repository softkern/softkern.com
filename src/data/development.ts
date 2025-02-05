import type { Toolset } from '@types'

const development: Toolset = {
  title: '开发环境',
  description: '用于编程开发的生产力工具',
  items: [
    {
      name: 'VS Code',
      description: '常用代码编辑器',
      url: 'https://code.visualstudio.com',
      image: '/uses/development/code.webp',
    },
    {
      name: 'Kitty Terminal',
      description: '好用且高性能的终端模拟器',
      url: 'https://sw.kovidgoyal.net/kitty/',
      image: '/uses/development/kitty.svg',
    },
    {
      name: 'OrbStack',
      description: '轻量级容器和虚拟机软件',
      url: 'https://orbstack.dev/',
      image: '/uses/development/orbstack.png',
    },
  ],
}

export default development
