
const {sequelize} = require('./db');

const{Restaurant, Menu, Item} = require("./index") //referecing index

describe('Restaurant Database', () => {                                   //making a musician database

     beforeAll(async () => {
         await sequelize.sync({force:true})
     })       //make sure test is uptodate with the database ur creating , before all test run we call the aysnc function, where we sync sequelize to be updated to the last code written with force true

     
     test('can create a restaurant', async() => {
		const testRestaurant = await Restaurant.create({name : 'Panda Express'})
        
		expect(testRestaurant.name).toBe('Panda Express')
	})

    test('can restuarant have location', async() => {
        const testRestaurant = await Restaurant.create({location: "Dallas"})
        expect(testRestaurant.location).toBe("Dallas")
    }) 
    
    test('can menu have many items' , async() => {
        //Menus
        const breakfast = await Menu.create({name:'Breakfast'})
        const lunch = await Menu.create({name: 'Lunch'})
        const dinner = await Menu.create({name: 'Dinner'})
        //breakfast
        const pancakes = await Item.create({name: "pancakes", price: 8.99})
        const frenchToast = await Item.create({name: "french toast", price: 15.99})
        const steakEgg = await Item.create({name:"Steak and Eggs", price: 23.99})
        //Lunch
        const pasta = await Item.create({name:'pasta', price: 16.99})
        const tboneSteak = await Item.create({name: 'T-Bone steak', price: 34.99})
        const burger = await Item.create({name:'Burger', price: 13.99})
        //dinner
        const pizza = await Item.create({name: 'pizza', price: 14.99})
        const lobster = await Item.create({name: 'lobster', price: 40.99})
        const friedChicken = await Item.create({name: "friedChicken", price: 23.99})
        
        // adding items to breakfast menu, able to do this because of MM and association setup
        await breakfast.addItem(pancakes)      //must have association set up
        await breakfast.addItem(frenchToast)   // addItem is magic method
        await breakfast.addItem(steakEgg)     //magic method... adding association
        
        // adding items to lunch menu, able to do this because of MM and association setup

        await lunch.addItem(pasta)
        await lunch.addItem(tboneSteak)
        await lunch.addItem(burger)

    // adding items to dinner menu, able to do this because of MM and association setup
        await dinner.addItem(pizza)
        await dinner.addItem(lobster)
        await dinner.addItem(friedChicken)


        const items = await breakfast.getItems()  // another assoication magic method
        const itemsL = await lunch.getItems()
        const itemsD = await dinner.getItems()
        
        //breakfast 
        expect(items.length).toBe(3)
        expect(items[0] instanceof Item).toBeTruthy
        //lunch
        expect(itemsL.length).toBe(3)
        expect(items[0] instanceof Item).toBeTruthy
        //dinner
        expect(itemsD.length).toBe(3)
        expect(items[0] instanceof Item).toBeTruthy
    })


    test('restaurant can have many menus', async() => {
        const oliveGarden = await Restaurant.create({name: "Olive Garden", cuisine:"Italian", location:"Houston"})
        

        const breakfast = await Menu.create({name: 'breakfast'})
        const lunch = await Menu.create({name: 'lunch'})
        const dinner = await Menu.create({name: "dinner"})
        const dessert = await Menu.create({name: "dessert"})
        // adding menus to olive garden
        await oliveGarden.addMenu(breakfast)
        await oliveGarden.addMenu(lunch)
        await oliveGarden.addMenu(dinner)
        await oliveGarden.addMenu(dessert)
       

        const menusOG = await oliveGarden.getMenus()  //plural syntax, you need a 's'
        
        //Olive garden
        expect(menusOG.length).toBe(4)
        expect(menusOG [0] instanceof Menu).toBeTruthy

       
        
    })

    test("can create an item", async() => {
        const itemOne = await Item.create({name: "Chicken Salad", price: 7.99})
        expect(itemOne.name).toBe("Chicken Salad")
    })


    test('can create a menu', async () => {
        const menuOne = await Menu.create({name: 'Dessert'})
        expect(menuOne.name).toBe('Dessert')
    })



   })       
