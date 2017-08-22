function Set(){
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
}

function add(data){
	//集合中不能有重复数据，所以要先检测一下
	if(this.dataStore.indexOf(data)<0){
		this.dataStore.push(data);
		return true;
	}
	else{
		return false;
	}
}
