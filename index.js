document.addEventListener("DOMContentLoaded", function() {




const URL = "https://www.fruityvice.com/api/fruit";
const button = document.querySelector("button");
const input = document.querySelector("input");
const fruitName = document.getElementById("fruitName"); // Assuming "fruitName" is the id of the target HTML element
const result = document.getElementById("result")


button.addEventListener("click", (e) => {
  e.preventDefault();
  const id = input.value;
  
  fetch(`${URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
        debugger
        result.innerHTML =
         `<h3>${json.name}</h3>
         <li>${json.nutritions.calories}</li>`
      showfruit(json);
    })
    .catch((err) => showError(err));

    
})



/*const showfruit = (json) => {
  fruitName.innerHTML = `
    <article>
        <h2>${json.name}</h2>
    </article>
`;
};*/

const showError = (err) => {
  fruitName.innerHTML = `
    <section class="error">
         <p>There was an error!</p>
         <p class="message">${err}</p>
     </section>
 `;
};
})
