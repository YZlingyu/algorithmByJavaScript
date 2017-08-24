function Vertex(label){
	this.label = label;
}

//记录一个图表示了多少条边，使用一个长度与图的顶点数相同的数组来记录顶点的数量。
function Graph(v){
	this.vertices = v;
	this.edge = 0;
	this.adj = [];
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.bfs = bfs;
	this.marked = [];
	this.marked2 = [];
	this.edgeTo = [];
	//使用一个长度与图的顶点数相同的数组来记录顶点的数量
	//通过for循环为数组中的每个元素添加一个子数组来存储所有的相邻顶点，并将所有元素初始化为空字符串
	for(var i=0; i<this.vertices; i++){
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.toString = toString;
}

/*函数先查找顶点A的邻接表，将B添加到列表中，再查找顶点B的邻接表，将A加入列表，边数加1*/
function addEdge(v, w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph(){
	var txt ="";
	var txt2="";
	for(var i = 0; i<this.vertices; i++){
		
		//document.getElementById("graph").innerHTML += i +"->";
		
		for(var j = 0;j<this.vertices;j++){
			if(this.adj[i][j] != undefined){
				txt2 += this.adj[i][j];
			}
		}
		txt = i +"->"+txt2+"<br>"; 
		document.getElementById("graph").innerHTML += txt;
		txt2="";
	}
}

function dfs(v){
	this.marked[v] = true;
	if(this.adj[v] != undefined){
		document.getElementById("graph2").innerHTML += "visited vertex: "+v;
	}
	for(var w in this.adj[v]){
		if(!this.marked[w]){
			this.dfs(w);
		}
	}
}

function bfs(s){
	var queue = [];
	this.marked2[s] = true;
	queue.push(s);
	while(queue.length > 0){
		var v2 = queue.shift();//从队首移除
		if(v2 == undefined){
			document.getElementById("graph3").innerHTML += 'visited vertex: '+v2;
		}
		for(var x in this.adj[v2]){
			if(!this.marked2[x]){
				this.edgeTo[x] = v2;
				this.marked2[x] = true;
				queue.push(x);
			}
		}
	}
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);
g.bfs(2);
