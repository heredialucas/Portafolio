document.addEventListener('DOMContentLoaded', function (){

    const navBtn = document.getElementById('navbarSupportedContent');
    const navHide = () => document.getElementById('navbarSupportedContent').classList.remove('show');
    // const navMin = () => document.querySelector('.navbar').style.width = '130px';
    // const navRadius = () => document.querySelector('.navbar').style.borderRadius = '0px 0px 23px 0px';
    navBtn.addEventListener ('click', (e) => {
            
        if(e.target.classList.contains('nav-link')) {
            navHide();
            // navMin();
            // navRadius();
        }
    });
    
    document.body.addEventListener('click', () => navHide());
})
