import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function WolfTable() {

  type Wolf = {
    license_year: number,
    region: string,
    hunted: number,
    trapped: number,
    total_harvest: number,
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    total_hunted_harvest_per_square_mile: number,
    total_trapped_harvest_per_square_mile: number,
    total_harvest_per_square_mile: number,
  }

  const [wolves, setWolves] = useState([]);

  const handleIndexWolves = () => {
    console.log("handleIndexWolves");
    axios.get("http://localhost:3000/wolves.json").then((response) => {
      console.log(response.data);
      setWolves(response.data);
    });
  };

  useEffect(handleIndexWolves, []);
  return(
    <Table>
      <thead>
        <th>License Year</th>
        <th>Region</th>
        <th>Hunted</th>
        <th>Trapped</th>
        <th>Total Harvest</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Total Hunted Harvest per Square Mile</th>
        <th>Total Trapped Harvest per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {wolves.map((wolf:Wolf) => (
        <tr>
          <td>{wolf.license_year}</td>
          <td>{wolf.region}</td>
          <td>{wolf.hunted}</td>
          <td>{wolf.trapped}</td>
          <td>{wolf.total_harvest}</td>
          <td>{wolf.location}</td>
          <td>{wolf.district_square_mileage} square miles</td>
          <td>{wolf.public_land_percentage}%</td>
          <td>{wolf.total_hunted_harvest_per_square_mile}</td>
          <td>{wolf.total_trapped_harvest_per_square_mile}</td>
          <td>{wolf.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}