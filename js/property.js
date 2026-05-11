function changeImage(element) {

  const mainImage = document.getElementById("mainImage");

  mainImage.src = element.src;

  document.querySelectorAll(".thumbnails img")
    .forEach(img => img.classList.remove("active"));

  element.classList.add("active");
}

function calculateMortgage() {

  const amount = parseFloat(
    document.getElementById("amount").value
  );

  const years = parseFloat(
    document.getElementById("years").value
  );

  const interest = parseFloat(
    document.getElementById("interest").value
  );

  const monthlyInterest = interest / 100 / 12;

  const payments = years * 12;

  const x = Math.pow(1 + monthlyInterest, payments);

  const monthly =
    (amount * x * monthlyInterest) / (x - 1);

  if (isFinite(monthly)) {

    document.getElementById("result").innerHTML =
      `Estimated monthly payment: <strong>€${monthly.toFixed(2)}</strong>`;

  } else {

    document.getElementById("result").innerHTML =
      "Please fill all fields correctly.";

  }
}