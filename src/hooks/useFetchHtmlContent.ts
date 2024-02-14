import { useState } from "react";

interface HtmlContent {
  data: string;
}

export const useFetchHtmlContent = () => {
  const [htmlContent, setHtmlContent] = useState<HtmlContent | null>(null);

  const fetchHtmlContent = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.text();
      setHtmlContent({ data });
    } catch (error) {
      console.error("Error fetching HTML content:", error);
      setHtmlContent(null);
    }
  };

  return { htmlContent, fetchHtmlContent };
};
