using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bet_API.Data
{
    public class Movies
    {
        [Key]
        public int? MovieID { get; set; }

        public string? Title { get; set; }
        public string? Category { get; set; }
        public int? Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? Edited { get; set; }
    }
}
