var c = document.getElementById("cel");
var f = document.getElementById("far");

cel.addEventListener('input',function(){
     let c = this.value;
     let f = (9/5) * c + 32;
     if(!Number.isInteger()){
          f=f.toFixed(4);
     }
     far.value =f;
 });

far.addEventListener('input',function(){
     let f = this.value;
     let c = (f - 32) * 5/9;
     if(!Number.isInteger()){
          c = c.toFixed(4);
     }
     cel.value = c;
});