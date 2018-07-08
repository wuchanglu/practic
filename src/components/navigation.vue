<template>
  <!-- 头部导航栏整体 -->
  <div class="contentbox">
    <!-- 下拉菜单 -->
    <div class="dropdown"
      v-bind:style="{height:HEIGHT+'rem'}">

      <router-link v-for="item in itemList"
        v-bind:class="item.CLASS"
        :to="item.TO"
        v-on:click.native="onClick(item.ID)">{{item.LABEL}}</router-link>
      <div class="dropdown__hide"
        v-on:click="onDisappear">
        <h2>^</h2>
      </div>
    </div>
    <!-- 头部导航栏链接部分 -->
    <div class="navigation-box">
      <div class="navigation-box__navigation">
        <router-link v-for="item in itemList"
          v-bind:class="item.CLASS"
          :to="item.TO"
          v-on:click.native="onClick(item.ID)">{{item.LABEL}}</router-link>
      </div>
    </div>
    <!-- 下拉菜单的显示按钮 -->
    <div class="dropdown__show"
      v-on:click="onAppear">
      <span>∨</span>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  data() {
    return {
      /** itemList是导航链接绑定数据的源数据组，ID是事件的索引值,LABEL是链接里面的内容，CLASS是绑定的类名，TO是router指向的组件 */
      itemList: [
        {
          ID: 0,
          LABEL: '首页',
          CLASS: 'navigation__link--selected',
          TO: '/'
        },
        {
          ID: 1,
          LABEL: '动画',
          CLASS: 'navigation__link',
          TO: '/content2Component'
        },
        { ID: 2, LABEL: '番剧', CLASS: 'navigation__link', TO: '/' },
        { ID: 3, LABEL: '国创', CLASS: 'navigation__link', TO: '/' },
        { ID: 4, LABEL: '导航', CLASS: 'navigation__link', TO: '/' },
        { ID: 5, LABEL: '导航', CLASS: 'navigation__link', TO: '/' },
        { ID: 6, LABEL: '导航', CLASS: 'navigation__link', TO: '/' },
        { ID: 7, LABEL: '导航', CLASS: 'navigation__link', TO: '/' },
        { ID: 8, LABEL: '导航', CLASS: 'navigation__link', TO: '/' },
        { ID: 9, LABEL: '导航', CLASS: 'navigation__link', TO: '/' },
        {
          ID: 10,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        {
          ID: 11,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        {
          ID: 12,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        {
          ID: 13,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        {
          ID: 14,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        {
          ID: 15,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        {
          ID: 16,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        {
          ID: 17,
          LABEL: '导航',
          CLASS: 'navigation__link',
          TO: '/'
        },
        { ID: 18, LABEL: '导航', CLASS: 'navigation__link', TO: '/' }
      ],
      HEIGHT: 0
    }
  },
  methods: {
    /**
     * 点击导航标签后，标签的绑定的类名发生改变，并且如果下拉导航是处于出现状态，则
     *将下拉菜单隐藏
     *
     * @param {Object} itemList 导航链接对象数组，用来遍历并改变其中的CLASS属性
     * @param {fuction} t 对定时函数的命名为了后面能清除指定的定时函数
     *@return {Object} 返回值描述
     */

    onClick: function(item) {
      let t
      var itemList = this.itemList
      itemList.map(variable => {
        variable.CLASS = 'navigation__link'
      })
      this.itemList[item].CLASS = 'navigation__link--selected'
      t = setInterval(fn => {
        if (this.HEIGHT === -16) {
          clearInterval(t)
        }
        this.HEIGHT -= 0.5
      }, 10)
    },
    /**
     * 点击上尖角后下拉菜单消失
     *
     *
     * @param {fuction} t 对间隔持续执行函数的命名为了后面能清除指定的间隔持续执
     *行函数
     *
     */
    onDisappear: function() {
      let t
      t = setInterval(fn => {
        if (this.HEIGHT === -16) {
          clearInterval(t)
        }
        this.HEIGHT -= 0.5
      }, 10)
    },
    /**
     * 点击下尖角后下拉菜单出现
     *
     *
     * @param {fuction} t 间隔持续执行时函数的命名为了后面能清除指定的间隔持续执行函数
     *
     */
    onAppear: function() {
      var t
      t = setInterval(fn => {
        if (this.HEIGHT === 16) {
          clearInterval(t)
        }
        this.HEIGHT += 0.5
      }, 5)
    }
  }
}
</script>
