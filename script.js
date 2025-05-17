///////1///////
const regExp =/^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}
console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

//222222222222//////////
// let cont =0;
// const intervalId=setInterval(()=> {
//     cont++;
//     console.log("Прошла секунда")
//     if (cont === 10) {
//         clearInterval(intervalId)
//     }
// },1000);

////3333333333////////////////////////
const count = () => {
    let i = 1;
    const interval = setInterval(()=>{
        console.log(i)
        if (i===10){
            clearInterval(interval)
        }
        i++;
    },1000);
};
count();

////44444444444///////////////
const box = document.getElementById("colorBox");
box.addEventListener('click', () => {
    box.classList.toggle('active')
});

//55555555555////////////

const button=document.querySelector('button')
button.onclick=()=>{
const request=new XMLHttpRequest()
    request.open('GET','data.json')
    request.setRequestHeader('Content-type','application/json')
    request.send()
    console.log(request)
}

