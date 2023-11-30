// Function fetches iomages from unsplush api
export async function getImagesFromUnsplush(numberOfImages, arr) {
    const requestUrl = import.meta.env.VITE_REQUEST_URL;
    let result = await fetch(requestUrl).then((res) => res.json()).then((data) => data)
    let randomNumber = 0;
    
    for (let i = 0; i < numberOfImages; i++) {
        randomNumber = Math.floor(Math.random() * 10);
        arr.push(result[randomNumber].urls.regular);
    }
}