var Link = {
  SetColor:function (color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  SetColor:function (color){
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function blackandwhite(self){
var target = document.querySelector('body')
if(self.value === 'night'){
Body.SetBackgroundColor('black');
Body.SetColor('white');
self.value = 'day';
Link.SetColor('powderblue');
}else{
Body.SetBackgroundColor('white');
Body.SetColor('black');
self.value = 'night';
Link.SetColor('blue');
}
}
