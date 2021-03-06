﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models.Domain
{
    public class UrlDomain
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string DanceType { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string Image { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
