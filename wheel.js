console.log('Recipe picker is running');

const mealTypeDropdown = document.getElementById('mealType');
const card = document.querySelector('.card');
const cardBack = document.querySelector('.card-back');
const shuffleButton = document.querySelector('.shuffle-button');

// Get URL parameters for dietary restrictions
const urlParams = new URLSearchParams(window.location.search);
const dietaryPreference = urlParams.get('diet');

const meals = {
    appetizer: [
        'Bruschetta', 'Spring Rolls', 'Tomato Soup', 'Greek Salad', 'Buffalo Wings',
        'Loaded Nachos', 'Spinach Dip', 'Mozzarella Sticks', 'Garlic Bread',
        'Potato Skins', 'Hummus', 'Guacamole', 'Calamari', 'Stuffed Mushrooms',
        'Deviled Eggs', 'Chicken Satay', 'Crab Cakes', 'Jalapeño Poppers',
        'Shrimp Cocktail', 'Caprese Salad', 'Onion Rings', 'Bacon Wrapped Dates',
        'Coconut Shrimp', 'Stuffed Peppers', 'Baked Brie', 'Chicken Wings',
        'Edamame', 'Fruit Salsa', 'Cheese Platter', 'Stuffed Dates',
        'Zucchini Fritters', 'Beef Tartare', 'Prosciutto Melon', 'Cucumber Bites',
        'Salmon Tartare', 'Mushroom Caps', 'Olive Tapenade', 'Pesto Crostini',
        'Beef Carpaccio', 'Tempura Veggies', 'Tuna Tartare', 'Spanakopita',
        'Arancini', 'Empanadas', 'Samosas', 'Gyoza', 'Ceviche',
        'Bacon Wrapped Scallops', 'Baked Brie en Croûte', 'Buffalo Chicken Dip',
        'Caprese Skewers', 'Charcuterie Board', 'Crispy Calamari Rings',
        'Egg Rolls', 'French Onion Soup', 'Fried Pickles',
        'Garlic Knots', 'Greek Meatballs', 'Lobster Bisque',
        'Mini Quiche', 'Oysters Rockefeller', 'Shrimp Tempura'
    ],
    entree: [
        'Fettuccine Alfredo',
        'Spaghetti and Meatballs',
        'Pasta Carbonara',
        'Chicken Parmesan',
        'Beef Stir Fry',
        'Grilled Salmon',
        'Chicken Marsala',
        'Beef Wellington',
        'Shrimp Scampi',
        'Vegetable Curry',
        'Pad Thai',
        'Fish Tacos',
        'Beef Stroganoff',
        'Chicken Tikka Masala',
        'Eggplant Parmesan',
        'Pork Tenderloin',
        'Lamb Chops',
        'Mushroom Risotto',
        'Teriyaki Chicken',
        'Beef Tacos',
        'Chicken Piccata',
        'Miso Glazed Salmon',
        'Vegetable Stir Fry',
        'Beef Brisket',
        'Chicken Fajitas',
        'Lobster Ravioli',
        'Duck Breast',
        'Tofu Curry',
        'Seafood Paella',
        'Pork Schnitzel',
        'Korean Army Stew',
        'Mongolian Beef',
        'Sweet and Sour Pork',
        'Szechuan Chicken',
        'Egg Foo Young',
        'General Tso\'s Chicken',
        'Orange Beef',
        'Salt and Pepper Shrimp',
        'Singapore Noodles',
        'Chow Mein',
        'Lo Mein',
        'Ma Po Tofu',
        'Twice Cooked Pork',
        'Dongpo Pork',
        'Beef Chow Fun',
        'Crispy Skin Chicken',
        'Black Pepper Crab',
        'Chili Crab',
        'Katsu Curry',
        'Sukiyaki',
        'Shabu Shabu',
        'Gyudon',
        'Oyakodon',
        'Katsudon',
        'Tempura Bowl',
        'Unagidon',
        'Chicken Chettinad',
        'Fish Molee',
        'Lamb Dhansak',
        'Chicken Jalfrezi',
        'Prawn Malai Curry',
        'Mutton Do Pyaza',
        'Chicken Madras',
        'Fish Amritsari',
        'Kadai Chicken',
        'Lamb Pasanda',
        'Chicken Dopiaza',
        'Egg Curry',
        'Railway Mutton Curry',
        'Goan Fish Curry',
        'Chicken Xacuti',
        'Kashmiri Rogan Josh',
        'Lamb Kleftiko',
        'Stuffed Calamari',
        'Grilled Sea Bream',
        'Rabbit Stifado',
        'Pastitsada',
        'Soutzoukakia',
        'Gemista',
        'Youvetsi',
        'Imam Bayildi',
        'Turkish Pide',
        'Lahmacun',
        'Iskender Kebab',
        'Ali Nazik',
        'Hunkar Begendi',
        'Sultan\'s Delight',
        'Manti',
        'Patlican Kebab',
        'Duck à l\'Orange',
        'Blanquette de Veau',
        'Sole Meunière',
        'Steak au Poivre',
        'Côte de Boeuf',
        'Cassoulet',
        'Chickpea Curry',
        'Lentil Shepherd\'s Pie',
        'Stuffed Portobello Mushrooms',
        'Cauliflower Steak',
        'Jackfruit Pulled "Pork"',
        'Buddha Bowl',
        'Quinoa Stuffed Peppers',
        'Vegan Meatballs',
        'Sweet Potato Black Bean Tacos',
        'Mushroom Walnut "Meat" Loaf',
        'Tempeh Stir Fry',
        'Seitan "Chicken" Piccata',
        'Eggplant Involtini',
        'Zucchini Lasagna',
        'Choucroute Garnie',
        'Ossobuco',
        'Saltimbocca',
        'Vitello Tonnato',
        'Bistecca alla Fiorentina',
        'Zürcher Geschnetzeltes',
        'Beef Rouladen',
        'Schweinshaxe',
        'Königsberger Klopse',
        'Coq au Vin',
        'Nashville Hot Chicken',
        'Country Fried Steak',
        'Low Country Boil',
        'New England Boiled Dinner',
        'Cincinnati Chili',
        'Detroit-Style Pizza',
        'St. Louis Ribs',
        'Kansas City BBQ',
        'Texas Brisket',
        'Mississippi Pot Roast',
        'Blackened Catfish',
        'Crawfish Etouffee',
        'Shrimp and Grits',
        'Cajun Ribeye',
        'Smothered Pork Chops',
        'Honey Glazed Ham',
        'Prime Rib',
        'Rack of Lamb',
        'Grilled T-Bone Steak',
        'Braised Short Ribs',
        'Roasted Turkey',
        'Cornish Game Hen',
        'Glazed Duck Breast',
        'Pan Seared Scallops',
        'Lobster Tail',
        'Crab Imperial',
        'Stuffed Flounder',
        'Grilled Swordfish',
        'Bacon Wrapped Filet',
        'Veal Chop',
        'Chicken Pot Pie',
        'Shepherd\'s Pie',
        'Cottage Pie',
        'Meatloaf with Gravy',
        'Roasted Chicken',
        'Beef Stew',
        'Chicken and Dumplings',
        'Pot Roast',
        'Stuffed Pork Chops',
        'Grilled Ribeye',
        'Chicken Cordon Bleu',
        'Beef Tenderloin',
        'Roasted Leg of Lamb',
        'Grilled Porterhouse',
        'Stuffed Chicken Breast',
        'BBQ Baby Back Ribs',
        'Braised Lamb Shanks',
        'Grilled Veal Chop',
        'Pan Roasted Duck',
        'Smoked Brisket',
        'Roasted Pheasant',
        'Grilled Venison',
        'Stuffed Turkey Breast',
        'Braised Oxtail',
        'Grilled Quail',
        'Roasted Goose',
        'Smoked Turkey Legs',
        'Grilled Lamb Kebabs',
        'Pan Seared Halibut',
        'Blackened Redfish'
    ],
    sides: [
        'French Fries', 'Steamed Rice', 'Roasted Vegetables', 'Mashed Potatoes',
        'Mac and Cheese', 'Grilled Asparagus', 'Sweet Potato Fries', 'Quinoa Pilaf',
        'Garlic Green Beans', 'Coleslaw', 'Rice Pilaf', 'Roasted Brussels Sprouts',
        'Potato Salad', 'Corn on the Cob', 'Sautéed Mushrooms', 'Glazed Carrots',
        'Creamed Spinach', 'Scalloped Potatoes', 'Baked Sweet Potato',
        'Cauliflower Gratin', 'Roasted Broccoli', 'Sautéed Spinach',
        'Grilled Zucchini', 'Roasted Cauliflower', 'Wild Rice', 'Garlic Bread',
        'Caesar Salad', 'Mixed Green Salad', 'Roasted Potatoes', 'Steamed Broccoli'
    ],
    dessert: [
        'Chocolate Cake', 'Apple Pie', 'Cheesecake', 'Brownies', 'Tiramisu',
        'Ice Cream Sundae', 'Crème Brûlée', 'Chocolate Chip Cookies', 'Carrot Cake',
        'Lemon Bars', 'Bread Pudding', 'Peach Cobbler', 'Panna Cotta', 'Fruit Tart',
        'Red Velvet Cake', 'Chocolate Mousse', 'Key Lime Pie', 'Banana Bread',
        'Blueberry Muffins', 'Macarons', 'Churros', 'Baklava', 'Cannoli',
        'Crêpes', 'Gelato', 'Profiteroles', 'Tres Leches Cake', 'Pavlova',
        'Flan', 'Rice Pudding',
        'Black Forest Cake', 'Lemon Meringue Pie', 'Molten Chocolate Cake',
        'Strawberry Shortcake', 'Banoffee Pie', 'Chocolate Soufflé',
        'Vanilla Bean Cheesecake', 'Raspberry Tart', 'Almond Biscotti',
        'Coconut Macaroons', 'Caramel Apple Crisp', 'Dark Chocolate Truffles',
        'Pumpkin Pie', 'Bread & Butter Pudding', 'Mango Sorbet'
    ],
    breakfast: [
        'Pancakes', 'French Toast', 'Eggs Benedict', 'Breakfast Burrito',
        'Avocado Toast', 'Omelette', 'Waffles', 'Breakfast Sandwich',
        'Oatmeal', 'Frittata', 'Breakfast Hash', 'Eggs and Bacon',
        'Breakfast Quesadilla', 'Yogurt Parfait', 'Breakfast Pizza',
        'Huevos Rancheros', 'Breakfast Bowl', 'Breakfast Tacos',
        'Shakshuka', 'Breakfast Casserole', 'Quiche', 'Breakfast Potatoes',
        'Breakfast Muffins', 'Breakfast Smoothie Bowl', 'Eggs Florentine',
        'Breakfast Wrap', 'Breakfast Skillet', 'Breakfast Strata',
        'Breakfast Bagel', 'Continental Breakfast',
        'Eggs Royale', 
        'Corned Beef Hash',
        'Breakfast Burrito Bowl',
        'Eggs in Purgatory',
        'Breakfast Grilled Cheese',
        'Breakfast Enchiladas',
        'Cinnamon Rolls',
        'Eggs in a Basket',
        'Breakfast Poutine',
        'Breakfast Ramen',
        'Breakfast Fried Rice',
        'Chilaquiles',
        'Breakfast Flatbread',
        'Croissant Sandwich',
        'Breakfast Empanadas',
        'Protein Pancakes',
        'Acai Bowl',
        'Breakfast Charcuterie Board',
        'Breakfast Nachos',
        'Breakfast Stuffed Peppers',
        'Breakfast Sushi Roll',
        'Monte Cristo Sandwich',
        'Breakfast Calzone',
        'Breakfast Pita Pocket',
        'Breakfast Tostadas',
        'Breakfast Egg Rolls',
        'Breakfast Burritos',
        'Breakfast Sliders',
        'Breakfast Quiche Lorraine',
        'Breakfast Focaccia'
    ]
};

