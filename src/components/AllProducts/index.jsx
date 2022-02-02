import { useProducts } from "../../Providers/GetProducts";
import { useConfraternization } from "../../Providers/Confraternization";
import { useGraduation } from "../../Providers/Graduation";
import { useWedding } from "../../Providers/Wedding";
import {
  StyledAllProducts,
  StyledEachProduct,
  StyledButtonPlace
} from "./styles";

const AllProducts = () => {
  const { products } = useProducts();
  const { addConfraternization } = useConfraternization();
  const { addGraduation } = useGraduation();
  const { addWedding } = useWedding();

  return (
    <>
      <StyledAllProducts>
        <h1>Get Drink: Administração de Eventos</h1>
        {products.map((item, id) => {
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
              <StyledButtonPlace>
                <span>Adicionar a: </span>
                <button onClick={() => addWedding(item)}>Casamento</button>
                <button onClick={() => addConfraternization(item)}>
                  Confraternização
                </button>
                <button onClick={() => addGraduation(item)}>Formatura</button>
              </StyledButtonPlace>
            </StyledEachProduct>
          );
        })}
      </StyledAllProducts>
    </>
  );
};

export default AllProducts;
