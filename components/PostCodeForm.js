import styled from "styled-components"

const Form = styled.form`
    width: 720px;
    height: 250px;
    margin: 20px;
    box-shadow: 0px 3px 6px #3F3F3F;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Paragraphe = styled.p`
    color: #29B394;
    font-size: 24px;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 305px;
    font-size: 12px;
`

const Input = styled.input`
    height: 47px;
    border: 1px solid #7DD8BE;
    border-radius: 8px;
`

const Button = styled.input`
    background-color: #F2495E;
    border-radius: 8px;
    color: #FFFFFF;
    width: 152px;
    height: 38px;
    border: none;
    margin: 10px;
`

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
