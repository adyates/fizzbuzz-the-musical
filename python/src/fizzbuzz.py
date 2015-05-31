def sodaBee(ceiling):
    answerSet = [] 
    
    for number in xrange(1, ceiling + 1):
        answer = '' if number % 3 else 'Fizz'
        answer += '' if number % 5 else 'Buzz'
        answer = answer or str(number)
        answerSet.append(answer)
        
    return '\n'.join(answerSet) + '\n'
