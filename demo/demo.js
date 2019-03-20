/**
 * start rating demo
 * =========================
 * Author: Vicco Wang
 * Date: 2019.03.20
 */
/* eslint-disable */
new Vue({
  el: '#app',
  data () {
    return {
      rate: 3.2
    }
  },
  methods: {
    rating (rate) {
      this.rate = rate
    }
  }
})