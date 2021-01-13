/***** Deliverable 1 *****/






/***** Deliverable 2 *****/





/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

// const profileImg = document.querySelector("#profile img")
// profileImg.src = traveler.photo
// profileImg.alt = traveler.name

// const profileH2 = document.querySelector("#profile h2")
// profileH2.textContent = traveler.name

// const profileEm = document.querySelector("#profile em")
// profileEm.textContent = traveler.nickname

// const likes = document.querySelector("#profile .likes")
// likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/


const header = document.querySelector("#header")
header.classList.add('pinkd')

console.log("Here's your header:", header)

header.addEventListener('click', function () {
    if (header.matches('.hotpink')) 
    {
        toggleColor(document.querySelector("h1#header"))
        header.classList.remove ('pinkd')
}
else {
    toggleColor(document.querySelector("h1#header"))
    header.classList.add ('pinkd')
}

})

/***** Deliverable 2 *****/

let likeButton = document.querySelector('.like-button')
likeButton.addEventListener ('click', function ({
const likes = document.querySelector('.likes');
const likesArray = likes.textContent.split(' ');
const likesInt = parseInt(likes[0]);
likesInt ++;
document.querySelector('.likes').textContent = `${likesInt} likes`
}
/***** Deliverable 3 *****/
const sForm = document.querySelector('#new-animal-sighting-form')

sForm.addEventListener('submit', function(e) { 
    e.preventDefault

    const speciesI = e.target.species.value
    const speciesLinkI = e.target.link.value
    const speciesPhotoI = e.target.link.value
    const speciesDescriptionI = e.target.description.value

    const newSpecies = {
        species: speciesI,
        link: speciesLinkI,
        photo: speciesPhotoI,
        description: speciesDescriptionI

    }
    renderOneSpecies(newSpecies)
    e.target.reset
})