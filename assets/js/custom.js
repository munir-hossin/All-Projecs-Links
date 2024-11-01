"https://api.pexels.com/v1/search?query=people"


function generateAPIResponse() {
    const APIKey = "AIzaSyBK3pG1XiEy74ee7j19d1cL6K-qDjSp7dU";

    let APIURL = `https://api.pexels.com/v1/search?query=nature&per_page=1`;


    fetch (APIURL, {
        headers: {Authorization: APIKey},
    })
    .then((response) =>response.json())
    .then((results) => {
        console.log(results);
        
    })
}






















// fetch (APIURL, {
//     headers: {Authorization: APIKey},
// }).then((response) =>response.json()).then((results) {
//     console.log(results);
    
// })