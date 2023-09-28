
        // // Get references to the form, input fields, and blog list
        // const blogForm = document.getElementById("blog-form");
        // const blogTitle = document.getElementById("blog-title");
        // const blogDescription = document.getElementById("blog-description");
        // const blogList = document.getElementById("blog-list");

        // // Function to add a blog to the list and localStorage
        // function addBlogToLocalStorage(title, description) {
        //     // Get existing blogs from localStorage or create an empty array
        //     const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

        //     // Check if description is empty
        //     if (!description.trim()) {
        //         alert("Description cannot be empty.");
        //         return;
        //     }

        //     // Add the new blog to the array
        //     existingBlogs.unshift({ title, description, date: new Date().toLocaleString() });

        //     // Save the updated array to localStorage
        //     localStorage.setItem("blogs", JSON.stringify(existingBlogs));

        //     // Refresh the displayed blogs
        //     displayBlogsFromLocalStorage();
        // }

        // // Function to display blogs from localStorage
        // function displayBlogsFromLocalStorage() {
        //     const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

        //     // Clear the current blog list
        //     blogList.innerHTML = '';

        //     // Loop through the blogs and add them to the list
        //     for (const blog of existingBlogs) {
        //         // Create a div element for each blog entry
        //         const blogEntry = document.createElement("div");
        //         blogEntry.classList.add("blog-entry");

        //         // Create a container for the title and date
        //         const titleAndDateContainer = document.createElement("div");
        //         titleAndDateContainer.classList.add("title-and-date-container");

        //         // Add the title to the title and date container
        //         const blogTitleElement = document.createElement("div");
        //         blogTitleElement.classList.add("blog-title");
        //         blogTitleElement.textContent = blog.title;
        //         titleAndDateContainer.appendChild(blogTitleElement);

        //         // Add the date to the title and date container
        //         const blogDateElement = document.createElement("div");
        //         blogDateElement.classList.add("blog-date");
        //         blogDateElement.textContent = `Submitted on: ${blog.date}`;
        //         titleAndDateContainer.appendChild(blogDateElement);

        //         // Add the title and date container to the blog entry
        //         blogEntry.appendChild(titleAndDateContainer);

        //         // Add the description to the blog entry
        //         const blogDescriptionElement = document.createElement("div");
        //         blogDescriptionElement.classList.add("blog-description");
        //         blogDescriptionElement.textContent = blog.description;
        //         blogEntry.appendChild(blogDescriptionElement);

        //         // Add the blog entry to the list
        //         blogList.appendChild(blogEntry);
        //     }
        // }

        // // Add an event listener for form submission
        // blogForm.addEventListener("submit", function (event) {
        //     event.preventDefault(); // Prevent the default form submission

        //     // Get the blog title and description from the inputs
        //     const newBlogTitle = blogTitle.value;
        //     const newBlogDescription = blogDescription.value;

        //     // Add the new blog to the list and localStorage
        //     addBlogToLocalStorage(newBlogTitle, newBlogDescription);

        //     // Clear the inputs after submission
        //     blogTitle.value = "";
        //     blogDescription.value = "";
        // });

        // // Add an event listener for search form submission
        // const searchForm = document.getElementById("search-form");
        // const searchInput = document.getElementById("search-input");

        // searchForm.addEventListener("submit", function (event) {
        //     event.preventDefault(); // Prevent the default form submission
        //     const searchQuery = searchInput.value.trim().toLowerCase();
        //     searchBlogs(searchQuery);
        // });

        // // Function to filter and display blogs that match the search query
        // function searchBlogs(query) {
        //     // Retrieve blogs from localStorage
        //     const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        //     // Clear the current blog list
        //     blogList.innerHTML = '';

        //     // Loop through the blogs and add matching ones to the list
        //     for (const blog of existingBlogs) {
        //         const blogTitle = blog.title.toLowerCase();
        //         const blogDescription = blog.description.toLowerCase();

        //         if (blogTitle.includes(query) || blogDescription.includes(query)) {
        //             const blogEntry = document.createElement("div");
        //             blogEntry.classList.add("blog-entry");

        //             const titleAndDateContainer = document.createElement("div");
        //             titleAndDateContainer.classList.add("title-and-date-container");

        //             const blogTitleElement = document.createElement("div");
        //             blogTitleElement.classList.add("blog-title");
        //             blogTitleElement.textContent = blog.title;
        //             titleAndDateContainer.appendChild(blogTitleElement);

        //             const blogDateElement = document.createElement("div");
        //             blogDateElement.classList.add("blog-date");
        //             blogDateElement.textContent = `Submitted on: ${blog.date}`;
        //             titleAndDateContainer.appendChild(blogDateElement);

        //             blogEntry.appendChild(titleAndDateContainer);

        //             const blogDescriptionElement = document.createElement("div");
        //             blogDescriptionElement.classList.add("blog-description");
        //             blogDescriptionElement.textContent = blog.description;
        //             blogEntry.appendChild(blogDescriptionElement);

        //             blogList.appendChild(blogEntry);
        //         }
        //     }
        // }

        // // Display blogs from localStorage when the page loads
        // displayBlogsFromLocalStorage();
    