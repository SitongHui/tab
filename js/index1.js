window.onload=function(){
    tab();
}

function tab(){
    //获取元素
    var titleEles = document.querySelectorAll(".tab > .tab-title > span");
    var conEles = document.querySelectorAll(".tab > .tab-content > li");

    //注册事件
    titleEles.forEach(function(ele,index){
        /*添加点击事件*/
        ele.addEventListener("click",function(event){
            /*清除标题和内容的被选中样式*/
            clearStyle(titleEles,"selected");
            clearStyle(conEles,"selected");
            /*添加当前选中的标题和内容的样式*/
            event.target.classList.add("selected");
            conEles[index].classList.add("selected");
        },false)
        /*false--事件冒泡  true--事件捕获*/
    })

    //工具函数
    function clearStyle(obj,className) {
        obj.forEach(function(ele) {
            ele.classList.remove(className);
        })
    }
}