//轮播图
{
    let dians = document.querySelectorAll(".banner-circle li");
    let imgs = document.querySelectorAll(".banner-img li");
    let l = dians.length;
// console.log(dians,imgs);
    dians.forEach(function (val, index) {
        val.onclick = function () {
            for (let i = 0; i < l; i++) {
                dians[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            val.classList.add("active");
            imgs[index].classList.add("active");
            now = index;
        }
    });

    let now = 0;
    let jc = setInterval(fn, 1000);

    function fn() {
        now++;
        if (now === l) {
            now = 0;
        }
        for (let i = 0; i < l; i++) {
            dians[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        dians[now].classList.add("active");
        imgs[now].classList.add("active");
    }

    let bannerobj = document.querySelector("#banner");
    // console.log(bannerObj);
    bannerobj.onmouseover = function () {
        clearInterval(jc);
    }
    bannerobj.onmouseout = function () {
        jc = setInterval(fn, 1000);
    }
}

//顶部搜索栏
let obj;
{
    let topbar=document.querySelector("#topbar");
    console.log(topbar);
    window.onscroll=function(){
        obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
        let st=obj.scrollTop;
        if(st > 698){
            topbar.style.top="0";
        }else{
            topbar.style.top=-50+"px";
        }
    }
}

//楼层跳转
{
	let smbox=document.querySelector("#leftbar");
	let list=document.querySelectorAll(".leftbar-list");
	let	nrbox=document.querySelectorAll(".nrbox");
	console.log(smbox,list,nrbox);

	window.addEventListener("scroll",function(){
	    let st=obj.scrollTop;
	    if(st >790){
            smbox.style.cssText="width:35px;height:370px;"
        }else{
            smbox.style.cssText="width:0;height:0;"
        }


        for(let i=0;i<nrbox.length;i++){
	        if(st >= nrbox[i].offsetTop - 500){
                for(let j=0;j<list.length;j++){
                    list[j].classList.remove("active");
                }
                list[i].classList.add("active");
            }
        }
    });
    list.forEach(function(val,index){
        val.onclick=function(){
            let ot=nrbox[index].offsetTop;
            animate(obj,{scrollTop:ot -10})
        }
    });

    //返回顶部
    let totop=document.querySelector(".leftbar-totop");
    window.addEventListener("scroll",function(){
        if(obj.scrollTop>1200){
            totop.onclick=function(){
                animate(obj,{scrollTop:0})
            }
        }
    })


}

//返回顶部
{
    let totop=document.querySelector(".cebox2-totop");
    console.log(totop);

        window.addEventListener("scroll",function(){
            let st=obj.scrollTop;
            if(st > 500){
                totop.style.opacity="1";
            }
            else{
                totop.style.opacity="0";
            }
        });
        totop.onclick=function(){
            animate(obj,{scrollTop:0})
        }
}

//按需加载
{


    // console.log(imgs);

    window.addEventListener("scroll",function(){
        let st=obj.scrollTop;
        let boxs=document.querySelectorAll(".nrbox");
        for(let i=0;i<boxs.length;i++){
            let imgs=document.querySelectorAll(".beauty-middle-box-img img");
            if(st >=boxs[i].offsetTop - window.innerHeight){
                for(let j=0;j<imgs.length;j++){
                    imgs[j].src=imgs[j].getAttribute('data-src');
                }
            }
        }
    })
}

//轮播左侧菜单栏
{
    let banner=document.querySelector("#banner");
    let leftObj=document.querySelector(".banner-img-left");
    let listObj=document.querySelector(".banner-img-left-left");
    let lieObj=document.querySelectorAll(".banner-img-left h6");
    console.log(banner,leftObj,listObj,lieObj);


    leftObj.onmouseover=function(){
        listObj.style.display="block";
    }
    leftObj.onmouseout=function(){
        listObj.style.display="none";
    }
    listObj.onmouseover=function(){
        listObj.style.display="block";
    }
    listObj.onmouseout=function(){
        listObj.style.display="none";
    }
    banner.onmouseleave=function(){
        listObj.style.display="none";
    }





}