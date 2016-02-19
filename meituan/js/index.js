// JavaScript Document

meituan.public.content={};
meituan.public.content.one_move1=function(){
	
	var oMove1=document.getElementById('one_m_Move1');
	var aLi=oMove1.children;
	oMove1.innerHTML+=oMove1.innerHTML;
	oMove1.style.width=oMove1.children[0].offsetWidth*aLi.length+'px';
	var oPrev=document.getElementById('one_prev1');
	var oNext=document.getElementById('one_next1');
	var w=oMove1.offsetWidth/2;
	var left=0;
	var timer=null;
	oPrev.onmouseover=function(){
		
		timer=setInterval(function(){
			left-=4;
			if(left< 0)
			{
				oMove1.style.left=left%w+'px';
			}
			else
			{
				oMove1.style.left=left%w-w+'px';
			}
		},30);
	}
	oNext.onmouseover=function(){
		
		timer=setInterval(function(){
			left+=4;
			if(left< 0)
			{
				oMove1.style.left=left%w+'px';
			}
			else
			{
				oMove1.style.left=left%w-w+'px';
			}
		},30);
	}
	oNext.onmouseout=oPrev.onmouseout=function(){
		clearInterval(timer);
	}
}
meituan.public.content.two_move2=function(){
	var oMove2=document.getElementById('two_move2');
	var aLi=oMove2.children;
	oMove2.innerHTML+=oMove2.innerHTML;
	oMove2.style.width=oMove2.children[0].offsetWidth*aLi.length+'px';
	var oPrev=document.getElementById('two_prev2');
	var oNext=document.getElementById('two_next2');
	var w=oMove2.offsetWidth/2;
	var left=0;
	var timer=null;
	var bflog=true;
	oPrev.onmouseover=function(){
		if(!bflog)
		{
			return;
		}
		bflog=false;
		(left>0) && (left=0);
		oMove2.style.left=0;
		setTimeout(function(){
			
			left-=w;
			move(oMove2,{left:left},{complete:function(){
				
				bflog=true;
			}});
			(left<0) && (left=0);
			oMove2.style.left=0;
		},100);
	}
	oNext.onmouseover=function(){
		if(!bflog)
		{
			return;
		}
		bflog=false;
		(left=0) && (left=-w);
		timer=setTimeout(function(){
			move(oMove2,{left:left},{complete:function(){
				
				bflog=true;
			}});
			left+=w;
		},100);
		oMove2.style.left=-w+'px';
	}
	
}

//图片延迟加载
meituan.public.content.delay=function(){
	
	var aImg=document.getElementsByTagName('img');
	var scrollDown=document.documentElement.scrollTop || document.body.scrollTop;
	var h=scrollDown+document.documentElement.clientHeight;
	for(var i=0;i<aImg.length;i++)
	{
		var imgTop=getPos(aImg[i]).top;
		
		
		
		if(h>=imgTop)
		{
			var _src=aImg[i].getAttribute('_src');
			aImg[i].src=_src;
		}
	}
}

meituan.public.fixedAd=function(){
	var ofixed_show=document.getElementById('fixed_move_show');
	var ofixed_hide=document.getElementById('fixed_move_hide');
	var oClose=document.getElementById('fixed_close');
	ofixed_show.onclick=function(){
		move(ofixed_show,{left:-115},{complete:function(){
			move(ofixed_hide,{left:0})
		},
		duration:500
		})
	}
	oClose.onclick=function(){
		move(ofixed_hide,{left:-4000},{complete:function(){
			move(ofixed_show,{left:0},{duration:500})
		}})
	}
}

meituan.public.content.time=function(){
	var oTime=document.getElementById('two_time');
	var aSpan=oTime.getElementsByTagName('span');
	var timer=null;
	timer=setInterval(function(){
		var oDate=new Date();
		var hours=oDate.getHours();
		var Min=oDate.getMinutes();
		var sec=oDate.getSeconds();
		var str=toDub(hours)+' '+toDub(Min)+' '+toDub(sec);
		
		for(var i=0;i<str.length;i++)
		{
			var s=str.charAt(i);
			aSpan[i].innerHTML=s;
			
		}
	},1000);
}




