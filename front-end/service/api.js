async function getApi(endpoint) {
  const response = await fetch(
    `${endpoint}`
  );
  const data = await response
    .json()
    .then((res) => res);

  return data
}

export default getApi;
