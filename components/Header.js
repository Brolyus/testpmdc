import styled from "styled-components";

const HeaderLayout = styled.header`
    margin: 0;
    box-sizing: border-box
    width: 100%;
    height: 85px;
    background-color: #29B394;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

const Paragraphe = styled.p`
  color: white;
  font-size: 16px;
  margin: 10px;
`;

const BoldParagraphe = styled(Paragraphe)`
  font-weight: bold;
  font-size: 24px;
`;

export default function Header() {
  return (
    <HeaderLayout>
      <BoldParagraphe>Le Blog</BoldParagraphe>
      <Paragraphe>Voir les catégories</Paragraphe>
    </HeaderLayout>
  );
}
