document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const add_btn=document.getElementById('add_btn');
  const ctx = canvas.getContext('2d');

  if(canvas.getContext){
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.arc(150, 150, 149, 0, 360, false);
    ctx.strokeStyle = "rgba(0, 0, 0, .5)";
    ctx.stroke();
  }else{
    alert("canvas-unsupported");
  }

  add_btn.addEventListener('click',function(){
    const start_time=document.getElementById('start_time').value;
    const end_time=document.getElementById('end_time').value;
    const todo=document.getElementById('todo').value;
    convert(start_time, end_time, todo);
  })

  delete_btn.addEventListener('click',function(){
    
  })

  //시간계산
  function convert(start_time, end_time, todo){
    let start_time_h=start_time.substr(0,2);
    let start_time_m=start_time.substr(3,2);
    let end_time_h=end_time.substr(0,2);
    let end_time_m=end_time.substr(3,2);
    console.log(start_time_h);
    console.log(end_time_h);
    // if(end_time_h<start_time_h){
    //   alert('시간이 이상해요!');
    // }else{
      write(todo);
      divide_time(start_time_h, start_time_m, end_time_h, end_time_m,todo);
      if(start_time_h>5){
        const start_degrees=(start_time_h-6)*15+start_time_m*0.25;
        const end_degrees=(end_time_h-6)*15+end_time_m*0.25;
        // divide_time(start_time_h, start_time_m, end_time_h, end_time_m,todo);
        draw(start_degrees, end_degrees);
      }else if(start_time_h<=5){
        start_time_h=parseInt(start_time.substr(1,1));
        start_time_m=start_time.substr(3,2);
        end_time_h=parseInt(end_time.substr(1,1));
        end_time_m=end_time.substr(3,2);
        const start_degrees=(start_time_h+19)*15+start_time_m*0.25;
        const end_degrees=(end_time_h+19)*15+end_time_m*0.25;
        // divide_time(start_time_h, start_time_m, end_time_h, end_time_m,todo);
        draw(start_degrees, end_degrees);
      // }
    }
  }

  function divide_time(start_time_h, start_time_m, end_time_h, end_time_m,todo){
    const middle_h=(parseInt(start_time_h)+parseInt(end_time_h))/2;
    const middle_m=(parseInt(start_time_m)+parseInt(end_time_m))/2;
    draw_todo(middle_h, middle_m, todo);
  }

  //캔버스에 색상 채우기
  function draw(start_degrees, end_degrees){
    //각도를 degree가 아닌 radian으로 사용하기 때문에 계산 필요
    //라디안: 반지름에 대한 호의 길이의 비
    const start_angle=(Math.PI/180)*start_degrees;
    const end_angle=(Math.PI/180)*end_degrees;
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.arc(150, 150, 150, start_angle, end_angle, false);
    ctx.fillStyle = 'rgba(' + Math.floor(255 - 42.5 * Math.floor(Math.random()*7)) + ', ' + Math.floor(255 - 42.5 * Math.floor(Math.random()*7)) + ', '+Math.floor(255 - 42.5 * Math.floor(Math.random()*7))+', .5)';
    ctx.fill();
  }
  //캔버스에 글씨 쓰기
  //시간을 받아서
  function draw_todo(middle_h, middle_m, todo){
    //시간을 나눠서 좌표 구하기
    const middle_degrees=(middle_h-6)*15+middle_m*0.25;
    const x=parseInt(130*Math.cos(Math.PI/180*middle_degrees));
    const y=parseInt(130*Math.sin(Math.PI/180*middle_degrees));
    const ctx = canvas.getContext('2d');
    console.log(x,y);
    ctx.style="black";
    ctx.fillText("!!!!!!", x+150, y+150);
  }

  //리스트에 쓰기
  function write(todo){
    if(canvas.getContext){
      list.innerHTML+='<li class="clearfix"><span>'+todo+'</span><button class="delete_btn">X</button></li>';
    }
  }

});