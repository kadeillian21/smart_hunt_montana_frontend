import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function AntelopeTable() {

  type Antelope = {
    license_year: number,
    district: string,
    residency: string,
    hunters: number,
    days: number,
    days_per_hunter: number,
    total_harvest: number,
    bucks: number,
    does: number,
    fawns: number,
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    harvested_bucks_per_square_mile: number,
    harvested_does_per_square_mile: number,
    harvested_fawns_per_square_mile: number,
    total_harvest_per_square_mile: number,
  }

  const [antelopes, setAntelopes] = useState([]);

  const handleIndexAntelopes = () => {
    console.log("handleIndexAntelopes");
    axios.get("http://localhost:3000/antelopes.json").then((response) => {
      console.log(response.data);
      setAntelopes(response.data);
    });
  };

  useEffect(handleIndexAntelopes, []);
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
        <th>Bucks</th>
        <th>Does</th>
        <th>Fawns</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Harvested Bucks per Square Mile</th>
        <th>Harvested Does per Square Mile</th>
        <th>Harvested Fawns per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {antelopes.map((antelope:Antelope) => (
        <tr>
          <td>{antelope.license_year}</td>
          <td>{antelope.district}</td>
          <td>{antelope.residency}</td>
          <td>{antelope.hunters}</td>
          <td>{antelope.days}</td>
          <td>{antelope.days_per_hunter}</td>
          <td>{antelope.total_harvest}</td>
          <td>{antelope.bucks}</td>
          <td>{antelope.does}</td>
          <td>{antelope.fawns}</td>
          <td>{antelope.location}</td>
          <td>{antelope.district_square_mileage} square miles</td>
          <td>{antelope.public_land_percentage}%</td>
          <td>{antelope.harvested_bucks_per_square_mile}</td>
          <td>{antelope.harvested_does_per_square_mile}</td>
          <td>{antelope.harvested_fawns_per_square_mile}</td>
          <td>{antelope.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}