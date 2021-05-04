public class Multiplos35 {

	public static void main(String[] args) {

		int numero = 10;

		int soma3 = 0;
		int soma5 = 0;

		for (int x = 0; numero > x; x++) {

			if (x % 3 == 0) {
				soma3 += x;
			}

			if (x % 5 == 0) {
				soma5 += x;
			}

		}
		System.out.println(soma5 + soma3);
	}
}