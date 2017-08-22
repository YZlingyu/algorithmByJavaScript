function Node(data,left,right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

//用来显示保存在节点中的数据
function show(){
	return this.data;
}

//创建一个类，表示BST，类只包含一个数据成员，node对象表示二叉查找树根节点。初始化为null，创建一个新节点
function BST(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.getMin = getMin;
	this.getMax = getMax;
}

//用来向树中加入新节点。
//首先创建Node对象，将数据传入该对象保存
function insert(data){
	var n = new Node(data,null,null);
	//检查BST是否有根节点，没有，则是新树，该节点就是根节点
	if(this.root == null){
		this.root = n;
	}
	//如果不是根节点，遍历BST，找到插入的适当位置。
	else{
		//设置根节点为当前节点
		var current = this.root;
		var parent;
		while(true){
			parent = current;
			//如果待插入节点保存的数据小于当前节点，
			if(data<current.data){
				//则设置新的当前节点为源节点的左节点
				current = current.left;
				//如果当前节点的左节点为null，将新的节点插入这个位置
				if(current == null){
					parent.left = n;
					break;
				}
			}
			else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}
}

//中序遍历
function inOrder(node){
	if(!(node == null)){
		inOrder(node.left);
		document.getElementById("bst").innerHTML += node.show() + " ";
		inOrder(node.right);
	}
}

//先序遍历
function preOrder(node){
	if(!(node == null)){
		document.getElementById("bst2").innerHTML += node.show()+" ";
		preOrder(node.left);
		preOrder(node.right);
	}
}

//后序遍历
function postOrder(node){
	if(!(node == null)){
		postOrder(node.left);
		postOrder(node.right);
		document.getElementById("bst3").innerHTML += node.show()+" ";
	}
}

function getMin(){
	var current = this.root;
	while (!(current.left == null)){
		current = current.left;
	}
	return current.data;
}

function getMax(){
	var current = this.root;
	while(!(current.right == null)){
		current = current.right;
	}
	return current.data;
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
preOrder(nums.root);
postOrder(nums.root);
var min = nums.getMin();
var max = nums.getMax();
document.getElementById("min").innerHTML = min;
document.getElementById("max").innerHTML = max;
