<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link tag="li" :to=" '/detail/' + item.id " class="item border-bottom" v-for="item of list" :key="item.id">
				<img class="item-img" :src="item.imgUrl" >
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>          
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: "HomeRecommend",
	props: {
		list: Array
	}
	/*data: function(){
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/14/3dfad2bcd30c40e91a15f8b7296d86a6.jpg_200x200_265db173.jpg',
				title: '同里古镇',
				desc: '一个文化悠久的古镇'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/6f/6fd1ba315b60e430a3.water.jpg_200x200_16184926.jpg',
				title: '周庄',
				desc: '漂亮的村庄'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/43/43729196331fc442a3.water.jpg_200x200_9f980fce.jpg',
				title: '苏州乐园森林水世界',
				desc: '暑假旅游胜地'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_200x200_0ccb4aa8.jpg',
				title: '拙政园',
				desc: '著名园林'
			},{
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/cd/cde718c195cc7cb0.water.jpg_200x200_30d44a00.jpg',
				title: '苏州摩天轮乐园',
				desc: '摩天轮一个放慢生活的娱乐'
			},{
				id: '0006',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/b4/77f601b2a965f62a39a8939fbd5db488.water.jpg_200x200_48b526c5.jpg',
				title: '七里山塘',
				desc: '有着许多美食的地方'
			}]
		}
	}*/
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #ccc
		text-indent: .2rem
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				font-size: .25rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				margin-top: .16rem
				background: #ff9300
				padding 0 .2rem
				border-radius: .06rem
				color: #fff
					
</style>