
var aparted = false;

$("#open").click(function () {

	if (!aparted) {
		let hecai = "<image src='images/hecai.png' />"
		let jizhi = "<image src='images/jizhi.png' />"
		let taiyang = "<image src='images/taiyang.png' />"
		let ye = "<image src='images/ye.png' />"
		let yukuai = "<image src='images/yukuai.png' />"
		let jiayou = "<image src='images/jiayou.png' />"
		let deyi = "<image src='images/deyi.png' />"
		let aixin = "<image src='images/aixin.png' />"
		var typed = new Typed('.letter', {
			//strings: ["^1000Dear&nbsp;&nbsp;Ming", 
			// "M^200ing<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜には^300いつも^200寒いよね、^600でも、^600手を^200繋いでいると、^600暖か^200くなるよ！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;どんなに^300寒い夜も、^600君と^300二人でいれば、^600ちっとも^300寒くない！<br><br><p style='float:right; display:block; width:80px;'>^1000H^200ao</p>"],
			strings: [
				`<p>致宝贝的一封信:</p>&nbsp;&nbsp;&nbsp;&nbsp;<p>恭喜宝贝结束三阶中级的课程，结业啦！！！${hecai}${hecai}${hecai}接下来三阶高级的课程历时3个月，会带领着宝贝继续深入学习围空知识，等到三阶高级结束，就会下一整盘的围空棋盘了哦~超厉害的呢！${jizhi}${taiyang}超重要的事儿：不一定之前基础差一点的宝贝后面就一定差哦，围棋学习过程中，每一个新知识点都是涵盖着旧知识点不断包裹延伸的，是不断的量变积累引发质变结果，每个宝贝破茧成蝶的时间不一样罢了~</p><p>进入新的阶段，那就要好好遵守咱们的班规哦~没有规矩不以成方圆，既然学了就得好好学，认真学，学个成果出来证明自己！${jiayou}</p><p>在这3个月里，我会根据我新制定的带班规划，主讲老师的指导棋和我开设的小灶课会覆盖到每个宝贝哦～${yukuai}咱们的小班课程相较之前的大班课，价格更高，但是上课形式发生了改变，班级人数也大大减少啦，接下来的课程难度也越来越大，咱们一周不止一次直播课的内容，还有这一周内所有的辅导服务，至少得让爸爸妈妈觉得物有所值呀，所以，宝贝下棋有什么疑问都可以找阿雁老师哦${ye}</p><p>加油呀！坚持一门兴趣不容易，将自己的兴趣爱好发展成一门特长更不容易，这期间肯定得付出精力和时间，阿雁老师相信你是最棒的！${deyi}期待宝贝破茧成蝶的那一天哦～</p><p>因为热爱，所以坚持！${aixin}</p>`
			],
			typeSpeed: 100,
			backSpeed: 50
		});

		$('#open').find("span").eq(0).css('background-position', "0 -150px");


		aparted = true;

		var music = document.getElementById('music2');
		if (music.paused) {
			music.play();
			$('#music_btn2').css("opacity", "1");
		}
	}

});

function playPause() {
	var music = document.getElementById('music2');
	var music_btn = $('#music_btn2');

	if (music.paused) {
		music.play();
		music_btn.css("opacity", "1");
	}
	else {
		music.pause();
		music_btn.css("opacity", "0.2");
	}
}


window.onload = function () {

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");
	// if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	$('#open').on('click', function () {
		let open = document.getElementById("top")
		open.setAttribute("style", "display:none")
	})

	$('#close').on('click', function () {
		let open = document.getElementById("top")
		open.setAttribute("style", "display:block")
	})

	document.addEventListener('touchstart', function (event) { if (event.touches.length > 1) event.preventDefault(); });

	var lastTouchEnd = 0;

	document.addEventListener('touchend', function (event) {

		var now = (new Date()).getTime();
		if (now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;

	}, false);

	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });


	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');

}
