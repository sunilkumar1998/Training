using System;

namespace SimpleExpressionTree
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("lambda expression");
			Func<int, int> square = x => x * x;
			Console.WriteLine(square(9));


			Console.WriteLine("lambda statement");
			Func<int, int> square1 = x => { return x * x; };
			Console.WriteLine(square1(7));


			Console.WriteLine("Simple ExpressionTree Tree");
			System.Linq.Expressions.Expression<Func<int,int>> e= x => x* x;

			var a = e.Compile();

			Console.WriteLine(a(7));
		}
	}
}
