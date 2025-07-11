namespace ExpenseMaster.Server.DTOs
{
    public class ExpenseDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Category { get; set; } = string.Empty;
        public string? Description { get; set; }
    }
}
