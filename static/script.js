document.addEventListener('DOMContentLoaded', () => {
    const resumeBtn = document.querySelector('#resume');
    const resumeFile = document.querySelector('#resumePDF');
    const downloadBtn = document.querySelector('#downloadLink');
    const navbar = document.querySelector('.navbar');
    const page = document.documentElement;
    const clearFormBtn = document.querySelector('#clearBtn');
    const projectCard1 = document.querySelector('#procurementDatabase');
    const projectCard2 = document.querySelector('#fitnessTracker');
    const projectCard3 = document.querySelector('#pokeDex');
    const menu = document.querySelector('#navMenu');
    const navbarDiv = document.querySelector('#navbarElementDiv');
    const container1 = document.querySelector('#content-container1');
    const menuBtn1 = document.querySelector('#homeNav');
    const menuBtn2 = document.querySelector('#projectsNav');
    const menuBtn3 = document.querySelector('#skillsNav');
    const menuBtn4 = document.querySelector('#aboutNav');
    const menuBtn5 = document.querySelector('#contactNav');
    const menuLink1 = document.querySelector('#homeNavLink');
    const menuLink2 = document.querySelector('#projectsNavLink');
    const menuLink3 = document.querySelector('#skillsNavLink');
    const menuLink4 = document.querySelector('#aboutNavLink');
    const menuLink5 = document.querySelector('#contactNavLink');

    menuBtn1.addEventListener('click', e=>{
        menu.classList.remove('open');
        navbarDiv.classList.remove('open');
        menuLink1.click();
    });
    menuBtn2.addEventListener('click', e=>{
        menu.classList.remove('open');
        navbarDiv.classList.remove('open');
        menuLink2.click();
    });
    menuBtn3.addEventListener('click', e=>{
        menu.classList.remove('open');
        navbarDiv.classList.remove('open');
        menuLink3.click();
    });
    menuBtn4.addEventListener('click', e=>{
        menu.classList.remove('open');
        navbarDiv.classList.remove('open');
        menuLink4.click();
    });
    menuBtn5.addEventListener('click', e=>{
        menu.classList.remove('open');
        navbarDiv.classList.remove('open');
        menuLink5.click();
    });

    menu.addEventListener('click', e=>{
        menu.classList.toggle('open');
        navbarDiv.classList.toggle('open');
    });

    resumeBtn.addEventListener('click', e =>{
        // downloadBtn.classList.toggle('visible');
        // resumeFile.classList.toggle('visible');
        if (resumeFile.classList.contains('visible')) {
            resumeFile.classList.remove('visible');
            downloadBtn.classList.remove('visible');
            setTimeout(() => {
                resumeFile.style.display = "none";
                downloadBtn.style.display = "none";
            }, 500);
        } else {
            resumeFile.style.display = "block"; 
            downloadBtn.style.display = "block";
            setTimeout(() => {
                resumeFile.classList.add('visible');
                downloadBtn.classList.add('visible');
            }, 10); 
        }
    });

    window.addEventListener('resize', e=> {
        let width1 = projectCard1.clientWidth;
        let width2 = projectCard2.clientWidth;
        let width3 = projectCard3.clientWidth;
        let width4 = container1.clientWidth;
        projectCard1.style.height = `${width1 / 1.25}px`;
        projectCard2.style.height = `${width2 / 1.25}px`;
        projectCard3.style.height = `${width3 / 1.25}px`;
        container1.style.height = `${width4 / 2.2}px`;
    });

    window.addEventListener('load', () => {
        let width1 = projectCard1.clientWidth;
        let width2 = projectCard2.clientWidth;
        let width3 = projectCard3.clientWidth;
        let width4 = container1.clientWidth;
        projectCard1.style.height = `${width1 / 1.25}px`;
        projectCard2.style.height = `${width2 / 1.25}px`;
        projectCard3.style.height = `${width3 / 1.25}px`;
        container1.style.height = `${width4 / 2.2}px`;
    });

    navbar.addEventListener('mouseover', e => {
        page.classList.add('scroll-smooth');
    });

    navbar.addEventListener('mouseleave', e => {
        page.classList.remove('scroll-smooth');
    });

    clearFormBtn.addEventListener('click', e =>{
        window.location.reload();
    });
});  
