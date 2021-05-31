export class NavHide {
    constructor(){
        this.navBtn = document.getElementById('navbarSupportedContent');
        this.navHide = () => document.getElementById('navbarSupportedContent').classList.remove('show');
        
        document.body.addEventListener('click', () => this.navHide());
        
        this.navBtn.addEventListener ('click', (e) => {
            
            if(e.target.classList.contains('nav-link')) {
                this.navHide();
            }
        });
    }
}