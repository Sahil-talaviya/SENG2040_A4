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
                   <div class="card mb-2">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.body}</p>
                        </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-1">
                                        <a href="#" class="btn btn-primary">Details</a>
                                    </div>
                                    <div class="col-1">
                                        <a href="#" class="btn btn-primary">Like</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                `
            });
        }, 100)

    },
    error: function(response){
        console.log(error)
    }
})