import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import LineChart from "../Charts/LineChart";
import { GetMapDataByCountryId } from "../../apis";
import HighMaps from "../Charts/HighMaps";

export default function Summary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountryId) {
      //   getMapDataByCountryId(selectedCountryId);
      GetMapDataByCountryId(selectedCountryId)
        .then((res) => {
          console.log(`res getmapdate`, res);
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [selectedCountryId]);

  return (
    <div style={{ marginTop: 10 }}>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData} />
        </Grid>
      </Grid>
    </div>
  );
}
