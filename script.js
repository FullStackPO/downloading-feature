let btn = document.querySelector('button');
let loading = document.querySelector('.loading');
let per = document.querySelector('.per');

btn.addEventListener('click', function(){
    btn.disabled = true;
    let count = 0;
    let loader = setInterval(()=>{
        count++;
        loading.style.width = count+'%'
        per.innerHTML = count+'%'
    },50);
    setTimeout(()=>{
        clearInterval(loader);
    },5000)
    if(count === 100) btn.disabled = false;
})