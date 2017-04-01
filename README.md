# webpack_learn
##webpack是什么##
webpack是一个模块打包器。一个模块加载工具，任何资源包括js,css,图片都成独立的模块来处理。
Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件。

##webpack的优势##
* 代码分割
* loaders
* 丰富的插件
* 支持多种模块化加载机制。webpack使用的是CommonJs的规范，同时也支持AMD/CMD,以及es6模块化加载
	require('./world.js')  CommonJs的方式


##webpack的安装##

###安装命令###
npm install webpack --save-dev 

###使用webpack###
npm init # 会自动生成一个package.json文件
npm install webpack --save-dev  #讲webpack的依赖写进package.json文件中

##WebPack的配置 webpack.config.js##
建立webpack.config.js文件的原因是，我们直接运行webpack命令不指定任何参数时，webpack会去项目的根目录寻找webpack.config.js文件作为默认的配置去运行。
也可以通过 --config命令指定别的文件为webpack的配置文件
`
	module.exports = {
    	entry: './src/app.js',  //打包的入口文件
    	output: {
        	path: './dist',  //输出文件的目录
        	filename: 'app.bundle.js' //生成的打包文件的文件名，这个文件是自动生成的
     	}
 	};
`
有了这个配置之后，只需要运行webpack就可以了。
`
	webpack
`
###可以配合npm 的package.json文件配置webpack的命令参数###
在package.json文件的script中配置
`
	"scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1",
    	"webpack": "webpack --config webpack.config.js --progress --display-modules --colors --display-reasons"
  	}

`
指定webpack的配置文件为webpack.config.js
这样我们只需要运行
`
	npm run webpack
`
就可以启动webpack

http://www.w2bc.com/Article/50764
https://github.com/wangning0/Autumn_Ning_Blog/blob/master/blogs/3-12/webpack.md
http://mlxiao.com/2017/02/08/webpack/#配置production环境
https://github.com/slashhuang/blog/issues/1
http://www.jianshu.com/p/42e11515c10f#
https://zhuanlan.zhihu.com/p/20367175
https://segmentfault.com/a/1190000006740936
http://www.w2bc.com/Article/50764






