<template lang="jade">
  ul.am-nav.am-nav-tabs.am-nav-justify
    li(v-for="(item, index) in ProfessionalName" v-bind:class="{'am-active': index == 0}" @click="switchNav")
      a(v-text="item")
</template>

<style lang='scss' scoped>
	.am-nav{
		li{
			cursor: pointer;
		}
	}
</style>

<script>
	export default {
		data: function(){
			return {
				ProfessionalName: []
			}
		},
		methods: {
			switchNav: function(event){
				var _index = $(event.target).parent().index();
				$(event.target).parent().addClass('am-active').siblings('li').removeClass('am-active');
				$('.switch-box').eq(_index).css('display','block').siblings('.switch-box').hide();
			}
		},
		mounted: function(){
			var self = this;
			self.$nextTick(function(){
				$.ajax({
					url: 'src/assets/pageNav.json',
					type: 'get',
					dataType: 'json',
					success: function(data){					
							self.ProfessionalName = data.ProfessionalName;
					}
				})
			});
		}
	}
</script>