const asideToggle = document.getElementById('aside-toggle');
const aside = document.getElementById('aside');

asideToggle.addEventListener('click' , () => {
aside.classList.toggle('show');
});