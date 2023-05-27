package MyPackage.LaptopShopApp.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import MyPackage.LaptopShopApp.Entities.Product;

public interface ProductDao extends JpaRepository<Product, Long>
{

}
