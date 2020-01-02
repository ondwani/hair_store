export default async function fetchProduct(url, setInit) {
  const response = await fetch(url);
  const json = await response.json();
  setInit(json);
}
