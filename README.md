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
webpack.config.js文件用的是commonjs的语法。module.exports = {}

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

###entry###
entry有3种形式
1.字符串  单个入口文件
2.数组    两个平行的不相干的文件， 它们会被打包为一个文件
3.对象    {key: string} 它们会被分别打包，这时候就需要多个输出文件，使用场景是开发多页面的时候会用到

###output###
output是指定输出文件的位置，名称。 输出文件是自动生成的。
**path**需要绝对路径，我们可以引用node的path模块来解决
const path = require('path'); 

` output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
`

**filename**
filename指定输出js的文件名。这里可以带上路径。
1.filename可以是一个普通的字符串
2.当entry是多个的时候，我们需要生成多个output文件，那么每个文件都应该有一个唯一的名字
可以是：
*filename: "[name].bundle.js"
最后输出的文件名的name是entry的入口函数名字

*filename: "[id].bundle.js"
最后输出的文件名的name是entry文件打包的chunk id.

*filename: "[name].[hash].bundle.js"
最后输出的js文件名称是，每一个entry文件的入口函数名.打包模块的hash序号

*filename: "[chunkhash].bundle.js"
最后输出的js文件名称是，每一个entry文件的chunkhash值。
chunkhush 可以认为是文件的版本号，或者md5值。 如果文件改动过那么打包的时候这个chunkhush值就会改变。 这样子，我们实际上线的时候就只会改动我们修改过的文件。 这个值对文件的版本号控制。  


**output.publicPath**
静态资源上线地址配置 
它必须以'/'结束。比如
`
  publicPath: "https://cdn.example.com/assets/

`
配置了publicPath，静态资源文件的路径都会带上publicPath的前缀。 

`
  publicPath: "https://cdn.example.com/assets/", // CDN (always HTTPS)
  publicPath: "//cdn.example.com/assets/", // CDN (same protocol)
  publicPath: "/assets/", // server-relative
  publicPath: "assets/", // relative to HTML page
  publicPath: "../assets/", // relative to HTML page
  publicPath: "", // relative to HTML page (same directory)

`

##插件##
第一步npm install 安装插件
第二步 require插件
第三步 配置plugins参数。




##loaders##
module.loaders 它告知 webpack 每一种文件都需要使用什么加载器来处理。通过使用不同的loader,webpack通过调用外部的脚本或者工具可以对各种各样格式的文件进行处理。

`
  module: {
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),  //排除范围，不打包这个目录
        include: path.resolve(__dirname, 'src') //只解析指定的目录，可以提高打包的速度
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'    //loader的处理顺序是从右至左，先处理css-loader,然后再处理style-loader
         //?get方式，代表在css-loader之后，指定几个数量的loader来处理import进来的css， ？css-loader的参数  这里只有postcss-loader所以==1 
         //也可以使用数组的形式
      }
    ]
  }
`
loader需要npm 安装。
loaders的书写方式，test里面包含一个正则，包含需要匹配的文件，loaders是一个数组也可以是一串字符串，包含要处理这些程序的loaders，这里我们用了css和style，
注意loaders的处理顺序是从右到左的，这里就是先运行postcss-loader, css-loader然后是style-loader. 当我们用到@import的时候就需要importLoaders

###css###
webpack提供两个工具处理样式表。css-loader和style-loader.
css-loader使得我们在js文件中以import, require等方式导入的css文件得以解析。
style-loader将css-loader处理过的文件以style的方式插入到html文件中去。






https://github.com/wangning0/Autumn_Ning_Blog/blob/master/blogs/3-12/webpack.md
http://mlxiao.com/2017/02/08/webpack/#配置production环境
https://github.com/slashhuang/blog/issues/1
http://www.jianshu.com/p/42e11515c10f#
https://zhuanlan.zhihu.com/p/20367175
https://segmentfault.com/a/1190000006740936
http://www.w2bc.com/Article/50764






