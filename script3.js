// let array = ['hasib','imran','my-wife']


// document.write(array[2])

const obj = {
    name : "Imran",
    Age : 19,
    Univercity : "Pabna Polytechnical Institute",
    obj2 : {
        name : "popy",
        age : 17,
        collage : "not available"
    }
}
 const popyAge = "Popy's Age : " + obj.obj2.age



const array = [
    object = {
    url : "image/blog1.png"
    },
    object2 = {
    url : "image/blog2.png"
    },
    object3 = {
    url : "image/blog3.png"
    },
    object = {
    url : "image/blog1.png"
    },
    object2 = {
    url : "image/blog2.png"
    },
    object3 = {
    url : "image/blog3.png"
    },
    object = {
    url : "image/blog1.png"
    },
    object2 = {
    url : "image/blog2.png"
    },
    object3 = {
    url : "image/blog3.png"
    },
    object = {
    url : "image/blog10.png"
    },
    object2 = {
    url : "image/blog2.png"
    },
    object3 = {
    url : "image/blog3.png"
    },
    object = {
    url : "image/blog1.png"
    },
    object2 = {
    url : "image/blog2.png"
    },
    object3 = {
    url : "image/blog3.png"
    },
    object = {
    url : "image/blog1.png"
    },
    object2 = {
    url : "image/blog2.png"
    },
    object3 = {
    url : "image/blog3.png"
    },
  
]

  // for(let index=0; index<19; index++){
  //     console.log(array[index])
  // }

  // for( let item of array){
  //   console.log(item)
  // }

  function sourceInfo(event){
   event.preventDefault()
    const fullname = "Your name : " + event.target.name.value
    const email = "Your email : " + event.target.email.value
     
 


     const home = document.getElementById("div")

        const paraName = document.createElement("h4")
        const paraEmail = document.createElement("h4")
            paraName.innerText = fullname
            paraEmail.innerText = email
      

        home.appendChild(paraName)
        home.appendChild(paraEmail)

        console.log(paraName)
      
  }





 
