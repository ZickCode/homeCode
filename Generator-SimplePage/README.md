/*
* yangchaoben
* 2016-7-7 03:33:37
* 更改目录结构详见 ##### 目录结构
* 2016-7-7 02:31:05
* 更新src/js/page下的js不合并，需手动引入
*/


# Generator-SimplePage

SimplePage 脚手架。

### 安装软件

- Node.js：v5.0+
- yoman


### 拷贝项目模板

``` bash
$ git clone http://zhujiang@10.238.253.8:10100/r/Generator-SimplePage.git
```


### 安装依赖模块

``` bash
$ npm install
```

### 链接项目

$ npm link

###开始项目
在新项目文件下运行yo
选择 Simple Page
根据提示输入作者姓名，邮箱等


### 本地开发环境

- 启动

    ``` bash
    $ npm run dev
    ```
    完成后打开浏览器输入http://localhost:8000/或http://127.0.0.1:8000/即可

### 业务开发

##### 目录结构

``` js
.
├── gulpfile.js                    # gulp任务配置 
├── package.json                   # 项目配置
├── README.md                      # 项目说明
├──	.gitignore                     # 忽略提交文件
├── node_modules                   # node依赖文件
└── src                            # 源码目录
    ├── index.html                 # 页面入口
    ├── css/                       # css资源
 	│	├── plugin.**.css          # 插件样式
    │   ├── page.**.css            # 页面样式
    │   └── **.css                 # 其他样式
    ├── images/                    # 图片资源
 	│	├── plugin.xxx.png         # 插件图
    │   ├── sprit.png         	   # 雪碧图
    │   └── **.**  				   # 其他图
    ├── js                         # js资源
    │   ├── vender/                # 如jQuery、Zepto、React等
    │   ├── pages/                 # 页面逻辑
    │   └── plugins/               # 第三方插件
    └── less/                      # less资源
		 ├── plugin.**.less        # 插件样式
         ├── page.**.less          # 页面样式
         └── **.less               # 其他样式
```

### 编译

``` bash
$ npm run build
```

### 命令说明

``` bash
$ gulp help
```