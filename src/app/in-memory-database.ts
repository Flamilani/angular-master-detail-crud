import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, name: "Lazer", description: "Cinema, parques, praia, etc"},
      { id: 2, name: "Saúde", description: "Plano de Saúde e Remédios"},
      { id: 3, name: "Moradia", description: "Pagamentos de Contas de Casa"},
      { id: 4, name: "Salário", description: "Recebimento de Salário"},
      { id: 5, name: "Freelas", description: "Serviços como freelancer"}
    ];

    return { categories }
  }
}
