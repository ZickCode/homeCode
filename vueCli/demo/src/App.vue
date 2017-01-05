<template>
	<div id="app">
		<table>
			<tr>
				<th>姓名</th>
				<th>年龄</th>
				<th>学校</th>
				<th>备注</th>
			</tr>
			<tr v-for="item in items">
				<td>{{item.name}}</td>
				<td>{{item.age}}</td>
				<td>{{item.school}}</td>
				<td>{{item.remark}}</td>
				<td>
					<a href="#" v-on:click="Edit(item)">编辑</a>
					<a href="#" v-on:click="Delete(item)">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="text" v-model="itemTemplate.name"></td>
				<td><input type="text" v-model="itemTemplate.age"></td>
				<td><input type="text" v-model="itemTemplate.school"></td>
				<td><input type="text" v-model="itemTemplate.remark"></td>
				<td><a href="#" v-on:click="Save()">保存</a></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			items: [
				{id: 1, name: 'MZ1', age: 20, school: '星光小学', remark: '备注'},
				{id: 2, name: 'MZ2', age: 21, school: '星光小学', remark: '备注'},
				{id: 3, name: 'MZ3', age: 22, school: '星光小学', remark: '备注'},
				{id: 4, name: 'MZ4', age: 23, school: '星光小学', remark: '备注'}
			],
			itemTemplate: {id: 0, name: '', age: '', school: '', remark: ''}
		}
	},
	methods: {
		Edit: function(item){
			this.itemTemplate = item;
		},
		Save: function(){
			//新增
			if(this.itemTemplate.id == 0){
				this.itemTemplate.id = this.items.length + 1;
				this.items.push(this.itemTemplate);
			}
			//置空输入框
			this.itemTemplate = {id: 0, name: '', age: '', school: '', remark: ''}
		},
		Delete: function(item){
			for(var i=0; i<this.items.length; i++){
				if(this.items[i].id == item.id){
					this.items.splice(i,1);
				}
			}
		}
	}
}
</script>

<style lang="less">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}

table{
	width: 1000px;
	margin: 0 auto;
	line-height: 30px;
	border: 1px solid #333;
	border-width: 0 1px 1px 0;
}
table td{
	text-align: center;
	border: 1px solid #333;
	border-width: 1px 0 0 1px;
}
</style>
