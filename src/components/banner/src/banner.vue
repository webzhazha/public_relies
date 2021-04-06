<!-- 公用组件：公共banner
  /**
  * 公共banner
  * @module personalMainPage/components
  * @desc 商城banner
  * @author 刘海涛
  * @date 2019年8月3日10:30
  * @interface 无
  * @document 无
  * @example 调用示例
  * <Banner></Banner>
  */ -->
<template>
  <div
    v-if="bannerAdList && bannerAdList.length"
    id="topbanner"
    class=" boradius4 banner-warpper "
    :class="bg"
  >
    <template v-if="bannerAdList.length > 1">
      <swiper ref="swiper" :options="swiperOption">
        <swiper-slide v-for="(infos, index) in bannerAdList" :key="index">
          <a
            :href="infos.url ? infos.url : 'javascript:;'"
            class="hot-item block backgroundimg"
            :data-growing-title="infos.ad_name"
            :style="`${buildImageCss(infos.image, 2)};height: ${height}`"
            data-event-id="ad_click"
            data-gio-view="true"
            :data-event-params="JSON.stringify({id:infos.ad_id,adLocationName_cstVar:infos.location_name,adLocationId_cstVar:infos.locate_id,adName_cstVar:infos.ad_name})"
          ></a>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </template>
    <template v-else>
      <div class="swiper-container">
        <a
          v-for="(infos, index) in bannerAdList"
          :key="index"
          :href="infos.url ? infos.url : 'javascript:;'"
          class="hot-item block backgroundimg"
          :style="`${generateImageUrl(infos.image, noimg)};height: ${height}`"
          data-event-id="ad_click"
          data-gio-view="true"
          :data-event-params="JSON.stringify({id:infos.ad_id,adLocationName_cstVar:infos.location_name,adLocationId_cstVar:infos.locate_id,adName_cstVar:infos.ad_name})"
        ></a>
      </div>
    </template>
  </div>
</template>
<script>
import service from '@/services'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Banner',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    shop_catalogue_id: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: String,
      default: '2.29333rem'
    },
    bg: {
      type: String,
      default: 'bg_white'
    },
    id_name: {
      type: String,
      default: ''
    }
  },
  watch: {
    shop_catalogue_id() {
      this.getBannerAdList()
    }
  },
  data() {
    return {
      noimg: require('@/assets/static/article_default.png'),
      swiperOption: {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
          rotate: 0,
          stretch: -20,
          depth: 0,
          modifier: 1,
          slideShadows: false
        },
        autoplay: {
          delay: 5000, // 自动切换的时间间隔，单位ms
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      bannerAdList: []
    }
  },
  mounted() {
    this.getBannerAdList()
  },
  methods: {
    _getAdvertData(params) {
      return service.common.getAdvertData(params)
    },
    // 顶部banner切换
    getBannerAdList() {
      this.bannerAdList = []
      this._getAdvertData({
        location_id: this.id,
        shop_catalogue_id: this.shop_catalogue_id
      }).then((res) => {
        if (res.result_code == 1) {
          this.bannerAdList = res.data[this.id]
        }
      })
    }
  }
}
</script>

    <style scoped lang="scss">
    .banner-warpper {
      overflow: hidden;
    }
    #topbanner {
      .swiper-container {
        height: auto;
      }
      .swiper-slide {
        width: 9.2rem;
        height: auto;
      }
      .swiper-pagination {
        bottom: 0;
      }
    }
    .h93 {
      height: 2.48rem;
    }
    .hot-item {
      width: 9.2rem;
      height: 2.29333rem;
      margin: auto;
      border-radius: .10667rem;
      box-shadow: 0 .05333rem .16rem 0 rgba(191, 215, 237, .75);
    }
    .no_bg {
      background-color: rgba(255, 255, 255, 0);
    }
    </style>
