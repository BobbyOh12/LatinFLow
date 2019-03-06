using LatinFlow.Models.Domain;
using LatinFlow.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Services.Interfaces
{
    public interface IUrlService
    {
        int Create(UrlAddRequest model);
        List<UrlDomain> SelectAll();
        List<UrlDomain> SelectById(int id);
        void Delete(int id);
    }
}
