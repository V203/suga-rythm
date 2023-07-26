import { describe, expect, test } from '@jest/globals';
import Services from '../Services';

describe(
  "Products testing", () => {
    beforeEach(()=>{
      const services = Services();
      services.clearCart()

    })

    test('The total number of products available should be equal 6', () => {
      const services = Services();
      const result: number = services.getProducts().length
      expect(result).toBe(6);
    });

    test("Should equal 0 since that we havent added any items in the cart.", () => {
      const services = Services();
      expect(services.getCart().length).toBe(0);
    });

    test("Now we should a product to the cart and be a ble to get a item in the cart.", () => {

      const services = Services();

      services.add("Plain");

      expect(services.getCart().length).toBe(1)
    });

    test("We Should add three items in the cart and be able to select and view the details of the coffee.", () => {
      const services = Services();

      services.add("Dougnut Roll");
      services.add("Coffee");
      services.add("Choc sprinle");
      services.add("Strawberry");

      const expected = services.getSelectedProduct("Coffee")
      
      expect(expected.name).toBe("Coffee");
    })
    
    test("We added two items in the cart and the length of the cart should equal 2", () => {
        const services = Services();
        
        services.add("Dougnut Roll");
        services.add("Coffee");
                
        expect(services.getCart().length).toBe(2);
      })
      
      test("Should be able to get the grand total of all items in the cart which should equal 69.50", () => {

        const services = Services();

        services.add("Dougnut Roll");
        services.add("Coffee");
        services.add("Choc sprinle");
        services.add("Strawberry");
        services.add("Dougnut Roll");
        services.add("Coffee");
        services.add("Choc sprinle");
        services.add("Strawberry");

        const result:GLfloat = 69.50
  
        expect(services.getGrandTotal()).toEqual(result.toFixed(2));
      })

      test("Should add four items in the cart and total of items in the cart should equal 4.", () => {

        const services = Services();

        services.clearCart()
        services.add("Classic Icing");
        services.add("Coffee");
        services.add("Strawberry");
        
        const result = services.getSumOfItemsInCart();
        
        expect(result).toEqual(4);
        
      })

      test("By entering C in the search field the results should  yield all items that have the letter C in their names.", () => {
        const services = Services();
        
        const result = services.filterProducts("C");

        expect(result.length).toEqual(5);
      })
  
  
    })
  
  