const Fetch = async (id) => {
  const data = await fetch("http://localhost:3000/phones/" + id);
  const product = await data.json();
  return product;
};

export { Fetch };
