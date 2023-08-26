let but = Array.from(document.querySelectorAll(".but"));
let input = document.getElementById("input");
let clr = document.getElementById("clr");
let back = document.getElementById("back");
let equal = document.getElementById("equal");
for (i = 0; i < but.length; i++) {
    let a = i;
    but[i].addEventListener("click", () => {
        let userinput = input.value;
        let lastvalue = userinput[userinput.length - 1];
        // console.log(lastvalue);
        if (input.value === '' && but[a].value === '+' ||
            input.value === '' && but[a].value === '/' ||
            input.value === '' && but[a].value === '%' ||
            input.value === '' && but[a].value === '*' ||
            input.value === '' && but[a].value === '.') {
            input.value = '';
        }
        else if (

            but[a].value === '+' && lastvalue === '+' ||
            but[a].value === '-' && lastvalue === '+' ||
            but[a].value === '/' && lastvalue === '+' ||
            but[a].value === '*' && lastvalue === '+' ||
            but[a].value === '%' && lastvalue === '+' ||
            but[a].value === '.' && lastvalue === '+' ||
            but[a].value === '-' && lastvalue === '-' ||
            but[a].value === '+' && lastvalue === '-' ||
            but[a].value === '/' && lastvalue === '-' ||
            but[a].value === '*' && lastvalue === '-' ||
            but[a].value === '%' && lastvalue === '-' ||
            but[a].value === '.' && lastvalue === '-' ||
            but[a].value === '+' && lastvalue === '.' ||
            but[a].value === '-' && lastvalue === '.' ||
            but[a].value === '/' && lastvalue === '.' ||
            but[a].value === '*' && lastvalue === '.' ||
            but[a].value === '%' && lastvalue === '.' ||
            but[a].value === '.' && lastvalue === '.' ||
            but[a].value === '/' && lastvalue === '/' ||
            but[a].value === '-' && lastvalue === '/' ||
            but[a].value === '+' && lastvalue === '/' ||
            but[a].value === '*' && lastvalue === '/' ||
            but[a].value === '%' && lastvalue === '/' ||
            but[a].value === '.' && lastvalue === '/' ||
            but[a].value === '*' && lastvalue === '*' ||
            but[a].value === '-' && lastvalue === '*' ||
            but[a].value === '/' && lastvalue === '*' ||
            but[a].value === '+' && lastvalue === '*' ||
            but[a].value === '%' && lastvalue === '*' ||
            but[a].value === '.' && lastvalue === '*' ||
            but[a].value === '%' && lastvalue === '%' ||
            but[a].value === '-' && lastvalue === '%' ||
            but[a].value === '/' && lastvalue === '%' ||
            but[a].value === '*' && lastvalue === '%' ||
            but[a].value === '.' && lastvalue === '%' ||
            but[a].value === '+' && lastvalue === '%') {
            input.value += '';
        }
        else {
            input.value += but[a].value;

        }
    })
}
clr.addEventListener('click', () => {
    input.value = '';
    oper = [];
    operindex = [];
})
back.addEventListener("click", () => {
    let user_value = input.value.slice(0, input.value.length - 1);
    input.value = user_value;
})

//calculation process
let operindex = [];
let oper = [];
let numbers=[];
equal.addEventListener("click", () => {
    if (input.value[input.value.length - 1] != '+' &&
        input.value[input.value.length - 1] != '-' &&
        input.value[input.value.length - 1] != '/' &&
        input.value[input.value.length - 1] != '*' &&
        input.value[input.value.length - 1] != '.') {
        // for (i = 0; i < input.value.length; i++) {
        //     if (input.value[i] === '+' ||
        //         input.value[i] === '-' ||
        //         input.value[i] === '*' ||
        //         input.value[i] === '/') {
        //         operindex.push(i);
        //     }
        // }
        // for (j = 0; j < operindex.length; j++) {
        //     if (input.value[operindex[j]] === '+' ||
        //         input.value[operindex[j]] === '-' ||
        //         input.value[operindex[j]] === '/' ||
        //         input.value[operindex[j]] === '*') {
        //         oper.push(input.value[operindex[j]]);
        //     }
        // }
        oper=input.value.replace(/[0-9]|\./g,'').split("");
        // console.log(oper);
        numbers = input.value.split(/\+|\-|\/|\*|\%/g);
            if(numbers[0]===''){
                numbers.splice(0,1);
                oper.splice(0,1);
                numbers[0]=-numbers[0];
            }
        console.log("inital numbers :",numbers);
        console.log("inital oper :",oper)
        let per=oper.indexOf('%');
        while (per !=-1) {
            numbers.splice(per,1,numbers[per-1]*(numbers[per]/100));
            oper.splice(per,1);
            per=oper.indexOf("%");
        }
      let divide=oper.indexOf("/");
      while(divide !=-1){
        numbers.splice(divide,2,numbers[divide]/numbers[divide+1]);
        oper.splice(divide,1);
        divide=oper.indexOf('/');
      }

      let multiply=oper.indexOf('*');
      while(multiply!=-1){
        numbers.splice(multiply,2,numbers[multiply]*numbers[multiply+1]);
        oper.splice(multiply,1);
        multiply=oper.indexOf('*');
      }

      let add=oper.indexOf('+');
      while(add!=-1){
        numbers.splice(add,2,parseFloat(numbers[add])+parseFloat(numbers[add+1]));
        oper.splice(add,1);
        add=oper.indexOf('+');
      }
      let sub=oper.indexOf('-');
      while(sub!=-1){
        numbers.splice(sub,2,numbers[sub]-numbers[sub+1]);
        oper.splice(sub,1);
        sub=oper.indexOf('+');
      }
      console.log('numbers array: ',numbers);
      console.log('oper array :',oper);
      input.value=numbers[0];
    }

})


//apply dark theme

let check=document.getElementById("check");
let white=Array.from(document.querySelectorAll(".white"));
check.addEventListener("click",()=>{
    console.log(check.checked);
    white[0].classList.toggle("dark_inp");
        for(i=1;i<white.length;i++){
            white[i].classList.toggle("dark_but");
        }
    
})