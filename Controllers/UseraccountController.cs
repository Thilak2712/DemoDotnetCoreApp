using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DemoDotnetCoreApp.Models;

namespace DemoDotnetCoreApp.Controllers;

public class UseraccountController : Controller
{
    private readonly ILogger<UseraccountController> _logger;

    public UseraccountController(ILogger<UseraccountController> logger)
    {
        _logger = logger;
    }
    public ActionResult Login()
    {
        return View("Signin");
    }
}