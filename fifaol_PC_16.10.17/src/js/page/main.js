$(function(){
	//弹窗内容：队员头像、战队、ID(顺序从左至右，从上至下)
	var teamArr = [
		[
			['assets/images/teamMember/DFB/1.jpg','DFB','DFB.Naonao'],
			['assets/images/teamMember/DFB/2.jpg','DFB','DFB.Cazorla'],
			['assets/images/teamMember/DFB/3.jpg','DFB','DFB777'],
			['assets/images/teamMember/DFB/4.jpg','DFB','DFB.SET'],
			['assets/images/teamMember/DFB/5.jpg','DFB','DFB.Joker']
		],
		[
			['assets/images/teamMember/MRT/1.jpg','MRT','MRT.Majesty'],
			['assets/images/teamMember/MRT/2.jpg','MRT','MRT.Satan'],
			['assets/images/teamMember/MRT/3.jpg','MRT','MRT.huomao.Joe'],
			['assets/images/teamMember/MRT/4.jpg','MRT','MRT.huomaoXueDing'],
			['assets/images/teamMember/MRT/5.jpg','MRT','MRT.huomao.LinShao']
		],
		[
			['assets/images/teamMember/Newbee/1.jpg','Newbee','Newbee.Wel'],
			['assets/images/teamMember/Newbee/2.jpg','Newbee','Newbee.R10'],
			['assets/images/teamMember/Newbee/3.jpg','Newbee','Newbee.MXQ'],
			['assets/images/teamMember/Newbee/4.jpg','Newbee','Newbee.LOT29'],
			['assets/images/teamMember/Newbee/5.jpg','Newbee','Newbee.Rosicky']
		],
		[
			['assets/images/teamMember/PandaTV/1.jpg','PandaTV','Panda TV.BroZZ'],
			['assets/images/teamMember/PandaTV/2.jpg','PandaTV','Panda TV.Dushe'],
			['assets/images/teamMember/PandaTV/3.jpg','PandaTV','Panda TV.1ock'],
			['assets/images/teamMember/PandaTV/4.jpg','PandaTV','Panda TV.Jiaju']
		],
		[
			['assets/images/teamMember/Ronly/1.jpg','Ronly','Ronly.8023'],
			['assets/images/teamMember/Ronly/2.jpg','Ronly','Ronly.Bianbian'],
			['assets/images/teamMember/Ronly/3.jpg','Ronly','Ronly.9527man'],
			['assets/images/teamMember/Ronly/4.jpg','Ronly','Ronly.HHL']
		],
		[
			['assets/images/teamMember/Snake/1.jpg','Snake','SS.CS'],
			['assets/images/teamMember/Snake/2.jpg','Snake','SS.CaiDao'],
			['assets/images/teamMember/Snake/3.jpg','Snake','SS.Mendieta'],
			['assets/images/teamMember/Snake/4.jpg','Snake','SS.Xiaobei']
		],
		[
			['assets/images/teamMember/TMT/1.jpg','TMT','TMT.LongZhuFeng'],
			['assets/images/teamMember/TMT/2.jpg','TMT','TMT.LongZhuChezs'],
			['assets/images/teamMember/TMT/3.jpg','TMT','TMT.LongZhuTangS'],
			['assets/images/teamMember/TMT/4.jpg','TMT','TMT.LongZhuMerida']
		],
		[
			['assets/images/teamMember/TS/1.jpg','TS','666.xiaokaka'],
			['assets/images/teamMember/TS/2.jpg','TS','666.dakaka'],
			['assets/images/teamMember/TS/3.jpg','TS','666.jianLiBao'],
			['assets/images/teamMember/TS/4.jpg','TS','666.V'],
			['assets/images/teamMember/TS/5.jpg','TS','666.guakenan']
		],
		[
			['assets/images/teamMember/Typhoon/1.jpg','Typhoon','Typhoon.Joe'],
			['assets/images/teamMember/Typhoon/2.jpg','Typhoon','Typhoon.Lee'],
			['assets/images/teamMember/Typhoon/3.jpg','Typhoon','Typhoon.Lihaohao'],
			['assets/images/teamMember/Typhoon/4.jpg','Typhoon','Typhoon.Dragon'],
			['assets/images/teamMember/Typhoon/5.jpg','Typhoon','Typhoon.Da']
		],
		[
			['assets/images/teamMember/Undne/1.jpg','Undne','UNDNE.BBBBBB'],
			['assets/images/teamMember/Undne/2.jpg','Undne','UNDNE.xiaokucha'],
			['assets/images/teamMember/Undne/3.jpg','Undne','UNDNE.Join21'],
			['assets/images/teamMember/Undne/4.jpg','Undne','UNDNE.sashao'],
			['assets/images/teamMember/Undne/5.jpg','Undne','UNDNE.Edison']
		],
		[
			['assets/images/teamMember/VG/1.jpg','VG','VG.Zlatan'],
			['assets/images/teamMember/VG/2.jpg','VG','VG.Jayson'],
			['assets/images/teamMember/VG/3.jpg','VG','VG.18CM'],
			['assets/images/teamMember/VG/4.jpg','VG','VG.Baigui'],
			['assets/images/teamMember/VG/5.jpg','VG','VG.Zola']
		],
		[
			['assets/images/teamMember/WE/1.jpg','WE','WE.YuWen'],
			['assets/images/teamMember/WE/2.jpg','WE','WE.Mgyq'],
			['assets/images/teamMember/WE/3.jpg','WE','WE.Emperor'],
			['assets/images/teamMember/WE/4.jpg','WE','WE.Torres']
		]
	];
	var pageIndex = {
		init: function(){
			var self = this;
			self.render();
			self.binEvent()
			self.swiperInit();			
		},
		render: function(){},
		binEvent: function(){	
			//常规赛季后赛切换
			$('.match-box-tab a').on('click', function(){
				$(this).addClass('on').siblings().removeClass('on');
				if($(this).hasClass('regular')){
					$('.match-box-regular').show().siblings('.match-box-season').hide();
				}else{
					$('.match-box-season').show().siblings('.match-box-regular').hide();
				}
			});
			//点击赛程积分切换
			$('.match-box-regular-tab a').on('click', function(){
				$(this).addClass('on').siblings().removeClass('on');
				if($(this).index() == 0){
					$('.match-box-regular-schedule').show().siblings('.match-box-regular-score').hide();
				}else{
					$('.match-box-regular-score').show().siblings('.match-box-regular-schedule').hide();
				}
			});		
			//点击战队出现弹窗
			$('.welfare-send-box ul li.teamLi').on('click', function(){
				$('.enter-info').hide();
				$('.J-user-num').val('');
				var index;
				if($(this).index() < 5){
					index = $(this).index();
				}else if($(this).index() == 7){
					index = 5;
				}else if($(this).index() == 8){
					index = 6;
				}else if($(this).index() > 8){
					index = $(this).index() - 4;
				}
				var alertDom = $('.welfare-send-alert');
				var ulDom = '';
				for(var i in teamArr[index]){
					ulDom +='<li>'
							+	'<img src="'+ teamArr[index][i][0] +'" alt="">'
							+	'<p><span>战队：</span>'+ teamArr[index][i][1] +'</p>'
							+	'<p><span>I D ：</span>'+ teamArr[index][i][2] +'</p>'
							+'</li>'
				}
				ulDom = ulDom + '<li class="vote-td"><i></i><p>支持你喜欢的战队！</p><p>就有机会获得<span>游戏礼包及Q币</span>哦！</p></li>';
				alertDom.find('i').attr('data-flag',index);
				alertDom.find('ul').html(ulDom);
				alertDom.show();
			});
			$('.welfare-send-box ul li').eq(0).trigger('click');
			//关闭战队弹窗
			$('.welfare-send-alert-close').on('click', function(){
				$('.welfare-send-alert').hide();
			});
			//点击支持按钮
			$(document).on('click','.vote-td', function(){
				$('.enter-info').show();
			});
			//提交QQ号
			$('.J-submit').on('click', function(){	
				var id = $('.team-flag').attr('data-flag');
				var contact = $.trim($('.J-user-num').val());
				if(contact.length != 0){
					$.ajax({
						url: 'http://hdsupport.178.com/api/index?aid=33&cid=1&s=vote',
						type: 'get',
						dataType: 'jsonp',
						data: {
							tid: id+1,
							contact: contact,
							desc: '投票'
						},
						success: function(data){
							if(data.code == 0){
								alert('投票成功！');
								$('.enter-info').hide();
								$('.J-user-num').val('');
							}else if(data.code == 201700){
								alert('投票次数已经用完啦！');
								$('.enter-info').hide();
								$('.J-user-num').val('');
							}else if(data.code == 201703){
								alert('亲，手速太快啦，歇会再来投票吧！');
								$('.enter-info').hide();
								$('.J-user-num').val('');
							}else{
								alert('服务器开小差啦，歇会再来投票吧！');
								$('.enter-info').hide();
								$('.J-user-num').val('');
							}
						}
					});
				}else{
					alert('请填写您的QQ号！');
				}		
			});
			//关闭QQ弹窗
			$('.enter-info-close').on('click', function(){
				$('.enter-info').hide();
			});
			//赛程图hover效果
			$('.match-season-list-box-top').hover(function(){
				var line = $(this).parent().find('.line-box');
				var team = $(this).find('.team').text();
				var allName = $('.match-season-list-box-top');
				for(var i=0;i<allName.length;i++){
					if($(allName[i]).find('.team').text() == team){
						//console.log($(allName[i]).index())
						if($(allName[i]).index() == 0){
							$(allName[i]).parent().find('.line-box').addClass('top').siblings('.line-box').removeClass('bottom');
						}else{							
							$(allName[i]).parent().find('.line-box').addClass('bottom').siblings('.line-box').removeClass('top');
						}
					}
				}
			},function(){
				$('.line-box').removeClass('top').removeClass('bottom');
			});
		},
		swiperInit: function(){
			$(".J-top-info-left").slide({ 
				titCell: '.hd li',
				mainCell: ".bd ul",
				effect: 'fade',
				triggerTime: 0
			});
		}
	}

	pageIndex.init();
});