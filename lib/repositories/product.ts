export const reads = async () => {
  const res = await fetch('/data/product.json');
  return res.json();
}
