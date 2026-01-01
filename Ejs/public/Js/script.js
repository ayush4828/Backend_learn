const btns = document.querySelectorAll("button");


for ( btn of btns){
    btn.addEventListener("click" , (e)=>{
        const child = e.target;

        console.log("clicked on " , child.innerText)
    })
}