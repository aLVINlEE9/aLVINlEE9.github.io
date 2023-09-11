import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentViewAtom } from "../recoil/store";

interface PostData {
  data: any; // Replace with the actual type of your data
}

export const useFetchPost = () => {
  const [postData, setPostData] = useState<PostData | null>(null);
  const [, setCurrentView] = useRecoilState(currentViewAtom);

  const fetchPostData = async (postId: number) => {
    const response = await fetch(
      `https://api.alvinlee9.synology.me/api/v1/githubio/post/${postId}`
    );
    const data = await response.json();
    setPostData({ data: data.data });
  };

  useEffect(() => {
    if (postData) {
      setCurrentView({
        view: "post",
        data: postData.data,
        title: postData.data.post.title,
        id: postData.data.post.title,
      });
    }
  }, [postData]);

  return { postData, fetchPostData };
};
