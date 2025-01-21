export const createSession = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/session/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
