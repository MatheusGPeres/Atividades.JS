//EXERCÍCIO PARA CASA -> IMPLEMENTE UMA FUNÇÃO QUE RECEBA UMA LISTA DE ALUNOS DE ISW-008 (NOME,RA,NOTA P1, NOTA P2). EXEMPLO: {NOME:"DIEGO", "RA:0050832311004", NOTAP1:10, NOTAP2:8}. ESSA FUNÇÃO DEVERÁ:
// a) MOSTRAR NA TELA OS ALUNOS EM UMA TABELA
// b) NOTAS MENORES QUE 6 EM VERMELHO, MAIORES OU IGUAIS EM AZUL
// c) A MÉDIA DA P1 DA TURMA
// d) A MÉDIA DA P2 DA TURMA
// e) A MÉDIA DE CADA ALUNO
// f) A QUANTIDADE DE APROVADOS
// g) A QUANTIDADE DE REPROVADOS

// OBS: PARA TESTAR COLOQUE 5-10 ALUNOS

function tabelaISW(listaAlunos) {
    var acumulado = "<table><thead><tr><th>Nome</th>"
        + "<th>RA</th>"
        + "<th>NotaP1</th>"
        + "<th>NotaP2</th>"
        + "<th>MédiaAluno</th>"
        + "</tr>"
        + "</thead>"
        + "<tbody>";
    let mediaP1 = 0;
    let mediaP2 = 0;
    let aprovados = 0;
    let reprovados = 0;

    for (let i = 0; i < listaAlunos.length; i++) {
        let corP1 = listaAlunos[i].notaP1 >= 6 ? "blue" : "red";
        let corP2 = listaAlunos[i].notaP2 >= 6 ? "blue" : "red";
        let media = (listaAlunos[i].notaP1 + listaAlunos[i].notaP2) / 2;
        let corMedia = media >= 6 ? "blue" : "red";

        mediaP1 += listaAlunos[i].notaP1;
        mediaP2 += listaAlunos[i].notaP2;

        acumulado += "<tr><td>" + listaAlunos[i].nome + "</td>"
            + "<td>" + listaAlunos[i].ra + "</td>"
            + "<td style='color:" + corP1 + "'>" + listaAlunos[i].notaP1 + "</td>"
            + "<td style='color:" + corP2 + "'>" + listaAlunos[i].notaP2 + "</td>"
            + "<td style='color:" + corMedia + "'>" + media.toFixed(2) + "</td></tr>";

        if (media >= 6)
            aprovados++;
        else
            reprovados++;
    }
    mediaP1 = mediaP1 / listaAlunos.length;
    mediaP2 = mediaP2 / listaAlunos.length;

    acumulado += "</tbody></table>";

    document.write(acumulado);
    document.write("<p>Média da P1 da turma: " + mediaP1.toFixed(2) + "</p>");
    document.write("<p>Média da P2 da turma: " + mediaP2.toFixed(2) + "</p>");
    document.write("<p>Quantidade de aprovados: " + aprovados + "</p>");
    document.write("<p>Quantidade de reprovados: " + reprovados + "</p>");
}
tabelaISW(alunos);