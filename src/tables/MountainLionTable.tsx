import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function MountainLionTable() {

  type MountainLion = {
    license_year: number,
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

  const [mountainLions, setMountainLions] = useState([]);

  const handleIndexMountainLions = () => {
    console.log("handleIndexMountainLions");
    axios.get("http://localhost:3000/mountain_lions.json").then((response) => {
      console.log(response.data);
      setMountainLions(response.data);
    });
  };

  useEffect(handleIndexMountainLions, []);
  return(
    <Table>
      <thead>
        <th>License Year</th>
        <th>District</th>
        <th>Residency</th>
        <th>Males</th>
        <th>Females</th>
        <th>Total Harvest</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Harvested Males per Square Mile</th>
        <th>Harvested Females per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {mountainLions.map((mountain_lion:MountainLion) => (
        <tr>
          <td>{mountain_lion.license_year}</td>
          <td>{mountain_lion.district}</td>
          <td>{mountain_lion.residency}</td>
          <td>{mountain_lion.male}</td>
          <td>{mountain_lion.female}</td>
          <td>{mountain_lion.total_harvest}</td>
          <td>{mountain_lion.location}</td>
          <td>{mountain_lion.district_square_mileage} square miles</td>
          <td>{mountain_lion.public_land_percentage}%</td>
          <td>{mountain_lion.harvested_males_per_square_mile}</td>
          <td>{mountain_lion.harvested_females_per_square_mile}</td>
          <td>{mountain_lion.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}