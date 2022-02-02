import { useConfraternization } from "../../Providers/Confraternization";
import {
  StyledAllProducts,
  StyledEachProduct,
  StyledButtonToRemove
} from "../AllProducts/styles";

const ComponentConfraternization = () => {
  const { confraternization, removeConfraternization } = useConfraternization();

  return (
    <>
      <StyledAllProducts>
        <h1>Confraternização</h1>
        {confraternization.length > 0 ? (
          confraternization.map((item, id) => {
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
                <StyledButtonToRemove
                  onClick={() => removeConfraternization(item)}
                >
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

export default ComponentConfraternization;
