window.onload = function () {

	var htmlShow = function (){
		if (document.getElementById('html-show').style.display === 'none'){
			if (document.getElementById('css-show').style.display !== 'none'){
				cssShow();
			}
			if (document.getElementById('js-show').style.display !== 'none'){
				jsShow();
			}
			if (document.getElementById('sql-show').style.display !== 'none'){
				sqlShow();
			}
			if (document.getElementById('git-show').style.display !== 'none'){
				gitShow();
			}
			if (document.getElementById('regex-show').style.display !== 'none'){
				regexShow();
			}
			document.getElementsByTagName('header')[0].style.backgroundColor = '#FFFF47';
			document.getElementById('html').style.backgroundColor = '#FFFF47';
			document.getElementById('html-show').style.display = 'block';
		}
		else{
			document.getElementsByTagName("header")[0].style.backgroundColor = '#8A8A8A';
			document.getElementById("html").style.backgroundColor ="#8A8A8A";
			document.getElementById('html-show').style.display = 'none';
		}
	};

	var cssShow = function (){
		if (document.getElementById('css-show').style.display === 'none'){
			if (document.getElementById('html-show').style.display !== 'none'){
				htmlShow();
			}
			if (document.getElementById('js-show').style.display !== 'none'){
				jsShow();
			}
			if (document.getElementById('sql-show').style.display !== 'none'){
				sqlShow();
			}
			if (document.getElementById('git-show').style.display !== 'none'){
				gitShow();
			}
			if (document.getElementById('regex-show').style.display !== 'none'){
				regexShow();
			}
			document.getElementsByTagName('header')[0].style.backgroundColor = '#FF4747';
			document.getElementById('css').style.backgroundColor = '#FF4747';
			document.getElementById('css-show').style.display = 'block';
		}
		else{
			document.getElementsByTagName("header")[0].style.backgroundColor = '#8A8A8A';
			document.getElementById("css").style.backgroundColor ="#8A8A8A";
			document.getElementById('css-show').style.display = 'none';
		}
	};
	var jsShow = function (){
		if (document.getElementById('js-show').style.display === 'none'){
			if (document.getElementById('html-show').style.display !== 'none'){
				htmlShow();
			}
			if (document.getElementById('css-show').style.display !== 'none'){
				cssShow();
			}
			if (document.getElementById('sql-show').style.display !== 'none'){
				sqlShow();
			}
			if (document.getElementById('git-show').style.display !== 'none'){
				gitShow();
			}
			if (document.getElementById('regex-show').style.display !== 'none'){
				regexShow();
			}
			document.getElementsByTagName('header')[0].style.backgroundColor = '#85FFFF';
			document.getElementById('js').style.backgroundColor = '#85FFFF';
			document.getElementById('js-show').style.display = 'block';
		}
		else{
			document.getElementsByTagName("header")[0].style.backgroundColor = '#8A8A8A';
			document.getElementById("js").style.backgroundColor ="#8A8A8A";
			document.getElementById('js-show').style.display = 'none';
		}
	};
	var sqlShow = function (){
		if (document.getElementById('sql-show').style.display === 'none'){
			if (document.getElementById('html-show').style.display !== 'none'){
				htmlShow();
			}
			if (document.getElementById('css-show').style.display !== 'none'){
				cssShow();
			}
			if (document.getElementById('js-show').style.display !== 'none'){
				jsShow();
			}
			if (document.getElementById('git-show').style.display !== 'none'){
				gitShow();
			}
			if (document.getElementById('regex-show').style.display !== 'none'){
				regexShow();
			}
			document.getElementsByTagName('header')[0].style.backgroundColor = '#A3FF47';
			document.getElementById('sql').style.backgroundColor = '#A3FF47';
			document.getElementById('sql-show').style.display = 'block';
		}
		else{
			document.getElementsByTagName("header")[0].style.backgroundColor = '#8A8A8A';
			document.getElementById("sql").style.backgroundColor ="#8A8A8A";
			document.getElementById('sql-show').style.display = 'none';
		}

	};
		var gitShow = function (){
		if (document.getElementById('git-show').style.display === 'none'){
			if (document.getElementById('html-show').style.display !== 'none'){
				htmlShow();
			}
			if (document.getElementById('css-show').style.display !== 'none'){
				cssShow();
			}
			if (document.getElementById('js-show').style.display !== 'none'){
				jsShow();
			}
			if (document.getElementById('sql-show').style.display !== 'none'){
				sqlShow();
			}
			if (document.getElementById('regex-show').style.display !== 'none'){
				regexShow();
			}
			document.getElementsByTagName('header')[0].style.backgroundColor = '#A347FF';
			document.getElementById('git').style.backgroundColor = '#A347FF';
			document.getElementById('git-show').style.display = 'block';
		}
		else{
			document.getElementsByTagName("header")[0].style.backgroundColor = '#8A8A8A';
			document.getElementById("git").style.backgroundColor ="#8A8A8A";
			document.getElementById('git-show').style.display = 'none';
		}
	};
	var regexShow = function (){
		if (document.getElementById('regex-show').style.display === 'none'){
			if (document.getElementById('html-show').style.display !== 'none'){
				htmlShow();
			}
			if (document.getElementById('css-show').style.display !== 'none'){
				cssShow();
			}
			if (document.getElementById('js-show').style.display !== 'none'){
				jsShow();
			}
			if (document.getElementById('sql-show').style.display !== 'none'){
				sqlShow();
			}
			if (document.getElementById('git-show').style.display !== 'none'){
				gitShow();
			}
			document.getElementsByTagName('header')[0].style.backgroundColor = '#FFA347';
			document.getElementById('regex').style.backgroundColor = '#FFA347';
			document.getElementById('regex-show').style.display = 'block';
		}
		else{
			document.getElementsByTagName("header")[0].style.backgroundColor = '#8A8A8A';
			document.getElementById("regex").style.backgroundColor ="#8A8A8A";
			document.getElementById('regex-show').style.display = 'none';
		}
	};
	document.getElementById('html').addEventListener('click', function(){htmlShow();});
	document.getElementById('css').addEventListener('click', function(){cssShow();});
	document.getElementById('js').addEventListener('click', function(){jsShow();});
	document.getElementById('sql').addEventListener('click', function(){sqlShow();});
	document.getElementById('git').addEventListener('click', function(){gitShow();});
	document.getElementById('regex').addEventListener('click', function(){regexShow();});

};