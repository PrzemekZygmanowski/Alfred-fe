export interface Answer {
  answer: string;
}

export const askAlfred = async (val: string): Promise<Answer> => {
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
  return data;
};
