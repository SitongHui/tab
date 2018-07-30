window.onload=function(){
    tab();
}

function tab(){
    //获取DOM元素
    var titleEles = document.querySelectorAll(".tab > .tab-title > span");
    var contentEles = document.querySelectorAll(".tab > .tab-content > li");

    //注册事件
    titleEles.forEach( (ele,index) => {
        ele.addEventListener("click",(event) => {
            clearEleStyle(titleEles,"selected");
            clearEleStyle(contentEles,"selected");

            event.target.classList.add("selected");
            contentEles[index].classList.add("selected");
        },false)
    });

    //工具函数
    function clearEleStyle(obj,className){
        obj.forEach( ele =>{
            ele.classList.remove(className);
        })
    }

}