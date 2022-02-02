import { WeddingProvider } from "./Wedding";
import { ConfraternizationProvider } from "./Confraternization";
import { GraduationProvider } from "./Graduation";
import { ProductsProvider } from "./GetProducts";

const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <WeddingProvider>
        <ConfraternizationProvider>
          <GraduationProvider>{children}</GraduationProvider>
        </ConfraternizationProvider>
      </WeddingProvider>
    </ProductsProvider>
  );
};

export default Providers;
