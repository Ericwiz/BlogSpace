// store the elements in a variable
const formBtn = document.getElementById('form');
const title = document.getElementById('title');
const body = document.getElementById('body');

// array to hold the post
let postArray = []

function renderPosts() {

    let html = ''
        
        for (let post of postArray) {
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
        }

        document.getElementById('display').innerHTML = html;
}


// use fetch to get data
fetch('https://apis.scrimba.com/jsonplaceholder/posts', { method: "GET", })
    .then(respone => respone.json())
    .then(data => {
        postArray = data.slice(0, 5)
        renderPosts()
    });


// Button 
formBtn.addEventListener('submit', e => {
    e.preventDefault()

    const data = {
        title: title.value,
        body: body.value
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
      }

})
    .then(res => res.json())
        .then(post => {  
            
            postArray.splice(0, 0,post)
            renderPosts()
        });
})


