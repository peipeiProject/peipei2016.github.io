// JavaScript Document

meituan.list={};
meituan.list.add=function(){
	var oCont=document.getElementById('content_list_cont');
	var oP=document.getElementsByClassName('content_b')[0];
	var aA=oP.getElementsByTagName('a');
	
	var arr=['全部','区域:','商圈:','价钱:'];
	var val='海淀区';
	for(var i=0;i<aA.length;i++)
	{
		(function(index){  
			var bFlog=false;
			aA[i].onclick=function(){
				/*if(bFlog)
				{
					return;
				}
				bFlog=true;*/
				var oDiv=document.createElement('div');
				if(oCont.children.length == 0)
				{
					oDiv.className='content_addChild';
					oDiv.innerHTML='<div class="bor_green"><em>'+arr[0]+'</em>';
					oCont.appendChild(oDiv);
				}
				else
				{
					
					oDiv.className='content_addChild';
					oDiv.innerHTML='<span class="icon_right content_list_span"></span>\
						<div class="bor_green" id="j_bor"><em>'+arr[index]+'</em><span class="val">'+val+'</span>\
						<i class="triangle"></i>\
						<div class="address" >\
							<a href="#">东城区</a>\
							<a href="#">西城区</a>\
							<a href="#">石景山区</a>\
							<a href="#">昌平区</a>\
							<a href="#">朝阳区</a>\
						</div>\
						<i></i></div>\
						<b class="liClose"></b>';
					oCont.appendChild(oDiv);
					var aDiv=oCont.getElementsByClassName('content_addChild');	
					for(var i=0;i<aDiv.length;i++)
					{
						var oClose=aDiv[i].getElementsByClassName('liClose')[0];
						oClose.onclick=function(){
							var oParent=this.parentNode;
							oCont.removeChild(oParent);
						}
					}
					
					var oJ_bor=oDiv.getElementsByClassName('bor_green')[0];
					var oAddHide=oJ_bor.getElementsByClassName('address')[0];
					var oVal=oJ_bor.getElementsByClassName('val')[0];
					oJ_bor.onmouseover=function(){
						oAddHide.style.display='block';
						
						var aA=oAddHide.getElementsByTagName('a');
						
						for(var i=0;i<aA.length;i++)
						{
							aA[i].onclick=function(){
								var str=this.innerHTML;
								oVal.innerHTML=str;
							}
						}
						
					}
					oJ_bor.onmouseout=function(){
						oAddHide.style.display='none';
					}
				}
				
				
			}
			
		})(i);
		var aDiv=oCont.getElementsByClassName('content_addChild');	
		/*if(aDiv[i].innerHTML.indexOf(arr[i]) == -1)
		{
			bFlog=false;
		}*/
		
	}
	
	
	
	
};
meituan.list.onload=function(){
	var arr=[
	{
		'img':'images/1.jpg',
		'tit':'【劲松】MiniMe特色太空舱主题酒店',
		'minTit':'建业MINI放入住1晚',
		'speFont':'￥58',
		'lSpan':'门店价',
		'line_through':'￥2485',
		'rSpan':'已售255',
		'imgLast':'images/1.png',
		'txtLast':'1516人评价',
	},
	{
		'img':'images/2.jpg',
		'tit':'【清河】MiniMe特色太空舱主题酒店',
		'minTit':'建业MINI放入住1晚',
		'speFont':'￥58',
		'lSpan':'门店价',
		'line_through':'￥2485',
		'rSpan':'已售255',
		'imgLast':'images/1.png',
		'txtLast':'1516人评价',
	},
	{
		'img':'images/3.jpg',
		'tit':'【望京】MiniMe特色太空舱主题酒店',
		'minTit':'建业MINI放入住1晚',
		'speFont':'￥58',
		'lSpan':'门店价',
		'line_through':'￥2485',
		'rSpan':'已售255',
		'imgLast':'images/1.png',
		'txtLast':'1516人评价',
	}
];
	var n=0; 
	
	addEvent(window,'scroll',function(){
		var clientHeight=document.documentElement.clientHeight;
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		var height=document.body.scrollHeight;
		
		if (height <= clientHeight+scrollTop+600)
		{
			createLi();
			
		}
	})
	
	
	function createLi()
	{
		n++;
		
		if (n >= 6)
		{
			return;
		}
		document.title=n;
		var oUl=document.getElementById('three_UL');
		
		for(i=0;i<10;i++)
		{
			var json=arr[i];
			var oLi=document.createElement('li');
			oLi.setAttribute('index',i+6+(n-1)*10);
			oUl.appendChild(oLi);
			oLi.innerHTML='<a href="detailed.html">\
				<img src="images/22.jpg">\
				<h2 class="list_h2">【劲松】MiniMe特色太空舱主题酒店</h2>\
				<h4 class="list_h4">建业MINI放入住1晚</h4>\
				<div class="main clearfix">\
				<strong class="list_strong">￥58</strong>\
				<span class="list_lspan">门店价</span>\
				<i class="list_i">￥68</i>\
				<span class="list_rspan">已售255</span>\
				</div><div class="mainlast clearfix">\
					<img src="images/27.png">\
					<b class="list_b">1516人评价</b>\
				</div>\
			</a>';
		}
		
	}
	
}

