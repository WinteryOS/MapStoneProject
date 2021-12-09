using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MapStoneProject.Controllers
{
    public class CalculatorsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Calculator1()
        {
            return View();
        }
    }
}
