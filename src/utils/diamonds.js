const getDiamonds = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ServerAddress}/api/get-diamonds`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export { getDiamonds };
