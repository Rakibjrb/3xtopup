const getDiamonds = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ServerAddress}/api/get-diamonds`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data;
};

export { getDiamonds };
