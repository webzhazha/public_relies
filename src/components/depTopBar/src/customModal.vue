<template>
  <div v-if="showModal" class="custom-dialog" :class="className">
    <div class="shadow" @click="$emit('hide')"></div>
    <div class="dialog">
      <div v-if="showClose" class="custom-close" @click="$emit('hide')">
        <i class="iconfont">&#xe605;</i>
      </div>
      <div class="dialog-top">
        <slot name="top">
          <h3 v-if="title" class="custom-title">{{ title }}</h3>
        </slot>
      </div>
      <div class="dialog-body">
        <slot name="body">
          <div class="custom-content">
            <!-- eslint-disable-next-line -->
            <div v-html="content"></div>
          </div>
        </slot>
      </div>
      <div class="dialog-foot">
        <slot name="foot">
          <div class="buttons flex justify_center">
            <button v-if="showCancel" class="plain" @click="$emit('cancel')">
              {{ cancelText }}
            </button><button v-if="showConfirm" class="primary" @click="$emit('confirm')">
              {{ confirmText }}
            </button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    showConfirmButton: {
      type: Boolean,
      default: false
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showModal: {
      get() {
        return this.show
      },
      set() {
        return this.showModal
      }
    }
  }
}
</script>
<style lang="scss">
.custom-dialog {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  .shadow {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
  }
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 7.226667rem;
    border-radius: .213333rem;
    background-color: #FFF;
  }
  .custom-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9;
    padding: .266667rem;
    .iconfont {
      position: relative;
      font-size: .32rem;
      color: #999;
    }
  }
  .dialog-top {
    .custom-title {
      margin-top: .533333rem;
      font-size: .48rem;
      line-height: .48rem;
      font-weight: 400;
      text-align: center;
      color: rgba(51, 51, 51, 1);
    }
  }
  .dialog-body {
    position: relative;
    min-height: 2.346667rem;
    .custom-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      max-height: 2.133333rem;
      overflow: scroll;
      padding: .266667rem .533333rem 0;
      font-size: .373333rem;
      line-height: .586667rem;
      font-weight: 400;
      color: #666;
      color: rgba(102, 102, 102, 1);
    }
  }
  .dialog-foot {
    position: relative;
    .buttons {
      bottom: .8rem;
      width: 100%;
      height: 1.173333rem;
      border-top: .026667rem solid #F5F5F5;
    }
    button {
      position: relative;
      width: 50%;
      font-size: .48rem;
      line-height: .48rem;
      font-weight: 400;
      color: rgba(0, 210, 195, 1);
      background-color: transparent;
      &.plain {
        color: #666;
      }
    }
    button + button {
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: .026667rem;
        height: 98%;
        background-color: #DDD;
        content: '';
        transform: scale(.5, 1);
      }
    }
  }
}
</style>
