using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace lenguajes
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseKestrel(options =>
                {
                    // This overrides are to show the "Fast 3G" mode
                    // on chrome without a timeout
                    options.Limits.MinResponseDataRate = null;
                    options.Limits.MinRequestBodyDataRate = null;
                })
                .UseStartup<Startup>()
                .Build();
    }
}
