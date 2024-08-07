import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Contact = () => {
  const Container = styled.div`
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 36px;
    position: relative;
  `;
  const Title = styled.div`
    font-size: 30px;
    font-weight: 800;

    color: ${({ theme }) => theme.primary};
  `;
  const Span = styled.div`
    font-size: 16px;
    font-weight: 400;

    color: ${({ theme }) => theme.text_secondary + 90};
  `;
  return (
    <Container>
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          padding: "20px",

          marginLeft: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <Title>Contact US 👋</Title>
          <Span>Thank you for Visiting</Span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            left: "50%",
          }}
        >
          <TextInput label="Full Name" placeholder="Enter your full name" />
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
          />
          <TextInput label="Contact" placeholder="Enter your Contact Number" />
          <TextInput label="Message" placeholder="Enter your Message" />
          <Button text="Send" />
        </div>
      </div>
    </Container>
  );
};
export default Contact;