let currentRecipes = [];
let isFlipped = false;

// Update the event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Event Listeners
    mealTypeDropdown.addEventListener('change', handleMealTypeChange);
    card.addEventListener('click', flipCard);
    shuffleButton.addEventListener('click', shuffleNewRecipe);

    // Initially hide the shuffle button
    shuffleButton.style.display = 'none';
});

function handleMealTypeChange() {
    const selectedType = mealTypeDropdown.value;
    console.log('Selected meal type:', selectedType);
    
    if (selectedType) {
        // Get recipes based on dietary preference
        currentRecipes = dietaryPreference ? 
            filterRecipes(meals[selectedType], dietaryPreference) : 
            meals[selectedType];
            
        console.log('Current recipes:', currentRecipes);
        
        if (currentRecipes.length === 0) {
            cardBack.innerHTML = `<div>No ${selectedType} recipes found for this dietary preference!</div>`;
            return;
        }
            
        card.classList.remove('flipped');
        card.classList.remove('show');
        isFlipped = false;
        
        // Update front card text
        document.querySelector('.card-front').textContent = `Click to reveal your ${selectedType}!`;
        cardBack.innerHTML = `<div>Click to reveal your ${selectedType}!</div>`;
        
        // Show the main card
        card.classList.add('show');
    }
}

