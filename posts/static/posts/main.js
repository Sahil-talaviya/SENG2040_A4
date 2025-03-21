console.log('Hello World')

const helloworldbox = document.getElementById("Hello-World")

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