meituan.list.cookieHostory=function()
{

    var oUl=document.getElementById('three_UL');
    var aLi=oUl.children;
    var arr=[];
    for(var i=0;i<aLi.length;i++)
    {
        aLi[i].setAttribute('index',i);
        addEvent(aLi[i],'click',function(){
            var oHisUl=document.getElementById('history_ul');

            var id=this.getAttribute('index');

            var aSon=oHisUl.children;
            var oHisLi=document.createElement('li');
            oHisLi.className='clearfix';
            var oImg=this.getElementsByTagName('img')[0];
            var oH2=this.getElementsByTagName('h2')[0];
            var oI=this.getElementsByTagName('i')[0];
            var oStrong=this.getElementsByTagName('strong')[0];
            if (aSon.length == 0)
            {

                oHisLi.innerHTML='<div class="three_div1 left"><img src="'+oImg.src+'" /></div>\
					<div class="three_div2 right">\
											<p>'+oH2.innerHTML+'</p>\
											<i>'+oStrong.innerHTML+'</i>\
											<em>门店价：'+oI.innerHTML+'</em>\
										</div>';
                oHisUl.appendChild(oHisLi);
                oHisLi.setAttribute('index', id);

                setCookie(id,'{num:'+id+',src:'+oImg.src+',cont:'+oH2.innerHTML+',sprice:'+oStrong.innerHTML+',reality:'+oI.innerHTML+'}',4);

                arr.push(id);
            }
            else
            {
                // li-1
                if(!findInArr(id,arr))
                {
                    var oHisLi=document.createElement('li');
                    oHisLi.className='clearfix';
                    var oImg=this.getElementsByTagName('img')[0];
                    var oH2=this.getElementsByTagName('h2')[0];
                    oHisLi.innerHTML='<div class="three_div1 left"><img src="'+oImg.src+'" /></div>\
						<div class="three_div2 right">\
												<p>'+oH2.innerHTML+'</p>\
												<i>￥41</i>\
												<em>门店价 ￥90</em>\
											</div>';
                    oHisUl.appendChild(oHisLi);
                    oHisLi.setAttribute('index', id);

                setCookie(id,'{num:'+id+',src:'+oImg.src+',cont:'+oH2.innerHTML+',sprice:'+oStrong.innerHTML+',reality:'+oI.innerHTML+'}',4);


                    arr.push(id);
                }

            }

        });
    }
}


meituan.list.hostory=function(){

    if(getCookieTest('id'))
    {

        var oUl=document.getElementById('three_UL');
        var aLi=oUl.children;
        var arr=[];
        var oHisUl=document.getElementById('history_ul');
        var aSon=oHisUl.children;
        var oHisLi=document.createElement('li');
         oHisLi.className='clearfix';

        oHisLi.innerHTML='<div class="three_div1 left"><img src="'+getCookieTest('src')+'" /></div>\
                <div class="three_div2 right">\
                                        <p>'+getCookieTest('cont')+'</p>\
                                        <i>'+getCookieTest('reality')+'</i>\
                                        <em>门店价：'+getCookieTest('sprice')+'</em>\
                                    </div>';
        oHisUl.appendChild(oHisLi);
        oHisLi.setAttribute('index', getCookieTest('id'));



        meituan.list.cookieHostory();
    }
    else
    {

        var oHisUl=document.getElementById('history_ul');
        oHisUl.innerHTML='';
        meituan.list.cookieHostory();
    }
	



}


function getCookie(sName)
{
    // name=abc; age=18; sex=男
    var str=document.cookie;
    var arr=str.split('; ');
    // name=abc, age=18, sex=男

    for (var i=0; i<arr.length; i++)
    {
        // name=abc
        // age=18
        // sex=男
        var aTmp=arr[i].split('=');
        var cook=new Function('return '+aTmp[1])();

        for(var name in cook)
        {
            if (cook[name] == sName)
            {
                return cook[name];
            }
        }

    }
}
meituan.list.fnCookie=function(){

}