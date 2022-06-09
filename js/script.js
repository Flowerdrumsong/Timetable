document.addEventListener("DOMContentLoaded", function(){
  const add_btn=document.getElementById('add_btn');
  
  add_btn.addEventListener('click',function(){
    const start_time=document.getElementById('start_time').value;
    const end_time=document.getElementById('end_time').value;
    console.log(start_time);
    console.log(end_time);
    convert(start_time, end_time);
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
        drow(start_degrees, end_degrees);
      }else{
        console.log('고민중임...');
      }
    }
  }
//목포~행신 일요일
  var canvas = document.getElementById('canvas');
  function drow(start_degrees, end_degrees){
    if(canvas.getContext){
      const ctx = canvas.getContext('2d');
      const start_angle=(Math.PI/180)*start_degrees;
      const end_angle=(Math.PI/180)*end_degrees;
      ctx.beginPath();
      ctx.moveTo(150,150);
      ctx.arc(150, 150, 150, start_angle, end_angle, false);
      ctx.fillStyle = "rgba(255, 165, 0, 1)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 1)";
      ctx.stroke();
    }else{
      //canvas-unsupported code here
    }
  }
});