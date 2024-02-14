import { useState } from "react";

export const useFetchHtmlContent = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  const fetchHtmlContent = async (url: string) => {
    try {
      const response = await fetch(url);
      console.log("response:", response);
      const data = await response.text();
      setHtmlContent(data as string);
    } catch (error) {
      console.error("Error fetching HTML content:", error);
      setHtmlContent("Error fetching HTML content" as string);
    }
  };

  return { htmlContent, fetchHtmlContent };
};
