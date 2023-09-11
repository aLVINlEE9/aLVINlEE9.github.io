import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentViewAtom } from "../recoil/store";

interface PostData {
  data: any;
}

export const useFetchPosts = () => {
  const [postData, setPostData] = useState<PostData | null>(null);
  const [, setCurrentView] = useRecoilState(currentViewAtom);

  const fetchPostData = async (page: number, per_page: number) => {
    const response = await fetch(
      `https://api.alvinlee9.synology.me/api/v1/githubio/post?per_page=${per_page}&page=${page}`
    );
    const data = await response.json();
    setPostData({ data: data.data });
  };

  useEffect(() => {
    if (postData) {
      setCurrentView({
        view: "posts",
        data: postData.data,
        title: "Posts",
        id: "posts",
      });
    }
  }, [postData]);

  return { postData, fetchPostData };
};
