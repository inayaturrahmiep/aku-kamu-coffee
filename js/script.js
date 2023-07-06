// toggle class active for humberger menu
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector
('#hamburger-menu').
onclick = () => {
navbarNav.classList.toggle('active');
};

// toggle class active for search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick= (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Toggle class active for shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = () => {
    shoppingCart.classList.toggle('active');
}

// Click outside the element
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});              

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail-button');

itemDetailButton.onclick=(e)=>{
    itemDetailModal.style.display='flex';
    e.preventDefault();
};

// Close Button
document.querySelector('.modal .close-icon').onclick = (e) =>{
    itemDetailModal.style.display='none';
    e.preventDefault();
};

// Click Outside modal
const modal = document.querySelector('.item-detail-modal');
window.onclick = (e) => {
    if (e.target === modal){
        modal.style.display='none';
    }
}