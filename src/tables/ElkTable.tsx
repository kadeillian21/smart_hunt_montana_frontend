import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function ElkTable() {

  type Elk = {
    license_year: number,
    district: string,
    residency: string,
    hunters: number,
    days: number,
    days_per_hunter: number,
    total_harvest: number,
    bulls: number,
    cows: number,
    calves: number,
    bow: number,
    rifle: number,
    spike_bull_elk: number,
    less_than_six_points: number,
    six_or_more_points: number,
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    diy_hunting_maps_success_rate_for_twenty_one: number,
    harvested_bulls_per_square_mile: number,
    harvested_cows_per_square_mile: number,
    harvested_calves_per_square_mile: number,
    harvested_spiked_bulls_per_square_mile: number,
    harvested_six_or_more_point_bulls_per_square_mile: number,
    total_harvest_per_square_mile: number,
    six_or_more_point_percentage: number,
  }

  const [elks, setElks] = useState([]);

  const handleIndexElks = () => {
    console.log("handleIndexElks");
    axios.get("http://localhost:3000/elks.json").then((response) => {
      console.log(response.data);
      setElks(response.data);
    });
  };

  useEffect(handleIndexElks, []);
  return(
    <Table>
      <thead>
        <th>License Year</th>
        <th>District</th>
        <th>Residency</th>
        <th>Hunters</th>
        <th>Days</th>
        <th>Days per Hunter</th>
        <th>Total Harvest</th>
        <th>Bulls</th>
        <th>Cows</th>
        <th>Calves</th>
        <th>Spiked Bulls</th>
        <th>Bow</th>
        <th>Rifle</th>
        <th>Less Than Six Points</th>
        <th>Six or More Points</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>DIY Hunting Maps Success Rate for 2021</th>
        <th>Harvested Bulls per Square Mile</th>
        <th>Harvested Cows per Square Mile</th>
        <th>Harvested Calves per Square Mile</th>
        <th>Harvested Spiked Bulls per Square Mile</th>
        <th>Harvested Six or More Point Bulls per Square Mile</th>
        <th>Six or More Point Percentage</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {elks.map((elk:Elk) => (
        <tr>
          <td>{elk.license_year}</td>
          <td>{elk.district}</td>
          <td>{elk.residency}</td>
          <td>{elk.hunters}</td>
          <td>{elk.days}</td>
          <td>{elk.days_per_hunter}</td>
          <td>{elk.total_harvest}</td>
          <td>{elk.bulls}</td>
          <td>{elk.cows}</td>
          <td>{elk.calves}</td>
          <td>{elk.spike_bull_elk}</td>
          <td>{elk.bow}</td>
          <td>{elk.rifle}</td>
          <td>{elk.less_than_six_points}</td>
          <td>{elk.six_or_more_points}</td>
          <td>{elk.location}</td>
          <td>{elk.district_square_mileage}</td>
          <td>{elk.public_land_percentage}%</td>
          <td>{elk.diy_hunting_maps_success_rate_for_twenty_one}%</td>
          <td>{elk.harvested_bulls_per_square_mile}</td>
          <td>{elk.harvested_cows_per_square_mile}</td>
          <td>{elk.harvested_calves_per_square_mile}</td>
          <td>{elk.harvested_spiked_bulls_per_square_mile}</td>
          <td>{elk.harvested_six_or_more_point_bulls_per_square_mile}</td>
          <td>{elk.six_or_more_point_percentage}%</td>
          <td>{elk.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}