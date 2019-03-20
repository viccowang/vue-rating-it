<template>
  <div
  class="vue-rating-it"
  @mouseleave="mouseleaveHandle"
  >
    <div class="mask" v-show="disabled"></div>
    <ul>
      <li
        v-for="(start, index) in total"
        :key="index"
        class="starfont"
        :class="{ 'icon-star': Math.round(hightlightStarsCount) > index , 'icon-star1': Math.round(hightlightStarsCount) <= index }"
        :style="{ color, fontSize: size }"
        @mouseover="mouseoverHandle(index,$event)"
        @click.stop="rating(index)"
      />
    </ul>
  </div>
</template>
<script>
import './font/iconfont.css'
/**
 * Star Rating
 * =========================
 * Author: Vicco Wang
 * Date: 2019.03.20
 * 
 */
export default {
  name: 'VueRatingIt',
  props: {
    // count of the stars
    total: {
      type: Number,
      default: 5
    },
    // total score
    score: {
      type: Number,
      default: 0
    },
    // stars color
    color: {
      type: String,
      default: '#FFD600'
    },
    //
    size: {
      type: String,
      default: '2rem'
    },
    //
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hightlightStarsCount: 0
    }
  },
  watch: {
    score: {
      handler (score) {
        this.hightlightStarsCount = score
      },
      immediate: true
    }
  },
  methods: {
    mouseoverHandle (idx) {
      this.hightlightStarsCount = idx + 1
    },
    mouseleaveHandle () {
      this.hightlightStarsCount = this.score
    },
    rating (index) {
      this.$emit('rating', index + 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.vue-rating-it {
  display: inline-block;
  position: relative;

  .mask {
    position: absolute;
    top:0;left:0;
    width:100%;
    height:100%;
    opacity: 0;
    z-index:2;
  }

  ul {
    display: flex;
    padding:0;margin:0;
    list-style: none;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
