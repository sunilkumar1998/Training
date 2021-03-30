using System;
using System.Collections.Generic;
using System.Text;

namespace genericDemo
{
	public class Product
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public int price { get; set; }

		public override string ToString()
		{
			return this.Id + " " + this.Title + " " + this.price;
		}
	}
}
