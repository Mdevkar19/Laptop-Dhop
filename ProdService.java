package MyPackage.LaptopShopApp.Services;

import java.util.List;

import MyPackage.LaptopShopApp.Entities.Product;


public interface ProdService
{

public List<Product> getProducts();
	
	public  Product getProduct(long prodId);
	
	public Product addProduct(Product product);
	
	public Product updateProduct(Product product);
	
	public void deleteProduct(long parseLong);

}
