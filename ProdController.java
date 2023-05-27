package MyPackage.LaptopShopApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RestController;

	import MyPackage.LaptopShopApp.Entities.Product;
	import MyPackage.LaptopShopApp.Services.ProdService;

	@RestController
	@CrossOrigin(allowedHeaders = "*")
	public class ProdController
	{
		@Autowired
		private ProdService prodservice;
		
		@GetMapping("/home")
		public String Home()
		{
			return "Welcome to our Laptop Shop" ;
		}
		//get all the products  using GET Request
		@GetMapping("/Products")
		public List<Product> getProducts()
		{
			return this.prodservice.getProducts();
		}
		//get single product using GET Request
		@GetMapping("/Products/{prodId}")
		public Product getProduct(@PathVariable String prodId)
		{
			return this.prodservice.getProduct(Long.parseLong(prodId));
		}
		//add product using POST Request
		@PostMapping("/Products")
		public Product addProduct(@RequestBody Product product)
		{
			return this.prodservice.addProduct(product);
		}
		//update product using PUT Request
		@PutMapping("/Products")
		public Product updateProduct(@RequestBody Product product)
		{
			return this.prodservice.updateProduct(product);	
		}
		//Delete the product using DELETE Request
		@DeleteMapping("/Products/{prodId}")
		public void deleteProduct(@PathVariable String prodId)
		{
			this.prodservice.deleteProduct(Long.parseLong(prodId));
		}
		public ProdController()
		{
			super();

		}

	}
