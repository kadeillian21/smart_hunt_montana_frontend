import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function MountainGoatTable() {

  type MountainGoat = {
    license_year: number,
    district: string,
    residency: string,
    hunters: number,
    days: number,
    days_per_hunter: number,
    total_harvest: number,
    billies: number,
    nannies: number,
    kids: number,
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    harvested_billies_per_square_mile: number,
    harvested_nannies_per_square_mile: number,
    harvested_kids_per_square_mile: number,
    total_harvest_per_square_mile: number,
  }

  const [mountainGoats, setMountainGoats] = useState([]);

  const handleIndexMountainGoats = () => {
    console.log("handleIndexMountainGoats");
    axios.get("http://localhost:3000/mountain_goats.json").then((response) => {
      console.log(response.data);
      setMountainGoats(response.data);
    });
  };

  useEffect(handleIndexMountainGoats, []);
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
        <th>Billies</th>
        <th>Nannies</th>
        <th>Kids</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Harvested Billies per Square Mile</th>
        <th>Harvested Nannies per Square Mile</th>
        <th>Harvested Kids per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {mountainGoats.map((mountainGoat:MountainGoat) => (
        <tr>
          <td>{mountainGoat.license_year}</td>
          <td>{mountainGoat.district}</td>
          <td>{mountainGoat.residency}</td>
          <td>{mountainGoat.hunters}</td>
          <td>{mountainGoat.days}</td>
          <td>{mountainGoat.days_per_hunter}</td>
          <td>{mountainGoat.total_harvest}</td>
          <td>{mountainGoat.billies}</td>
          <td>{mountainGoat.nannies}</td>
          <td>{mountainGoat.kids}</td>
          <td>{mountainGoat.location}</td>
          <td>{mountainGoat.district_square_mileage} square miles</td>
          <td>{mountainGoat.public_land_percentage}%</td>
          <td>{mountainGoat.harvested_billies_per_square_mile}</td>
          <td>{mountainGoat.harvested_nannies_per_square_mile}</td>
          <td>{mountainGoat.harvested_kids_per_square_mile}</td>
          <td>{mountainGoat.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}