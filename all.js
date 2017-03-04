window.onload = function(){
  var welcome =document.getElementsByTagName('div')[0];

  addEvent(welcome,'click',function(){

  	welcome.style.display='none';

  	document.getElementsByTagName("body")[0].setAttribute("style","background-color:#f4f7f6");
  	document.getElementById('all').style.display='block';
  	// window.requestAnimFrame = (function(){
   //    return  window.requestAnimationFrame       ||
   //          window.webkitRequestAnimationFrame ||
   //          window.mozRequestAnimationFrame    ||
   //          function( callback ){
   //            window.setTimeout(callback, 1000 / 60);
   //          };
   //  })


    var canvas1=document.getElementById('canvas1');
    var ctx1= canvas1.getContext('2d');
    var rad = Math.PI*2/100;
    function jineng(name,x,y){
    ctx1.beginPath();
    ctx1.font="35px Arial";
    ctx1.fillStyle='#fff';
    ctx1.fillText(name,x,y );
    ctx1.closePath();
    }
    jineng('html+css',95,450);
    jineng('javascript',365,450);
    jineng('jquery',655,450);
    jineng('es6+h5+css3',845,450);
    jineng('webpack+git',1115,450);

    function circle(x,y,color,n){
      
      ctx1.save();
      ctx1.beginPath();
      ctx1.arc(x,y,100,-Math.PI/2, -Math.PI/2 +n*rad,false);
      ctx1.strokeStyle=color;
      ctx1.lineWidth=10;
      ctx1.stroke();
      ctx1.closePath();
      ctx1.restore();
    }

    function text(n,x,y){
      ctx1.save();
      ctx1.beginPath();
      ctx1.font="50px fangsong";
      ctx1.fillStyle='#f4f7f6';
      ctx1.fillText(n.toFixed(0)+"%", x, y);
      ctx1.closePath();
      ctx1.restore();
    }
    circle(200,230,'rgba(255,97,0,0.3)',100);
    circle(450,230,'rgba(254,254,65,0.3)',100);
    circle(700,230,'rgba(174,238,238,0.3)',100);
    circle(950,230,'rgba(135,206,250,0.3)',100);
    circle(1200,230,'rgba(255,106,106,0.3)',100);
    var  speed1 = 1,speed2=2,speed3=1,speed4=2,speed5=1;

//     setTimeout(function() {
//       var id;

//       function drawFrame(speed,many,x,y,color){  
//         circle(x,y,color,speed);
//         speed += 0.5; 
//         if(speed < many) {
      
// requestAnimationFrame(drawFrame(speed,many,x,y,color));
            
//         }
        
    
//     }
//       drawFrame(speed1,95,200,230,'rgba(255,97,0,1)');
//     },0)
    
    
  
  
    
 





 (
     function drawFrame(){ 
   
            var id1=requestAnimationFrame(drawFrame,canvas1);
            circle(200,230,'rgba(255,97,0,1)',speed1);
            ctx1.clearRect(150, 150, 100, 100);
            text(speed1,160,245);
            if(speed1 > 100) speed1 = 0;
            speed1 += 0.5;
            if(speed1>=90){  cancelAnimationFrame(id1);}    }()); 



  (function drawFrame2(){
           var id2=requestAnimationFrame(drawFrame2,canvas1);
        circle(450,230,'rgba(254,254,65,1)',speed2);
          ctx1.clearRect(400, 150, 100, 100);
            text(speed2,410,245);
            if(speed2 > 100) speed2 = 0;
            speed2 += 0.5;
            if(speed2 >=85){cancelAnimationFrame(id2);}
        }()); 

            (function drawFrame3(){
           var id3=requestAnimationFrame(drawFrame3,canvas1);
        circle(700,230,'rgba(174,238,238,1)',speed3);
        ctx1.clearRect(650, 150, 100, 100);
            text(speed3,660,245);
            if(speed3 > 100) speed3 = 0;
            speed3 += 0.5;
            if(speed3 >=80){cancelAnimationFrame(id3);}
        }()); 
            (function drawFrame4(){
           var id4=requestAnimationFrame(drawFrame4,canvas1);
    circle(950,230,'rgba(135,206,250,1)',speed4);
    ctx1.clearRect(900, 150, 100, 100);
            text(speed4,910,245);
            if(speed4 > 100) speed4 = 0;
            speed4 += 0.5;
            if(speed4 >=85){cancelAnimationFrame(id4);}
        }()); 
              (function drawFrame5(){
           var id5=requestAnimationFrame(drawFrame5,canvas1);
circle(1200,230,'rgba(255,106,106,1)',speed5);
ctx1.clearRect(1150, 150, 100, 100);
            text(speed5,1160,245);
            if(speed5 > 100) speed5 = 0;
            speed5 += 0.5;
            if(speed5 >=75){
            	cancelAnimationFrame(id5);
            }
        }()); 
  })  

  var myphoto= document.getElementById('myphoto');
  var personal= document.getElementById('personal');
  var btton2=document.getElementById('btton2');
   var btton1=document.getElementById('btton1');
  addEvent(myphoto,'mouseover',function(){
  	this.style.transform='translateY(200px) rotateX(90deg) ';
    var photo=document.getElementById('photo');
  	console.log(photo);

  })
  addEvent(personal,'mouseout',function(){
  	myphoto.style.transform='translateY(0px)';

  })
   btton1.style.color='red';
  addEvent(btton2,'click',function(){
    
var curPage = document.getElementById('skills');
            curPage.style.webkitTransform = "rotateX(-90deg)";
            var nextPage = document.getElementById('experience');
            nextPage.style.webkitTransform = "rotateX(0deg)";
            this.style.color='red';
            btton1.style.color='black';
  })
   addEvent(btton1,'click',function(){
    
var curPage = document.getElementById('experience');
            curPage.style.webkitTransform = "rotateX(90deg)";
            var nextPage = document.getElementById('skills');
            nextPage.style.webkitTransform = "rotateX(0deg)";
            this.style.color='red';
            btton2.style.color='black';
  })

}