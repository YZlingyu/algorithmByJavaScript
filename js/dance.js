//存储舞者信息
function Dancer(name, sex){
	this.name = name;
	this.sex = sex;
}

//将舞者信息从文件中读到程序中来
function getDancers(males, females){
	var fso, ts, s ; 
	var ForReading = 1; 
	
	fso = new ActiveXObject("Scripting.FileSystemObject"); 
	ts = fso.OpenTextFile("../dancer.txt", ForReading); 
	var names = ts.ReadLine(); 
	//var names = read("../dancer.txt").split("\n");
	for (var i=0; i<names.length; ++i){
		names[i] = names[i].trim();//trim函数去掉每行字符串后面的空格
	}
	//将每行字符串按性别和姓名分成两部分存入一个数组。根据性别将舞者加入不同的队列
	for (var i=0; i<names.length; ++i){
		var dancer = names[i].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if(sex =="F"){
			females.enqueue(new Dancer(name, sex));
		}else{
			males.enqueue(new Dancer(name, sex));
		}
	}
}

function dance(males, females){
	while (!females.empty() && !males.empty()){
		var person1 = females.dequeue();
		document.getElementById("female").innerHTML=person1.name;
		var person2 = males.dequeue();
		document.getElementById("male").innerHTML=person2.name;
	}
}

//test
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
