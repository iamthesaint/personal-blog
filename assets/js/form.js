// TODO: Create a variable that selects the form element
const formElement = document.querySelector('#form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function formSubmit(event) {

    event.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const userName = document.querySelector('#username').value;

    if (!title || !content || !userName) {
        alert('Please fill out all fields');
        return;
    } else {
        let blogData = {[userName]: userName, [title]: title, [content]: content};
        storeLocalStorage(blogData);
    }
    let redirectURL = 'blog.html';
    redirectPage(redirectURL);
}


    // TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

    formElement.addEventListener('submit', formSubmit);