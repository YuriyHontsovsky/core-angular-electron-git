using System;
using Microsoft.AspNetCore.Mvc;
using ToolBox.Bridge;
using ToolBox.Notification;
using ToolBox.Platform;

namespace api.Controllers
{
    [Route("convert")]
    public class ConvertController : Controller
    {
        public static INotificationSystem _notificationSystem { get; set; }
        public static IBridgeSystem _bridgeSystem { get; set; }
        public static ShellConfigurator _shell { get; set; }

        static ConvertController()
        {
            _notificationSystem = NotificationSystem.Default;
            switch (OS.GetCurrent())
            {
                case "win":
                    _bridgeSystem = BridgeSystem.Bat;
                    break;
                case "gnu":
                    _bridgeSystem = BridgeSystem.Bash;
                    break;
                case "mac":
                    _bridgeSystem = BridgeSystem.Bash;
                    break;
            }
            _shell = new ShellConfigurator(_bridgeSystem, _notificationSystem);
        }

        // POST convert
        [HttpPost]
        public IActionResult Post()
        {
            string testString = "test";

            /*
            Response resultResponse = _shell.Term("convert '/Users/ygont/Development/core_electron/src/ImageMagick/flower_original.jpg' -font courier -fill white -pointsize 200 -annotate +250+250 'Flower 666' '/Users/ygont/Development/core_electron/src/ImageMagick/result.jpg'", Output.Hidden);

            if (resultResponse.code == 0)
            {
                testString = "Command Works :D";
            }
            else
            {
                testString = resultResponse.stderr;
            }
            */

            var result = new[] {
                new { FirstName = testString, LastName = "Doe" },
                new { FirstName = "Mike", LastName = "Smith" }
            };

            return Ok(result);
        }
    }
}
