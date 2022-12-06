import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function BlackBearTable() {

  type BlackBear = {
    license_year: number,
    season: string,
    district: string,
    residency: string,
    male: number,
    female: number,
    total_harvest: number,
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    harvested_males_per_square_mile: number,
    harvested_females_per_square_mile: number,
    total_harvest_per_square_mile: number,
  }

  const [blackBears, setBlackBears] = useState([]);

  const handleIndexBlackBears = () => {
    console.log("handleIndexBlackBears");
    axios.get("http://localhost:3000/black_bears.json").then((response) => {
      console.log(response.data);
      setBlackBears(response.data);
    });
  };

  useEffect(handleIndexBlackBears, []);
  return(
    <Table>
      <thead>
        <th>License Year</th>
        <th>Season</th>
        <th>District</th>
        <th>Residency</th>
        <th>Male</th>
        <th>Female</th>
        <th>Total Harvest</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Harvested Males per Square Mile</th>
        <th>Harvested Females per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {blackBears.map((blackBear:BlackBear) => (
        <tr>
          <td>{blackBear.license_year}</td>
          <td>{blackBear.season}</td>
          <td>{blackBear.district}</td>
          <td>{blackBear.residency}</td>
          <td>{blackBear.male}</td>
          <td>{blackBear.female}</td>
          <td>{blackBear.total_harvest}</td>
          <td>{blackBear.location}</td>
          <td>{blackBear.district_square_mileage} square miles</td>
          <td>{blackBear.public_land_percentage}%</td>
          <td>{blackBear.harvested_males_per_square_mile}</td>
          <td>{blackBear.harvested_females_per_square_mile}</td>
          <td>{blackBear.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}