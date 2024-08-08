function handleContacts(event){
    event.preventDefault()
  const Fullname = "Name : " + event.target.Fullname.value;
  const Email = "Email : " + event.target.Email.value;
  const Message = "Message : " + event.target.Message.value;
  // console.log(Fullname)
    // console.log(Email)
    // console.log(Message)
   
  const div = document.getElementById("user-info")
  const nameParagraph = document.createElement("p")
  nameParagraph.innerText = `${Fullname}`

  const emailParagraph = document.createElement("p")
 emailParagraph.innerText = `${Email}`

  const mesasgeParagraph = document.createElement("p")
  mesasgeParagraph.innerText = `${Message}`



  // console.log(nameParagraph)
  // console.log(emailParagraph)
  // console.log(mesasgeParagraph)

  
  
  div.appendChild(nameParagraph)
  div.appendChild(emailParagraph)
  div.appendChild(mesasgeParagraph)
  
    
}


// const newArray = ["imran","kolpona",'hasib','mizan']
//   const kolpona = newArray[1]
// console.log(kolpona)


const object = {
    name : "Imran",
    age : 19,
    height : "5ft"

}
const age1 = "Age = "+ object.age
// console.log(age1)

const gridImgArray = [
          {url : "image/grid_1.png"},
          {url : "image/grid_2.png"},
          {url : "image/grid_3.png"},
          {url : "image/grid_4.png"},
 
        
]




function checkAllProjects(){
  const projectDiv = document.getElementById("div_project_two_grid")
  
  

  for (let index=0 ; index<4 ; index++) {
    const creatDiv = document.createElement("div")
    const firstUrl = gridImgArray[index]
     creatDiv.innerHTML = `<img src="${firstUrl.url}">`
    
    console.log(creatDiv)
    projectDiv.appendChild(creatDiv)
    console.log(projectDiv)
  }
  
  // for (const item of gridImgArray) {
   
  //   creatDiv.innerHTML=`<img src="${firstUrl}" alt="">`
  //   console.log(creatDiv)
  //   console.log(item)
  // }
      
}





