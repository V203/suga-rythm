import { describe, expect, test } from '@jest/globals';
import Services from '../Services';

describe(
  "Products testing", () => {

    test.skip('The total number of products available should be 6', () => {
      const services = Services();
      const result: number = services.getProducts().length
      expect(result).toBe(6);
    });

    test.skip("Should equal 0 since the product hasnt been added to the cart", () => {
      const services = Services();
      expect(services.getCart().length).toBe(0);
    });

    test.skip("Now we should a product to teh cart and be a ble to get a item in the cart.", () => {
      const services = Services();
      services.add("Plain");
      expect(services.getCart().length).toBe(1)
    });

    test.skip("Should add three items in the cart and be able to select and view the details of the coffee.", () => {
      const services = Services();

      services.add("Dougnut Roll");
      services.add("Coffee");
      services.add("Choc sprinle");
      services.add("Strawberry");

      const expected = services.getSelectedProduct("Coffee")
      
      expect(expected.name).toBe("Coffee");
    })
    
    test.skip("Should add to two items to the cart and the cart equal to the length of three", () => {
        const services = Services();
        
        services.add("Dougnut Roll");
        services.add("Coffee");
                
        expect(services.getCart().length).toBe(4);
      })
      
      test.skip("Should be able to get the grand total of all items in the cart", () => {
        const services = Services();
        const result:GLfloat = 81.00
  
        expect(services.getGrandTotal()).toEqual(result.toFixed(2));
      })

      test("Should be able to get the number of items in the cart.", () => {
        const services = Services();
        services.add("Dougnut Roll");
        services.add("Coffee");
        services.add("Choc sprinle");
        services.add("Strawberry");
        const result = services.getSumOfItemsInCart()
  
  
        expect(result).toEqual(3);
      })
  
  
    })
  
  