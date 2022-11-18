
//  const url="https://swapi.dev/api/people/1/"
//  fetch(url)
// .then(response => {
//     return response.json();
// })
//    .then(json=>{
//     console.log(json); 
//  })
//  .then((data)=>{
//   console.log(data.name)
//    console.log(completedata[1].body);
//   document.getElementById("header").innerHTML=completedata[1].title;
//   document.getElementById("root").innerHTML=completedata[1].body; 
//  });
const url = "https://swapi.dev/api/people/1/";
async function fetchData(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);

  document.getElementById("name").value = data.name;
  document.getElementById("height").value = data.height;
  document.getElementById("mass").value = data.mass;
  document.getElementById("hair-color").value = data.hair_color;
  document.getElementById("skin-color").value = data.skin_color;
  document.getElementById("eye-color").value = data.eye_color;
  document.getElementById("birth-year").value = data.birth_year;
}


