<template>
  <div class="footnav-root">
  <div class="footnav block textc typo_lgray">
    <a
      href="javascript:;"
      @click.prevent="goMainIndex"
      :class="{ active: $route.name == 'mainIndex' }"
      class="relative"
    >
      <span class="block bg00c6b8 c_white home-checked" v-if="$route.name == 'mainIndex'">
          <label v-if="showAnchor" @click="backTop" class="iconfont c_white fs16 typo_bold inblo pt1">&#xe760;</label>
          <label class="typo_bold inblo pt1" v-else>首页</label>
      </span>
      <template v-else>
        <!--<span class="iconfont block typo_xxlarge lh22 pt5" v-if="$route.name == 'mainIndex'">&#xe727;</span>-->
        <span class="iconfont block typo_xxlarge lh22 pt5 cB8c2cd">&#xe727;</span>
        <span class="block lh20 c8E8E8E">
            首页
        </span>
      </template>
    </a>
    <a
      :class="{ active: $route.name == 'askIndex' }"
      href="javascript:;"
      data-event-BI="click"
      @click.prevent="handleRedDot"
      :data-BI-params="JSON.stringify({ curpageid: 'G0.WD0', item_type: 0 })"
    >
      <span class="iconfont block typo_xxlarge lh22 pt5" v-if="$route.name == 'askIndex'">&#xe728;</span>
      <span class="iconfont block typo_xxlarge lh22 pt5" v-else>&#xe728;</span>
      <span class="block lh20 c8E8E8E">问医生</span>
      <span class="red-dot" v-if="showAskDoctorRed"></span>
    </a>
    <template v-if="health_ad.length">
      <a
        v-for="(list, index) in health_ad"
        :key="index"
        href="javascript:;"
        @click.prevent="goHealthad(list.url)"
        :class="{ active: $route.name == 'shopProductIndex' }"
        class="relative"
        :data-title="list.ad_title"
        :data-growing-title="'商城一级通栏广告'"
        data-event-id="ad_click"
        data-gio-view="true"
        data-event-BI="click"
        :data-BI-params="JSON.stringify({ curpageid: 'G0.DSH0', item_type: 0 })"
        :data-event-params="
          JSON.stringify({
            id: list.ad_id,
            adLocationName_cstVar: list.location_name,
            adLocationId_cstVar: list.locate_id,
            adName_cstVar: list.ad_name
          })
        "
      >
        <span class="iconfont block fs24 lh22  fnav-health-icon" ><img :src="buildImageCss(list.image)" /></span>
        <span class="block lh20 pt26 " :style="'color:#' + (list.ad_title.split('#')[1] || '8E8E8E')" >{{ list.ad_title.split('#')[0] }}</span>
      </a>
    </template>
    <a
      v-else
      href="javascript:;"
      @click.prevent="goHealthTab"
      :class="{ active: $route.name == 'shopProductIndex' }"
      class="relative"
      data-event-BI="click"
      :data-BI-params="JSON.stringify({ curpageid: 'G0.DSH0', item_type: 0 })"
    >
      <span class="iconfont block fs24 lh22 fnav-health-icon"><img :src="'//wximg.91160.com/wechat/img/common/healthicon.png'" /></span>
      <span class="block lh20 pt26 c8E8E8E">商城</span>
    </a>
    <a href="javascript:;" @click.prevent="goNoticeIndex">
      <span class="iconfont block typo_xxlarge lh22 pt5">&#xe726;</span>
      <span class="block lh20 c8E8E8E">消息</span>
      <span class="bot-tips">{{ msgNum }}</span>
    </a>
    <a href="javascript:;" @click.prevent="goAccountIndex">
      <span class="iconfont block typo_xxlarge lh22 pt5">&#xe729;</span>
      <span class="block lh20 c8E8E8E">我的</span>
      <span v-bind:class="{ bottipsno: notipsnum }"></span>
    </a>
  </div>
  </div>
</template>
<script>
import service from '@/services'

import {buildImage} from '@/mixins/'
// 广告位id
let healthId

