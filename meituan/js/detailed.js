// JavaScript Document

meituan.detailed={};
meituan.detailed.tab=function(){
	var oBtn=document.getElementById('four_small');
	var oCont=document.getElementById('four_big');
	var aLi=oBtn.getElementsByTagName('li');
	var aCont=oCont.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++)
	{
		(function(index){
			aLi[i].onmouseover=function(){
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].className='';
					aCont[i].className='';
				}
				aLi[index].className='active';
				aCont[index].className='active';
			}
		})(i);
		
	}
}

meituan.detailed.num=function(){
	var oMin=document.getElementById('min');
	var oMax=document.getElementById('max');
	var oVal=document.getElementById('val');
	var timer=null;
	
	oMin.onmousedown=function(){
		var val=oVal.innerHTML;
		clearInterval(timer);
		timer=setInterval(function(){
			val--;
			(val<1) && (val=1);
			oVal.innerHTML=val;
			
		},100);
		oMin.setCapture && oMin.setCapture();
	}
	oMin.onmouseup=function(){
		clearInterval(timer);
		oMin.releaseCapture && oMin.releaseCapture();
		return false;
	}
	
	oMax.onmousedown=function(){
		var val=oVal.innerHTML;
		clearInterval(timer);
		timer=setInterval(function(){
			val++;
			(val<1) && (val=1);
			oVal.innerHTML=val;
			
		},100);
		oMin.setCapture && oMin.setCapture();
	}
	oMax.onmouseup=function(){
		clearInterval(timer);
		oMin.releaseCapture && oMin.releaseCapture();
		return false;
	}
}




meituan.detailed.lookTop=function(){
	var aJplace=document.getElementsByClassName('j_place');
	var oUl=document.getElementById('li3Ul');
	var aLi=oUl.children;
	
	
		
	for(var i=0;i<aJplace.length;i++)
	{
		(function(index){
			addEvent(window,'scroll',function(){
				var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
				if(index == aJplace.length-1)
				{
					if(scrollTop>getPos(aJplace[4]).top)
					{
						aLi[aJplace.length-1].className='active';
					}
					else
					{
						aLi[aJplace.length-1].className='';
					}
				}
				else
				{
					if(scrollTop>getPos(aJplace[index]).top && scrollTop<getPos(aJplace[index+1]).top)
					{
						
						aLi[index].className='active';
					}
					else
					{
						aLi[index].className='';
					}
				}
				if(scrollTop < getPos(aJplace[0]).top)
				{
					aLi[0].className='active';
				}
			})
			
		})(i);
		meituan.public.fixedTop(aLi[i],getPos(aJplace[i]).top);
	}
	
	
	

		
		
	
	

}