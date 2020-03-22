using System;
using System.Collections.Generic;
using System.Linq;
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
    public class CompaniesController : ControllerBase
    {
        private readonly DataContext _context;
        public CompaniesController(DataContext context)
        {
            _context = context;

        }
        // GET api/companies
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetCompanies()
        {
            var companies = await _context.Companies.ToListAsync();

            return Ok(companies); 
        }

        // GET api/companies/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult> GetCompanies(int id)
        {
            var companies = await _context.Companies.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(companies);
        }

        // POST api/companies
        [HttpPost]
           [HttpPost("add-comapany")]
        public async Task<IActionResult> Register(CompanyToPostDto companyToPostDto)
        {
            //Validate request
           companyToPostDto.companyName = companyToPostDto.companyName;

            if (await _repo.CompanyExist(companyToPostDto.companyName))

                return BadRequest("Company Already In The DB");



            var companyToCreate = new Company
            {
                Username = userForRegisterDto.Username
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);


            return StatusCode(201);

        }

        // PUT api/companies/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/companies/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
