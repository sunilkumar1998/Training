using System;
using System.Collections.Generic;
using System.Linq;

namespace Day_11_task
{
	class Program
	{
		static void Main(string[] args)
		{
			List<Product> products = new List<Product>
			{
				new Product{


				Id = 10,
				Title = "pen",
				Price = 400,
				Owner = "xyz",
				},



				new Product{


				Id = 10,
				Title = "pen",
				Price = 100,
				Owner = "xyz",
				},


				new Product{


				Id = 10,
				Title = "pen",
				Price = 100,
				Owner = "xyz",
				}


			};

			//var owners = products.Where(p => p.Price > 300).Select(p => p.Owner).ToList();
			var owners = (from r in products where r.Price > 300 select (r.Owner)).ToList(); 

			owners.ForEach(o => Console.WriteLine(o));
			
			
			
			
		}
	}
}
