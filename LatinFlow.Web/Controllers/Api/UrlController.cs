using HtmlAgilityPack;
using LatinFlow.Models.Domain;
using LatinFlow.Models.Requests;
using LatinFlow.Models.Responses;
using LatinFlow.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LatinFlow.Web.Controllers.Api
{
    [RoutePrefix("api/url")]
    public class UrlController : ApiController
    {
        private IUrlService _urlService;

        public UrlController(IUrlService urlService)
        {
            _urlService = urlService;
        }

        [Route("create"), HttpPost]
        public HttpResponseMessage Create(UrlAddRequest model)
        {
            try
            {
                string webUrl = model.Url;
                HtmlWeb web = new HtmlWeb();
                web.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36";
                var htmlDoc = web.Load(webUrl);

                //IUserAuthData currentUser = _authenticationService.GetCurrentUser();
                // string currentUserName = currentUser.Name;

                var createModel = new UrlAddRequest
                {
                    Title = "",
                    Description = "",
                    Image = "",
                    Url = model.Url,
                };

                if (htmlDoc.DocumentNode != null && htmlDoc.ParseErrors != null && model.Title == null && model.Description == null && model.Image == null)
                {

                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:title\"]") != null)
                    {
                        createModel.Title = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:title\"]").Attributes["content"].Value;
                    }
                    if (string.IsNullOrEmpty(createModel.Title) && htmlDoc.DocumentNode.SelectSingleNode("//head/title") != null)
                    {
                        createModel.Title = htmlDoc.DocumentNode.SelectSingleNode("//head/title").InnerText.Trim();
                    }

                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:description\"]") != null)
                    {
                        createModel.Description = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:description\"]").Attributes["content"].Value;
                    }
                    var metaDescription = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[translate(@name, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')=\"description\"]");
                    if (string.IsNullOrEmpty(createModel.Description) && metaDescription != null)
                    {
                        createModel.Description = metaDescription.Attributes["content"].Value;
                    }

                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:image\"]") != null)
                    {
                        createModel.Image = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:image\"]").Attributes["content"].Value;
                    }

                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:url\"]") != null)
                    {
                        createModel.Url = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:url\"]").Attributes["content"].Value;
                    }
                }

                else if (model.Title != null && model.Description != null && model.Image != null)
                {
                    createModel.Title = model.Title;
                    createModel.Description = model.Description;
                    createModel.Image = model.Image;
                }

                if (ModelState.IsValid)
                {
                    var resp = new ItemResponse<int>
                    {
                        Item = _urlService.Create(createModel)
                    };
                    //log.Info("Create successful");
                    return Request.CreateResponse(HttpStatusCode.OK, resp);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadGateway, "Model State");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }


        [Route("selectall"), HttpGet]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                ItemsResponse<UrlDomain> resp = new ItemsResponse<UrlDomain>();
                resp.Items = _urlService.SelectAll();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
