const sidebar = document.querySelector('.mobile-sidebar');
const theSidebar = document.querySelector('.sidebar');

if (window.innerWidth <= 460){
    theSidebar.style.display =  "none";
}


sidebar.addEventListener('click', () => {
    if(theSidebar.style.display == "none"){
        theSidebar.style.display = "grid";
        theSidebar.style.position = "fixed";
    }
    else{
        theSidebar.style.display = "none";
    }
});