// const fs = require("fs");
// const rimraf = require('rimraf');
// const webpackFile = require("../webpack/webpack.file.conf");
// const entryBuild = require('../entry/entry');
// const webpackComConf = require('./com.conf');
// /*删除开发目录*/
// rimraf.sync(webpackFile.devDirectory);
// /*创建开发目录*/
// fs.mkdirSync(webpackFile.devDirectory);
//
// /*生成HTML*/
// let htmlCont = fs.readFileSync("index.html", "utf-8");
// let scriptInsert = `
// <script type=text/javascript src=js/manifest.js></script>
// <script type=text/javascript src=js/vendor.js></script>
// <script type=text/javascript src=js/common.js></script>
// <script type=text/javascript src=js/key.js></script>
// `;
// let protobufScriptInsert = `
// <script type=text/javascript src=plugin/protobuf/Long.min.js></script>
// <script type=text/javascript src=plugin/protobuf/ByteBufferAB.min.js></script>
// <script type=text/javascript src=plugin/protobuf/ProtoBuf.min.js></script>
// `;
// let commonHtmlCont = htmlCont.replace('</body>', scriptInsert + '</body>');
// let indexHtmlCont = htmlCont.replace('</body>', protobufScriptInsert + scriptInsert + '</body>');
// entryBuild.map((data) => {
//     let cont
//     if (data.name === 'index') {
//         cont = indexHtmlCont
//     } else {
//         cont = commonHtmlCont
//     }
//     fs.writeFile(webpackFile.devDirectory + '/' + data.name + '.html',
//         cont.replace('js/key.js', 'js/' + data.name + '.js')
//             .replace('<%= htmlWebpackPlugin.options.title %>', webpackComConf.titleFun(data.name, data.title)),
//         'utf8',
//         function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//         });
// });