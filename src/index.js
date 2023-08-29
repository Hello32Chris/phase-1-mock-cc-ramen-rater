// fetch('http://localhost:3000/ramens')
//     .then((resp) => resp.json())
//     .then((data) => renderImage(data))

// // fetch('http://localhost:3000/ramens')
// //     .then((response) => response.json())
// //     .then((data) => renderInfo(data))


// function renderImage(ramenObject) {
//     const ramenDiv = document.querySelector("#ramen-menu")
//     ramenObject.forEach((ramen) => {
//         const ramenImg = document.createElement('img')
//         ramenImg.src = ramen.image
//         ramenImg.alt = `This is ${ramen.name}`
//         ramenDiv.append(ramenImg)

//         console.log(ramen)

//         ramenImg.addEventListener('click', (e) => {
//             let detailDiv = document.querySelector('#ramen-detail')
//             let ramenTitle = document.querySelector('h2')
//             let ramenComm = document.querySelector('h3')
//             let ramenRest = ramen.restaurant
//             let ramenName = ramen.name
//             ramenTitle.textContent = ramenName
//             ramenComm.textContent = ramenRest
//         })
//         // console.log(ramen)
//     })
// }



// // function renderInfo() {
// //     const ramen
// // }


fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((data) => renderRamen(data))


function renderRamen(ramenObj) {
    console.log(ramenObj)

    const ramenMenu = document.getElementById('ramen-menu')
    
    ramenObj.forEach((ramen) => {

        const ramenDiv = document.createElement('img')
        ramenDiv.src = ramen.image
        ramenDiv.alt = `This is ${ramen.name} ramen`
        ramenMenu.append(ramenDiv)

    ramenDiv.addEventListener('click', (e) => {
        ramenName.textContent = String(ramen.name)
        ramenImg.src = ramen.image
        ramenRest.textContent = String(ramen.restaurant)
        ramenCom.textContent = String(ramen.comment)
        ramenRating.textContent = String(ramen.rating)
    })
    
    let ramenName = document.querySelector('.name')
    let ramenImg = document.querySelector('.detail-image')
    let ramenRest = document.querySelector('.restaurant')
    let ramenCom = document.getElementById('comment-display')
    let ramenRating = document.getElementById('rating-display')
})
}

const ramenForm = document.querySelector('form')
ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target[`new-comment`].value,
    }
    renderRamen([newRamen])
})