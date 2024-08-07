import styled from "styled-components";
import React from "react";

const NewArrival = () => {
  const Container = styled.div`
    padding: 20px 30px;
    padding-bottom: 200px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 768px) {
      padding: 20px 12px;
    }
    background: ${({ theme }) => theme.bg};
  `;
  const Card = styled.div`
    display: flex;
    justify-content: center;
    background-color: yellow;
    margin-top: 50px;
    align-items: center;
    font-size: 20px;
  `;

  return (
    <Container>
      <Card>No New Arrivals</Card>
    </Container>
  );
};

export default NewArrival;