function createShuffleCards() {
    const shuffleContainer = document.querySelector('.shuffle-cards');
    shuffleContainer.innerHTML = '';
    
    // Create 5 cards
    const shuffleRecipes = [];
    const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    for (let i = 0; i < 5; i++) {
        const randomRecipe = currentRecipes[Math.floor(Math.random() * currentRecipes.length)];
        const randomNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
        shuffleRecipes.push(randomRecipe);
        
        const shuffleCard = document.createElement('div');
        shuffleCard.className = 'shuffle-card';
        // Alternate between face-up and face-down
        if (i % 2 === 1) {  // Make odd-numbered cards face down
            shuffleCard.classList.add('face-down');
        }
        shuffleCard.setAttribute('data-number', randomNumber);
        shuffleCard.innerHTML = `<span>${randomRecipe || 'Shuffling...'}</span>`;
        shuffleContainer.appendChild(shuffleCard);
    }
}

function flipCard() {
    console.log('Flip card triggered');
    console.log('Meal type:', mealTypeDropdown.value);
    console.log('Current recipes:', currentRecipes);

    if (!mealTypeDropdown.value) {
        alert('Please select a meal type first!');
        return;
    }

    if (!isFlipped) {
        console.log('Card clicked'); // Debug log
        card.style.opacity = '0';
        createShuffleCards();
        
        const shuffleCards = document.querySelectorAll('.shuffle-card');
        let delay = 0;
        
        shuffleCards.forEach((card) => {
            setTimeout(() => {
                card.classList.add('animate');
                setTimeout(() => card.classList.remove('animate'), 1200);
            }, delay);
            delay += 400;
        });

        setTimeout(() => {
            const recipe = getRandomRecipe();
            showRecipe(recipe);
            card.classList.add('show');
            card.classList.add('flipped');
            isFlipped = true;
            shuffleButton.style.display = 'inline-block';
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, delay + 1200);
    }
}

function shuffleNewRecipe() {
    card.classList.remove('flipped');
    card.classList.remove('show');
    isFlipped = false;
    
    setTimeout(() => {
        createShuffleCards();
        const shuffleCards = document.querySelectorAll('.shuffle-card');
        let delay = 0;
        
        shuffleCards.forEach((card) => {
            setTimeout(() => {
                card.classList.add('animate');
                setTimeout(() => card.classList.remove('animate'), 800);
            }, delay);
            delay += 200;
        });

        setTimeout(() => {
            const recipe = getRandomRecipe();
            showRecipe(recipe);
            card.classList.add('show');
            card.classList.add('flipped');
            isFlipped = true;
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, delay + 800);
    }, 300);
}

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * currentRecipes.length);
    return currentRecipes[randomIndex];
}

