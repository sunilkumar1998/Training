using System;
using System.Collections.Generic;
using System.Text;

namespace realtimedelegatedemo
{
	public class NotificationEventArgs
	{
		public bool status;
		public NotificationEventArgs(bool a)
		{
			status = a;
		}
	}
}
