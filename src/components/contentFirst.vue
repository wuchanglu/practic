<template>
  <!-- 整体 -->
  <div v-on:scroll="onRoll"
    class="content1">
    <!-- 内容部分 -->
    <div class="content1__box1"
      href="#"
      v-for="item in contentList"
      v-on:click="onLinkClick(item)">
      <div class="box1__imgbox1">
        <img v-bind:src="item.SRC"
          class="imgbox1__img1">
        <div class="imgbox1__label1">
          <span class="label1__span">{{item.LABEL1}}</span>
          <span>{{item.LABEL2}}</span>
          <span>{{item.LABEL3}}</span>
        </div>
      </div>
      <div class="box1__introduce">
        <p>{{item.INTRODUCE}}</p>
      </div>
    </div>
    <!-- 回滚图标部分 -->
    <div class="roll-back"
      v-show="SHOW"
      v-on:click="onClick">
      <svg data-name="\u56FE\u5C42 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52">
        <title>ic_top</title>
        <g data-name="ic top">
          <circle class="cls-1"
            cx="26"
            cy="26"
            r="18"
            fill="#fafbfb"></circle>
          <path class="cls-2"
            d="M26.75 23.56v10.69a.75.75 0 0 1-1.5 0V23.56L19.1 29.7a.75.75 0 0 1-1.1-1.06l7.42-7.42a.75.75 0 0 1 1 0L34 28.64a.75.75 0 1 1-1.06 1.06zm-8-5.56h14.5a.75.75 0 0 1 0 1.5h-14.5a.75.75 0 0 1 0-1.5z"
            fill="#757575"></path>
        </g>
      </svg>
    </div>
    <!-- 页脚 -->
    <div class="footer">
      <p>哔哩哔哩 沪ICP备13002172号-3</p>
      <p>信息网络传播视听节目许可证：0910417</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /** contentList是视频部分绑定数据的数组，ID是绑定事件的索引，SRC是图片的资源地址，INTRODUCE是内容图片的简介，LABEL1,LABEL2,LABEL3是图片上的小标签的内容 */
      contentList: [
        {
          ID: 0,
          SRC:
            '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
          INTRODUCE:
            '【镇魂丨巍澜】原著向：美貌昆仑君与美貌小鬼王的前世今生（没有突厥，也没有猴）',
          LABEL1: '2:53',
          LABEL2: '10万观看',
          LABEL3: '小标签的内容',
          URL: '#'
        },
        {
          ID: 1,
          SRC:
            '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
          INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          LABEL1: '2:53',
          LABEL2: '19万观看',
          LABEL3: '小标签的内容',
          URL: '#'
        },
        {
          ID: 2,
          SRC:
            '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
          INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          LABEL1: '2:53',
          LABEL2: '小标签的内容',
          LABEL3: '小标签的内容',
          URL: '#'
        },
        {
          ID: 3,
          SRC:
            '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
          INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          LABEL1: '2:53',
          LABEL2: '小标签的内容',
          LABEL3: '小标签的内容',
          URL: '#'
        },
        {
          ID: 4,
          SRC:
            '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
          INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          LABEL1: '2:53',
          LABEL2: '小标签的内容',
          LABEL3: '小标签的内容',
          URL: '#'
        },
        {
          ID: 5,
          SRC:
            '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
          INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          LABEL1: '2:53',
          LABEL2: '小标签的内容',
          LABEL3: '小标签的内容',
          URL: '#'
        },
        {
          ID: 6,
          SRC:
            '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
          INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          LABEL1: '2:53',
          LABEL2: '小标签的内容',
          LABEL3: '小标签的内容',
          URL: '#'
        },
        {
          ID: 7,
          SRC:
            '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
          INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          LABEL1: '2:53',
          LABEL2: '小标签的内容',
          LABEL3: '小标签的内容',
          URL: '#'
        }
      ],
      SHOW: false
    }
  },
  methods: {
    /**
     * Y轴滚动内容区域到一定程度的时候改变回滚标签的v-show状态，大于200出现，小于
     *两百消失
     *
     *
     * @param {Object} scroll 触发滚动事件的标签
     *
     */
    onRoll: function() {
      let scroll = document.getElementsByClassName('content1')[0].scrollTop
      if (scroll >= 200) {
        this.SHOW = true
      } else if (scroll < 200) {
        this.SHOW = false
      }
    },
    /**
     * 点击回滚标签后，视图回滚至顶部
     *
     * @param {function} x  指定的间隔持续执行事件名称，用来在后面清楚间隔持续执
     *行事件
     * @param {Object} content1 触发滚动事件后改变视图位置的标签
     *
     */
    onClick: function() {
      let content1 = {},
        x
      content1 = document.getElementsByClassName('content1')[0]
      x = setInterval(fn => {
        if (content1.scrollTop == 0) {
          clearInterval(x)
        }
        content1.scrollTop -= 10
      }, 1)
    },
    /**
     * 点击图片和介绍的盒子div后进行页面跳转
     *
     *
     */
    onLinkClick: function(item) {
      window.location.href = item.URL
    }
  }
}
</script>
