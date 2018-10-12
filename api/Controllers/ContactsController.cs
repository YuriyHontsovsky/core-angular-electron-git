using System;
using Microsoft.AspNetCore.Mvc;
using ToolBox.Bridge;
using ToolBox.Notification;
using ToolBox.Platform;

namespace api.Controllers
{
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        public static INotificationSystem _notificationSystem { get; set; }
        public static IBridgeSystem _bridgeSystem { get; set; }
        public static ShellConfigurator _shell { get; set; }
        
        static ContactsController()
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
        
        // GET api/contacts
        [HttpGet]
        public IActionResult Get()
        {
            string testString = "test";
            var result = new[] {
                new { FirstName = testString, LastName = "Doe" },
                new { FirstName = "Mike", LastName = "Smith" }
            };

            return Ok(result);
        }
    }
}