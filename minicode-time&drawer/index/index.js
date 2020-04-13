const app = getApp()

Page({
  data: {
    showUp:false,
    dataList:[
      {
        startTime:'2020年3月',
        experience:'苦逼的写代码'
      },
      {
        startTime:'2020年4月',
        experience:'依然苦逼的写代码'
      },
      {
        startTime:'2020年5月',
        experience:'仍然苦逼的写代码'
      },
      {
        startTime:'2020年6月',
        experience:'好吧，继续写代码'
      }
    ]
  },
  
  changeUpDown:function(e){
    this.setData({
      showUp:!this.data.showUp
    })
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
