"use server";
import { getResults } from "tableland";

const getResult = async () => {
  const data = await getResults();

  console.log({ data });
  if (data.error) {
    throw new Error("Error occured ", data.error);
  }
  return data.results;
};
export default getResult;
