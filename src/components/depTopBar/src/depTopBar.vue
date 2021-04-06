<template>
  <div class="depTopBar w100p">
    <CustomModal
      :show="showFocusModal"
      className="focus-modal"
      :showClose="true"
      :showCancel="false"
      confirmText="确定"
      @hide="handleHideFocus"
      @confirm="handleHideFocus"
    >
      <div slot="top">
        <p class="title"></p>
      </div>
      <div slot="body">
        <div class="notice-body">
          <!-- eslint-disable-next-line -->
          <div class="notice-content">
            <img class="qrcode" :src="qrcode" alt="健康160二维码">
            <p class="text">识别二维码或者扫码<br>关注公众号</p>
          </div>
        </div>
      </div>
    </CustomModal>
    <div class="flex topbar" :style="'justify-content: flex-end;padding-top:'+pt+';padding-bottom:'+pb">
      <slot v-if="!channelInfo.no_nav_bar" name="left"></slot>
      <slot name="middle"></slot>
      <slot v-if="!channelInfo.no_nav_bar" name="right">
        <div v-if="!isStar && showStar" class="iconfont star" @click="handleClickStar">&#xe6ac;</div>
        <div v-if="isStar && showStar" class="iconfont star active" @click="handleClickStar">&#xe6aa;</div>
        <div v-if="showBack && !isHuiyiCid" class="iconfont back" @click="handleClickBack">&#xe6b4;</div>
      </slot>
    </div>
    <div
      v-if="showDropDown"
      class="dropdown"
      :style="{top: isABC ? `${ABCHeight / 37.5}rem`: '0'}"
      @click="toggleDropDown"
    >
      <div class="shadow"></div>
      <slot name="content">
        <div class="content flex justify_between align_center">
          <div class="func">
            <div class="icon" :style="buildImageCss(home, 2)" @click="handleHome"></div>
            <p>160首页</p>
          </div>
          <div class="func">
            <div class="icon" :style="buildImageCss(about, 2)" @click="handleShowFocus"></div>
            <p>关注我们</p>
          </div>
          <div class="func">
            <div class="icon" :style="buildImageCss(download, 2)" @click="goDownloadApp"></div>
            <p>下载APP</p>
          </div>
          <div class="func">
            <div class="icon" :style="buildImageCss(gift, 2)" @click="handleFreshMan"></div>
            <p>新人礼包</p>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
import CustomModal from './customModal'

export default {
  name: 'DepTopBar',
  components: {
    CustomModal
  },
  props: {
    // unit_id: {
    //   type: [Number, String],
    //   required: true,
    //   default: 0
    // },
    isStar: {
      type: Number,
      required: true,
      default: 0
    },
    channelInfo: {
      type: Object,
      required: true,
      default: () => {}
    },
    showBack: {
      type: Boolean,
      default: true
    },
    showStar: {
      type: Boolean,
      default: true
    },
    pt: {
      type: String,
      default: '0.346667rem'
    },
    pb: {
      type: String,
      default: '0.346667rem'
    },
  },
  data() {
    return {
      showFocusModal: false,
      showDropDown: false,
      qrcode: '//wximg.91160.com/wechat/img/common/--qrcode.jpg',
      home: require('@/assets/static/home.png'),
      about: require('@/assets/static/about.png'),
      download: require('@/assets/static/download.png'),
      gift: require('@/assets/static/gift.png')
    }
  },
  methods: {
    handleHome() {
      this.$router.push({
        path: '../main/index.html'
      })
    },
    handleShowFocus() {
      this.showFocusModal = true
    },
    handleHideFocus() {
      this.showFocusModal = false
    },
    handleFreshMan() {
      this.$router.push({
        path: '../activity/packageguide.html'
      })
    },
    toggleDropDown() {
      this.showDropDown = !this.showDropDown
    },
    handleClickBack() {
      // if (!document.referrer) {
      this.toggleDropDown()
      // } else {
      //   this.handleHome()
      // }
    },
    handleClickStar() {
      if (this.isStar) {
        this.$emit('clickStar', 0)
      } else {
        this.$emit('clickStar', 1)
      }
    }
  }
}
</script>
<style lang="scss">
.depTopBar {
  position: relative;
  width: 100%;
  background: transparent;
  .focus-modal {
    .qrcode {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: 0 auto;
      margin-top: 1.44rem;
      margin-bottom: .533333rem;
    }
    .text {
      margin-bottom: .773333rem;
    }
  }
  .topbar {
    padding: 0 .266667rem;
    .back, .star {
      width: .906667rem;
      height: .906667rem;
      border-radius: 50%;
      font-size: .506667rem;
      line-height: .906667rem;
      text-align: center;
      color: #FFF;
      background: rgba(0, 0, 0, .3);
    }
    .star {
      margin-right: .266667rem;
      &.active {
        color: #FFAE17;
      }
    }
  }
  .dropdown {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    .shadow {
      height: 100vh;
      background: rgba(0, 0, 0, 1);
      opacity: .5;
    }
    .content {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 3.733333rem;
      padding: 0 .693333rem;
      border-radius: 0 0 .32rem .32rem;
      background: rgba(255, 255, 255, 1);
      .func {
        display: inline-block;
        position: relative;
        .icon {
          display: block;
          position: relative;
          width: 1.066667rem;
          height: 1.066667rem;
          margin: 0 auto;
          font-weight: 400;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        p {
          margin-top: .293333rem;
        }
      }
    }
  }
}
</style>
