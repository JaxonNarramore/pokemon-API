const container = document.querySelector('.container')

fetch('https://api.github.com/users/jaxonnarramore')
.then(response => {
    return response.json();
})
.then(githubData => {
    const jaxonObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    }
    console.log(jaxonObj);
    // console.log(githubData);
    const newElement = document.createElement('p');
    newElement.textContent = jaxonObj.name;
    container.appendChild(newElement);
})
.catch(error => {
    console.log(error);
});