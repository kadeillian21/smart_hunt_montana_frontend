import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function TurkeyTable() {

  type Turkey = {
    license_year: number,
    district: string,
    residency: string,
    season: string,
    total_harvest: number,
    fall_harvest_total: number,
    location: string,
    district_square_mileage: number,
    total_harvest_per_square_mile: number,
    total_fall_harvest_per_square_mile: number,
  }

  const [turkeys, setTurkeys] = useState([]);

  const handleIndexTurkeys = () => {
    console.log("handleIndexTurkeys");
    axios.get("http://localhost:3000/turkeys.json").then((response) => {
      console.log(response.data);
      setTurkeys(response.data);
    });
  };

  useEffect(handleIndexTurkeys, []);
  return(
    <Table>
      <thead>
        <th>License Year</th>
        <th>District</th>
        <th>Residency</th>
        <th>Season</th>
        <th>Total Harvest</th>
        <th>Fall Harvest Total</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Total Harvest per Square Mile</th>
        <th>Total Fall Harvest per Square Mile</th>
      </thead>
      {turkeys.map((turkey:Turkey) => (
        <tr>
          <td>{turkey.license_year}</td>
          <td>{turkey.district}</td>
          <td>{turkey.residency}</td>
          <td>{turkey.season}</td>
          <td>{turkey.total_harvest}</td>
          <td>{turkey.fall_harvest_total}</td>
          <td>{turkey.location}</td>
          <td>{turkey.district_square_mileage} square miles</td>
          <td>{turkey.total_harvest_per_square_mile}</td>
          <td>{turkey.total_fall_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}