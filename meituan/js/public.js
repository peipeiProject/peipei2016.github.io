// JavaScript Document

var meituan={};
meituan.public={};
meituan.public.header={};
meituan.public.footer={};
meituan.public.header.headerT=function(){
	var oJHeaderDiv=document.getElementById('header_t_div');
		var oJHeaderUl=document.getElementById('j-header-ul');
		var aLi=oJHeaderDiv.getElementsByTagName('li');
		var aA=oJHeaderDiv.getElementsByTagName('a');
		var aHideDiv=oJHeaderDiv.getElementsByClassName('j_phone_Hide');
		
		var timer=null;
		for(var i=0;i<aA.length;i++)
		{
			aLi[i].onmouseover=function(){
				var oA=this.children[0];
				if(this.children.length == 0)
				{
					return;
				}
				if(oA.getElementsByClassName('triangle').length == 0)
				{
					return;
				}
				var aSpan=oJHeaderDiv.getElementsByClassName('triangle');
				
				var oSpan=oA.getElementsByTagName('span')[0];
				var oPrent=oA.parentNode;
				var oHideDiv=oPrent.getElementsByTagName('div')[0];
				var _this=oA;
				for(var i=0;i<aA.length;i++)
				{
					aA[i].className='';
				}
				
				for(var j=0;j<aSpan.length;j++)
				{
					aHideDiv[j].className='j_phone_Hide';
				}
				_this.className='active';
				oHideDiv.className='j_phone_Hide active';
			
				
			}
			aLi[i].onmouseout=function(){
				var oA=this.children[0];
				var aChi=oA.children;
				if(aChi.length == 0)
				{
					return;
				}
				if(oA.getElementsByClassName('triangle').length == 0)
				{
					return;
				}
				
				var aSpan=oJHeaderDiv.getElementsByClassName('triangle');
				var oSpan=oA.getElementsByTagName('span')[0];
				var oPrent=oA.parentNode;
				var oHideDiv=oPrent.getElementsByTagName('div')[0];	
				var _this=oA;
				
				for(var j=0;j<aSpan.length;j++)
				{
					aHideDiv[j].className='j_phone_Hide';
				}
				_this.className='';
				oHideDiv.className='j_phone_Hide';
			}
		}
	}
meituan.public.header.headerM=function(){
		
		var header_m_close=document.getElementById('header_m_close');
		
		var header_m_parent=header_m_close.parentNode;
		header_m_close.onclick=function(){
			header_m_parent.style.display='none';
		}
	}
	
	
meituan.public.footer.tab=function(){
	var oF_btn=document.getElementById('footer_btn');
	var oF_cont=document.getElementById('footer_cont');
	var aBtn=oF_btn.getElementsByTagName('li');
	var aCont=oF_cont.getElementsByTagName('li');
	for(var i=0;i<aCont.length;i++)
	{
		(function(index){
			aBtn[i].onmouseover=function(){
				for(var i=0;i<aCont.length;i++)
				{
					aBtn[i].className='';
					aCont[i].className='';
				}
				aBtn[index].className='active';
				aCont[index].className='active';
			}
		})(i)
		
	}
}


meituan.public.fixedTop=function(oTop,target){
	
	
	var timer=null;
	var bFlog=false;
	addEvent(window,'scroll',function(){
	
		if(bFlog)
		{
			clearInterval(timer);
		}
		bFlog=true;
		
	});
	
	oTop.onclick=function(){
		
		var start=document.body.scrollTop  || document.documentElement.scrollTop;
		var dis=target-start;
		var conut=Math.floor(1000/30);
		var n=0;
		timer=setInterval(function(){
			n++;
			bFlog=false;
			var cur=start+dis*n/conut;
			
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			if(n == conut)
			{
				clearInterval(timer);
			}
		},30);
	}
}


meituan.public.fixedUp=function(oUp,top1){
	
	var scrollDown=document.documentElement.scrollTop || document.body.scrollTop;
	
	if(scrollDown>top1)
	{
		oUp.style.position='fixed';
		oUp.style.top=0;
	}
	else
	{
		oUp.style.position='absolute';
		oUp.style.top=top1+'px';
	}
}
meituan.public.sider=function(){
	var oSideUl=document.getElementById('j_one_list');
	var aLi=oSideUl.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].className='';
			}
			this.className='active';
		}
		aLi[i].onmouseout=function(){
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].className='';
			}
			
		}
	}
}

meituan.public.navLi=function(){
	var oNavLi=document.getElementById('navLi');
	var oJ_one_list=document.getElementById('one_l');
	navLi.onmouseover=function(){
		one_l.style.display='block';
	}
	navLi.onmouseout=function(){
		one_l.style.display='none';
	}
}
meituan.public.header.headerMInput=function(){
		
}
meituan.public.header.nav=function(){
	
}

