/*使用一个类表示散列表，该类包含计算散列值的方法、向散列中插入数据的方法、从散列表中读取数据的方法、显示散列表中数据分布的方法*/
function HashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
}

//这样散列值就是 ASCII 码值的和除以数组长度的余数
function simpleHash(data){
	var total = 0;
	for(var i=0; i<data.length; ++i){
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}

//使用霍纳算法的散列函数
function betterHash(string, arr){
	const H =37;
	var total =0; 
	for(var i=0; i<string.length; ++i){
		total += H*total + string.charCodeAt(i);
	}
	total = total%this.table.length;
	if(total<0){
		total += this.table.length-1;
	}
	return parseInt(total);
}

//将数据存入散列表
function put(data){
	//var pos = this.simpleHash(data);
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

//用来显示散列表中的数据
function showDistro() {
	var n = 0;
	var txt ="";
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefined) {
			txt += i + ': ' + this.table[i]+'<br/>';
			document.getElementById("hashTable1").innerHTML=txt;
			//console.log(i + ': ' + this.table[i]);
		}
	}
}

var data = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hTable = new HashTable();
for(var i=0; i<data.length; i++){
	hTable.put(data[i]);
}
hTable.showDistro();
