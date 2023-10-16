const menuItems = document.querySelectorAll('.menu-item');
var menuItemsArr = Array.prototype.slice.call(menuItems);
const posts = document.querySelectorAll('.posts');


const changeActiveMenuItem = (item) => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
    item.classList.add('active');
}

const changeActivePosts = (index) => {
    posts.forEach(post => {
        post.classList.add('unactive');
    
    })
    posts[index].classList.remove('unactive');
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveMenuItem(item);
        changeActivePosts(menuItemsArr.indexOf(item));
        scroll(0, 0);
    })
})

window.oncontextmenu = function () {
    return false;
}