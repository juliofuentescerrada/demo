using Demo.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Demo.Api.Controllers
{
    [Route("api/products")]
    public class ProductsController : Controller
    {
        private static readonly IList<Product> _products = Enumerable.Range(1, 5).Select(id => new Product { Id = id, Name = $"Product{id}" }).ToList();

        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            var result = _products;
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public ActionResult<Product> Get(int id)
        {
            var result = new Product { Id = id, Name = $"Product{id}" };
            return Ok(result);
        }

        [HttpPost]
        public ActionResult Create([FromBody]Product product)
        {
            product.Id = _products.Max(e => e.Id) + 1;
            _products.Add(product);
            return CreatedAtAction(nameof(Get), product.Id);
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            var product = _products.FirstOrDefault(e => e.Id == id);
            _products.Remove(product);
            return Ok();
        }
    }
}