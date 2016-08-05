<template lang='jade'>
	pub-header
	pub-footer
</template>

<style type="text/css">
	.footer{
		margin-top: 10px;
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			'pub-header': require('../components/_header.vue'),
			'pub-footer': require('../components/_footer.vue')
		}
	};
</script>	