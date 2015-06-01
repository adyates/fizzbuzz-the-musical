import chai
import unittest

import fizzbuzz

class FizzBuzzTest(chai.Chai):
    
    @unittest.skip
    def testFrameworkRuns(self):
        self.assertTrue(True)
        
    def testVerifyTo100(self):
        expected_output = ''
        with open('../baseList.txt', 'rb') as f:
            expected_output = f.read()
            
        self.assertEqual(expected_output, fizzbuzz.sodaBee(100))
