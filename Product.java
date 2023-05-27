package MyPackage.LaptopShopApp.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product
{
	   @Id
	   private int id;
	   private String prodName;
	   private String prodPrice;
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the prodName
	 */
	public String getProdName() {
		return prodName;
	}
	/**
	 * @param prodName the prodName to set
	 */
	public void setProdName(String prodName) {
		this.prodName = prodName;
	}
	/**
	 * @return the prodPrice
	 */
	public String getProdPrice() {
		return prodPrice;
	}
	/**
	 * @param prodPrice the prodPrice to set
	 */
	public void setProdPrice(String prodPrice) {
		this.prodPrice = prodPrice;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", prodName=" + prodName + ", prodPrice=" + prodPrice + "]";
	}
	public Product(int id, String prodName, String prodPrice) {
		super();
		this.id = id;
		this.prodName = prodName;
		this.prodPrice = prodPrice;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	   

}
