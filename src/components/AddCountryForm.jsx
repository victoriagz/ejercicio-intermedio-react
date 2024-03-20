function AddCountryForm(
  {
    //   onChangeName,
    //   onChangeCapital,
    //   onChangeFlag,
    //   onChangeContinent,
  }
) {
  return (
    <form action="">
      <input
        placeholder="Nombre del país"
        type="text"
        onChange={(ev) => onChangeName}
      />
      <input
        placeholder="Capital"
        type="text"
        onChange={(ev) => onChangeCapital}
      />
      <input
        placeholder="Bandera"
        type="text"
        onChange={(ev) => onChangeFlag}
      />
      <input
        placeholder="Continente"
        type="text"
        onChange={(ev) => onChangeContinent}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default AddCountryForm;
