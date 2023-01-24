export const askAlfred = async (val: string) => {
  const response = await fetch("http://localhost:3000/messages", {
    method: "POST",
    body: val,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data.answer);
};
