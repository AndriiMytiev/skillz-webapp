export default function createList(array,callback){
    return array.map(item => callback(item)).join("");
}