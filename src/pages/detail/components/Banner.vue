<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201405/14/3dfad2bcd30c40e91a15f8b7296d86a6.jpg_600x330_98874a40.jpg" />
			<div class="banner-info">
				<div class="banner-title">同里古镇(AAAAA景区)</div>
				<div class="banner-number"><span class="iconfont banner-icon">&#xe680;</span>48</div>
			</div>
		</div>

		<common-gallary :imgs="imgs" v-show="showGarllary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
	name: "DetailBanner",
	data () {
		return {
			showGarllary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1805/83/839c53b2f1c3f6a0a3.water.jpg_r_800x800_9999f959.jpg','http://img1.qunarzz.com/sight/p0/1805/7d/7d56b6daec39df28a3.water.jpg_r_800x800_a98b36dc.jpg']
		}
	},
	methods: {
		handleBannerClick () {
			this.showGarllary = true
		},
		handleGallaryClose () {
			this.showGarllary = false
		}
	},
	components: {
		CommonGallary
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width:100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-title
				font-size: .32rem
				padding 0 .2rem
				flex: 1
			.banner-number
				margin-top: .14rem
				padding: 0 .4rem
				line-height: .32rem
				height: .32rem
				border-radius: .2rem
				font-size: .24rem
				background: rgba(0,0,0,.8)
				.banner-icon
					font-size: .24rem
			
</style>