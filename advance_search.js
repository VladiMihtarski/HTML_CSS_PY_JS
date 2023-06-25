        document.getElementById("advanced-search-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Предотвратява изпращането на формата

            var allWords = document.getElementById("all-words-input").value;
            var exactPhrase = document.getElementById("exact-phrase-input").value;
            var anyWords = document.getElementById("any-words-input").value;
            var noneWords = document.getElementById("none-words-input").value;

            var searchQuery = "https://www.google.com/search?q=";

            if (allWords) {
                searchQuery += encodeURIComponent(allWords) + "+";
            }

            if (exactPhrase) {
                searchQuery += "\"" + encodeURIComponent(exactPhrase) + "\"+";
            }

            if (anyWords) {
                searchQuery += encodeURIComponent(anyWords) + "|";
            }

            if (noneWords) {
                searchQuery += "-" + encodeURIComponent(noneWords) + "+";
            }

            searchQuery = searchQuery.slice(0, -1); // Изтриване на последния символ "+" или "|"

            window.location.href = searchQuery; // Пренасочва към Google търсенето
        });
		
		