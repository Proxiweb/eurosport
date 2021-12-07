import { gql } from "@apollo/client";

const PLAYERS = gql`
  query GetPlayers {
    headToHead {
      firstname
      lastname
      shortname
      sex
      picture {
        url
      }      
      country {
        picture {
          url        
        }
        code
      }
      stats {
        rank
        points
        age
        weight
        height
        last
      }
    }
  }
`;

export default { PLAYERS };
