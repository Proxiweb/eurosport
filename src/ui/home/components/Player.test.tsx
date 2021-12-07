import React from "react";
import { render, screen } from "@testing-library/react";
import { Player } from "../../../Model";
import PlayerItem from "./PlayerItem";

test("renders players with required infos", () => {
  const data: Player[] = [
    {
      firstname: "Stan",
      lastname: "Wawrinka",
      shortname: "S.WAW",
      picture: {
        url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
      },
      country: {
        picture: {
          url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
        },
        code: "SUI",
      },
      sex: "MAN",
      stats: {
        rank: 21,
        points: 1784,
        age: 33,
        last: [true, true, true, false, true],
        weight: 81000,
        height: 183,
      },
    },
    {
      firstname: "Rafael",
      lastname: "Nadal",
      shortname: "R.NAD",
      picture: {
        url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
      },
      country: {
        picture: {
          url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
        },
        code: "ESP",
      },
      sex: "MAN",
      stats: {
        rank: 1,
        points: 1982,
        age: 33,
        last: [true, false, false, false, true],
        weight: 85200,
        height: 185,
      },
    },
  ];

  render(<PlayerItem player={data[0]} />);
  const taille = screen.getByText(/1.83 m/i);
  expect(taille).toBeInTheDocument();
  const poids = screen.getByText(/81 kg/i);
  expect(poids).toBeInTheDocument();  
});
