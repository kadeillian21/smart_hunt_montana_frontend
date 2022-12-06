import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function UplandGameTable() {

  type UplandGame = {
    license_year: number,
    district: string,
    residency: string,
    species: string,
    hunters: number,
    hunter_success_pct: number,
    total_harvest: number,
    location: string,
    district_square_mileage: number,
    total_harvest_per_square_mile: number,
  }

  const [uplandGames, setUplandGames] = useState([]);

  const handleIndexUplandGames = () => {
    console.log("handleIndexUplandGames");
    axios.get("http://localhost:3000/upland_games.json").then((response) => {
      console.log(response.data);
      setUplandGames(response.data);
    });
  };

  useEffect(handleIndexUplandGames, []);
  return(
    <Table>
      <thead>
        <th>License Year</th>
        <th>District</th>
        <th>Residency</th>
        <th>Species</th>
        <th>Hunters</th>
        <th>Hunter Success Rate</th>
        <th>Total Harvest</th>
        <th>Location</th>
        <th>District Square Mileage</th>
        <th>Total Harvest per Square Mile</th>
      </thead>
      {uplandGames.map((uplandGame:UplandGame) => (
        <tr>
          <td>{uplandGame.license_year}</td>
          <td>{uplandGame.district}</td>
          <td>{uplandGame.residency}</td>
          <td>{uplandGame.species}</td>
          <td>{uplandGame.hunters}</td>
          <td>{uplandGame.hunter_success_pct}%</td>
          <td>{uplandGame.total_harvest}</td>
          <td>{uplandGame.location}</td>
          <td>{uplandGame.district_square_mileage} square miles</td>
          <td>{uplandGame.total_harvest_per_square_mile}</td>
        </tr>
      ))}
    </Table>
  )
}