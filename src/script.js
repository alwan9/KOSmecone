// get search bar element
const searchInput = document.getElementById("searchInput");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("name");

// let hapus = document.getElementById('hapus');


// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();

        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.removeAttribute = "block";

        } else if (name.includes()) {
            nameElement.removeAttribute = "block";
        } else {
            // no match, don't display name
            nameElement.style.display = "none";
        }
    }
});

