// let a = fetch('')
//     .then(res => res.json())
//     .then(data => {
//         for (let i = 0; i < data.length; i++)
//             console.log(data[i].name)
//     })




let b = document.querySelector(".text")
let c = document.querySelector(".tittle")

let a = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++)
            data.forEach(e => {
                document.write(c.innerHTML = ` 
                    <p class="text">Title</p>
    <h2>${e.title}</h2>`)
            });

    })










