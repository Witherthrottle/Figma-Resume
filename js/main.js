function loadpage(button){
    button.onclick = () => {
        document.querySelectorAll('#page').forEach( (page) => {page.style.display = 'none';
        });
        document.querySelector(`.${button.dataset.page}`).style.display = 'block';
        document.querySelectorAll(".navbar-flex a").forEach((button)=>{button.style.textDecoration='none';})
        button.style.textDecoration='underline';
    }
}

document.addEventListener('DOMContentLoaded',  () => {
    // load page
    document.querySelectorAll(".navbar-flex a").forEach((button) =>{
        loadpage(button);
    });
    let bars = document.querySelector('.navbar i');
    bars.onclick = () => {
        console.log("clicked");
        let navbar = document.querySelector('.navbar .navbar-flex-2')
        if (navbar.style.animationName==='none' || navbar.style.animationName === ''){
            console.log('yes');
            navbar.style.animationName = 'slide';
            navbar.style.right = '0px';
        }
        else if (navbar.style.animationName === 'slide'){
            navbar.style.animationName = 'slideback';
            navbar.style.right = '-300px';
        }
        else if (navbar.style.animationName === 'slideback'){
            navbar.style.animationName = 'slide';
            navbar.style.right = '0px';
        }

    }


});