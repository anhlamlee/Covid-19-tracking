import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CountUp from "react-countup";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed || 0,
      type: "confirmed",
    },
    {
      title: "Số ca khỏi",
      count: data.Recovered || 0,
      type: "recovered",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths || 0,
      type: "deaths",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} xs={12} key={item.type}>
          <HighlighCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    if (props.type === "recovered") return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: { fontSize: 18, marginBottom: 5 },
  count: { fontWeight: "bold", fontSize: 18 },
});

function HighlighCard({ title, count, type }) {
  const styles = useStyles({ type });
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography component="p" variant="body2" className={styles.title}>
          {title}
        </Typography>
        <Typography component="span" variant="body2" className={styles.count}>
          <CountUp end={count} duration={2} separator=" " />
        </Typography>
      </CardContent>
    </Card>
  );
}
