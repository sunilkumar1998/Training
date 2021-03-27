using core;
using infrastructure;
using System;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Inventory cluster = new Inventory();
            Console.WriteLine(cluster.ToString());
            Product monitor = new Product { Title = "Monitor", Color = "Black", Price = 15000 };
            monitor.display();
        }
    }
}
