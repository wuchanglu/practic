<template>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, neirong: '首页', class: 'header__navigation--visited' },
        { id: 1, neirong: '动画', class: 'header__navigation' },
        { id: 2, neirong: '番剧', class: 'header__navigation' },
        { id: 3, neirong: '国创', class: 'header__navigation' },
        { id: 4, neirong: '导航', class: 'header__navigation' },
        { id: 5, neirong: '导航', class: 'header__navigation' },
        { id: 6, neirong: '导航', class: 'header__navigation' },
        { id: 7, neirong: '导航', class: 'header__navigation' },
        { id: 8, neirong: '导航', class: 'header__navigation' },
        { id: 9, neirong: '导航', class: 'header__navigation' },
        { id: 10, neirong: '导航', class: 'header__navigation' }
      ]
    }
  },
  methods: {
    click: function(item) {
      var items = this.items
      items.map(variable => {
        variable.class = 'header__navigation'
      })
      this.items[item].class = 'header__navigation--visited'
    }
  }
}
</script>
<style>
ul {
  list-style-type: none;
}
li {
  float: left;
}
.header__navigation {
  display: inline-block;
  line-height: 4rem;
  text-decoration: none;
  color: #757575;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1rem;
}
.header__navigation--visited {
  font-size: 1rem;
  display: inline-block;
  line-height: 2rem;
  color: #fb7299;
  text-decoration: none;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-bottom: 0.18rem solid #fb7299;
}
.header__navigationBar {
  background-color: white;
  margin-left: 1rem;
  width: 30rem;
  height: 3.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.header__navigationBar::-webkit-scrollbar {
  display: none;
}
.header__navigationBox {
  width: 100%;
  height: 3.5rem;
  overflow-x: hidden;
  z-index: 1;
}
.rightJianjiao {
  position: absolute;
  font-size: 1.5rem;
  line-height: 2.8rem;
  width: 2rem;
  height: 2.1rem;
  top: 1%;
  right: -1rem;
  background-color: white;
  padding-left: 1rem;
  padding-right: 1.5rem;
}
.datoubu {
}
</style>