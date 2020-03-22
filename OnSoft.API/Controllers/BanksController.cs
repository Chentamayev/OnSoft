using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnSoft.API.Model.Data;

namespace OnSoft.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BanksController : ControllerBase
    {
        private readonly DataContext _context;
        public BanksController(DataContext context)
        {
            _context = context;

        }
        // GET api/companies
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetBanks()
        {
            var banks = await _context.Banks.ToListAsync();

            return Ok(banks);
        }

    }
}