if (process.env.NODE_ENV !== 'production') {
  healthId = 2073 // 商城广告id
} else {
  healthId = 2073 // 商城广告id镜像和线上
}
export default {
  name: 'FootNav',
  data() {
    return {
      msgNum: '',
      notipsnum: false,
      healthAdvert: healthId,
      health_ad: [],
      showAskDoctorRed: true,
      showAnchor:false
    }
  },
  mixins: [buildImage],
  mounted() {
    console.log('dddd');
    console.log(this.$router);
    this.getUnReadMsg()
    this.getHealthAdList()
    this.checkRedDot()
    this.scrollListener()
  },
  beforeDestroy() {
    window.removeEventListener('scroll',null)
  },
  methods: {
    scrollListener(){
      var _that = this
      window.addEventListener('scroll',function(e){
        var scrollTop = document.documentElement.getBoundingClientRect().top;
        if(scrollTop < -300) {
          if(!_that.showAnchor)
            _that.showAnchor = true
        }else {
          if(_that.showAnchor)
            _that.showAnchor = false
        }
      });
    },
    backTop(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    goMainIndex(){
      if(this.isPatientApp){
        mJavaScriptObject.funGotoMainTabAtIndex(0)
      }else {
        location.href = `/vue/main/index.html`
      }
    },
    goHealthad(url){
      if(this.isPatientApp){
        window.location.reload()
      }else if(this.isHuiyiCid){
        this.$router.push('../shop/huiyiIndex.html?cid=100012604')
      }else {
        document.location.href=url
      }
    },
    goHealthTab(){
      if(this.isPatientApp){
        window.location.reload()
      }else if(this.isHuiyiCid){
        this.$router.push('../shop/huiyiIndex.html?cid=100012604')
      }else{
        this.$router.push('../shop/productIndex.html')
      }
    },
    goNoticeIndex(){
      if(this.isPatientApp){
        mJavaScriptObject.funGotoMainTabAtIndex(3)
      }else {
        document.location.href='/notice/index.html'
      }
    },
    goAccountIndex(){
      if(this.isPatientApp){
        mJavaScriptObject.funGotoMainTabAtIndex(4)
      }else {
        document.location.href='/account/index.html'
      }
    },
    checkRedDot() {
      const temp = localStorage.getItem('readAskDoctor')
      const obj = temp && JSON.parse(temp) || null
      const str = this.getDateString()
      if (!obj || !obj.day) {
        this.showAskDoctorRed = true
      } else if (obj.day == str) {
        this.showAskDoctorRed = false
      } else {
        this.showAskDoctorRed = true
      }
    },
    getDateString() {
      const date = new Date()
      const day = date.getMonth() + '-' + date.getDate()
      return day
    },
    // 点击红点
    handleRedDot() {
      if(this.isPatientApp){
        mJavaScriptObject.funGotoMainTabAtIndex(1)
      }else {
        const day = this.getDateString()
        localStorage.setItem('readAskDoctor', JSON.stringify({
          status: 1,
          day
        }))
        location.href = `/vue/ask/index.html`
      }
    },
    _getAdvertData(params) {
      return service.personalMainPage.getAdvertData(params)
    },
    /**
     * 底部商城广告获取
     * health_ad 上面2个图片广告
     */
    getHealthAdList() {
      this._getAdvertData({ location_id: this.healthAdvert }).then(res => {
        if (res.result_code == 1) {
          var datas = res.data
          this.health_ad = datas[this.healthAdvert]
        }
      })
    },
    getUnReadMsg() {
      var that = this
      var code =
        typeof this.$route.query.code != 'undefined'
          ? this.$route.query.code
          : 0
      this.$http({
        method: 'get',
        url: '/sys/getUnReadMsg.html?code=' + code
      }).then(res => {
        if (res.data.state == 1) {
          this.$nextTick(() => {
            that.msgNum = res.data.data.unread_info.unread_desc
            if (res.data.data.commentCount > 0) {
              that.notipsnum = true
            } else {
              that.notipsnum = false
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped>
  .footnav-root{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1002;
    background: linear-gradient(to bottom,transparent 50%,rgba(255,255,255,1) 50%);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
  .home-checked {
    width: 1.013rem;
    height: 1.013rem;
    border-radius: 50%;
    line-height: 1.013rem;
    margin: 0.133rem auto 0;
  }
  .cB8c2cd {
    color: #b8c2cd
  }
.footnav {
  width: 100vw;
  height: 2.26667rem;
  padding-top: 0.98rem;
  background: url(../../../assets/static/footnavbg.png) no-repeat bottom center;
  background-size: cover;
}
.footnav a {
  position: relative;
  float: left;
  width: 20%;
  font-size: 0.32rem;
  color: #b8c2cd;
}
.footnav a.active {
  color: #00d2c3;
}
.red-dot {
  position: absolute;
  width: 0.213333rem;
  height: 0.213333rem;
  background-color: #f00;
  top: 0;
  right: 0.48rem;
  border-radius: 50%;
}
.bot-tips {
  position: absolute;
  top: 0;
  left: 50%;
  min-width: 6px;
  padding: 0 0.13333rem;
  margin-left: 0.05333rem;
  border-radius: 0.26667rem;
  line-height: 0.42667rem;
  text-align: center;
  font-size: 0.32rem;
  color: #fff;
  background: #f00;
}
.bottipsno {
  position: absolute;
  top: 0.02667rem;
  left: 50%;
  width: 8px;
  height: 0.21333rem;
  margin-left: 0.08rem;
  border-radius: 100%;
  line-height: 0.42667rem;
  font-size: 0.32rem;
  color: #fff;
  background: #f00;
}
.pt26 {
  padding-top: 0.693333rem;
}
.footnav a.active .fnav-health-icon + span {
  color: #ffc745;
}
.fnav-health-icon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  bottom: 0.5rem;
  width: 1.226667rem;
  height: 1.226667rem;
  box-sizing: border-box;
  text-align: center;
  border-radius: 50%;
  padding-left: 0.083333rem;
  padding-right: 0.083333rem;
}
.fnav-health-icon img {
  border-radius: 100%;
}

  .c8E8E8E{
    color: #8E8E8E;
  }
</style>
