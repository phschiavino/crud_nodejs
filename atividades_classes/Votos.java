public class Votos {

	public static void main(String[] args) {
		InformacaoEleicao info = new InformacaoEleicao();
		 
		info.calculaValidos();
		info.calculaBrancos();
		info.calculaNulos();

	}
}