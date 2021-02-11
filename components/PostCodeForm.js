export default function PostCodeForm({
  postalCode,
  setPostalCode,
  getCityName,
}) {
  return (
    <form>
      <p>Recevez les règles d'urbanisme pour votre ville !</p>
      <label name="postalCode">
        Votre code postal:
        <input
          type="text"
          value={postalCode}
          onChange={(event) => setPostalCode(event.target.value)}
        />
      </label>
      <input type="submit" value="Valider" onClick={(e) => getCityName(e)} />
    </form>
  );
}
