using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MapStoneProject.Controllers
{
    [Authorize]
    public class MapsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Map1()
        {
            return View();
        }

        public IActionResult Map2()
        {
            return View();
        }
    }
}
