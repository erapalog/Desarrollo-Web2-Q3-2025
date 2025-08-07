import NavBarComponent from "../Componentes/NavBarComponent";
import ProviderProducto from "../Providers/ProviderProducto";

export default function Layout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      

      <ProviderProducto>
        <NavBarComponent></NavBarComponent>
              {children}
      </ProviderProducto>
     
    </div>
  );
}