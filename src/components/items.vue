<template>
  <div class="itembox">

    <div class="xiaode"
      v-bind:style="{height:h+'rem'}">

      <router-link v-for="item in items"
        v-bind:class="item.class"
        v-on:click.native="click(item.id)"
        :to="item.to">{{item.neirong}}</router-link>
      <div class=shouhui
        v-on:click="dianji">
        <h2>^</h2>
      </div>
    </div>

    <div class="header__navigationBox">
      <div class="header__navigationBar">
        <router-link v-for="item in items"
          v-bind:class="item.class"
          v-on:click.native="click(item.id)"
          :to="item.to">{{item.neirong}}</router-link>
      </div>
    </div>

    <div class="rightJianjiao"
      v-on:click="chuxian">
      <span>∨</span>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          neirong: '首页',
          class: 'header__navigation--visited',
          to: '/'
        },
        { id: 1, neirong: '动画', class: 'header__navigation', to: '/donghua' },
        { id: 2, neirong: '番剧', class: 'header__navigation', to: '/' },
        { id: 3, neirong: '国创', class: 'header__navigation', to: '/' },
        { id: 4, neirong: '导航', class: 'header__navigation', to: '/' },
        { id: 5, neirong: '导航', class: 'header__navigation', to: '/' },
        { id: 6, neirong: '导航', class: 'header__navigation', to: '/' },
        { id: 7, neirong: '导航', class: 'header__navigation', to: '/' },
        { id: 8, neirong: '导航', class: 'header__navigation', to: '/' },
        { id: 9, neirong: '导航', class: 'header__navigation', to: '/' },
        {
          id: 10,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        {
          id: 11,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        {
          id: 12,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        {
          id: 13,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        {
          id: 14,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        {
          id: 15,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        {
          id: 16,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        {
          id: 17,
          neirong: '导航',
          class: 'header__navigation',
          to: '/'
        },
        { id: 18, neirong: '导航', class: 'header__navigation', to: '/' }
      ],
      h: 0
    }
  },
  methods: {
    click: function(item) {
      console.log(123456)
      var items = this.items
      items.map(variable => {
        variable.class = 'header__navigation'
      })
      this.items[item].class = 'header__navigation--visited'
      var s = document.getElementsByClassName('xiaode')[0]
      let t = setInterval(fn => {
        if (this.h === -16) {
          clearInterval(t)
        }
        this.h -= 0.5
      }, 10)
      console.log(this.h)
    },
    dianji: function() {
      var s = document.getElementsByClassName('xiaode')[0]
      let t = setInterval(fn => {
        if (this.h === -16) {
          clearInterval(t)
        }
        this.h -= 0.5
      }, 10)
      console.log(this.h)
    },
    chuxian: function() {
      console.log(t)
      var s = document.getElementsByClassName('xiaode')[0]
      var t = setInterval(fn => {
        if (this.h === 16) {
          clearInterval(t)
        }
        this.h += 0.5
      }, 5)

      console.log(this.h)
    }
  }
}
</script>
<style>
.tanchu {
}
.xiaode {
  position: absolute;
  left: 0rem;
  top: 0rem;
  width: 30rem;
  height: 16rem;
  background-color: white;
  z-index: 999;
  overflow: hidden;
}
.shouhui {
  margin-top: -1.5rem;
  margin-left: 13rem;
}
.itembox {
  position: relative;
}
</style>

