document.addEventListener("DOMContentLoaded", function () {
  const URL = "https://www.fruityvice.com/api/fruit";
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const fruitName = document.getElementById("fruitName");
  const result = document.getElementById("result");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const id = input.value;

    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        debugger;
        result.innerHTML = `<h3>${json.name}</h3>
        <li>Family: ${json.family}</li>
        <li>Order: ${json.order}</li>
        <li>Calories: ${json.nutritions.calories}</li>
        <li>Fat: ${json.nutritions.fat}</li>
        <li>Sugar: ${json.nutritions.sugar}</li>
        <li>Carbohydrates: ${json.nutritions.carbohydrates}</li>
        <li>Protein: ${json.nutritions.protein}</li>
       `;
        showfruit(json);
      })
      .catch((err) => showError(err));
  });

  const showError = (err) => {
    fruitName.innerHTML = `
    <section class="error">
         <p>There was an error!</p>
         <p class="message">${err}</p>
     </section>
 `;
  };
});
