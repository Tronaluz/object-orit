// Classe abstrata
class Veiculo {
    constructor(modelo) {
      if (this.constructor === Veiculo) {
        throw new Error("Não é possível instanciar diretamente a classe Veiculo");
      }
      this.modelo = modelo;
    }
  
    // Método abstrato
    fazerSom() {
      throw new Error("O método fazerSom deve ser implementado nas subclasses");
    }
  
    // Método comum para todas as classes
    exibirInfo() {
      console.log(`Modelo: ${this.modelo}`);
    }
  }
  
  // Classe Carro (herdeira de Veiculo)
  class Carro extends Veiculo {
    fazerSom() {
      return `O ${this.modelo} faz som`;
    }
  }
  
  // Classe Moto (herdeira de Veiculo)
  class Moto extends Veiculo {
    fazerSom() {
      return `A ${this.modelo} faz um barulho`;
    }
  }
  
  // Criação de instâncias
  const carro1 = new Carro("Fiat");
  const moto1 = new Moto("Honda");
  const carro2 = new Carro("Toyota");
  
  // Uso das instâncias
  carro1.exibirInfo();
  console.log(carro1.fazerSom());
  
  moto1.exibirInfo();
  console.log(moto1.fazerSom());
  
  carro2.exibirInfo();
  console.log(carro2.fazerSom());
  