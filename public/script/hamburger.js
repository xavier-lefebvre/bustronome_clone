const toggleButton = document.querySelector('#toggle-button');
const navigationList = document.querySelector('#navigation-list');

toggleButton.addEventListener('click', () => {
    navigationList.classList.toggle('active');
})