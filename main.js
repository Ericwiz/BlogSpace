// store the elements in a variable
const formBtn = document.getElementById('form');
const title = document.getElementById('title');
const body = document.getElementById('body');


// use fetch to get data
fetch('https://apis.scrimba.com/jsonplaceholder/posts', { method: "GET", })
    .then(respone => respone.json())
    .then(data => {
        const fivePost = data.slice(0, 10)
        let html = ''
        
        for (let post of fivePost) {
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
        }

        document.getElementById('display').innerHTML = html;
    });


// Button 
formBtn.addEventListener('submit', e => {
    e.preventDefault()

    const post = {
        title: title.value,
        body: body.value
    }

    console.log(post.title)
    console.log(post.body)

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
        'Content-Type': 'application/json'
      }

})
    .then(res => res.json())
        .then(data => {  
            document.getElementById('display').innerHTML += `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        `;
        });
})


