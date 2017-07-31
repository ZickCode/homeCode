<template lang="jade">
	.container
		page-nav
		router-view
</template>

<style lang="scss">
	.container{
		.switch-box{
			display: none;
			&:nth-child(2){
				display: block;
			}
			table.am-table{
				table-layout: fixed;
				tr{
					td{
						padding: 0;
						font-size: .4rem;
					}
				}
			}
		}		
		h1{
			font-size: .7rem;
			margin: .3rem 0;
			text-align: center;
		}
		h2{
			font-size: .5rem;
			margin: .3rem 0;
			text-align: center;
		}
		i{
			&.fa-check{
				color: #5eb95e;
			}
			&.fa-close{
				color: #dd514c;
			}
		}
		.am-table{
			margin-bottom: .6rem;
		}
	}
</style>

<script>
	import pageNav from './components/pageNav.vue';
	import magic from './components/magic.vue';
	import asura from './components/asura.vue';
	import apocalypse from './components/apocalypse.vue';
	import nenMaster from './components/nenMaster.vue';
	import weaponMaster from './components/weaponMaster.vue';

	export default {
		data () {
			return {}
		},
		components:{
			pageNav,
			magic,
			asura,
			apocalypse,
			nenMaster,
			weaponMaster
		}
	}
</script>