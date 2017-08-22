/*散列化整形键，*/
//指定随机数的最大最小值
function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min +1)-min);
}

//生成学生的数据
function genStuData(arr){
	for(var i=0; i<arr.length; ++i){
		var num = "";
		for(var j=1; j<=9; j++){
			num += Math.floor(Math.random()*10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}


var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var txt2="";
var students = new Array(numStudents);
genStuData(students);
for (var i = 0; i < students.length; ++i) {
txt2 += students[i].substring(0,8) + " " +
students[i].substring(9);
}
document.getElementById("hash3").innerHTML=txt2;
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
hTable.put(students[i]);
}
hTable.showDistro();