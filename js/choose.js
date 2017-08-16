//选择排序
//找出最小的数，和第一个交换位置
//在剩下的数中，招数第二小的数，放在第二个。。。

function selectionSort(myArray){
	
	var len = myArray.length;
	var min;
	
	for(i=0; i<len; i++){
		//将当前位置设为最小值
		min = i;
		
		//检查数去其余部分是否更小
		for(j=i+1; j<len;j++){
			if(myArray[j] < myArray[min]){
				min = j;
			}
		}
		
		//如果当前位置不是最小值，将其替换成最小值
		if(i != min){
			swap(myArray, i, min);
		}
	}
	
	return myArray;
}

function swap(myArray, p1, p2){
	var temp = myArray[p1];
	myArray[p1] = myArray[p2];
	myArray[p2] = temp;
}

document.getElementById("choose").innerHTML= selectionSort(array1);