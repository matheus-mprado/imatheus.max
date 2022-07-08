const popularNetflix = [
    {
        id: 1,
        image: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTur5G3ovkPwfBLrmGeqlBxtMt58Ju38NVCzw&usqp=CAU"
        }
    },
    {
        id: 2,
        image: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTur5G3ovkPwfBLrmGeqlBxtMt58Ju38NVCzw&usqp=CAU"
        }
    }
]


function createSection(contentId, data, title) {
    const content = document.getElementById(contentId)

    let html = ''

    html += `<h2>${title}</h2>`
    html += "<article class='row'>"

    data.map(item => {
        html += `
            <div>
                <a href="${item.link}">
                    <img src="${item.image.url}"/>
                </a> 
            </div>`
    })
    
    html += "</article>"

    content.innerHTML = html
}

function app() {
    createSection('popularContent', popularNetflix, "Popular na Netflix")
    createSection('trendingNow', popularNetflix, "Trending Now")
    createSection('WatchItAgain', popularNetflix, "Watch It Again")
    createSection('Outhers', popularNetflix, "Outhers")
}

app()