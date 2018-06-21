<template>
	<div class="wrapper">
 		<swiper :options="swiperOption" v-if="showSwiper">
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>	
  </div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		list: Array
	},
	data: function(){
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			}
			/*,
			swiperList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/67/7939b83d3b05ea02.jpg_750x200_9deaefa3.jpg'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
			},{
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
			}]*/
		}
	},
	computed: {
		showSwiper: function(){
			return this.list.length
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
			background: #fff
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 26.67%
		background: #eee
		.swiper-img
			width: 100%
</style>