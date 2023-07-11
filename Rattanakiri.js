
let day;
let month;
let year;

function show(){
    day = prompt ("Input Day : ");
    month = prompt ("Input Month : ");
    year = prompt ("Input Year : ");

    if(day == 1 || month == 1){
    t = day;
        if(t> 0 && t < 31){
        let total = (49 * Math.cos(((2*3.14)/365)*(t-172))+776.6);
        document.querySelector("#result").innerHTML = total;
        }
    }
}
show;