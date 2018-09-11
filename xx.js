var xml2js = require('xml2js');
var fs = require("fs");

// 同步读取
var data = fs.readFileSync('input.xml');
console.log("同步读取出文件数据: \n" + data.toString());


var xml = data.toString();
  //xml->json
  //xml2js默认会把子子节点的值变为一个数组, explicitArray设置为false
  var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true})
  console.log('----------');
  // xml -> json
  xmlParser.parseString(xml, function (err, result) {
    //将返回的结果再次格式化
	var res = parseInt(result["price"])+6;
	result["price"] = res.toString();
	 console.log( result["price"])

	 var builder = new xml2js.Builder();
	 var jsonxml = builder.buildObject(result);

	 console.log(jsonxml);

	// 写文件
	 fs.writeFile('input.xml', jsonxml,  function(err) {
		if (err) {
			return console.error(err);
		}}
	 );
  });
  console.log('----------');

