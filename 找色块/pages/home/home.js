// pages/home/home.js
Page({

  data: {
    // 行数 列数
    row: 2,
    // 所有色块的数据数组
    colorViewDatas: []
  },

  loadGameDatas: function () {

    //  游戏数据的临时数组
    var tempList = [];

    // 开始处理数据
    // 根据现在行数 添加 row*row 的数据
    var allNum = this.data.row * this.data.row;

    // 随机特殊色块的下标
    var specialIndex = parseInt(Math.random() * allNum);

    // 随机颜色
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var color = "rgb(" + r + "," + g + "," + b + ")";

    // 小程序 认为 所有设备都是 750rpx
    var deviceWidth = 750;

    // 色块的间距
    var space = deviceWidth / this.data.row * 0.1;
    // 计算宽度
    var width = (deviceWidth - (this.data.row + 1) * space) / this.data.row;

    for (var i = 0; i < allNum; i++) {
      // 可以根据 随机的下标确定 色块的透明度
      var info = { aph: specialIndex == i ? 0.6 : 1, width: width + "rpx", height: width + "rpx", background: color, space: space };

      tempList.push(info);
    }

    // 把处理完成的数据数组  放到 属性
    this.setData({
      colorViewDatas: tempList
    });
  },

  onLoad: function (options) {
    this.loadGameDatas();
  },
  chooseColorView: function (event) {
    // 点击色块 获取 不透明度的值 
    // 判断是否是 特殊色块
    // 是特殊色块 this.data.row++
    // 不是 this.data.row = 2
    var opacity = event.target.dataset.opacity;
    // if (opacity!=1){
    //     // 特殊色块
    //     this.setData({
    //       row: ++this.data.row
    //     });
    // }else{
    //   this.setData({
    //     row: 2
    //   });
    // }
    opacity != 1 ? this.setData({
      row: ++this.data.row
    }) : this.setData({
      row: 2
    });
    this.loadGameDatas();

  }
})