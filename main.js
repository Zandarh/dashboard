const sidebar = document.querySelector('.mobile-sidebar');

sidebar.addEventListener('click', () => {
    const theSidebar = document.querySelector('.sidebar');
    if(theSidebar.style.display == "none"){
        theSidebar.style.display = "grid";
        theSidebar.style.position = "fixed";
    }
    else{
        theSidebar.style.display = "none";
    }
});