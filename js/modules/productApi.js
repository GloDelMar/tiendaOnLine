const FASHION_BASE_URL = "https://javascriptglo-default-rtdb.firebaseio.com/midnight";

const createProduct = async (petShop) => {
  let response = await fetch(`${FASHION_BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(petShop),
  });
  let data = await response.json();
  return data;
};

const fetchPetShopByKey = async (petKey) => {
  let response = await fetch(`${FASHION_BASE_URL}/${petKey}/.json`);
  let data = await response.json();
  return data;
};

const fetchAllPetShop = async () => {
  let response = await fetch(`${FASHION_BASE_URL}/.json`);
  let data = await response.json();
  let keys = Object.keys(data);
  let petShopArray = keys.map((key) => ({ ...data[key], key }));
  return petShopArray;
};

export { createProduct, fetchPetShopByKey, fetchAllPetShop };

