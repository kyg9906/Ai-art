var Links={
  setColor:function(color){
    // var alist=document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length){
    //   alist[i].style.color=color;
    //   i=i+1;
    $('a').css('color', color);
  }
}
var Disq={
  setColor:function(color){
  $('#disqus_thread').css('color',color);
}
}
  var Borderbottom={
    setColor: function(color){
      $('h1').css('border-bottom-color',color);
    }
  }
  var Borderright={
    setColor:function(color){
      $('#grid ol').css('border-right-color',color);
    }
  }

var Body={
    setColor:function(color){
      // document.querySelector('body').style.color=color;
      $('body').css('color',color);
  },
    setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
    }
}

  function nightDay(self){
    var target=document.querySelector('body');
    if(self.value ==='night'){
      Links.setColor('powderblue');
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Disq.setColor('white');
      Borderbottom.setColor('white');
      Borderright.setColor('white');
      self.value = 'day';
    } else{
      Links.setColor('black');
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Disq.setColor('black');
      Borderbottom.setColor('black');
      Borderright.setColor('black');
      self.value= 'night';
    }
  }
