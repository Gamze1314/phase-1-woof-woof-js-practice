//CLICK ON DOGS IN THE DOG BAR TO SEE MORE INFO ABOUT THE GOOD PUPPER;
//MORE INFO INCLUDES A DOG PIC, A DOG NAME, AND A DOG BUTTON THAT INDICATES WHETHER IT IS A GOOD DOG OR A BAD DOG;
//CLICK ON GOOD DOG/BAD DOG BUTTON IN ORDER TO TOGGLE PUP GOODNESS;
//CLICK ON "FILTER GOOD DOGS" BUTTON IN ORDER TO JUST SEE GOOD DOGS OR SEE ALL DOGS IN DOG BAR.
const dogBar = document.getElementById('dog-bar');
const divContainer = document.getElementById('dog-info')

let dogArr = []
// fetch pups data
fetch('http://localhost:3000/pups')
.then((resp) => (resp.json()))
.then((dogArray) => {
    
    dogArr.push(dogArray)
    console.log(dogArr)

    dogArray.forEach((dog) => {
        const span = document.createElement('span');
        span.innerHTML = dog.name;
        dogBar.appendChild(span); 

        
        span.addEventListener('click', () => {
            
            divContainer.innerHTML = ''

            const imgTag = document.createElement('img')
            imgTag.src = dog.image
            const h2 = document.createElement('h2')
            h2.innerText = dog.name
            const button = document.createElement('button')
            button.innerHTML = dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!';

        button.addEventListener('click', () => {
            button.innerHTML = dog.isGoodDog ? 'Bad Dog!' : 'Good Dog!'
           });

        divContainer.appendChild(imgTag)
        divContainer.appendChild(h2)
        divContainer.appendChild(button)
   
           });
    })

    const filterButton = document.getElementById('good-dog-filter');

    filterButton.addEventListener('click', () => {
        filterButton.innerHTML = 'Filter good dogs: ON';
        // Remove any existing filter
        dogBar.innerHTML = '';
        dogArray.forEach((dog) => {
            const span = document.createElement('span');
            span.innerHTML = dog.name;
            dogBar.appendChild(span);
        });
   
        // Turn filter on
        filterButton.innerHTML = 'Filter good dogs: ON';
        // Remove dogs with isGoodDog: false
        const filteredDogs = dogArray.filter((dog) => dog.isGoodDog);
        console.log(filteredDogs)
        // Update dogBar with filtered dogs
        dogBar.innerHTML = '';
        filteredDogs.forEach((dog) => {
            const span = document.createElement('span');
            span.innerHTML = dog.name;
            dogBar.appendChild(span);

            // add click event to each span to disply dog details
            span.addEventListener('click' , () => { 
            
            divContainer.innerHTML = ''

            const imgTag = document.createElement('img')
            imgTag.src = dog.image
            const h2 = document.createElement('h2')
            h2.innerText = dog.name
            const button = document.createElement('button')
            button.innerHTML = dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!';

            divContainer.appendChild(imgTag)
            divContainer.appendChild(h2)
            divContainer.appendChild(button)
            });
        });
    });

});



 
    




