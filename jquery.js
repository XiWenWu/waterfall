function getSmallDiv(patent, son){
	var gao=Infinity;
	var tson;
	for(var i=0; i<son.length; i++){
		if(son.eq(i).height()<gao){
			gao=son.eq(i).height();
			tson=son.eq(i)
		}
	}
	return tson;
}

$(function(){
	var json;
	$.getJSON("test.json",function(data){
		// alert(data.comment[8].message);
		json=data.comment;
		var leng=json.length;
		for(var i=0; i<leng; i++){
			var str;
			str="<div>";
			// <img src="res/000.jpg"/>
			str+="<img src=\"res/"+json[i].picture+"\"/>";
			str+="</div>"
			var testData=getSmallDiv($(".all"), $(".test"));
			testData.append(str);
		}
	})	
});