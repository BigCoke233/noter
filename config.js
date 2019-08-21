var _config = {
	//基础设置
    blog_name       : 'Eltrac\'s Note',       // 博客名称
	blog_des        : 'Alone',                // 博客简介
	nav_title       : 'Eltrac\'s Note',       // 导航栏上方的标题
	//GitHub Api
    owner           : 'BigCoke233',           // github 用户名
    repo         	: 'codePost',             // github 中对应项目名
    access_token : 'f2cee48b31bcff7c6a'+'a5fe0edb19a27bd13d76a0', // 请求量大时需要在 github 后台单独设置一个读取公开库的 token, 注意将token 拆成两个字符串，否则会被系统自动删除掉
	//Comment
    duoshuo_id      : null,                   // 在第三方评论插件多说申请站点的子域名
	//Reading
    per_page        : '6'                     // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};