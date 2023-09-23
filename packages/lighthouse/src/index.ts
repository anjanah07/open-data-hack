import lighthouse from "@lighthouse-web3/sdk";
import { IUploadProgressCallback } from "@lighthouse-web3/sdk/dist/types";

export type TProgress = IUploadProgressCallback;

export const uploadFile = async (
  file: File,
  cb: (prog: IUploadProgressCallback) => void
) => {
  try {
    const uploadResponse = await lighthouse.upload(
      file,
      process.env.NEXT_PUBLIC_LH_API_KEY!,
      false,
      undefined,
      cb
    );

    console.log({ uploadResponse });

    const { data } = uploadResponse;

    return data;
  } catch (error) {
    console.log({ error });
  }
};
