using System;

namespace FizzBuzz
{
    class Program
    {
        static void Main(string[] args)
        {

            
            for (int n=1; n <= 100; n++) {
                if(n % 15 == 0) {
                    System.Console.WriteLine("fizzbuzz");
                } else if (n % 3 == 0) {
                    System.Console.WriteLine("fizz");
                } else if (n % 5 == 0) {
                    System.Console.WriteLine("buzz");
                } else {
                    System.Console.WriteLine(n);
                }
            }
        }
    }
}
