document.getElementById("image-search-form").addEventListener("submit", function(event) {
           event.preventDefault(); 

           var searchTerm = document.getElementById("image-search-input").value;
           var searchUrl = "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(searchTerm);

           window.location.href = searchUrl; 
         });