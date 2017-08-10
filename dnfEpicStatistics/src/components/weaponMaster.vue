<template lang="jade">
.switch-box.weaponMaster
	h1 剑神
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
		data: function(){
			return {
				partName: [],
				suitInfo: []
			}
		},
		mounted: function(){
			var self = this;
      		var url = (window.location.host == '' || !window.location.host.indexOf("localhost") || !window.location.host.indexOf("127.0.0.1") || !window.location.host.indexOf("192.168.")) ? 'src/assets/mock/weaponMaster.json' : 'dnfEpicStatistics/src/assets/mock/weaponMaster.json';
			self.$nextTick(function(){
				this.$http.get(url).then(function(response){
					var data = response.data;
					self.partName = data.partName;
				 	self.suitInfo = data.suitInfo;	
				});
			});
		}
	}
</script>