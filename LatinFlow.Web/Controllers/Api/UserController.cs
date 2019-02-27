using LatinFlow.Models.Domain;
using LatinFlow.Models.Request;
using LatinFlow.Models.Response;
using LatinFlow.Models.Responses;
using LatinFlow.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LatinFlow.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        private IUserService _svc;

        public UserController(IUserService svc)
        {
            _svc = svc;
        }

        [Route("insert"), HttpPost]
        public HttpResponseMessage Insert(UserAddRequest model)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    ItemResponse<int> response = new ItemResponse<int>();
                    response.Item = _svc.Insert(model);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);

                }            
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("selectall"), HttpGet]
        public HttpResponseMessage SelectAll()
        {
            ItemListResponse<UserDomain> response = new ItemListResponse<UserDomain>();
            response.Items = _svc.SelectAll();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [Route("{id:int}"), HttpGet]
        public HttpResponseMessage SelectById(int id)
        {
            ItemResponse<UserDomain> response = new ItemResponse<UserDomain>();
            response.Item = _svc.SelectById(id);
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [Route("{id:int}"), HttpPost]
        public HttpResponseMessage SelectByEmail(UserEmailAddRequest model)
        {
            try
            {
                ItemResponse<UserDomain> response = new ItemResponse<UserDomain>();
                // response.Item = svc.SelectByEmail(model.Email);
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
            
        }

        [Route("{id:int}"), HttpPut]
        public HttpResponseMessage Update(UserUpdateRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _svc.Update(model);
                    SuccessResponse response = new SuccessResponse();
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [Route("{id:int}"), HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                _svc.Delete(id);
                SuccessResponse response = new SuccessResponse();
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
