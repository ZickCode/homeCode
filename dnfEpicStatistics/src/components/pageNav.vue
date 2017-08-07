<template lang="jade">
	.nav
		.menu
			ul
				li(v-for="(item, index) in ProfessionalName" v-bind:class="{'am-active': index == 0}" @click="switchNav")
					router-link(v-text="item" v-if="index == 0" to='/components/magic')
					router-link(v-text="item" v-if="index == 1" to='/components/asura')		
					router-link(v-text="item" v-if="index == 2" to='/components/apocalypse')		
					router-link(v-text="item" v-if="index == 3" to='/components/nenMaster')		
					router-link(v-text="item" v-if="index == 4" to='/components/weaponMaster')		
		i.icon-menu(@click = 'switchIcon')
</template>

<style lang='scss' scoped>
	@keyframes rotate180{
		from, 0%{
			transform: rotate(0deg);
			background-image: url('../assets/images/menu.png');
		}
		100%{
			transform: rotate(180deg);
			background-image: url('../assets/images/close.png');
		}
	}
	@keyframes rotate-180{
		from, 0%{
			transform: rotate(180deg);
			background-image: url('../assets/images/close.png');
		}
		100%{
			transform: rotate(0deg);
			background-image: url('../assets/images/menu.png');
		}
	}
	i{
		cursor: pointer;
		position: fixed;
		right: .3rem;
		bottom: .3rem;
		display: block;
		width: 1rem;
		height: 1rem;
		background-position: 0 0;
		background-size: 100% 100%;
		&.icon-menu{
			background-image: url('../assets/images/menu.png');
		}
		&.icon-close{
			background-image: url('../assets/images/close.png');
		}
		&.rotate{
			animation: rotate180 .5s ease-in-out;
		}
		&.rotate-back{
			animation: rotate-180 .5s ease-in-out;
		}
	}
	.menu{
		display: none;
		position: fixed;
		right: 1.3rem;
		bottom: 1.3rem;
		width: 5rem;
		background: rgba(45,46,40,.8);
		font-size: .6rem;
		color: #fff;		
		ul{
			padding: 0;
			margin: 0;
			list-style: none;
			li{
				a{
					display: block;
					line-height: 2.5;
					color: inherit;
					text-align: center;
					border-bottom: 3px solid #fff;
				}
			}
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
			switchIcon: function(event){
				var flag = $(event.target).attr('class');
				if(flag == 'icon-menu'){
					$(event.target).addClass('rotate').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(event.target).removeClass().addClass('icon-close');
					});
					$('.menu').fadeIn();
				}else{
					$(event.target).addClass('rotate-back').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(event.target).removeClass().addClass('icon-menu');
					});
					$('.menu').fadeOut();
				}				
			},
			switchNav: function(event){
				$('.icon-close').addClass('rotate-back').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$('.icon-close').removeClass().addClass('icon-menu');
				});
				$('.menu').fadeOut();
			}
		},
		mounted: function(){
			var self = this;
			var url = (window.location.host == '' || !window.location.host.indexOf("localhost") || !window.location.host.indexOf("127.0.0.1") || !window.location.host.indexOf("192.168.")) ? 'src/assets/mock/pageNav.json' : 'dnfEpicStatistics/src/assets/mock/pageNav.json';
			self.$nextTick(function(){
				$.ajax({
					url: url,
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