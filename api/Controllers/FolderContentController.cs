using System;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/foldercontent")]
    class FolderContentController : Controller
    {
        // GET api/FolderContent
        [HttpGet("{folder}")]
        public IActionResult FolderContent(string folder)
        {
            var result = new[] {
                new { folder = folder },
            };

            return Ok(result);
        }

        // GET api/FolderContent
        [HttpGet]
        public IActionResult FolderContentHome()
        {
            var result = new[] {
                new { test = "test" },
            };

            return Ok(result);
        }
    }
}
