public class InformacaoEleicao {

	int totalEleitores = 1000;
	int validos = 800;
	int brancos = 150;
	int nulos = 50;
	double percBrancos, percNulos, percValidos;

	public void calculaValidos() {
		percValidos = ((double) validos / totalEleitores) * 100;
		System.out.printf("\n\n%6.2f%% de votos validos.", percValidos);
	}

	public void calculaBrancos() {
		percBrancos = ((double) brancos / totalEleitores) * 100;
		System.out.printf("\n%6.2f%% de votos em branco.", percBrancos);
	}

	public void calculaNulos() {
		percNulos = ((double) nulos / totalEleitores) * 100;
		System.out.printf("\n%6.2f%% de votos nulos.\n", percNulos);
	}

}