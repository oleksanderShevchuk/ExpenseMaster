using AutoMapper;
using ExpenseMaster.Server.Data;
using ExpenseMaster.Server.DTOs;
using ExpenseMaster.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExpenseMaster.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpensesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public ExpensesController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExpenseDto>>> GetAll()
        {
            var expenses = await _context.Expenses
                .OrderByDescending(e => e.Date)
                .ToListAsync();
            return Ok(_mapper.Map<List<ExpenseDto>>(expenses));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseDto>> Get(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null) return NotFound();
            return Ok(_mapper.Map<ExpenseDto>(expense));
        }

        [HttpPost]
        public async Task<ActionResult<ExpenseDto>> Create(CreateExpenseDto dto)
        {
            var expense = _mapper.Map<Expense>(dto);
            _context.Expenses.Add(expense);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = expense.Id }, _mapper.Map<ExpenseDto>(expense));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, CreateExpenseDto dto)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null) return NotFound();

            _mapper.Map(dto, expense);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null) return NotFound();

            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
