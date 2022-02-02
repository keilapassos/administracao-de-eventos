import { useWedding } from "../../Providers/Wedding";
import {
  StyledAllProducts,
  StyledEachProduct,
  StyledButtonToRemove
} from "../AllProducts/styles";

const ComponentWedding = () => {
  const { wedding, removeWedding } = useWedding();

  return (
    <>
      <StyledAllProducts>
        <h1>Casamento</h1>
        {wedding.length > 0 ? (
          wedding.map((item, id) => {
            return (
              <StyledEachProduct key={id}>
                <h2>{item.name}</h2>
                <img src={item.image_url} alt={item.name} />
                <p>
                  <span>Data de fabricação: </span> {item.first_brewed}
                </p>
                <p>
                  <br />
                  <span>Descrição: </span>
                  {item.description}
                </p>
                <br />
                <p>
                  <span>Quantidade de Litros: </span> {item.volume.value}
                </p>
                <StyledButtonToRemove onClick={() => removeWedding(item)}>
                  REMOVER
                </StyledButtonToRemove>
              </StyledEachProduct>
            );
          })
        ) : (
          <h3>"Nenhum produto adicionado para este evento"</h3>
        )}
      </StyledAllProducts>
    </>
  );
};

export default ComponentWedding;
