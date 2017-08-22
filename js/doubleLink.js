window.onload=function(){
	function Node(element){
		this.element = element;
		this.next = null;
		this.previous = null;
	}
	
	function LList(){
		this.head = new Node("head");
		this.find = find;
		this.insert = insert;
		this.remove = remove;
		this.findPrevious = findPrevious;
		this.display = display;
		this.dispReverse = dispReverse;
		this.findLast = findLast;
	}
	
	//在已知节点后面插入元素，先要找到后面的节点。创建辅助方法：find(),遍历链表，查找给定数据。
	function find(item){
		//创建新节点，将链表的头节点赋给这个新创建的节点。
		var currNode = this.head;
		//在链表上循环，如果当前element属性和我们要找的信息不符，就从房钱节点移动到下一个节点。查找成功则返回包含该数据的节点。
		while (currNode.element != item){
			currNode = currNode.next;
		}
		return currNode;
	}
	
	//找到后面节点后，在新节点插入链表
	function insert(newElement, item){
		var newNode = new Node(newElement);
		var current = this.find(item);
		newNode.next = current.next;
		newNode.previous = current;
		current.next = newNode;
	}
	
	//显示链表中的元素
	function display(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				document.getElementById("linkList2").innerHTML+=currNode.next.element;
				currNode = currNode.next;
		}
	}
	
	//删除节点：先找到待删除节点前面的节点，修改它的next属性，使其不再指向带删除节点，而是指向待删除节点的下一节点。
	function findPrevious(item){
		var currNode = this.head;
		while(!(currNode.next == null)&&(currNode.next.element != item)){
			currNode = currNode.next;
		}
		return currNode;
	}
	
	function dispReverse() {
		var currNode = this.head;
		currNode = this.findLast();
		while (!(currNode.previous == null)) {
			document.getElementById("linkList3").innerHTML+=currNode.element;
			currNode = currNode.previous;
		}
	}
	function findLast() {
		var currNode = this.head;
		while (!(currNode.next == null)) {
			currNode = currNode.next;
		}
		return currNode;
	}
	
	function remove(item){
		var currNode = this.find(item);
		if(!(currNode.next == null)){
			currNode.previous.next = currNode.next;
			currNode.next.previous = currNode.previous;
			currNode.next = null;
			currNode.previous = null;
		}
	}
	
	//测试链表实现
	var cities = new LList();
	var cities = new LList();
	cities.insert("Conway", "head");
	cities.insert("Russellville", "Conway");
	cities.insert("Carlisle", "Russellville");
	cities.insert("Alma", "Carlisle");
	cities.display();
	cities.remove("Carlisle");
	cities.display();
	cities.dispReverse();
}

