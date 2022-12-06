import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function MuleDeerTable() {

  type MuleDeer = {
    license_year: number,
    district: string,
    deer_species: string,
    residency: string,
    hunters: number,
    days: number,
    days_per_hunter: number,
    total_harvest: number,
    bucks: number,
    does: number,
    fawns: number,
    bow: number,
    rifle: number,
    less_than_four_points: number,
    four_or_more_points: number,
    location: string,
    district_square_mileage: number,
    public_land_percentage: number,
    four_or_more_points_percentage: number,
    harvested_bucks_per_square_mile: number,
    harvested_does_per_square_mile: number,
    harvested_fawns_per_square_mile: number,
    harvested_less_than_four_points_bucks_per_square_mile: number,
    harvested_four_or_more_points_bucks_per_square_mile: number,
    total_harvest_per_square_mile: number,
  }

  const [muleDeers, setMuleDeers] = useState([]);

  const handleIndexMuleDeers = () => {
    console.log("handleIndexMuleDeers");
    axios.get("http://localhost:3000/mule_deers.json").then((response) => {
      console.log(response.data);
      setMuleDeers(response.data);
    });
  };

  useEffect(handleIndexMuleDeers, []);
  return(
    <Table>
      <thead>
        <th>License Year</th>
        <th>District</th>
        <th>Deer Species</th>
        <th>Residency</th>
        <th>Hunters</th>
        <th>Days</th>
        <th>Days per Hunter</th>
        <th>Total Harvest</th>
        <th>Bucks</th>
        <th>Does</th>
        <th>Fawns</th>
        <th>Bow</th>
        <th>Rifle</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Public Land Percentage</th>
        <th>Four or More Points Percentage</th>
        <th>Harvested Bucks per Square Mile</th>
        <th>Harvested Does per Square Mile</th>
        <th>Harvested Fawns per Square Mile</th>
        <th>Harvested Less than Four Point Bucks per Square Mile</th>
        <th>Harvested Four or More Point Bucks per Square Mile</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {muleDeers.map((mule_deer:MuleDeer) => (
        <tr>
          <td>{mule_deer.license_year}</td>
          <td>{mule_deer.district}</td>
          <td>{mule_deer.deer_species}</td>
          <td>{mule_deer.residency}</td>
          <td>{mule_deer.hunters}</td>
          <td>{mule_deer.days}</td>
          <td>{mule_deer.days_per_hunter}</td>
          <td>{mule_deer.total_harvest}</td>
          <td>{mule_deer.bucks}</td>
          <td>{mule_deer.does}</td>
          <td>{mule_deer.fawns}</td>
          <td>{mule_deer.bow}</td>
          <td>{mule_deer.rifle}</td>
          <td>{mule_deer.location}</td>
          <td>{mule_deer.district_square_mileage} square miles</td>
          <td>{mule_deer.public_land_percentage}%</td>
          <td>{mule_deer.four_or_more_points_percentage}%</td>
          <td>{mule_deer.harvested_bucks_per_square_mile}</td>
          <td>{mule_deer.harvested_does_per_square_mile}</td>
          <td>{mule_deer.harvested_fawns_per_square_mile}</td>
          <td>{mule_deer.harvested_less_than_four_points_bucks_per_square_mile}</td>
          <td>{mule_deer.harvested_four_or_more_points_bucks_per_square_mile}</td>
          <td>{mule_deer.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}