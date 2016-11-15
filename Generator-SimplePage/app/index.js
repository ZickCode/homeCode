'use strict';
var util = require('util');
var path = require('path');
var generator = require('abc-generator');
var fs = require('fs');

module.exports = Gallery;
function Gallery(args, options, config) {
    generator.UIBase.apply(this, arguments);
    console.log("模块初始化完成！");
    if (fs.existsSync('package.json')) {
        this.packJSON = JSON.parse(this.readFileAsString('package.json'));
    } else {
        this.packJSON = {}
    }
}


util.inherits(Gallery, generator.UIBase);

var prt = Gallery.prototype;


//询问作者
// prt.askAuthor = function(){
//     var cb = this.async();

//     var author = {
//         name: 'FE',
//         email: '@gmail.com'
//     };

//     if (this.packJSON && this.packJSON.author) {
//         var packJSON = this.packJSON.author;
//         this.packJSON.author = abcAuthor.name || 'fe-team';
//         this.packJSON.email = abcAuthor.email || '@example.com';
//     }
//     var prompts = [{
//         name: 'author',
//         message: 'author of component:',
//         default: author.name
//     },{
//         name: 'email',
//         message: 'email of author:',
//         default: author.email
//     }];

//     this.prompt(prompts, function (props) {
//         this.author = props.author;
//         this.email = props.email;
//         this.packJSON.author=props.author;
//         cb();
//     }.bind(this));
// }




// prt.mk = function(){
//     var version = this.version;
//     this.mkdir(version);
//     var fold = ['demo','spec','build','plugin','guide','meta'];
//     for(var i=0;i<fold.length;i++){
//         this.mkdir(path.join(version, fold[i]));
//     }
// }

//创建文件夹
prt.copyFile = function(){
    this.mkdir('src');
    this.mkdir('src/css');
    this.mkdir('src/css/plugins');
    this.mkdir('src/less');
    this.mkdir('src/images');
    this.mkdir('src/resources');
    this.mkdir('src/js');
    this.mkdir('src/js/page');
    this.mkdir('src/js/vendor');
    this.mkdir('src/js/plugins');
    this.copy('gulpfile.js','gulpfile.js');
    this.copy('README.md','README.md');
    this.copy('index.html','src/index.html');
    this.copy('package.json','package.json');
    this.copy('.gitignore','.gitignore');
    this.copy('_mixins.less','src/less/_mixins.less');
    this.copy('_variables.less','src/less/_variables.less');
    this.copy('animate.less','src/less/animate.less');
    this.copy('common.less','src/less/common.less');
    this.copy('reset.less','src/less/reset.less');
    this.copy('swiper-3.4.0.jquery.min.js','src/js/vendor/swiper-3.4.0.jquery.min.js')
    this.copy('_mixins/background-variant.less','src/less/_mixins/background-variant.less');
    this.copy('_mixins/border-radius.less','src/less/_mixins/border-radius.less');
    this.copy('_mixins/buttons.less','src/less/_mixins/buttons.less');
    this.copy('_mixins/center-block.less','src/less/_mixins/center-block.less');
    this.copy('_mixins/clearfix.less','src/less/_mixins/clearfix.less');
    this.copy('_mixins/flexbox.less','src/less/_mixins/flexbox.less');
    this.copy('_mixins/gradients.less','src/less/_mixins/gradients.less');
    this.copy('_mixins/grid.less','src/less/_mixins/grid.less');
    this.copy('_mixins/grid-framework.less','src/less/_mixins/grid-framework.less');
    this.copy('_mixins/hide-text.less','src/less/_mixins/hide-text.less');
    this.copy('_mixins/image.less','src/less/_mixins/image.less');
    this.copy('_mixins/opacity.less','src/less/_mixins/opacity.less');
    this.copy('_mixins/px2rem.less','src/less/_mixins/px2rem.less');
    this.copy('_mixins/reset-filter.less','src/less/_mixins/reset-filter.less');
    this.copy('_mixins/resize.less','src/less/_mixins/resize.less');
    this.copy('_mixins/responsive-utilities.less','src/less/_mixins/responsive-utilities.less');
    this.copy('_mixins/responsive-visibility.less','src/less/_mixins/responsive-visibility.less');
    this.copy('_mixins/size.less','src/less/_mixins/size.less');
    this.copy('_mixins/text-overflow.less','src/less/_mixins/text-overflow.less');
    this.copy('_mixins/vendor-prefixes.less','src/less/_mixins/vendor-prefixes.less');
    this.copy('jquery-2.2.4.js','src/js/vendor/jquery-2.2.4.js');
}

prt.begin = function(){
    console.log("初始化完成");
    console.log("1.根目录下运行npm install");
    console.log("2.根目录下运行gulp dev进行开发");
    console.log("根目录下运行gulp build进行发布");

    console.log("js依赖放在src/js/vendor下");
    console.log("js插件放在src/js/plugins下");
    console.log("js页面逻辑放在src/js/core下");
}


