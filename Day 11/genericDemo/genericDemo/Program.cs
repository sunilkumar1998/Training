using System;

namespace genericDemo
{
	class Program
	{
		static void Main(string[] args)
		{
			TestClass<int> intobj = new TestClass<int>();
			intobj.Add(8);
			intobj.Add(11);
			intobj.Add(13);
			intobj.Add(54);
			
			intobj.Add(12);


			TestClass<Product> product = new TestClass<Product>();
			product.Add(
				
				new Product {
					Id = 101,
				Title="pen",
				price=500,
				}
			
				);

			product.Add(

				new Product
				{
					Id = 201,
					Title = "pencil",
					price = 100,
				}

				);

			product.Add(

				new Product
				{
					Id = 201,
					Title = "pencil",
					price = 100,
				}

				);

			product.Add(

				new Product
				{
					Id = 201,
					Title = "pencil",
					price = 100,
				}

				);


			for (int i = 0; i < 4; i++) 
			{
				Console.WriteLine(intobj[i]);
				Console.WriteLine(product[i].ToString());
			}
		}
	}
}
