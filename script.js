const menu = [
    { id: 1, title: "Soup of the day", category: "starters", price: "$5", description: "Freshly made soup with seasonal ingredients", img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, title: "Bruschetta", category: "starters", price: "$7", description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella", img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg" },
    { id: 3, title: "Chicken Parmesan", category: "mains", price: "$12", description: "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti", img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
    { id: 4, title: "Steak Frites", category: "mains", price: "$18", description: "Grilled steak served with french fries and salad", img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk=" },
    { id: 5, title: "Chocolate Lava Cake", category: "desserts", price: "$8", description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream", img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478=" },
    { id: 6, title: "Apple Pie", category: "desserts", price: "$6", description: "Classic apple pie with a flaky crust, served with whipped cream", img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 7, title: "Vegan Burger", category: "mains", price: "$10", description: "Plant-based burger served with fries", img: "https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 8, title: "Caesar Salad", category: "starters", price: "$6", description: "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 9, title: "Spaghetti Carbonara", category: "mains", price: "$14", description: "Classic carbonara with pancetta, egg, hard cheese, and pepper", img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 10, title: "Tiramisu", category: "desserts", price: "$7", description: "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 11, title: "Iced Coffee", category: "beverages", price: "$4", description: "Chilled coffee served with ice and cream", img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=" },
    { id: 12, title: "Mango Lassi", category: "beverages", price: "$5", description: "Refreshing Indian drink made with mango and yogurt", img: "https://media.istockphoto.com/id/1217751214/photo/fresh-mango-lassi-and-mango-fruit.webp?b=1&s=170667a&w=0&k=20&c=Jt0J70BwVkGdirVAu78hKb-MiMzN3_GUbCz8SmGUdS8=" },
    { id: 13, title: "Green Tea", category: "beverages", price: "$3", description: "Traditional green tea with antioxidants", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 14, title: "Margherita Pizza", category: "mains", price: "$15", description: "Classic pizza with tomato, mozzarella, and fresh basil", img: "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcmdoZXJpdGElMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 15, title: "Shrimp Scampi", category: "mains", price: "$16", description: "Garlic-infused shrimp served over a bed of linguine pasta", img: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hyaW1wJTIwc2NhbXBpfGVufDB8fDB8fHww" },
    { id: 16, title: "Caprese Salad", category: "starters", price: "$8", description: "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze", img: "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FwcmVzZSUyMFNhbGFkfGVufDB8fDB8fHww" },
    { id: 17, title: "Lemon Sorbet", category: "desserts", price: "$5", description: "Refreshing lemon-flavored sorbet, perfect for cleansing the palate", img: "https://images.unsplash.com/photo-1605909870133-3b55c227362d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBzb3JiZXR8ZW58MHx8MHx8fDA%3D" },
    { id: 18, title: "Mushroom Risotto", category: "mains", price: "$14", description: "Creamy risotto with sautéed mushrooms and Parmesan cheese", img: "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaHJvb20lMjByaXNvdHRvfGVufDB8fDB8fHww" },
    { id: 19, title: "Fruit Tart", category: "desserts", price: "$9", description: "Delicious tart filled with a variety of fresh fruits and pastry cream", img: "https://images.unsplash.com/photo-1614174486496-344ef3e9d870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXQlMjB0YXJ0fGVufDB8fDB8fHww" },
    { id: 20, title: "Vegetarian Sushi Roll", category: "mains", price: "$13", description: "Assorted vegetables rolled in sushi rice and seaweed", img: "https://images.unsplash.com/photo-1602554172650-043a2de54271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmVnZXRhcmlhbiUyMFN1c2hpJTIwUm9sbHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 21, title: "Vegetable Stir-Fry", category: "mains", price: "$11", description: "Assorted vegetables stir-fried in a savory sauce, served with rice", img: "https://images.unsplash.com/photo-1593967858534-40654ea9607b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmVnZXRhcmlhbiUyMHN0aXIlMjBmcnl8ZW58MHx8MHx8fDA%3D" },
    { id: 22, title: "Hawaiian Poke Bowl", category: "mains", price: "$17", description: "Fresh tuna or salmon cubes served over rice with avocado and tropical toppings", img: "https://images.unsplash.com/photo-1556040220-704dadc2b747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGF3YWlpYW4lMjBQb2tlJTIwQm93bHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 23, title: "Blueberry Pancakes", category: "breakfast", price: "$9", description: "Fluffy pancakes filled with blueberries, served with maple syrup", img: "https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qmx1ZWJlcnJ5JTIwUGFuY2FrZXN8ZW58MHx8MHx8fDA%3D" },
    { id: 24, title: "Chicken Satay Skewers", category: "starters", price: "$9", description: "Grilled chicken skewers marinated in a flavorful satay sauce", img: "https://plus.unsplash.com/premium_photo-1669150852115-38eb25f072e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpY2tlbiUyMFNhdGF5JTIwU2tld2Vyc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 25, title: "Mediterranean Quinoa Salad", category: "starters", price: "$8", description: "Quinoa salad with cherry tomatoes, cucumbers, feta cheese, and olives", img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVkaXRlcnJhbmVhbiUyMFF1aW5vYSUyMFNhbGFkfGVufDB8fDB8fHww" },
    { id: 26, title: "Pineapple Coconut Smoothie", category: "beverages", price: "$6", description: "Refreshing smoothie with pineapple, coconut milk, and banana", img: "https://images.unsplash.com/photo-1607446045710-d5a8fd9bc1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGluZWFwcGxlJTIwQ29jb251dCUyMFNtb290aGllfGVufDB8fDB8fHww" },
    { id: 27, title: "Avocado Toast", category: "breakfast", price: "$10", description: "Sliced avocado on toasted artisan bread, topped with poached eggs", img: "https://images.unsplash.com/photo-1632217471220-a661da2ae319?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww" },
    { id: 28, title: "Beef Tacos", category: "mains", price: "$13", description: "Soft corn tortillas filled with seasoned beef, salsa, and guacamole", img: "https://images.unsplash.com/photo-1640983743761-4f0e0204bc58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVlZiUyMFRhY29zfGVufDB8fDB8fHww" },
    { id: 29, title: "Greek Gyro Wrap", category: "mains", price: "$12", description: "Grilled gyro meat wrapped in pita bread with tzatziki sauce and veggies", img: "https://images.unsplash.com/photo-1646488643615-84b4f85bb2c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JlZWslMjBHeXJvJTIwV3JhcHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 30, title: "Blue Lagoon Cocktail", category: "beverages", price: "$8", description: "Tropical cocktail with blue curaçao, vodka, and pineapple juice", img: "https://images.unsplash.com/photo-1642048162670-0ca78a159483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Qmx1ZSUyMExhZ29vbiUyMENvY2t0YWlsfGVufDB8fDB8fHww" },
];

// Function to create a menu item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item col-12 col-md-6 col-lg-4">
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
                </div>
            </div>
        </div>
    `;
}

// Function to insert menu items into the HTML
function insertMenuItems(items) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = items.map(item => createMenuItem(item)).join('');
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMenu = menu.filter(item => item.title.toLowerCase().includes(searchTerm));
    insertMenuItems(filteredMenu);
}

// Function to handle category filter
function handleCategoryFilter(category) {
    const filteredMenu = menu.filter(item => item.category === category);
    insertMenuItems(filteredMenu);
}

// Call the function to insert all menu items when the page loads
document.addEventListener('DOMContentLoaded', function () {
    insertMenuItems(menu);

    // Event listener for search input
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);

    // Event listener for category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;
            handleCategoryFilter(category);
        });
    });
});
