<template name="magic" lang="jade">
	.magic
		ul.am-nav.am-nav-tabs.am-nav-justify
			li(v-for="item in ProfessionalName" @click="switchNav")
				a(v-text="item")
		h2 异界套装
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered
			thead
				tr
					td 
					td(v-for="item in partName" v-text="item")
			tbody
				tr(v-for="item in suitInfo.outsider")
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
				tr(v-for="item in suitInfo.epicArmor" v-bind:class="{'am-success': (item.shoulder == 1 && item.jacket == 1 && item.pants == 1 && item.belt == 1 && item.shoes == 1)}")
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
		h2 史诗首饰
		table.am-table.am-table-bordered.am-table-radius.am-table-striped.am-table-hover.am-table-centered
			thead
				tr
					td 
					td(v-for="(item, index) in partName" v-if="index > 4 && index < 8" v-text="item")
			tbody
				tr(v-for="item in suitInfo.epicJewelry" v-bind:class="{'am-success': (item.bracelet == 1 && item.necklace == 1 && item.ring == 1)}")
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

<style lang='scss' scope>
	.am-nav{
		li{
			cursor: pointer;
		}
	}
</style>

<script>
	export default {
		name: 'magic',
		data: function(){
			return {
				ProfessionalName: [],
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
		methods: {
			switchNav: function(event){
				$(event.target).parent().addClass('am-active').siblings('li').removeClass('am-active');
			}
		},
		mounted: function(){
			var self = this;
			self.$nextTick(function(){
				$.ajax({
					url: 'src/assets/magic.json',
					type: 'get',
					dataType: 'json',
					success: function(data){					
							self.ProfessionalName = data.ProfessionalName;
							self.partName = data.partName;
							self.suitInfo = data.suitInfo;	
					}
				})
			});
		}
	}
</script>