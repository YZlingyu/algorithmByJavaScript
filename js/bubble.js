//冒泡排序：
//基本思路：一次比较像里的两个数，如果第一个比第二个小，不变。如果第一个比第二个大，调换顺序。一轮下来，最后一个是最大的数，对除了最后一个数的数重复前面工作

function bubbleSort(myArray){
	var len = myArray.length;
	var i;
	var j;
	var stop;
	
	for (i=0; i<len-1; i++){
		for(j=0, stop = len-1-i; j<stop; j++){
			if(myArray[j] > myArray[j+1]){
				swap(myArray, j, j+1);
			}
		}
	}
	return myArray;
}

function swap(myArray, p1, p2){
	var temp = myArray[p1];
	myArray[p1] = myArray[p2];
	myArray[p2] = temp;
}

var array1 = [29,24,43,2,13,65];
document.getElementById("bubble").innerHTML=bubbleSort(array1);
