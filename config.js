var _config = {
	//基础设置
    blog_name       : 'Eltrac\'s Note',       // 博客名称
	blog_des        : '写代码是热爱，写到世界充满爱',// 博客简介
	//GitHub Api
    owner           : 'BigCoke233',           // github 用户名
    repo         	: 'codePost',             // github 中对应项目名
    access_token    : 'f2cee48b31bcff7c6a'+'a5fe0edb19a27bd13d76a0', // 请求量大时需要在 github 后台单独设置一个读取公开库的 token, 注意将token 拆成两个字符串，否则会被系统自动删除掉
	//Reading
    per_page        : '6',                    // 默认一页显示几篇文章
	//theme
	theme           : 'default',              // 选择主题
	//gitalk 评论
	gitalk_repo     : 'codeComment',          // 储存 Gitalk 评论的仓库(不能和 repo 是同一个
	clientID: 'a1129fae5ba725d51123',
    clientSecret: 'b51ada35f57420425f814ba216ed727f68e36029'
}