using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace NSwag_example.API.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ProductsController : ControllerBase
    {
        private readonly List<Product> _products = new List<Product>();

        // We can set return type directly
        [HttpGet]
        public Product Get(Guid id)
        {
            return _products.SingleOrDefault(product => product.Id == id);
        }

        // Or set generic IActionResult with ProducesResponseType to let swagger to know response type and nswag to generate code
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Product>), 200)]
        public IActionResult GetAll()
        {
            return Ok(_products);
        }

        [HttpPost]
        public Product Add(Product product)
        {
            _products.Add(product);

            return _products.Last();
        }

        [HttpPut]
        public Product Update(Product product)
        {
            var updateIndex = _products.FindIndex(p => p.Id == product.Id);

            _products[updateIndex] = product;

            return _products[updateIndex];
        }
    }
}