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
            string[] extensions = { ".raw", ".jpg", ".png", ".tif", ".psd" };

            var extDict = new Dictionary<string, int>();
            foreach (var file in Directory.EnumerateFiles(folder))
            {
                var ext = System.IO.Path.GetExtension(file).ToLower();
                if (extensions.Contains(ext))
                {
                    //int count = 1;
                    if (extDict.TryGetValue(ext, out int count))
                    {
                        extDict.Remove(ext);
                    }
                    count++;
                    extDict.Add(ext, count);
                }
            }
            var result = from extCount in extDict
                         select new { extention = extCount.Key, count = extCount.Value };

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
