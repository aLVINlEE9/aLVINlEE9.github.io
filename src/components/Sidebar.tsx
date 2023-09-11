import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useRecoilState } from "recoil";
import { currentViewAtom } from "../recoil/store";
import { useFetchSeries } from "../hooks/useFetchSereis";

interface SidebarProps {
  series: string[];
  description: string;
  title: string;
  todayHits: number;
  totalHits: number;
}

export default function Sidebar(props: SidebarProps) {
  const { series, description, title, todayHits, totalHits } = props;
  const [, setCurrentView] = useRecoilState(currentViewAtom);
  const { seriesData, fetchSeriesData } = useFetchSeries();

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

  const handleClickSeries = (seriesName: string) => {
    fetchSeriesData(seriesName);
  };

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Series
      </Typography>
      {series.map((serie, index) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={index}
          onClick={(e) => {
            e.preventDefault();
            handleClickSeries(serie);
          }}
        >
          {serie}
        </Link>
      ))}
      <Typography variant="body1" gutterBottom sx={{ mt: 3 }}>
        오늘의 히트 수: {todayHits}
      </Typography>
      <Typography variant="body1" gutterBottom>
        전체 히트 수: {totalHits}
      </Typography>
    </Grid>
  );
}
