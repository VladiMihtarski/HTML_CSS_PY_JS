document.getElementById("search-form").addEventListener("submit", function(event) {
            event.preventDefault(); 

            var searchTerm = document.getElementById("search-input").value;
            var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);

            window.location.href = searchUrl; 
        });