export const name = "shoaib"; 

export const sayHi = ()=>{
    console.log("Hello wolrd");
}

const sum = (a, b) => a+b;

export default sum ; 


try{
    const a = document.querySelector("hid"); 
    a.innerText = "Hello"
    console.log("HI");
}catch(e){
    console.log(e);
    console.log("bye");

}