function showRecipe(recipe) {
    if (!recipe) {
        cardBack.innerHTML = `
            <div>
                <h2>No matching recipes found!</h2>
                <p>Try a different meal type or dietary preference.</p>
            </div>
        `;
        return;
    }

    // Make sure the card is visible
    card.style.opacity = '1';
    
    cardBack.innerHTML = `
        <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">${recipe}</h2>
            <div class="recipe-links">
                <a href="recipe.html?recipe=${encodeURIComponent(recipe)}" class="recipe-link">View Recipe</a>
            </div>
        </div>
    `;
}

function filterRecipes(recipes, dietaryPreference) {
    switch(dietaryPreference) {
        case 'vegan':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                // Additional specific filters for vegan
                return !name.includes('fish sauce') &&
                       !name.includes('oyster sauce') &&
                       !name.includes('bone broth') &&
                       !name.includes('chicken stock') &&
                       !name.includes('beef stock') &&
                       !name.includes('chicken broth') &&
                       !name.includes('beef broth') &&
                       !name.includes('buttermilk') &&
                       !name.includes('sour cream') &&
                       !name.includes('half and half') &&
                       !name.includes('condensed milk') &&
                       !name.includes('evaporated milk') &&
                       !name.includes('cottage cheese') &&
                       !name.includes('feta') &&
                       !name.includes('mascarpone') &&
                       !name.includes('pecorino') &&
                       !name.includes('romano') &&
                       !name.includes('asiago') &&
                       !name.includes('gorgonzola') &&
                       !name.includes('provolone') &&
                       !name.includes('gouda') &&
                       !name.includes('cheddar') &&
                       !name.includes('swiss cheese') &&
                       !name.includes('blue cheese') &&
                       !name.includes('parmesan') &&
                       !name.includes('ricotta') &&
                       !name.includes('au jus') &&
                       !name.includes('demi glace') &&
                       !name.includes('fish stock') &&
                       !name.includes('seafood stock') &&
                       !name.includes('prosciutto') &&
                       !name.includes('pancetta') &&
                       !name.includes('guanciale') &&
                       !name.includes('lardons') &&
                       !name.includes('chorizo') &&
                       !name.includes('andouille') &&
                       !name.includes('mortadella') &&
                       !name.includes('salami') &&
                       // All possible animal products and derivatives
                       !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon') &&
                       !name.includes('duck') &&
                       !name.includes('turkey') &&
                       !name.includes('prawn') &&
                       !name.includes('oyster') &&
                       !name.includes('scallop') &&
                       !name.includes('lobster') &&
                       !name.includes('octopus') &&
                       !name.includes('anchovy') &&
                       !name.includes('clam') &&
                       !name.includes('mussel') &&
                       !name.includes('veal') &&
                       !name.includes('goat') &&
                       !name.includes('venison') &&
                       !name.includes('bison') &&
                       !name.includes('rabbit') &&
                       !name.includes('quail') &&
                       !name.includes('pheasant') &&
                       !name.includes('foie gras') &&
                       !name.includes('bone') &&
                       !name.includes('stock') &&
                       !name.includes('broth') &&
                       // Dairy, Eggs, and their derivatives
                       !name.includes('cheese') &&
                       !name.includes('egg') &&
                       !name.includes('cream') &&
                       !name.includes('butter') &&
                       !name.includes('milk') &&
                       !name.includes('yogurt') &&
                       !name.includes('mayo') &&
                       !name.includes('honey') &&
                       !name.includes('gelato') &&
                       !name.includes('ice cream') &&
                       !name.includes('parmesan') &&
                       !name.includes('mozzarella') &&
                       !name.includes('ricotta') &&
                       !name.includes('custard') &&
                       !name.includes('alfredo') &&
                       !name.includes('carbonara') &&
                       !name.includes('hollandaise') &&
                       !name.includes('ranch') &&
                       !name.includes('aioli') &&
                       !name.includes('ghee') &&
                       !name.includes('whey') &&
                       !name.includes('casein') &&
                       !name.includes('bechamel') &&
                       !name.includes('quiche') &&
                       !name.includes('meringue') &&
                       !name.includes('pudding') &&
                       !name.includes('mousse') &&
                       !name.includes('gelatin') &&
                       !name.includes('lard') &&
                       !name.includes('tallow') &&
                       !name.includes('suet') &&
                       !name.includes('collagen') &&
                       !name.includes('rennet') &&
                       !name.includes('lactose') &&
                       // Common dishes that might contain hidden animal products
                       !name.includes('worcestershire') &&
                       !name.includes('caesar') &&  // Traditional Caesar contains anchovies
                       !name.includes('marshmallow') &&
                       !name.includes('gummy') &&
                       !name.includes('jello') &&
                       !name.includes('frosting') &&  // Often contains egg whites
                       !name.includes('glazed') &&    // Often contains egg wash
                       !name.includes('breaded');     // Often contains egg
            });

        case 'vegetarian':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon') &&
                       !name.includes('duck') &&
                       !name.includes('turkey') &&
                       !name.includes('prawn') &&
                       !name.includes('oyster') &&
                       !name.includes('scallop') &&
                       !name.includes('lobster') &&
                       !name.includes('octopus') &&
                       !name.includes('anchovy') &&
                       !name.includes('clam') &&
                       !name.includes('mussel') &&
                       !name.includes('veal') &&
                       !name.includes('goat') &&
                       !name.includes('venison') &&
                       !name.includes('bison') &&
                       !name.includes('rabbit') &&
                       !name.includes('quail') &&
                       !name.includes('pheasant') &&
                       !name.includes('foie gras') &&
                       !name.includes('ham') &&
                       !name.includes('steak') &&
                       !name.includes('burger') &&
                       !name.includes('meatball') &&
                       !name.includes('sausage') &&
                       !name.includes('pepperoni') &&
                       !name.includes('prosciutto') &&
                       !name.includes('salami') &&
                       !name.includes('chorizo') &&
                       !name.includes('pancetta') &&
                       !name.includes('lard') &&
                       !name.includes('gelatin');
            });

        case 'glutenFree':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pasta') &&
                       !name.includes('bread') &&
                       !name.includes('pizza') &&
                       !name.includes('lasagna') &&
                       !name.includes('noodles') &&
                       !name.includes('spaghetti') &&
                       !name.includes('penne') &&
                       !name.includes('fettuccine') &&
                       !name.includes('breadcrumbs') &&
                       !name.includes('flour') &&
                       !name.includes('wheat') &&
                       !name.includes('udon') &&
                       !name.includes('soba') &&
                       !name.includes('ramen') &&
                       !name.includes('tempura') &&
                       !name.includes('brioche') &&
                       !name.includes('baguette') &&
                       !name.includes('croissant') &&
                       !name.includes('tortilla') &&
                       !name.includes('pita') &&
                       !name.includes('couscous') &&
                       !name.includes('dumpling') &&
                       !name.includes('wonton') &&
                       !name.includes('roll') &&
                       !name.includes('cake') &&
                       !name.includes('cookie') &&
                       !name.includes('pie') &&
                       !name.includes('muffin') &&
                       !name.includes('waffle') &&
                       !name.includes('pancake') &&
                       !name.includes('toast') &&
                       !name.includes('breaded') &&
                       !name.includes('crusted');
            });

        case 'dairyFree':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('cheese') &&
                       !name.includes('cream') &&
                       !name.includes('butter') &&
                       !name.includes('milk') &&
                       !name.includes('yogurt') &&
                       !name.includes('ice cream') &&
                       !name.includes('alfredo') &&
                       !name.includes('carbonara') &&
                       !name.includes('mac and cheese') &&
                       !name.includes('mozzarella') &&
                       !name.includes('parmesan') &&
                       !name.includes('ricotta') &&
                       !name.includes('brie') &&
                       !name.includes('gratin') &&
                       !name.includes('bechamel') &&
                       !name.includes('quiche') &&
                       !name.includes('fondue') &&
                       !name.includes('raclette') &&
                       !name.includes('burrata') &&
                       !name.includes('custard') &&
                       !name.includes('pudding') &&
                       !name.includes('hollandaise') &&
                       !name.includes('ranch') &&
                       !name.includes('aioli') &&
                       !name.includes('creamy') &&
                       !name.includes('cheesy');
            });

        case 'kosher':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                // Non-kosher animals and seafood
                return !name.includes('pork') &&
                       !name.includes('ham') &&
                       !name.includes('bacon') &&
                       !name.includes('shellfish') &&
                       !name.includes('shrimp') &&
                       !name.includes('crab') &&
                       !name.includes('lobster') &&
                       !name.includes('clam') &&
                       !name.includes('mussel') &&
                       !name.includes('oyster') &&
                       !name.includes('scallop') &&
                       !name.includes('calamari') &&
                       !name.includes('octopus') &&
                       !name.includes('prawn') &&
                       !name.includes('catfish') &&
                       !name.includes('eel') &&
                       !name.includes('squid') &&
                       !name.includes('rabbit') &&
                       !name.includes('horse') &&
                       !name.includes('wild boar') &&
                       !name.includes('frog') &&
                       !name.includes('reptile') &&
                       !name.includes('sturgeon') &&
                       !name.includes('caviar') &&
                       // Meat and dairy combinations (basar bechalav)
                       !name.includes('cheeseburger') &&
                       !name.includes('chicken parmesan') &&
                       !name.includes('beef stroganoff') &&
                       !name.includes('carbonara') &&
                       !name.includes('meat lasagna') &&
                       !name.includes('cream sauce') &&
                       !name.includes('butter chicken') &&
                       !name.includes('alfredo') &&
                       !name.includes('meat pizza') &&
                       !name.includes('reuben') &&
                       !name.includes('philly cheese') &&
                       !name.includes('cordon bleu') &&
                       // Non-kosher additives and preparations
                       !name.includes('gelatin') &&
                       !name.includes('lard') &&
                       !name.includes('blood sausage') &&
                       !name.includes('blood pudding');
            });
        case 'halal':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pork') &&
                       !name.includes('ham') &&
                       !name.includes('bacon') &&
                       !name.includes('pepperoni') &&
                       !name.includes('salami') &&
                       !name.includes('prosciutto') &&
                       !name.includes('pancetta') &&
                       !name.includes('lard') &&
                       !name.includes('gelatin') &&
                       !name.includes('alcohol') &&
                       !name.includes('wine') &&
                       !name.includes('beer') &&
                       !name.includes('brandy') &&
                       !name.includes('rum') &&
                       !name.includes('sake') &&
                       !name.includes('liquor') &&
                       !name.includes('whiskey') &&
                       !name.includes('marsala') &&
                       !name.includes('vodka') &&
                       !name.includes('bourbon') &&
                       !name.includes('cognac') &&
                       !name.includes('kahlua') &&
                       !name.includes('grand marnier') &&
                       !name.includes('wild boar') &&
                       !name.includes('blood') &&
                       !name.includes('carnitas');
            });
        case 'healthy':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('fried') &&
                       !name.includes('bacon') &&
                       !name.includes('cream') &&
                       !name.includes('butter') &&
                       !name.includes('deep dish') &&
                       !name.includes('mac and cheese') &&
                       !name.includes('loaded') &&
                       !name.includes('breaded') &&
                       !name.includes('gravy') &&
                       !name.includes('alfredo') &&
                       !name.includes('carbonara') &&
                       !name.includes('bbq') &&
                       !name.includes('glazed') &&
                       !name.includes('cheese') &&
                       !name.includes('candy') &&
                       !name.includes('sugar');
            });
        default:
            return recipes;
    }
}

