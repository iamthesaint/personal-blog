// TODO: Create logic to toggle the light/dark mode styles for the page and circle and save to local storage

const toggleSwitch = document.getElementById('toggle');
const circleEl = document.getElementById('circle');
const body = document.body;

toggleSwitch.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        document.documentElement.style.setProperty('--circle-color', '#ffb100');
        toggleSwitch.textContent = '*';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        document.documentElement.style.setProperty('--circle-color', '#ffffff');
        toggleSwitch.textContent = 'O';
        localStorage.setItem('theme', 'dark');
    }
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage() {
    let blogData = localStorage.getItem('blogData');
    return blogData ? JSON.parse(blogData) : [];
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(blogData) {
    localStorage.setItem('blogData', JSON.stringify(blogData));
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
