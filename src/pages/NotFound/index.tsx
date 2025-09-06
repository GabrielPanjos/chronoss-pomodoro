import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../components/Container";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          reiciendis. Ut eveniet, quos delectus sunt ipsam eos accusamus
          repudiandae maxime. Consequuntur, quae animi. Ipsa fugit aspernatur
          dignissimos facere illum consequatur.
        </p>
      </Container>
    </MainTemplate>
  );
}
