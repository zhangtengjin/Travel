<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" >
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>          
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "HomeWeekend",
	data: function(){
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
				title: '苏州必游TOP10',
				desc: '苏州必须要留下足迹的十个地标'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/70/b2f8425ce486ed.jpg_r_640x214_5db9de57.jpg',
				title: '细嗅历史的气息',
				desc: '阅尽沧桑，不变的是恬静，待君细细品味'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1507/ab/1c456b9cbffc31.jpg_r_640x214_1c2552de.jpg',
				title: '寻魅力江南古镇',
				desc: '发呆静思，度过一个悠闲的下午'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3e/18b666031b22e7.jpg_r_640x214_864dce2f.jpg',
				title: '古典园林逛个够',
				desc: '如果是第一次来苏州，园林是一定要逛的'
			},{
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d7/5acd9640ee6cb2.jpg_r_640x214_975d2c3f.jpg',
				title: '山清水秀之地',
				desc: '钟情于山水之间，别有一番雅致'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #ccc
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.9%
		.item-img
			width: 100%
	.item-info
		text-indent: .1rem
		padding: .1rem
	.item-title
		line-height: .54rem
		font-size: .32rem
		ellipsis()
	.item-desc
		line-height: .4rem
		font-size: .25rem
		color: #616161
		ellipsis()
</style>