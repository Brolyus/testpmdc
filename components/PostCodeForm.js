import styled from "styled-components";

const Form = styled.form`
  width: 720px;
  height: 250px;
  margin: 20px;
  box-shadow: 0px 3px 6px #3f3f3f;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraphe = styled.p`
  color: #29b394;
  font-size: 24px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 305px;
  font-size: 12px;
`;

const Input = styled.input`
  height: 47px;
  border: 1px solid #7dd8be;
  border-radius: 8px;
`;

const Button = styled.input`
  background-color: #f2495e;
  border-radius: 8px;
  color: #ffffff;
  width: 152px;
  height: 38px;
  border: none;
  margin: 10px;
`;

export default function PostCodeForm({
  postalCode,
  setPostalCode,
  getCityName,
}) {
  return (
    <Form>
      <Paragraphe>Recevez les règles d'urbanisme pour votre ville !</Paragraphe>
      <Label name="postalCode">
        Votre code postal:
        <Input
          type="text"
          value={postalCode}
          onChange={(event) => setPostalCode(event.target.value)}
        />
      </Label>
      <Button type="submit" value="Valider" onClick={(e) => getCityName(e)} />
    </Form>
  );
}
