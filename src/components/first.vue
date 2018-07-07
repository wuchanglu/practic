<template>
  <div v-on:scroll="gundong"
    class="dahezi">
    <a class="shipinlink"
      href="#"
      v-for="item in shipin">
      <div class="tupian">
        <img v-bind:src="item.src"
          class="imgVideo">
        <div class="xiaobiaoqian">
          <span class="biaoqian1">{{item.biaoqian1}}</span>
          <span class="biaoqian2">{{item.biaoqian2}}</span>
          <span class="biaoqian3">{{item.biaoqian3}}</span>
        </div>
      </div>
      <div class="jieshao">
        <p>{{item.jianjie}}</p>
      </div>
    </a>
    <div class="huiqu"
      v-show="show"
      v-on:click="fanhui">
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
      shipin: [
        {
          id: 0,
          src:
            '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
          jianjie:
            '【镇魂丨巍澜】原著向：美貌昆仑君与美貌小鬼王的前世今生（没有突厥，也没有猴）',
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
        },
        {
          id: 4,
          src:
            '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
          jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          biaoqian1: '2:53',
          biaoqian2: '小标签的内容',
          biaoqian3: '小标签的内容'
        },
        {
          id: 5,
          src:
            '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
          jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          biaoqian1: '2:53',
          biaoqian2: '小标签的内容',
          biaoqian3: '小标签的内容'
        },
        {
          id: 6,
          src:
            '//i2.hdslb.com/bfs/archive/7c7d7ec340e03d2f2e72c165b29ef6639d75a7b0.jpg@480w_300h.webp',
          jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          biaoqian1: '2:53',
          biaoqian2: '小标签的内容',
          biaoqian3: '小标签的内容'
        },
        {
          id: 7,
          src:
            '//i1.hdslb.com/bfs/archive/abd104c922fd5ca31f9a57a796823eb2747058d7.jpg@480w_300h.webp',
          jianjie: '这里装的是视频的简介，滴滴滴滴滴滴滴滴',
          biaoqian1: '2:53',
          biaoqian2: '小标签的内容',
          biaoqian3: '小标签的内容'
        }
      ],
      show: false
    }
  },
  methods: {
    gundong: function() {
      let dahezi = document.getElementsByClassName('dahezi')[0].scrollTop
      if (dahezi >= 200) {
        this.show = true
      } else if (dahezi < 200) {
        this.show = false
      }
    },
    fanhui: function() {
      let dahezi = document.getElementsByClassName('dahezi')[0]
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
h1 {
  text-align: center;
}
.hezi {
  width: 30rem;
  height: 45rem;
  overflow: scroll;
}
.xiaohezi {
  margin: 15rem;
  line-height: 15rem;
}
.imgVideo {
  width: 100%;
  height: 100%;
  margin: 1rem auto;
  border-radius: 0.8rem;
  z-index: 2;
}
.dahezi {
  margin: 0 auto;
  width: 100%;
  height: 57.495rem;
  overflow-y: scroll;
}
.shipinlink {
  text-decoration: none;
  color: white;
}
.xiaobiaoqian {
  color: white;
  width: 98%;
  height: 2rem;
  font-size: 1rem;
  font-weight: 500;
  padding-left: 0.5rem;
  margin-top: -12%;

  border-radius: 1rem;
  transform: translateZ(1px);
  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.05),
    rgba(33, 33, 33, 0.6)
  );
}
.biaoqian1 {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.7rem;
  padding: 0.2rem 0.2rem;
}
.biaoqian2 {
}
.biaoqian3 {
}
.jieshao {
  width: 90%;
  color: black;
  font-size: 1rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0 auto;
  margin-top: 1rem;
}
.tupian {
  width: 90%;
  margin: 0 auto;
  height: 13rem;
}
</style>
