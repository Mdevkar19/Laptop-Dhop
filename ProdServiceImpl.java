package MyPackage.LaptopShopApp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import MyPackage.LaptopShopApp.DAO.ProductDao;
import MyPackage.LaptopShopApp.Entities.Product;


@Service
public class ProdServiceImpl implements ProdService
{
	@Autowired
	private ProductDao productDao;

	@Override
	public List<Product> getProducts()
	{
		// TODO Auto-generated method stub
		return productDao.findAll();
	}

	@Override
	public Product getProduct(long prodId) {
		// TODO Auto-generated method stub
		return productDao.getOne(prodId);
	}

	@Override
	public Product addProduct(Product product) {
		// TODO Auto-generated method stub
		productDao.save(product);
		return product;
	}

	@Override
	public Product updateProduct(Product product) {
		// TODO Auto-generated method stub
		productDao.save(product);
		return product;
	}

	@Override
	public void deleteProduct(long parseLong) {
		// TODO Auto-generated method stub
		Product entity =productDao.getOne(parseLong);
		productDao.delete(entity);
		
	}


	
	
	

}
