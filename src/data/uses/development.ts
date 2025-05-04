import type { Toolset } from '@/types'

const development: Toolset = {
  title: '开发环境',
  description: '这些是我日常编程学习和开发项目时使用的工具。',
  items: [
    {
      name: 'VS Code',
      description: '常用代码编辑器。',
      url: 'https://code.visualstudio.com',
      image: '/uses/development/vscode.svg',
      tags: ['编辑器'],
    },
    {
      name: 'Ghostty',
      description: '好用且高性能的终端模拟器。',
      url: 'https://ghostty.org/',
      image: '/uses/development/ghostty.svg',
      tags: ['终端'],
    },
    {
      name: 'OrbStack',
      description: '轻量级容器和虚拟机软件。',
      url: 'https://orbstack.dev/',
      image: '/uses/development/orbstack.png',
      tags: ['容器', '虚拟机'],
    },
  ],
}

export default development
