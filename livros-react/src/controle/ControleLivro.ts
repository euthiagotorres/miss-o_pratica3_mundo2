import { Livro } from './livro';

const livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: "Livro A", resumo: "Resumo do Livro A", autores: ["Autor A1", "Autor A2"] },
    { codigo: 2, codEditora: 2, titulo: "Livro B", resumo: "Resumo do Livro B", autores: ["Autor B1"] },
    { codigo: 3, codEditora: 3, titulo: "Livro C", resumo: "Resumo do Livro C", autores: ["Autor C1", "Autor C2", "Autor C3"] }
];

export class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const indice = livros.findIndex(livro => livro.codigo === codigo);
        if (indice !== -1) {
            livros.splice(indice, 1);
        }
    }
}
