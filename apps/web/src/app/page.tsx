import Button from "@/components/common/button";
import React from "react";
import { getResults } from "tableland";
import getResult from "./getResults";

type pageProps = {};

const Page = async () => {
  const res = await getResult();
  console.log({ res: res?.[0]?.counter });
  return (
    <div className="w-full h-screen">
      <div className="h-3/4">
        <nav className="flex items-center p-5">
          <div>logo</div>
        </nav>
        <div className="flex items-center flex-col h-[97%] justify-center">
          <div className="text-[15rem] font-bold">Drop it</div>
          <div className="text-base fonte-semibold mt-4">
            File storage & transfer service
          </div>
        </div>
      </div>
      <div className="h-1/4  flex items-center justify-center gap-8">
        <div className="max-w-xs">
          Store any media files,folders or data archives with youe colleagues
          via PC
        </div>
        <div>Counter: {res?.[0]?.counter}</div>
        <div>
          {/* <Button
            className="bg-black text-white text-sm font-normal p-4"
            // onClick={() => getResult()}
          /> */}
          <form action={getResult}>
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Page;
