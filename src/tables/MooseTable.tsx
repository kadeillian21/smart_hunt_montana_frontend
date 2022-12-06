import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function MooseTable() {

  type Moose = {
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
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    harvested_bulls_per_square_mile: number,
    harvested_cows_per_square_mile: number,
    harvested_calves_per_square_mile: number,
    total_harvest_per_square_mile: number,
  }

  const [mooses, setMooses] = useState([]);

  const handleIndexMooses = () => {
    console.log("handleIndexMooses");
    axios.get("http://localhost:3000/mooses.json").then((response) => {
      console.log(response.data);
      setMooses(response.data);
    });
  };

  useEffect(handleIndexMooses, []);
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
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Harvested Bulls per Square Mile</th>
        <th>Harvested Cows per Square Mile</th>
        <th>Harvested Calves per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {mooses.map((moose:Moose) => (
        <tr>
          <td>{moose.license_year}</td>
          <td>{moose.district}</td>
          <td>{moose.residency}</td>
          <td>{moose.hunters}</td>
          <td>{moose.days}</td>
          <td>{moose.days_per_hunter}</td>
          <td>{moose.total_harvest}</td>
          <td>{moose.bulls}</td>
          <td>{moose.cows}</td>
          <td>{moose.calves}</td>
          <td>{moose.location}</td>
          <td>{moose.district_square_mileage} square miles</td>
          <td>{moose.public_land_percentage}%</td>
          <td>{moose.harvested_bulls_per_square_mile}</td>
          <td>{moose.harvested_cows_per_square_mile}</td>
          <td>{moose.harvested_calves_per_square_mile}</td>
          <td>{moose.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}