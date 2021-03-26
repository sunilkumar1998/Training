using System;
using System.Collections.Generic;
using System.Text;

namespace MyExtensionDemo
{
    public static class VowelClass
    {
        public static void vowelcheck(this string s) {
            int count = 0;
            var r=s.ToLower();
            //Console.WriteLine(s);
            foreach (char i in r) {
                if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {

                    count++;
                        }
            }
            Console.WriteLine("Number of Vowels is " +count);
        }

    }
}
