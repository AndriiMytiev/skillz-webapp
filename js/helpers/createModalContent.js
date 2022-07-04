export default function createElementOfContent(data, blockClass, titleClass, textClass, authorClass){
    return `<div class=${blockClass}>
                <p class=${titleClass}>${data.title || ""}</p>
                <img src='${data.image || "../img/default.jfif"}' width='400px' height='200px' alt='error'>
                <p class=${textClass}>${data.text || ""}</p>
                <p class=${authorClass}>${data.author || ""}</p>
            </div>`
}