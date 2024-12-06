import type { Toolset } from '@types'

const hardware: Toolset = {
  title: '硬件设备',
  description: '我日常使用的硬件设备',
  items: [
    {
      name: 'Mac mini',
      description: 'M2，16GB RAM，1TB SSD - 主力开发机器',
      url: 'https://support.apple.com/zh-cn/111837',
      image: '/uses/hardware/mac-mini.webp',
    },
    {
      name: 'PMO WAVE75',
      description: '75配列，黑曜石配色',
      url: 'http://www.pmolab.cn/',
      image: '/uses/hardware/wave75.webp',
    },
    {
      name: 'ROG 月刃无线版',
      description: '用着还行',
      url: 'https://rog.asus.com.cn/mice-mouse-pads/mice/ergonomic-right-handed/rog-keris-wireless-aimpoint-model/',
      image: '/uses/hardware/rog-mouse.webp',
    },
  ],
}

export default hardware
