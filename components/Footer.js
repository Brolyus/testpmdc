import styled from "styled-components";

const FooterLayout = styled.footer`
    margin: 0;
    box-sizing: border-box
    width: 100%;
    height: 85px;
    background-color: #29B394;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const Paragraphe = styled.p`
  color: white;
  font-size: 16px;
`;

export default function Footer() {
  return (
    <FooterLayout>
      <Paragraphe>2021 Permettez moi de construire</Paragraphe>
    </FooterLayout>
  );
}
