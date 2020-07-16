using System;

namespace PrimeNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Checking if number is prime");
            int num = 17;
            
            if (IsPrime(num)) Console.WriteLine("It is Prime!!");
            else Console.WriteLine("It is not Prime!!");

            num = 12;
            if (IsPrime(num)) Console.WriteLine("It is Prime!!");
            else Console.WriteLine("It is not Prime!!");
        }

        private static bool IsPrime(int num)
        {
            for (let factor = 2; factor < num; factor ++){
                if (num % factor == 0) {
                   return false;
                   return true;
                }
            }
        }
    }
}