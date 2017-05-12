<template lang="jade">
	.switch-box.magic
		h2 异界套装
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered
			thead
				tr
					td 
					td(v-for="item in partName" v-text="item")
			tbody
				tr(v-for="(item, index) in suitInfo.outsider")
					td(v-text="item.name")
					td
						i.fa-check(v-if="item.shoulder == 1")
						i.fa-close(v-if="item.shoulder == 0")
					td
						i.fa-check(v-if="item.jacket == 1")
						i.fa-close(v-if="item.jacket == 0")
					td
						i.fa-check(v-if="item.pants == 1")
						i.fa-close(v-if="item.pants == 0")
					td
						i.fa-check(v-if="item.belt == 1")
						i.fa-close(v-if="item.belt == 0")
					td
						i.fa-check(v-if="item.shoes == 1")
						i.fa-close(v-if="item.shoes == 0")
					td
						i.fa-check(v-if="item.bracelet == 1")
						i.fa-close(v-if="item.bracelet == 0")
					td
						i.fa-check(v-if="item.necklace == 1")
						i.fa-close(v-if="item.necklace == 0")
					td
						i.fa-check(v-if="item.ring == 1")
						i.fa-close(v-if="item.ring == 0")
					td
						i.fa-check(v-if="item.leftDiamonds == 1")
						i.fa-close(v-if="item.leftDiamonds == 0")
					td
						i.fa-check(v-if="item.rightDiamonds == 1")
						i.fa-close(v-if="item.rightDiamonds == 0")
					td
						i.fa-check(v-if="item.weapons == 1")
						i.fa-close(v-if="item.weapons == 0")
		h2 史诗防具
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered
			thead
				tr
					td 
					td(v-for="(item, index) in partName" v-if="index < 5" v-text="item")
			tbody
				tr(v-for="item in suitInfo.epicArmor" v-bind:class="{'am-success': item.num == 5, 'am-danger': item.num == 0}")
					td(v-text="item.name")
					td
						i.fa-check(v-if="item.shoulder == 1")
						i.fa-close(v-if="item.shoulder == 0")
					td
						i.fa-check(v-if="item.jacket == 1")
						i.fa-close(v-if="item.jacket == 0")
					td
						i.fa-check(v-if="item.pants == 1")
						i.fa-close(v-if="item.pants == 0")
					td
						i.fa-check(v-if="item.belt == 1")
						i.fa-close(v-if="item.belt == 0")
					td
						i.fa-check(v-if="item.shoes == 1")
						i.fa-close(v-if="item.shoes == 0")
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
		h2 史诗首饰
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered
				thead
					tr
						td 
						td(v-for="(item, index) in partName" v-if="index > 4 && index < 8" v-text="item")
				tbody
					tr(v-for="item in suitInfo.epicJewelry" v-bind:class="{'am-success': item.num == 3, 'am-danger': item.num == 0}")
						td(v-text="item.name")
						td
							i.fa-check(v-if="item.bracelet == 1")
							i.fa-close(v-if="item.bracelet == 0")
						td
							i.fa-check(v-if="item.necklace == 1")
							i.fa-close(v-if="item.necklace == 0")
						td
							i.fa-check(v-if="item.ring == 1")
							i.fa-close(v-if="item.ring == 0")
</template>

<style lang='scss' scoped>
	.am-nav{
		li{
			cursor: pointer;
		}
	}
	.epicArmorParts{
		width: 50%;
	}
</style>

<script>
	export default {
		props: ['outPath'],
		data: function(){
			return {
				partName: [],
				suitInfo: [
					{
						name: '-',
						shoulder: 0,
						jacket: 0,
						pants: 0,
						belt: 0,
						shoes: 0,
						bracelet: 0,
						necklace: 0,
						ring: 0,
						leftDiamonds: 0,
						rightDiamonds: 0,
						weapons: 0
					}
				]
			}
		},
		mounted: function(){
			var self = this;
			var url = (window.location.host == '' || !window.location.host.indexOf("localhost") || !window.location.host.indexOf("127.0.0.1") || !window.location.host.indexOf("192.168.")) ? 'src/assets/magic.json' : 'dnfEpicStatistics/src/assets/magic.json';
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