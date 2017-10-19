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
	    if(st > 778){
            smbox.style.cssText="width:35px;height:370px;"
        }else{
            smbox.style.cssText="width:0;height:0;"
        }


        for(let i=0;i<nrbox.length;i++){
	        if(st >= nrbox[i].offsetTop - 50){
                for(let j=0;j<list.length;j++){
                    list[j].classList.remove("active");
                }
                list[i].classList.add("active");
            }
        }
    })
    list.forEach(function(val,index){
        val.onclick=function(){
            let ot=nrbox[index].offsetTop;
            animate(obj,{scrollTop:ot - 60})
        }
    })
}

//返回顶部
/*{
    let totop=document.querySelectorAll(".totop");
    console.log(totop);
    window.addEventListener("scroll",function(){
        let st=obj.scrollTop;
        if(st > 778){
            totop.style.opacity="1";
        }else{
            totop.style.opacity="0";
        }
    })
    totop.onclick=function(){
        animate(obj,{scrollTop:0});
    }
}*/