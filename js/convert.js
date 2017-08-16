/*可以利用栈将一个数字从一种数制转换成另一种数制。假设想将数字 n 转换为以 b 为基数
的数字，实现转换的算法如下。
(1) 最高位为 n % b，将此位压入栈。
(2) 使用 n/b 代替 n。
(3) 重复步骤 1 和 2，直到 n 等于 0，且没有余数。
(4) 持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符
串形式。*/

function mulBase(num, base){
	var s = new Stack();
	do{
		s.push(num%base);
		num = Math.floor(num /= base);
	}while (num > 0);
	var converted ="";
	while(s.length()>0){
		converted += s.pop();
	}
	return converted;
}

var　num = 32;
var base1 = 2;
var newNum1 = mulBase(num, base1);
var base2 = 8;
var newNum2 = mulBase(num, base2);
document.getElementById("two").innerHTML = newNum1;
document.getElementById("eight").innerHTML = newNum2;
