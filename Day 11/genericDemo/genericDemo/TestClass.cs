using System;
using System.Collections.Generic;
using System.Text;

namespace genericDemo
{
	public class TestClass<T>
	{
		T[] obj = new T[6];
		int count = 0;
		public void Add(T item) {
			if (count + 1 < 6)
			{
				obj[count] = item;

			}
			count++;
			}
			
		
		
		public T this[int index]
		{
			get { return obj[index]; }
		set{ obj[index]=value;}
}

	}
}
