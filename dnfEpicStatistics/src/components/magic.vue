<template lang="jade">
	.switch-box.magic
		h1 伊斯塔战灵
		h2 史诗防具
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered(v-for="(item, index) in suitInfo.epicArmor")
			thead
				tr
					td(v-text="item.name" v-bind:class="{'am-primary': item.num == 5}" colspan=2)
			tbody
				tr(v-for="(item, index) in item.data ")
					td(v-text="item.part")
					td
						i.fa-check(v-if="item.status == 1")
						i.fa-close(v-if="item.status == 0")
		h2 史诗首饰
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered(v-for="(item, index) in suitInfo.epicJewelry")
			thead
				tr
					td(v-text="item.name" v-bind:class="{'am-primary': item.num == 3}" colspan=2)
			tbody
				tr(v-for="(item, index) in item.data ")
					td(v-text="item.part")
					td
						i.fa-check(v-if="item.status == 1")
						i.fa-close(v-if="item.status == 0")		
		h2 史诗防具散件
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered.epicArmorParts
			tbody
				tr(v-for="(item, index) in suitInfo.epicArmorParts")
					td(v-text="item.name")
					td
						i.fa-check(v-if="item.shoulder == 1")
						i.fa-close(v-if="item.shoulder == 0")
						i.fa-check(v-if="item.jacket == 1")
						i.fa-close(v-if="item.jacket == 0")
						i.fa-check(v-if="item.pants == 1")
						i.fa-close(v-if="item.pants == 0")
						i.fa-check(v-if="item.belt == 1")
						i.fa-close(v-if="item.belt == 0")
						i.fa-check(v-if="item.shoes == 1")
						i.fa-close(v-if="item.shoes == 0")
		h2 异界套装
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-centered(v-for="(item, index) in suitInfo.outsider")
			thead
				tr
					td(v-text="item.name" colspan=2)
			tbody
				tr(v-for="(item, index) in item.data ")
					td(v-text="item.part")
					td
						i.fa-check(v-if="item.status == 1")
						i.fa-close(v-if="item.status == 0")
</template>

<style lang='scss' scoped>
</style>

<script>
	export default {
		props: ['outPath'],
		data: function(){
			return {
				partName: [],
				suitInfo: []
			}
		},
		mounted: function(){
			var self = this;
			var url = (window.location.host == '' || !window.location.host.indexOf("localhost") || !window.location.host.indexOf("127.0.0.1") || !window.location.host.indexOf("192.168.")) ? 'src/assets/mock/magic.json' : 'dnfEpicStatistics/src/assets/mock/magic.json';
			self.$nextTick(function(){
				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					success: function(data){					
							self.partName = data.partName;
							self.suitInfo = data.suitInfo;	
					}
				})
			});
		}
	}
</script>