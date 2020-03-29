export default async req => {
  try {
    const res = await fetch(req);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
