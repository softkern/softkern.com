import type { Toolset } from '@/types'

const hardware: Toolset = {
  title: '硬件设备',
  description: '我日常使用的硬件设备。',
  items: [
    {
      name: 'Mac mini',
      description: '我的主力开发机器, M2芯片，16G内存，256G存储。',
      url: 'https://support.apple.com/zh-cn/111837',
      image: '/uses/hardware/mac-mini.webp',
      tags: ['Mac', '迷你主机'],
    },
    {
      name: 'PMO WAVE75',
      description: '雪青轴，75配列，实惠好用的铝坨坨。',
      url: 'http://www.pmolab.cn/',
      image: '/uses/hardware/wave75.webp',
      tags: ['机械键盘'],
    },
    {
      name: 'ROG 月刃无线版',
      description: '三模游戏鼠标，非常好用。',
      url: 'https://rog.asus.com.cn/mice-mouse-pads/mice/ergonomic-right-handed/rog-keris-wireless-aimpoint-model/',
      image: '/uses/hardware/rog-mouse.webp',
      tags: ['鼠标'],
    },
  ],
}

export default hardware
