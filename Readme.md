#### JS的基本数据类型有哪些？  
number string boolean null undefined symbol

#### JS的复杂类型  Object

#### 如何区别这些数据类型
 - typeof / instanceof / Object.prototype.toString.call
    - typeof 无法区分对象和数组， 建议直接使用方法 Array.isArray
    - instanceof 不建议作为判断类型的依据
    - Object.prototype.toString.call 推荐方法

#### 当我们在做基本数据类型的比较时，选择 ===
   - 为什么用 === ？ 查看https://dorey.github.io/JavaScript-Equality-Table/ 

#### lodash 源码阅读

#### 逻辑运算符中的短路
 - 函数中参数的默认值 ||
``` python
function foo(bar) {
    	  var _bar = bar || '';
	}
```
 - &&

#### 三元表达式

#### 循环中最好优先for语句，map，foreach

#### js 中 debug
  - 使用 chrome devtools 或者书写 debugger;
``` python
 function a () {
        debugger;
        console.log(a);
      }
      a();
```

#### 变量和函数提升
   - js执行过程分为预解析和执行阶段  
   - 预解析 var function 

#### 函数作用域

#### 对象
   - 对象的声明：字面量（优先），new
   - 掌握 object.create   object.assign   object.keys   object.values   defineProperty() 
   - 掌握属性getter和setter并对其中的例子进行实践

#### 数组和字符串主要掌握其中的方法

#### 函数这章是重中之重！！！

#### ES6 Reflect Proxy   Promise

#### 内存管理 垃圾回收 Event Loop