import { useState } from "react";

interface PostData {
  data: any;
  page: number;
}

export const useFetchLatestPosts = () => {
  const [postData, setPostData] = useState<PostData | null>(null);

  const fetchPostData = async (page: number, per_page: number) => {
    const response = await fetch(
      `https://api.alvinlee9.synology.me/api/v1/githubio/post?per_page=${per_page}&page=${page}`
    );
    const data = await response.json();
    setPostData({ data: data.data, page: page });
  };

  return { postData, fetchPostData };
};
