using AutoMapper;
using ExpenseMaster.Server.DTOs;
using ExpenseMaster.Server.Models;

namespace ExpenseMaster.Server.Profiles
{
    public class ExpenseProfile : Profile
    {
        public ExpenseProfile()
        {
            CreateMap<Expense, ExpenseDto>();
            CreateMap<CreateExpenseDto, Expense>();
        }
    }
}
