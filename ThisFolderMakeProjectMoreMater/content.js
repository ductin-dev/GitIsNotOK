for (i=0;i<30;i++){
   x=document.querySelectorAll("td > font")[i];
   x.style.color='red';
   x.innerText='Absent'
}
document.querySelector("tfoot > tr > td").innerHTML='<b>Absent</b>: 100% absent so far (30 absent on 30 total).';
