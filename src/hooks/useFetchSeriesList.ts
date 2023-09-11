import { useState } from "react";

export const useFetchSeriesList = () => {
  const [seriesListData, setSeriesListData] = useState(null);

  const fetchSeriesListData = async () => {
    const response = await fetch(
      `https://api.alvinlee9.synology.me/api/v1/githubio/post/series`
    );
    const data = await response.json();
    setSeriesListData(data.data);
  };

  return { seriesListData, fetchSeriesListData };
};
