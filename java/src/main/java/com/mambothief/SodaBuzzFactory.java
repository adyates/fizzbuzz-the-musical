package com.mambothief;

/**
 * A Factory class for generating FizzBuzzes based on a given input.
 * 
 * @author Alvin Yates
 */

public class SodaBuzzFactory {

	/**
	 * Create a new String for FizzBuzz usage based on the number passed in.
	 * Typical FB rules apply (3 for Fizz, 5 for Buzz, 3 and 5 for FizzBuzz).
	 */
	public StringBuilder makeSodaBee(int number) {
		StringBuilder sb = new StringBuilder(); 
		if (number % 3 != 0 && number % 5 != 0) {
			sb.append(number);
		} else {
			if (number % 3 == 0) {
				sb.append("Fizz");
			}
			if (number % 5 == 0) {
				sb.append("Buzz");
			}
		}
		sb.append("\n");
		return sb;
	}
}
