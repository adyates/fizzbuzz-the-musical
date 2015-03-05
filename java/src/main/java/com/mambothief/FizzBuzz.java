package com.mambothief;

/**
 * The main Fizz Buzz class.  The creator of pain and torment.  For Freedom.
 * 
 * @author Alvin Yates 
 */

public class FizzBuzz {
    /**
     * The classic Fizz Buzz function.  Given a ceiling, builds the printable string in classic
     * FizzBuzz format for the numbers [1, ceiling) and returns the resulting buffer.
     *
     * @param ceiling The number (inclusive) to end on.
     */
    public StringBuilder sodaBee(int ceiling) {
	StringBuilder sb = new StringBuilder();

	for (int nextNum = 1; nextNum <= ceiling; nextNum++) {
	    if (nextNum % 3 != 0 && nextNum % 5 != 0) {
		sb.append(nextNum);
	    } else {
		if (nextNum % 3 == 0) {
		    sb.append("Fizz");
		}	    
		if (nextNum % 5 == 0) {
		    sb.append("Buzz");
		}
	    }
	    
	    sb.append("\n");
	}

	return sb;
    }
    
    public static void main(String[] argv) {
	// Using this for classic CL testing only
	FizzBuzz momentOfTruth = new FizzBuzz();
	StringBuilder answer = momentOfTruth.sodaBee(100);
    }	
	
}
