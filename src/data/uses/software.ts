import type { Toolset } from '@/types'

const development: Toolset = {
  title: '软件应用',
  description: '经常使用的应用程序。',
  items: [
    {
      name: 'CleanShot X',
      description: 'Mac上强大好用的截图工具。',
      url: 'https://cleanshot.com/',
      image: '/uses/software/cleanshot-x.png',
      tags: ['截图'],
    },
    {
      name: 'Raycast',
      description: '通往一切的捷径。',
      url: 'https://www.raycast.com/',
      image: '/uses/software/raycast.webp',
      tags: ['启动器'],
    },
    {
      name: 'PicGo',
      description: '图片上传压缩管理一站式。',
      url: 'https://molunerfinn.com/PicGo/',
      image: '/uses/software/picgo.png',
      tags: ['图片管理', '图床'],
    },
    {
      name: 'Mac Mouse Fix',
      description: '更符合使用习惯的鼠标增强工具。',
      url: 'https://macmousefix.com/',
      image: '/uses/software/mac-mouse-fix.webp',
      tags: ['鼠标增强'],
    },
  ],
}

export default development
