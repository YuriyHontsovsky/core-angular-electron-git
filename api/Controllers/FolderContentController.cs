using System;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Collections.Generic;
using System.Linq;

namespace api.Controllers
{
    [Route("foldercontent")]
    public class FolderContentController : Controller
    {
        // GET api/FolderContent
        [HttpGet("{folder}")]
        public IActionResult FolderContent(string folder)
        {
            string[] extensions = { ".RAW", ".JPG", ".PNG", ".TIG", ".PSD" };

            var extDict = new Dictionary<string, int>();
            foreach(var ext in extensions)
            {
                extDict.Add(ext, 0);
            }
            foreach (var file in Directory.EnumerateFiles(folder))
            {
                var ext = System.IO.Path.GetExtension(file).ToUpper();
                if (extensions.Contains(ext))
                {
                    extDict[ext] = extDict[ext] + 1;
                }
            }
            var result = from extCount in extDict
                         select new {
                             selected = false,
                             extention = extCount.Key.Substring(1),
                             count = extCount.Value
                         };

            return Ok(result);
        }
    }
}
