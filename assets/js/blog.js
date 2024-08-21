// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector('#main');
const backButton = document.querySelector('#back');


// TODO: Create a function that builds an element and appends it to the DOM

const createBlogPostEl = (blogData) => {

    const blog = document.createElement('card');
    blog.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = blogData.title;

    const content = document.createElement('p');
    content.textContent = blogData.content;

    const username = document.createElement('blockquote');
    username.textContent = `Author: ${blogData.username}`;

    blog.appendChild(title);
    blog.appendChild(content);
    blog.appendChild(username);


    mainElement.appendChild(blog);
    console.log('Blog post appended');
}



// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = () => {
    if (!mainElement) return;
    const message = document.createElement('p');
    message.textContent = "No Blog posts yet...";
    mainElement.appendChild(message);
    console.log('No posts message appended');
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const renderBlogList = () => {
    const blogData = readLocalStorage();
    if (!Array.isArray(blogData) || blogData.length === 0) {
        noPosts();
    } else {
        createBlogPostEl(blogData);
    }
}

// TODO: Call the `renderBlogList` function

renderBlogList();


// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', () => {
    let redirectURL = 'index.html';

    redirectPage(redirectURL);
}
);