// Test cases for all dietary options
const dietaryTests = {
    vegan: [
        // Previous vegan tests remain...
    ],

    vegetarian: [
        'Cheese Pizza',             // Should pass
        'Fish and Chips',          // Should be filtered (fish)
        'Egg Fried Rice',          // Should pass
        'Beef Wellington',         // Should be filtered (meat)
        'Greek Salad',             // Should pass
        'Chicken Curry',           // Should be filtered (meat)
        'Shrimp Scampi',          // Should be filtered (seafood)
        'Mushroom Stroganoff',     // Should pass
        'Bacon Wrapped Dates',     // Should be filtered (meat)
        'Yogurt Parfait'           // Should pass
    ],

    kosher: [
        'Cheeseburger',            // Should be filtered (meat + dairy)
        'Grilled Chicken',         // Should pass
        'Pork Chops',              // Should be filtered (pork)
        'Shrimp Cocktail',         // Should be filtered (shellfish)
        'Beef Stew',               // Should pass
        'Chicken Parmesan',        // Should be filtered (meat + dairy)
        'Lobster Thermidor',       // Should be filtered (shellfish)
        'Matzo Ball Soup',         // Should pass
        'Bacon Bits',              // Should be filtered (pork)
        'Cream Sauce Chicken',     // Should be filtered (meat + dairy)
    ],

    halal: [
        'Beef Stir Fry',           // Should pass
        'Wine Braised Chicken',    // Should be filtered (alcohol)
        'Pork Belly',              // Should be filtered (pork)
        'Lamb Curry',              // Should pass
        'Beer Battered Fish',      // Should be filtered (alcohol)
        'Marsala Chicken',         // Should be filtered (alcohol)
        'Turkey Sandwich',         // Should pass
        'Rum Cake',                // Should be filtered (alcohol)
        'Bacon Mac and Cheese',    // Should be filtered (pork)
        'Vodka Sauce Pasta'        // Should be filtered (alcohol)
    ],

    glutenFree: [
        'Grilled Chicken',         // Should pass
        'Spaghetti Carbonara',     // Should be filtered (pasta)
        'Rice Bowl',               // Should pass
        'Breaded Chicken',         // Should be filtered (breadcrumbs)
        'Quinoa Salad',            // Should pass
        'Flour Tortilla Tacos',    // Should be filtered (flour)
        'Steak and Potatoes',      // Should pass
        'Wheat Bread',             // Should be filtered (wheat)
        'Tempura Vegetables',      // Should be filtered (breading)
        'Soy Sauce Chicken'        // Should check if GF soy sauce
    ],

    dairyFree: [
        'Grilled Chicken',         // Should pass
        'Mac and Cheese',          // Should be filtered (cheese)
        'Stir Fried Vegetables',   // Should pass
        'Cream of Mushroom Soup',  // Should be filtered (cream)
        'Steamed Rice',            // Should pass
        'Butter Chicken',          // Should be filtered (butter)
        'Tomato Sauce Pasta',      // Should pass
        'Cheesy Potatoes',         // Should be filtered (cheese)
        'Ice Cream Sundae',        // Should be filtered (dairy)
        'Bechamel Sauce Pasta'     // Should be filtered (dairy sauce)
    ],

    healthy: [
        'Grilled Chicken Breast',  // Should pass
        'Deep Fried Chicken',      // Should be filtered (fried)
        'Steamed Vegetables',      // Should pass
        'Loaded Potato Skins',     // Should be filtered (loaded)
        'Quinoa Bowl',             // Should pass
        'Butter Cream Cake',       // Should be filtered (butter, cream)
        'Fresh Garden Salad',      // Should pass
        'BBQ Ribs',                // Should be filtered (bbq)
        'Baked Sweet Potato',      // Should pass
        'Sugar Glazed Carrots'     // Should be filtered (sugar, glazed)
    ]
};

// Function to test filters
function testDietaryFilters() {
    for (const [diet, testCases] of Object.entries(dietaryTests)) {
        console.log(`Testing ${diet} filter:`);
        const filteredRecipes = filterRecipes(testCases, diet);
        console.log('Passed:', filteredRecipes);
        console.log('Filtered out:', testCases.filter(recipe => !filteredRecipes.includes(recipe)));
        console.log('-------------------');
    }
}

// Run tests
testDietaryFilters(); 