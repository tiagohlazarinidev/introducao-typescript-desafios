const pessoa = {
  nome: "mariana",
  idade: 28,
  profissao: "dev",
};

pessoa.idade = 29;

const andre: { nome: string; idade: number; profissao: string } = {
  nome: "andre",
  idade: 25,
  profissao: "pintor",
};

const paula: { nome: string; idade: number; profissao: string } = {
  nome: "paula",
  idade: 25,
  profissao: "desenvolvedora",
};

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
  nome: "Maria",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
  materias: ["matematica discreta", "programacao"],
  nome: "Jessica",
  idade: 28,
  profissao: Profissao.Desenvolvedora,
};

const monica: Estudante = {
  materias: ["matematica discreta", "programacao"],
  nome: "Monica",
  idade: 28,
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(monica.materias);
