let btn = document.querySelector('button');
let loading = document.querySelector('.loading');
let per = document.querySelector('.per');

btn.addEventListener('click', function(){
    btn.disabled = true;
    let count = 0;
    let loader = setInterval(() => {
        count++;
        loading.style.width = count + "%";
        per.innerHTML = count + "%";

        if (count === 100) {
            clearInterval(loader);
            btn.disabled = false;
        }
    }, 50);
})