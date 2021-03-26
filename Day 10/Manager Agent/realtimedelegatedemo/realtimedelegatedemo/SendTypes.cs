using System;
using System.Collections.Generic;
using System.Text;

namespace realtimedelegatedemo
{
	public static class SendTypes
	{
		public static bool SendByEmail(Message m)
		{
			Console.WriteLine($"{m.Content} is delivered by email to {m.Address}");
			return true;
		}

		public static bool SendByCar(Message m)
		{
			Console.WriteLine($"{m.Content} is delivered by car to {m.Address}");
			return true;
		}

		public static bool SendByShip(Message m)
		{
			Console.WriteLine($"{m.Content} could not be delivered by ship to {m.Address}");
			return false;
		}
	}
}
