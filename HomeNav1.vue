<template>
  <!-- 最外层开始 -->
  <div>
    <div @mouseleave="leaveHandler">
      <TypeNav />
      <Swiper />
    </div>
    <!--图片展示 -->
    <div class="content_none"></div>
    <div class="content_photo" v-show="$route.path == '/'">
      <div class="content_photo_1">
        <div class="imgBox">
          <div class="imgDiv" v-for="(item, index) of imgList" :key="index">
            <template v-if="item.sku">
              <nuxt-link target="_blank" :to="{ path: '/goods/detail', query: { sku: item.sku } }">
                <img class="imgener" :src="item.bgPic" />
              </nuxt-link>
            </template>
            <template v-else>
              <nuxt-link target="" :to="{ path: '' }">
                <img class="imgener" :src="item.bgPic" />
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
      <div class="content_photo_2">
        <img src="@/assets/images/projects/banner-1200X91px.png" />
      </div>
      <div class="content_photo_3">
        <div
          v-for="(item, index) in IndustryList"
          :key="index"
          @mouseenter="typeEnter(index)"
          @mouseleave="typeLeave(index)"
        >
          <img v-if="ishover && hoverIndex == index" :src="item.url2" />
          <img v-else :src="item.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/assets/images/avatar.png";
import throttle from "lodash/throttle";
import debounce from "lodash/debounce"

export default {
  name: "HomeNaV1",
  components: {},
  data () {
    return {
      brandList: [],
      msgList: [],
      Avatar: Avatar,
      listData: [],
      offline: [],
      banner: [],
      banner1: [],
      ishover: false,
      hoverIndex: -1,
      // 行业分类
      IndustryList: [
        {
          url: require("@/assets/images/projects/行业分类/分类图标建筑-234X38px.png"),
          url2: require("@/assets/images/projects/行业分类/分类图标建筑2-234X38px.png"),
        },
        {
          url: require("@/assets/images/projects/行业分类/分类图标电力-234X38px.png"),
          url2: require("@/assets/images/projects/行业分类/分类图标电力2-234X38px.png"),
        },
        {
          url: require("@/assets/images/projects/行业分类/分类图标新能源-234X38px.png"),
          url2: require("@/assets/images/projects/行业分类/分类图标新能源2-234X38px.png"),
        },
        {
          url: require("@/assets/images/projects/行业分类/分类图标钢铁-234X38px.png"),
          url2: require("@/assets/images/projects/行业分类/分类图标钢铁2-234X38px.png"),
        },
        {
          url: require("@/assets/images/projects/行业分类/分类图标电子-234X38px.png"),
          url2: require("@/assets/images/projects/行业分类/分类图标电子2-234X38px.png"),
        },
      ],

      timer: null,
      theSpeed: 1,
      imgWidth: 235,
      theDirection: "left",
      imgList: [
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播1-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播2-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播3-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播4-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播5-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播6-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播7-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播8-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播9-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播10-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播11-236X145px.png") },
        { id: '1', bgPic: require("@/assets/images/projects/小轮播图/小轮播12-236X145px.png") },

      ],
    };
  },
  methods: {
    // 小bannner的列表
    async getbrand () {
      const { data } = await this.$api.$get("/product/customization/list", { params: { coord: '2' } })
      // if (data.length < 5) {
      //   this.imgList = data.concat(data);
      // } else {
      //   this.imgList = data
      // }
      this.$nextTick(() => {
        this.init()
      })
    },
    // 初始化bannner运行
    init () {
      let imgBox = document.getElementsByClassName("imgBox")[0];
      //将imgBox下的图片进行拼接 循环展示图片
      imgBox.innerHTML += imgBox.innerHTML;
      let imgDiv = document.getElementsByClassName("imgDiv");
      //设置div的宽度使图片可以放下
      imgBox.style.width = imgDiv.length * this.imgWidth + "px";

      let self = this;
      var isPaused = false;

      function autoScroll () {
        if (imgBox.offsetLeft < -(imgBox.offsetWidth / 2)) {
          //提前更新left值，实现循环展示
          imgBox.style.left = 0;
        }
        if (imgBox.offsetLeft > 0) {
          //向右滚动 提前更新left值，实现循环展示
          imgBox.style.left = -(imgBox.offsetWidth / 2) + "px";
        }
        if (self.theDirection == "left") {
          //向左滚动,值为负
          self.theSpeed = -Math.abs(self.theSpeed);
        } else {
          //向右滚动
          self.theSpeed = Math.abs(self.theSpeed);
        }
        // 求出总的left值，等于left值加上移动的速度（px值）
        imgBox.style.left = imgBox.offsetLeft + self.theSpeed + "px";
      }
      // 鼠标悬停事件
      imgBox.addEventListener('mouseover', function () {
        isPaused = true;
        imgBox.style.animationPlayState = 'paused';
      });

      // 鼠标移开事件
      imgBox.addEventListener('mouseout', function () {
        isPaused = false;
        imgBox.style.animationPlayState = 'running';
      });
      // 滚动动画结束事件
      imgBox.addEventListener('animationiteration', function () {
        if (isPaused) {
          imgBox.style.animationPlayState = 'paused';
        }
      });
    },
    leaveHandler (a) {
      if (this.$route.path !== "/" && this.$route.path !== "/en") {
        this.$store.dispatch("settings/changeSetting", {
          key: "isMenu",
          value: false,
        });
      } else {
        this.$store.dispatch("settings/changeSetting", {
          key: "isMenu",
          value: true,
        });
      }
    },
    // 鼠标进入和移除行业分类---------
    typeEnter (a) {
      this.ishover = true;
      this.hoverIndex = a;
    },
    typeLeave (a) {
      this.ishover = false;
      this.hoverIndex = -1;
    },

    // -------结束----------
  },
  mounted () {
    this.getbrand()
    // this.init()
  },
  beforeDestroy () {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="scss" scoped>
.content_none {
  width: 1200px;
  margin: 0 auto;
  height: 10px;
  background-color: white;
  // background-color: #eee;
}

.content_photo {
  background-color: #eee;
  width: 1200px;
  margin: 0 auto;

  .content_photo_1 {
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;

    .imgBox {
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      display: flex;
      animation: marquee 10s linear infinite;
      .imgDiv {
        /* height: 150px;
        width: 240px;
        cursor: pointer; */
        display: inline-block;
        padding-left: 100%;
        animation: marquee 10s linear infinite;

        img {
          margin: 0 auto;
          height: 145px;
          width: 235px;
          object-fit: cover;
          // width: 260px;
          // height: 120px;
        }
      }
      @keyframes imgBox {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    }
  }

  .content_photo_2 {
    margin-top: 10px;
    width: 1200px;
    height: 91px;

    img {
      width: 1200px;
      height: 91px;
    }
  }

  .content_photo_3 {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    div {
      width: 234px;
      height: 38px;
      background-color: white;

      cursor: pointer;

      img {
        object-fit: contain;
      }
    }
  }
}
</style>
