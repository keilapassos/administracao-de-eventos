import { useGraduation } from "../../Providers/Graduation";
import {
  StyledAllProducts,
  StyledEachProduct,
  StyledButtonToRemove
} from "../AllProducts/styles";

const ComponentGraduation = () => {
  const { graduation, removeGraduation } = useGraduation();

  return (
    <>
      <StyledAllProducts>
        <h1>Formatura</h1>
        {graduation.length > 0 ? (
          graduation.map((item, id) => {
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
                <StyledButtonToRemove onClick={() => removeGraduation(item)}>
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

export default ComponentGraduation;
