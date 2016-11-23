var config = {}

config.banner = 'This file is created by fooying@qq.com'
config.entries = {
  index: {
    entry: '../demo/src/index.js',
    template: '../tmp/index.html',

    filename: 'index.html',
    title: 'PC端',
    description: '',
    keywords: ''
  }, 
  mobile: {
    entry: '../demo/src/mobile.js',
    template: '../tmp/index.html',

    filename: 'mobile.html',
    title: '移动端',
    description: '',
    keywords: ''
  }
}
module.exports = config;