// select root element (html), toggle .dark-theme

// select articles
// iterate over, return article.post for each article

// import moment.js
// format date

const toggleBtn = document.querySelector(".btn")
const articlesContainer = document.querySelector(".articles")

// select button
// add click event listener
toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme")
})

const articlesData = articles
    .map((article) => {
        const { title, date, length, snippet } = article;
        const formatDate = moment(date).format("MMMM Do, YYYY")
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
