document.addEventListener("DOMContentLoaded", function(){
  const add_btn=document.getElementById('add_btn');
  
  add_btn.addEventListener('click',function(){
    const start_time=document.getElementById('start_time').value;
    const end_time=document.getElementById('end_time').value;
    const todo=document.getElementById('todo').value;
    console.log(start_time);
    console.log(end_time);
    console.log(todo);
    convert(start_time, end_time, todo);
    
  })

  function convert(start_time, end_time){
    const start_time_h=start_time.substr(0,2);
    const start_time_m=start_time.substr(3,2);
    const end_time_h=end_time.substr(0,2);
    const end_time_m=end_time.substr(3,2);

    if(end_time_h<start_time_h){
      alert('Reset the time')
    }else{
      if(start_time_h>5){
        var angle1=(start_time_h-6)*15;
        var angle2=start_time_m*0.25;
        var start_degrees=angle1+angle2;

        var angle3=(end_time_h-6)*15;
        var angle4=end_time_m*0.25;
        var end_degrees=angle3+angle4;

        draw(start_degrees, end_degrees);
        write(start_degrees, end_degrees,todo.value);
      }else{
        console.log('고민중임...');
      }
    }
  }

  var canvas = document.getElementById('canvas');
  function draw(start_degrees, end_degrees){
    if(canvas.getContext){
      const ctx = canvas.getContext('2d');
      //각도를 degree가 아닌 radian으로 사용하기 때문에 계산 필요
      //라디안: 반지름에 대한 호의 길이의 비
      const start_angle=(Math.PI/180)*start_degrees;
      const end_angle=(Math.PI/180)*end_degrees;
      ctx.beginPath();
      ctx.moveTo(150,150);
      ctx.arc(150, 150, 150, start_angle, end_angle, false);
      ctx.fillStyle = "rgba(255, 165, 0, 1)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 165, 0, 1)";
      ctx.stroke();
    }else{
      //canvas-unsupported code here
    
    }
  }
  function write(start_degrees, end_degrees, todo){
    if(canvas.getContext){
      const ctx = canvas.getContext('2d');
      const start_angle=(Math.PI/180)*start_degrees;
      const end_angle=(Math.PI/180)*end_degrees;
      const todo_angle=(start_angle+end_angle)/2;
      ctx.font = '20px serif';
      //x,y좌표값 계산해서 넣기
      ctx.fillText(todo, 10, 10);
      //x,y좌표값 계산해서 넣기
      const list=document.getElementById('list');
      list.innerHTML+='<li>'+todo+'<button>X</button></li>';
    }
  }
});