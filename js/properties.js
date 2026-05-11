function filterProperties() {

  const searchValue =
    document.getElementById("searchInput")
      .value
      .toLowerCase();

  const priceValue =
    document.getElementById("priceFilter").value;

  const roomsValue =
    document.getElementById("roomsFilter").value;

  const sizeValue =
    document.getElementById("sizeFilter").value;

  const properties =
    document.querySelectorAll(".property-card");

  properties.forEach(property => {

    const location =
      property.dataset.location.toLowerCase();

    const price =
      parseInt(property.dataset.price);

    const rooms =
      parseInt(property.dataset.rooms);

    const size =
      parseInt(property.dataset.size);

    let visible = true;

    // SEARCH

    if (
      !location.includes(searchValue)
    ) {
      visible = false;
    }

    // PRICE

    if (
      priceValue &&
      price > parseInt(priceValue)
    ) {
      visible = false;
    }

    // ROOMS

    if (
      roomsValue &&
      rooms < parseInt(roomsValue)
    ) {
      visible = false;
    }

    // SIZE

    if (
      sizeValue &&
      size < parseInt(sizeValue)
    ) {
      visible = false;
    }

    property.style.display =
      visible ? "block" : "none";

  });

}

// LIVE SEARCH

document
  .getElementById("searchInput")
  .addEventListener("keyup", filterProperties);