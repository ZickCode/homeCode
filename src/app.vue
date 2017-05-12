<template lang="jade">
	.container
		page-nav
		magic
		asura
		apocalypse
		nen-master
		weapon-master
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
					td:first-child{
						width: 300px;
					}
				}
			}
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