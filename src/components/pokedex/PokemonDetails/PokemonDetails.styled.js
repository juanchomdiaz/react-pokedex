import styled from "styled-components";
import { Card } from "react-bootstrap";

//Using styled components, just for the sake of showing another way apply styles
export const StyledCard = styled(Card)`
  max-height: fit-content;
  max-height: -webkit-fit-content;
  max-height: -moz-fit-content;
  min-width: 250px;
  padding: 20px 0;

  .card-img-top {
    max-height: 250px;
  }

  .card-body {
    .jumbotron {
      padding: 2rem 2rem;
    }
  }

  @media (max-width: 480px) {
    .card-body {
 
      .jumbotron {
        padding: 1rem 1rem;
      }
    }
}
`;
