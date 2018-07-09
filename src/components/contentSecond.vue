<template>
  <!-- 整体 -->
  <div class="content2">
    <!-- 内容部分的导航栏 -->
    <div>
      <div class="content2__navigation">
        <a href="#"
          v-for="item in itemsList"
          v-bind:class="item.CLASS"
          v-on:click="onClick(item.ID)">
          {{item.LABEL}}</a>
      </div>
    </div>
    <!-- 内容部分的大箱子 -->
    <div class="content2__case"
      v-on:scroll="onRoll"
      v-on:click="onRollback">
      <!-- 内容部分的图片和介绍部分 -->
      <div v-for="content in contentList">
        <div class="case__labelbox">
          <span class="labelbox__left">{{content.LABEL1}}</span>
          <a href="#"
            v-bind:class="content.CLASS">
            <span>{{content.LABEL2}}</span>
            <span class="right__label">》</span>
          </a>
        </div>
        <div class="case__linkcase">

          <div class="linkcase__linkbox"
            href="#"
            v-for="item in content.imgList"
            v-on:click="onLinkClick(item)">
            <div class="linkbox__imgbox2">
              <img class="imgbox2__img"
                v-bind:src="item.SRC">
              <div class="imgbox2__label2">
                <span class="label2__span">{{item.LABEL1}}</span>
                <span class="label2__span">{{item.LABEL2}}</span>
              </div>
            </div>
            <p class="linkbox__introduce">{{item.INTRODUCE}}</p>
          </div>

        </div>

      </div>
      <!-- 回滚标志 -->
      <div class="roll-back"
        v-show="show"
        v-on:click="onRollback">
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

  </div>

</template>
<script>
export default {
  data() {
    return {
      /**  导航栏的动态生成需要绑定的数组，ID为事件的索引号，LABEL为链接的内容，CLASS为绑定的类名 */
      itemsList: [
        { ID: 0, LABEL: '动画推荐', CLASS: 'navigation__link--selected' },
        { ID: 1, LABEL: '动画', CLASS: 'navigation__link' },
        { ID: 2, LABEL: '番剧', CLASS: 'navigation__link' },
        { ID: 3, LABEL: '国创', CLASS: 'navigation__link' },
        { ID: 4, LABEL: '导航', CLASS: 'navigation__link' },
        { ID: 5, LABEL: '导航', CLASS: 'navigation__link' },
        { ID: 6, LABEL: '导航', CLASS: 'navigation__link' },
        { ID: 7, LABEL: '导航', CLASS: 'navigation__link' },
        { ID: 8, LABEL: '导航', CLASS: 'navigation__link' },
        { ID: 9, LABEL: '导航', CLASS: 'navigation__link' },
        { ID: 10, LABEL: '导航', CLASS: 'navigation__link' }
      ],
      /** 内容主主体的数据，ID为事件的索引号，LABEL1,LABEL2为上部的大标签，CLASS为大标签绑定的类名 */
      contentList: [
        {
          ID: 0,
          LABEL1: '热门推荐',
          LABEL2: '排行榜',
          CLASS: 'labelbox__right--recommend',
          /**imgList是超链接盒子的内容部分绑定数据的数组，ID为事件绑定所用，SRC为图片的链接地址，INTRODUCE为视频的简介，LABEL1,LABEL2为图片上的小标签 */
          imgList: [
            {
              ID: 0,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              LABEL1: '2:53',
              LABEL2: '10万观看',
              URL: '#'
            },
            {
              ID: 1,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '19万观看',
              URL: '#'
            },
            {
              ID: 2,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            },
            {
              ID: 3,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            }
          ]
        },
        {
          ID: 1,
          LABEL1: 'MAD*AMV',
          LABEL2: '排行榜',
          CLASS: 'labelbox__right',
          imgList: [
            {
              ID: 0,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              LABEL1: '2:53',
              LABEL2: '10万观看',
              URL: '#'
            },
            {
              ID: 1,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '19万观看',
              URL: '#'
            },
            {
              ID: 2,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            },
            {
              ID: 3,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            }
          ]
        },
        {
          ID: 2,
          LABEL1: '热门推荐',
          LABEL2: '排行榜',
          CLASS: 'labelbox__right',
          imgList: [
            {
              ID: 0,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              LABEL1: '2:53',
              LABEL2: '10万观看',
              URL: '#'
            },
            {
              ID: 1,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '19万观看',
              URL: '#'
            },
            {
              ID: 2,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            },
            {
              ID: 3,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            }
          ]
        },
        {
          ID: 3,
          LABEL1: '热门推荐',
          LABEL2: '排行榜',
          CLASS: 'labelbox__right',
          imgList: [
            {
              ID: 0,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              LABEL1: '2:53',
              LABEL2: '10万观看',
              URL: '#'
            },
            {
              ID: 1,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '19万观看',
              URL: '#'
            },
            {
              ID: 2,
              SRC:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            },
            {
              ID: 3,
              SRC:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              INTRODUCE: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              LABEL1: '2:53',
              LABEL2: '小标签的内容',
              URL: '#'
            }
          ]
        }
      ],
      show: false
    }
  },
  methods: {
    /**
     * 点击导航标签后，标签的绑定的类名发生改变
     *
     * @param {Object} itemList 导航链接对象数组，用来遍历并改变其中的CLASS属性
     *
     *@return {Object} 返回值描述
     */
    onClick: function(item) {
      var itemsList = {}
      itemsList = this.itemsList
      itemsList.map(variable => {
        variable.CLASS = 'navigation__link'
      })
      this.itemsList[item].CLASS = 'navigation__link--selected'
    },
    /**
     * Y轴滚动内容区域到一定程度的时候改变回滚标签的v-show状态，大于200出现，小于
     *两百消失
     *
     *
     * @param {Object} content2 触发滚动事件的标签
     *
     */
    onRoll: function() {
      let content2 = {}
      content2 = document.getElementsByClassName('content2__case')[0].scrollTop

      if (content2 >= 50) {
        this.show = true
      } else if (content2 < 50) {
        this.show = false
      }
    },
    /**
     * 点击回滚标签后，视图回滚至顶部
     *
     * @param {function} x  指定的间隔持续执行事件名称，用来在后面清楚间隔持续执
     *行事件
     * @param {Object} scroll 触发滚动事件后改变视图位置的标签
     *
     */
    onRollback: function() {
      let scroll = {},
        x
      scroll = document.getElementsByClassName('content2__case')[0]
      x = setInterval(fn => {
        if (scroll.scrollTop == 0) {
          clearInterval(x)
        }
        scroll.scrollTop -= 10
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
  },
  // 对高度问题的临时解决方法，当组件加载完成时获得视图的高度，并利用视图高度对组件高度进行处理
  mounted() {
    let height = document.documentElement.clientHeight
    let content2__case = document.getElementsByClassName('content2__case')[0]
    content2__case.style.height = height * 0.845 + 'px'
    let content2__navigation = document.getElementsByClassName(
      'content2__navigation'
    )[0]

    content2__navigation.style.height = height * 0.085 + 'px'
    let header = document.getElementsByClassName('header')[0]
    if (height === 1024 || height === 1366) {
      content2__case.style.height = height * 0.718 + 'px'
      header.style.height = height * 0.11 + 'px'
    } else {
      content2__case.style.height = height * 0.79 + 'px'
      header.style.height = height * 0.07 + 'px'
    }
  }
}
</script>
