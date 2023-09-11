import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentViewAtom } from "../recoil/store";

interface SeriesData {
  data: any;
  seriesName: string;
}

export const useFetchSeries = () => {
  const [seriesData, setSeriesData] = useState<SeriesData | null>(null);
  const [, setCurrentView] = useRecoilState(currentViewAtom);

  const fetchSeriesData = async (seriesName: string) => {
    const response = await fetch(
      `https://api.alvinlee9.synology.me/api/v1/githubio/post?series_name=${seriesName}&page=1`
    );
    const data = await response.json();
    setSeriesData({ data: data.data, seriesName: seriesName });
  };

  useEffect(() => {
    if (seriesData) {
      setCurrentView({
        view: "series",
        data: seriesData.data,
        title: seriesData.seriesName,
        id: seriesData.seriesName,
      });
    }
  }, [seriesData]);

  return { seriesData, fetchSeriesData };
};
