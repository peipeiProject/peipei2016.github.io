// JavaScript Document

//提取行间样式
function getStyle(obj,sname)
{
		if(obj.currentStyle)
	    {
			return obj.currentStyle[sname];//IE
		}
		else
		{
			return getComputedStyle(obj,false)[sname];
		}
}
	

//去重
function findInArr(n,arr)
{
		for(var i=0;i<arr.length;i++)
		{
			if(arr[i]==n)
			{
				return true;
			}
		}
		return false;
}


//补零


function toDub(n)
{
	return n<10 ? '0'+ n : '' + n;
}	

//随机数
function rdm(n,m)
{
		return Math.floor(Math.random()*(m-n)+n);
}
	
	
//兼容className
function getByClass(oParent, sClassName)
{
		if (oParent.getElementsByClassName)
		{
			return oParent.getElementsByClassName(sClassName);	
		}
		else
		{
			var aRes=[];
			var aChild=oParent.getElementsByTagName('*');
			for (var i=0; i<aChild.length; i++)
			{
				var obj=aChild[i];
				var aTmp=obj.className.split(' ');
				
				for (var j=0; j<aTmp.length; j++)
				{
					if (aTmp[j] == sClassName)
					{
						aRes.push(obj);
					}
				}
			}
			
			return aRes;
		}
}
	
	
	
//查找数组中最小数，返回其下标	
function findMinIndex(arr, start)
{
		var nMin=9999;
		var nMinIndex=-1;
		for (var i=start; i<arr.length; i++)
		{
			if (arr[i] < nMin)
			{
				nMin=arr[i];
				nMinIndex=i;
			}
		}
		
		return nMinIndex;
}





//obj定位父级的距离
function getPos(obj)
{
		var left=0;
		var top=0;
		
		while (obj)
		{
			left+=obj.offsetLeft;
			top+=obj.offsetTop;
			
			obj=obj.offsetParent;
		}
		
		return {left:left, top:top};
}








//事件绑定和删除

function addEvent(obj,sEv,fn)
{
	if(obj.addEventListener)
	{
		obj.addEventListener(sEv,fn,false);
	}
	else
	{
		obj.attachEvent('on'+sEv,fn);
	}
}

	
function removeEvent(obj,sEv,fn)
{
	if(obj.removeEventListener)
	{
		obj.removeEventListener(sEv,fn,false);
	}
	else
	{
		obj.detachEvent('on'+sEv,fn);
	}
}










//滚轮事件


function addWheel(obj,fn){
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
		{
			obj.addEventListener('DOMMouseScroll',_wheel,false);
		}
		else
		{
			obj.onmousewheel=_wheel;
		}
		function _wheel(ev){
			var oEvent=ev || event;
			if(oEvent.wheelDelta)
			{
				var down=oEvent.wheelDelta>0 ? false:true;
			}
			else
			{
				var down=oEvent.detail>0 ? true:false;
			}
			fn(down);
		}
	}
	
	
	
	
	
	
//ready函数	
	
function $(fn){
	if(document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded',fn,false);
	}
	else
	{
		document.onreadystatechange=function(){
		
			if(document.readyState=='complete')
			{
				fn();
			}
		}
	}
}



function setCookie(sName, sValue, iDay)
{
	if (iDay === undefined)
	{
		// 没有
		document.cookie=sName+'='+sValue;
	}
	else
	{
		// 有
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=sName+'='+sValue+'; expires='+oDate;
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
		if (aTmp[0] == sName)
		{
			return aTmp[1];
		}
	}
}


function getCookieTest(sName)
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

        var cook=eval('('+aTmp[1]+')');
        alert(cook)

         for(var name in cook)
        {
            if (name == sName)
            {
                return cook[name];
            }
        }

    }
}

