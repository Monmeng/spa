function wif(){
  var width=document.getElementById('width');
  if(width.value==''){
     var a=document.getElementById('a');
      a.innerHTML="宽度不能为空！";
  }
  else{
    if(isNaN(width.value)==true){
      var a=document.getElementById('a');
      a.innerHTML='宽度必须是数值！';
    }else{
      var a=document.getElementById('a');
      a.innerHTML='';
    }
  }
}
function hif(){
  var height=document.getElementById('height');
  if(height.value==''){
     var b=document.getElementById('b');
      b.innerHTML="宽度不能为空！";
  }
  else{
    if(isNaN(height.value)==true){
      var b=document.getElementById('b');
      b.innerHTML='宽度必须是数值！';
    }else{
      var b=document.getElementById('b');
      b.innerHTML='';
    }
  }
}

function jisuan(){ 
  if(a.innerHTML=='' && b.innerHTML==''){
     var width=document.getElementById('width');
     var w=width.value;
     var height=document.getElementById('height');
     var h=height.value;
     var area=document.getElementById('area');
     var circ=document.getElementById('circ');
     var jcirc=w*2+h*2;
     var jarea=w*h;
     circ.value=jcirc;
     area.value=jarea;
  }else{
     var area=document.getElementById('area');
     var circ=document.getElementById('circ');
     circ.value=0;
     area.value=0;
  }
}
