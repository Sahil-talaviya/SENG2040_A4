console.log('Hello World')

const helloworldbox = document.getElementById("Hello-World")
const postsbox = document.getElementById("posts-box")
const spinnerBox = document.getElementById('spinner-box')

$.ajax({
    type: 'GET',
    url: '/Hello-World/',
    success: function(response){
        console.log('success', response.text)
        helloworldbox.textContent = response.text
    },
    error: function(error){
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        console.log(response)
        const data = response.data
        setTimeout(() => {
            spinnerBox.classList.add('not-visible')
            console.log(data)
            data.forEach(element => {
                postsbox.innerHTML += `
                    ${element.title} - <b>${element.body}</b> <br>
                `
            });
        }, 100)

    },
    error: function(response){
        console.log(error)
    }
})