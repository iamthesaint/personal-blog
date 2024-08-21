// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector('#main');
const backButton = document.querySelector('#back');


// TODO: Create a function that builds an element and appends it to the DOM

const createBlogPostEl = (blogData) => {
    const listElement = document.createElement('li');
    const articleElement = document.createElement('article');
    articleElement.classList.add('blog-post');
    const titleElement = document.createElement('h2');
    titleElement.textContent = blogData.title;
    articleElement.appendChild(titleElement);
    const contentElement = document.createElement('blockquote');
    contentElement.textContent = blogData.content;
    articleElement.appendChild(contentElement);
    const authorElement = document.createElement('p');
    authorElement.textContent = `Posted by ${blogData.userName}`;
    articleElement.appendChild(authorElement);
    listElement.appendChild(articleElement);
    mainElement.appendChild(listElement);
}


// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = () => {
    const message = document.createElement('p');
    message.textContent = "No Blog posts yet...";
    mainElement.appendChild(message);
};


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const displayBlogPosts = (blogData) => {
    for (const blog of blogData) {
        createBlogPostEl(blog);
    }
}

const renderBlogList = () => {
    const blogData = readLocalStorage();
    if (!blogData || blogData.length === 0) {
        noPosts();
    } else {
        displayBlogPosts(blogData);
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


