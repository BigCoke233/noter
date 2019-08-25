/**
 *  Default
 *  写作程序 Noter 的默认主题
 *
 *  #Author:  Eltrac
 *  #License: MIT
 */
 
/**
 *  Content
 *  内容
 */
/* 头部输出 js */
var theme_header_js = '<script src="https://cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/js/mdui.min.js" integrity="sha256-czQNy3ygtVNeyJKT2CrwVzzDBa9VfksAad4F6y2oad4=" crossorigin="anonymous"></script>';

/* 头部输出 css */
var theme_header_css = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/css/mdui.min.css" integrity="sha256-6qmBnKuMpat5q87DddBqPCow5gfT/seDX7MMCqcF23g=" crossorigin="anonymous" /><link rel="stylesheet" href="themes/default/css/style.css"><link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:300&display=swap" rel="stylesheet">';

/* 页眉 */
var header_content = '<div class="mdui-toolbar mdui-color-theme nav"><a href="javascript:;" onclick="mdui.snackbar(\'我只是占位的 _(:з」∠)_...\')" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a><span class="mdui-typo-title"><a href="#/" class="nav-title" style="color:#000;text-decoration:none;">Noter</a></span><div class="mdui-toolbar-spacer"></div><a href="javascript:;" onclick="location.reload();" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a></div><div class="banner"><div class="banner-mask banner-content"><h1 class="banner-title">Noter</h1><p class="banner-des">To be a noter.</p></div></div>';

/* 文章列表 */
var listTpl_content = '{{#posts}}<div class="mdui-col-sm-6"><div class="mdui-card post-item mdui-hoverable"><div class="mdui-card-content"><div class="mdui-card-primary post-title"><div class="mdui-card-primary-title"><a href="#post/{{number}}">{{title}}</a></div><div class="mdui-card-primary-subtitle"><a href="{{user.html_url}}">{{user.login}}</a> | <span class="datetime">{{formatTime(created_at)}}</span></div></div><div class="mdui-card-content post-excerpt">{{{markdown2HTML(body)}}}</div><div class="mdui-card-actions"><a href="#post/{{number}}" class="mdui-float-right mdui-btn mdui-ripple">开始阅读</a></div></div></div></div>{{/posts}}{{#prev}}<a href="#p{{page-1}}" class="prev">上一页</a>{{/prev}}{{#next}}<a href="#p{{page+1}}" class="next">下一页</a>{{/next}}';

/* 文章内容 */
var detailTpl_content = '{{#post}}<title>{{title}}</title><main class="mdui-container"><div class="mdui-card post-body"><div class="mdui-card-content"><div class="mdui-typo post-content"><h1 class="post-heading">{{title}}</h1><span class="create_at"><a href="{{user.html_url}}">{{user.login}}</a> 发表于 {{formatTime(created_at)}}</span><div class="mdui-divider"></div><div class="content">{{{markdown2HTML(body)}}}</div></div></div></div></main>{{/post}}';

/* 页脚 */
var footer_info = '<p class="mdui-typo">&copy; 2019 <span class="footer-name">Eltrac\'s Note</span> | Under <a href="https://creativecommons.org/licenses/by/4.0/deed.zh">CC BY 4.0</a> License<br>Powered by <a href="https://github.com/BigCoke233/noter">Noter</a> made by <a href="https://guhub.cn">Eltrac</a></a></p>';

/* 加载动画 */
var loading_animation = '<center class="center"><div class="loader"><div class="outer"></div><div class="middle"></div><div class="inner"></div></center>';

/* Body Class */
var body_class = 'mdui-theme-accent-indigo';

/**
 *  Functions
 *  函数
 */
/* 加载完成后 */
var afterLoading = function() {
	//页面加载完成后（包括文章页面）
};
var afterPost = function() {
	//仅文章加载完毕后
}
var beforePost = function() {
	//文章加载完毕前
	//返回顶部
	$('body,html').animate({scrollTop:0},500);
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/* 加载设置 */
var loadOptions = function() {
	$('.banner-title').text(_config['blog_name']);
	$('.banner-des').text(_config['blog_des']);
	$('.footer-name').text(_config['blog_name']);
	$('.nav-title').text(theme_config['nav_title']);
}

/**
 *  Script
 *  脚本
 */
//Grid
$("#container").addClass("mdui-container");
$("#container-inner").addClass("mdui-row");
$("#comment").addClass("container");
 
/**
 *  Include
 *  嵌套
 */
//输出 js
$("#header-js").prepend(theme_header_js);
//输出 css
$("#header-css").append(theme_header_css);
//页眉
$("#header-content").html(header_content);
//嵌套文章列表
$("#listTpl").html(listTpl_content);
//嵌套文章内容
$("#detailTpl").html(detailTpl_content);
//页脚
$("#footer-info").html(footer_info);
//加载动画
$("#loader").html(loading_animation);
//body class
$("body").addClass(body_class);