
fetch('https://apis.scrimba.com/jsonplaceholder/posts', { method: "GET" })
    .then(respone => respone.json()).then(data => {
        const fivePost = data.slice(0, 10)
        console.log(fivePost)

        
        
        let  html = ''
        
        for (let post of fivePost) {
           html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
        }

        document.getElementById('display').innerHTML = html;
})