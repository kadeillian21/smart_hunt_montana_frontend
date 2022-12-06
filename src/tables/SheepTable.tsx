import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function SheepTable() {

  type Sheep = {
    license_year: number,
    district: string,
    residency: string,
    hunters: number,
    days: number,
    days_per_hunter: number,
    total_harvest: number,
    rams: number,
    ewes: number,
    lambs: number,
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    harvested_rams_per_square_mile: number,
    harvested_ewes_per_square_mile: number,
    harvested_lambs_per_square_mile: number,
    total_harvest_per_square_mile: number,
  }

  const [sheeps, setSheeps] = useState([]);

  const handleIndexSheeps = () => {
    console.log("handleIndexSheeps");
    axios.get("http://localhost:3000/sheeps.json").then((response) => {
      console.log(response.data);
      setSheeps(response.data);
    });
  };

  useEffect(handleIndexSheeps, []);
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
        <th>Rams</th>
        <th>Ewes</th>
        <th>Lambs</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Harvested Rams per Square Mile</th>
        <th>Harvested Ewes per Square Mile</th>
        <th>Harvested Lambs per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {sheeps.map((sheep:Sheep) => (
        <tr>
          <td>{sheep.license_year}</td>
          <td>{sheep.district}</td>
          <td>{sheep.residency}</td>
          <td>{sheep.hunters}</td>
          <td>{sheep.days}</td>
          <td>{sheep.days_per_hunter}</td>
          <td>{sheep.total_harvest}</td>
          <td>{sheep.rams}</td>
          <td>{sheep.ewes}</td>
          <td>{sheep.lambs}</td>
          <td>{sheep.location}</td>
          <td>{sheep.district_square_mileage} square miles</td>
          <td>{sheep.public_land_percentage}%</td>
          <td>{sheep.harvested_rams_per_square_mile}</td>
          <td>{sheep.harvested_ewes_per_square_mile}</td>
          <td>{sheep.harvested_lambs_per_square_mile}</td>
          <td>{sheep.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}