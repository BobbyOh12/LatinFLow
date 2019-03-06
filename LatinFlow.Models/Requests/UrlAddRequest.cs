using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models.Requests
{
    public class UrlAddRequest
    {
        public string Title { get; set; }
        // public string Location { get; set; }
        // public string DanceType { get; set; }
        public string Description { get; set; }
        [Required]
        public string Url { get; set; }
        public string Image { get; set; }
    }
}
