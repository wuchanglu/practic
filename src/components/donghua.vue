<template>
  <div class="donghua__body">
    <div class="header__navigationBox">
      <div class="header__navigationBarxia">
        <a href="#"
          v-for="item in items"
          v-bind:class="item.class"
          v-on:click="click(item.id)">
          {{item.neirong}}</a>
      </div>
    </div>

    <div class="body__scroll"
      v-on:scroll="gundong"
      v-on:click="fanhui">
      <div v-for="content in tuijian">
        <div class="tuijianbox">
          <span class="tuijians1">{{content.s1}}</span>
          <a href="#"
            class="tuijians2">
            <span>{{content.s2}}</span>
            <span class="tuijians3">》</span>
          </a>
        </div>
        <div class="donghuabox">

          <a v-for="xijie in content.shipin"
            class="donghuaa"
            href="#">
            <div class="imgbox">
              <img class="donghuaimg"
                v-bind:src="xijie.src">
              <div class="biaoqian">
                <span class="biaoqian__neirong">{{xijie.biaoqian1}}</span>
                <span class="biaoqian__neirong">{{xijie.biaoqian2}}</span>
              </div>
            </div>
            <p class="jianjie">{{xijie.jianjie}}</p>
          </a>

        </div>

      </div>
      <div class="huiqu"
        v-show="show"
        v-on:click="fanhui">
        <img src="src/assets/arrow515.png">

      </div>
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
      items: [
        { id: 0, neirong: '动画推荐', class: 'header__navigation--visited' },
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
      ],
      tuijian: [
        {
          id: 0,
          s1: '热门推荐',
          s2: '排行榜',
          shipin: [
            {
              id: 0,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              biaoqian1: '2:53',
              biaoqian2: '10万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 1,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '19万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 2,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            },
            {
              id: 3,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            }
          ]
        },
        {
          id: 1,
          s1: 'MAD*AMV',
          s2: '排行榜',
          shipin: [
            {
              id: 0,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              biaoqian1: '2:53',
              biaoqian2: '10万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 1,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '19万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 2,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            },
            {
              id: 3,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            }
          ]
        },
        {
          id: 2,
          s1: '热门推荐',
          s2: '排行榜',
          shipin: [
            {
              id: 0,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              biaoqian1: '2:53',
              biaoqian2: '10万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 1,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '19万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 2,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            },
            {
              id: 3,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            }
          ]
        },
        {
          id: 3,
          s1: '热门推荐',
          s2: '排行榜',
          shipin: [
            {
              id: 0,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '原著向：美貌昆仑君与美貌小鬼王的前世今生',
              biaoqian1: '2:53',
              biaoqian2: '10万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 1,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '19万观看',
              biaoqian3: '小标签的内容'
            },
            {
              id: 2,
              src:
                '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            },
            {
              id: 3,
              src:
                '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
              jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
              biaoqian1: '2:53',
              biaoqian2: '小标签的内容',
              biaoqian3: '小标签的内容'
            }
          ]
        }
      ],
      show: true
    }
  },
  methods: {
    click: function(item) {
      var items = this.items
      items.map(variable => {
        variable.class = 'header__navigation'
      })
      this.items[item].class = 'header__navigation--visited'
    },
    gundong: function() {
      let dahezi = document.getElementsByClassName('body__scroll')[0].scrollTop

      if (dahezi >= 50) {
        this.show = true
        console.log(this.show)
      } else if (dahezi < 50) {
        this.show = false
      }
    },
    fanhui: function() {
      let dahezi = document.getElementsByClassName('body__scroll')[0]
      let x = setInterval(fn => {
        if (dahezi.scrollTop == 0) {
          clearInterval(x)
        }
        dahezi.scrollTop -= 10
      }, 1)
    }
  }
}
</script>
<style>
.donghuabox {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.donghua {
  width: 42%;
  height: 12.5rem;
  margin-left: 8%;
  margin-bottom: 0.6rem;
}
.donghuaa {
  border-radius: 1rem;
  margin-left: 2rem;
  width: 40%;
}
.donghuaimg {
  width: 100%;
  height: 100%;
  margin: 1rem auto;
  border-radius: 0.4rem;
  z-index: 2;
}
.imgbox {
  width: 100%;
  /* margin: 0 auto; */
}
.tuijianbox {
  width: 100%;
  margin-left: 1rem;
}
.tuijians1 {
  font-size: 1.2rem;
  line-height: 2.26133rem;
  text-align: left;
  color: #212121;
  margin-left: 5%;
}
.tuijians2 {
  font-size: 1rem;
  color: #ffa726;
  float: right;
  margin-right: 5%;
  line-height: 0.59733rem;
}
.tuijians3 {
  font-size: 1.2rem;
  line-height: 2.26133rem;
  text-align: left;
  color: silver;
}
.biaoqian {
  color: white;
  width: 96%;
  height: 1.1rem;
  font-size: 0.8rem;
  font-weight: 500;
  padding-left: 0.5rem;
  margin-top: -19.5%;
  border-radius: 1rem;
  transform: translateZ(1px);
  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.05),
    rgba(33, 33, 33, 0.6)
  );
}
.jianjie {
  font-size: 0.8rem;
  margin-top: 0.3rem;
  color: black;
  width: 10rem;
}
.biaoqian__neirong {
  color: white;
}
.donghua__body {
  background-color: #f0f0f0;
  width: 100%;
}
.header__navigationBarxia {
  background-color: white;
  margin-left: 0rem;
  width: 100%;
  height: 3.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.header__navigationBarxia::-webkit-scrollbar {
  display: none;
}
.body__scroll {
  height: 53.95rem;
  overflow-y: scroll;
  width: 100%;
}
</style>
