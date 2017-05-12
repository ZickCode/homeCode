<template lang="jade">
  .switch-box.nenMaster
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
</template>

<style lang='scss' scoped>
</style>

<script>
	export default {
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
      var url = (window.location.host == '' || !window.location.host.indexOf("localhost") || !window.location.host.indexOf("127.0.0.1") || !window.location.host.indexOf("192.168.")) ? 'src/assets/weaponMaster.json' : 'dnfEpicStatistics/src/assets/weaponMaster.json';
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