const loginForm = document.querySelector("#loginForm")

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const userObj = {
        username:document.querySelector("#username").value,
        password:document.querySelector("#password").value
    }
    fetch("/api/apiuser/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(res=>{
        if(res.ok){
            setInterval(() => {
                location.href = "/home"
            }, 500)
        }
        else {
            alert("Incorrect Username or Password")
        }
    })
    .catch(err=>{
        console.log(err)
        alert("Incorrect Username or Password")
    })
})