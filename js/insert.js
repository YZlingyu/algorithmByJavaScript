//插入排序
//基本思路：把数组分为 已排序和 未排序两部分， 第一个数为“已排序”，其余为“未排序”
//从“未排序”抽出第一个数，和“已排序”部分比较，插入到合适的位置

function insertionSort(myArray){
	var len = myArray.length;
	var value;//当前比较值
	var i;//未排序当前位置
	var j;//已排序当前位置
	
	for(i=0; i<len; i++){
		
		//储存当前位置的值
		value = myArray[i];
		
		/*
         * 当已排序部分的当前元素大于value，
         * 就将当前元素向后移一位，再将前一位与value比较
         * 
         * 将未排序的第一个与已排序的每一个进行比较，从已排序的最后一个开始，到
         */
        
        for (j=i-1; j>-1 && myArray[j]>value; j--){
        	myArray[j+1] = myArray[j];
        }
        
        myArray[j+1] = value;
	}
	
	return myArray;
}


document.getElementById("insert").innerHTML= insertionSort(array1);