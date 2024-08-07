// xbox_cart_nigeria.js
var body = $request.body;

// 使用正则表达式替换市场代码和语言/地区代码为尼日利亚
body = body.replace(/"market":"\w{2}"/g, '"market":"NG"');
body = body.replace(/"locale":"[\w-]+"/g, '"locale":"en-NG"');

// 还可以选择性地修改 friendlyName，保持统一
body = body.replace(/"friendlyName":"cart-\w{2}"/g, '"friendlyName":"cart-NG"');

// 返回修改后的请求体
$done({body});
