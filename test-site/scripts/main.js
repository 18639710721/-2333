// 简单的分支判断
let iceCream = "华籍美人"
if (iceCream === "华籍美人"){
    alert("我最喜欢巧克力冰淇淋了。")
}else{
    alert("但是巧克力才是我的最爱呀")
}

// 自定义一个函数
function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}


// 设置图片的切换功能
// 将<img>元素得到引用存放在myimage变量里面
let myImage = document.querySelector("img");

// 将这个变量的onclick事件和匿名函数进行绑定
myImage.onclick = function(){
    // 获取这张这张图片的src值 getAttribute 获取属性
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src","images/firefox2.png");
    }else {
        myImage.setAttribute("src","images/firefox-icon.png");
    }
// 气死我了，这里刷新不出来图片的原因是/这个写成了\醉了
    
}


// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute('src', 'images/firefox2.png');
//     } else {
//       myImage.setAttribute('src', 'images/firefox-icon.png');
//     }
// }
// const 常量，不可变。
// let 变量，块作用域，不能重复声明覆盖。
// var 变量，函数作用域，能重复声明覆盖

// querySelector是选择器的意思
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字");
    localStorage.setItem("name",myName);
    myHeading.textContent = "Mozilla 酷毙了，" +myName;
}

// 初始化代码 在页面初次读取后进行构造工作
if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function(){
    setUserName();
}

//  || 逻辑或   && 逻辑与
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }

  