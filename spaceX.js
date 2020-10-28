fetch('https://api.spacexdata.com/v3/ships')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/rockets/starship')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/rockets/falconheavy')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});