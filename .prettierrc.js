module.exports = {
  eslintIntegration: true,
  stylelintIntegration: true,
  trailingComma: 'none', //数组、对象最后一个元素的尾逗号
  printWidth: 160, //每行到多少长度开始折行
  singleQuote: true, // 强制使用单引号
  // vueIndentScriptAndStyle: true, // vue文件的script标签和Style标签下的内容需要缩进
  semi: false, // 语句末尾不使用分号
  // quoteProps: 'consistent' // 如果对象中至少有一个属性需要用引号引起来，就把所有属性用引号引起来
  jsxBracketSameLine: true, // 在jsx中把'>' 不单独放一行
  // htmlWhitespaceSensitivity: "css", //为 HTML 文件定义全局空格敏感度
  arrowParens: 'avoid' //只有一个参数的箭头函数的参数是否带圆括号（默认avoid不带）
}
