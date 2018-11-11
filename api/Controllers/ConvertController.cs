using System;
using System.IO;
using api.Classes;
using ImageMagick;
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
        public IActionResult Post([FromBody] ConvertParams convertParams)
        {
            int count = 0;
            foreach(string ext in convertParams.extentions)
            {
                foreach (string fileName in Directory.EnumerateFiles(convertParams.folderFrom, "*." + ext))
                {
                    using (MagickImage image = new MagickImage(fileName))
                    {
                        // Save frame as jpg
                        image.Write(Path.Combine(convertParams.folderTo, Path.GetFileNameWithoutExtension(fileName) + ".jpg"));
                        count++;
                    }
                }

            }

            return Ok(new { count });
        }
    }
}
