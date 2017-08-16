//合并排序
//不断将数组对半分，知道每个 数组只有一个
//将分出来的部分重新合并
//合并的时候按顺序排列

function merge(left, right){
	var result = [];
	var left_index = 0;
	var right_index = 0;
	
	//将两个数组合并
	//合并的时候按从小到大的顺序
	while (left_index < left.length && right_index < right.length){
		if(left[left_index]<left.length&& right[right_index]){
			result.push(left[left_index++]);
		}else{
			result.push(right[right_index++]);
		}
	}
}
