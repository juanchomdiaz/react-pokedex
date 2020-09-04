import styled from "styled-components";
import { Card } from "react-bootstrap";

//Using styled components, just for the sake of showing another way apply styles
export const StyledCard = styled(Card)`
  max-height: fit-content;
  max-height: -webkit-fit-content;
  max-height: -moz-fit-content;
  min-width: 250px;

  .card-img-top {
    max-height: 250px;
  }

  .card-body {
    .stat-item {
      font-size: 0.9rem;
    }

    .jumbotron {
      padding: 2rem 2rem;
    }
  }
`;
