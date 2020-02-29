//RECURSIVIDADE

function fatorial(n){
    if(n==1){
        return 1
    }
    else{
        return n* fatorial(n-1)
    }
}

/*

5! = 5 x 4 x 3 x 2 x 1

5! = 5 x 4!

n! = n X (n-1)!

1! = 1


sendo assim

qual é o fatorial de 5?

5 x 4!

e o 4! ?

4 x 3!

e o 3! ?

3 x 2!

e o 2! ?

2 x 1! 

e o 1!

1! = 1

portanto quando chega no 1 , ele volta multiplicando

2x1! = 2

3x2! = 6

4x3! = 24

5x4! = 120

120 é o fatorial de 5
*/