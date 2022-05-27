const toggleBtn = document.querySelector(".btn")
const articlesContainer = document.querySelector(".articles")

// select button
// add click event listener
toggleBtn.addEventListener("click", () => {
    // select root element (html), toggle .dark-theme
    document.documentElement.classList.toggle("dark-theme")
})


// import moment.js
// format date
const articlesData = articles
    .map((article) => {
        const { title, date, length, snippet } = article;
        const formatDate = moment(date).format("MMMM Do, YYYY")
        // select articles
        // iterate over, return article.post 
        // for each article
        return `<article class="post">
            <h2>${title}</h2>
            <div class="post-info">
                <span>${formatDate}</span>
                <span>${length} min read</span>
            </div>
            <p>
                ${snippet}
            </p>
            </article>`
    })
    .join('')

articlesContainer.innerHTML = articlesData
// console.log('dark mode');
