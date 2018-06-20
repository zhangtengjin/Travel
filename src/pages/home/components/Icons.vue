<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page,index) of pages"  :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.iconUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data: function(){
		return {
			iconList: [{
				id: '0001',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc: '景点门票'
			},{
				id: '0002',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
				desc: '古镇'
			},{
				id: '0003',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
				desc: '名胜古迹'
			},{
				id: '0004',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
				desc: '游乐场'
			},{
				id: '0005',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
				desc: '水上乐园'
			},{
				id: '0006',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc: '一日游'
			},{
				id: '0007',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
				desc: '苏州园林'
			},{
				id: '0008',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
				desc: '拙政园'
			},{
				id: '0009',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
				desc: '虎丘'
			},{
				id: '00010',
				iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
				desc: '南浔古镇'
			}]
		}
	},
	computed: {
		pages: function(){
			const pages = []
			this.iconList.forEach(function(item,index){
				const page = Math.floor(index / 8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height: 0
		padding-bottom: 50%
	.icon
		position:relative
		overflow: hidden
		float: left
		width: 25%
		height: 0
		padding-bottom: 25%
		.icon-img
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: .44rem
			box-sizing: border-box
			padding: .1rem
			.icon-img-content
				display:block 
				margin: 0 auto
				height: 100%
		.icon-desc
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height:.44rem
			line-height: .44rem
			text-align: center
			color: $darkTextColor
			ellipsis()
</style>