using System;
using System.Collections.Generic;

namespace Insulter
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> insults = new List<string> {
               "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?" 
            };

            List<int> indicies = new List<int>{};

            while (indicies.Count < 3) {
                int candidate = GetRandomInt(0, insults.Count); 
                if (!indicies.Contains(candidate)) {
                    indicies.Add(candidate);
                }
            }

            foreach (int index in indicies)
            {
                System.Console.WriteLine(insults[index]);
            }
        }

        static int GetRandomInt(int min, int max) {
            Random randomInt = new Random();
            return randomInt.Next(min, max);
        }
    }
}
