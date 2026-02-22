import prisma from '../src/db.js';
import bcrypt from 'bcrypt'

async function main() {
  console.log('🌱 Starting seed...');

  // Create seed user (replace with your details)
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const seedUser = await prisma.user.upsert({
    where: { email: 'team@unimunch.com' },
    update: {},
    create: {
      email: 'team@unimunch.com',
      username: 'unimunch_team',
      password: hashedPassword,
      name: 'UniMunch Team',
      school: 'UniSA',
      role: 'UNIVERSITY',
    },
  });

  console.log('✅ Seed user created');

  // 25 Recipes
  const recipes = [
    // QUICK MEALS
    {
      title: 'Lazy Garlic Spaghetti',
      ingredients: '200g spaghetti ($1.20), 6 garlic cloves ($0.30), 3 tbsp olive oil ($0.50), chili flakes ($0.10), 30g parmesan ($1.50)',
      instructions: '1. Boil spaghetti in salted water for 8-10 min. 2. While pasta cooks, thinly slice garlic. 3. Heat olive oil in pan, add garlic and chili, cook until fragrant (30 sec). 4. Drain pasta, toss with garlic oil. 5. Top with grated parmesan.',
      timeTaken: 'Prep: 5min, Cook: 10min',
      cost: 3.60,
      tags: ['quick', 'cheap', 'vegetarian', 'pasta'],
      description: 'when ur broke but need something that slaps',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661445014453-784cd6c59ac8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: '5-Minute Egg Fried Rice',
      ingredients: '2 cups day-old rice ($0.80), 2 eggs ($0.80), 1 cup frozen mixed veg ($0.60), 2 tbsp soy sauce ($0.20), 1 tsp sesame oil ($0.10), 2 spring onions ($0.40)',
      instructions: '1. Heat wok or large pan on high. 2. Scramble eggs, set aside. 3. Add rice, break up clumps, fry for 2 min. 4. Add frozen veg, cook 1 min. 5. Add eggs back, drizzle soy sauce and sesame oil. 6. Toss everything, top with chopped spring onions.',
      timeTaken: 'Prep: 2min, Cook: 5min',
      cost: 2.90,
      tags: ['quick', 'cheap', 'asian', 'egg'],
      description: 'leftover rice救星, tastes better than it should',
      imageUrl: 'https://images.unsplash.com/photo-1609570324378-ec0c4c9b6ba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Instant Ramen Upgrade',
      ingredients: '1 pack instant noodles ($1.00), 1 egg ($0.40), handful spinach ($0.50), 2 slices cheese ($0.60), spring onion ($0.20), sesame oil ($0.10)',
      instructions: '1. Boil water, cook noodles for 2 min. 2. Add spinach in last 30 seconds. 3. Crack egg directly into pot, stir gently. 4. Add flavor packet and cheese slices, stir until melted. 5. Drizzle sesame oil, top with spring onions.',
      timeTaken: 'Prep: 2min, Cook: 3min',
      cost: 2.80,
      tags: ['quick', 'cheap', 'asian', 'noodles'],
      description: 'fancy ramen for when u cant be bothered',
      imageUrl: 'https://images.unsplash.com/photo-1759923593745-6302b220d719?q=80&w=2230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Microwave Mug Omelette',
      ingredients: '2 eggs ($0.80), 2 tbsp milk ($0.10), handful grated cheese ($0.50), salt & pepper ($0.05), optional: diced ham/tomato ($0.50)',
      instructions: '1. Crack eggs into microwave-safe mug. 2. Add milk, cheese, salt, pepper, and any extras. 3. Whisk with fork. 4. Microwave for 1 min, stir. 5. Microwave another 30-60 sec until set.',
      timeTaken: 'Prep: 2min, Cook: 2min',
      cost: 1.95,
      tags: ['quick', 'cheap', 'breakfast', 'egg', 'microwave'],
      description: 'breakfast speedrun any%',
      imageUrl: 'https://images.pexels.com/photos/1887932/pexels-photo-1887932.jpeg?auto=compress&cs=tinysrgb&w=400',
      userId: seedUser.id,
    },
    {
      title: 'Lazy Peanut Noodles',
      ingredients: '200g dried noodles ($1.00), 3 tbsp peanut butter ($0.60), 2 tbsp soy sauce ($0.20), 1 tbsp honey ($0.30), 1 tsp rice vinegar ($0.10), cucumber ($0.80), spring onion ($0.20)',
      instructions: '1. Cook noodles according to packet. 2. Mix peanut butter, soy sauce, honey, vinegar with 2 tbsp hot pasta water. 3. Drain noodles, toss with sauce. 4. Top with sliced cucumber and spring onions.',
      timeTaken: 'Prep: 5min, Cook: 8min',
      cost: 3.20,
      tags: ['quick', 'vegetarian', 'asian', 'noodles', 'peanut'],
      description: 'tastes expensive but costs nothing',
      imageUrl: 'https://images.unsplash.com/photo-1610554675919-858d84c76d40?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Cheese Quesadilla Deluxe',
      ingredients: '2 flour tortillas ($0.80), 1 cup grated cheese ($1.20), 1/4 onion ($0.20), 1/2 capsicum ($0.60), optional: sour cream ($0.50)',
      instructions: '1. Dice onion and capsicum finely. 2. Heat pan, place one tortilla. 3. Sprinkle half the cheese, add veg, top with remaining cheese and second tortilla. 4. Cook 2 min each side until golden. 5. Cut into quarters, serve with sour cream.',
      timeTaken: 'Prep: 3min, Cook: 5min',
      cost: 3.30,
      tags: ['quick', 'cheap', 'vegetarian', 'mexican'],
      description: 'grilled cheese but make it fancy',
      imageUrl: 'https://images.unsplash.com/photo-1647545401800-bd8f77e670ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Tuna Pasta Bake (Single Serve)',
      ingredients: '100g pasta ($0.60), 1 can tuna ($2.00), 1/2 cup frozen peas ($0.30), 2 tbsp cream cheese ($0.40), 1/4 cup grated cheese ($0.40)',
      instructions: '1. Cook pasta, drain but keep 1/4 cup pasta water. 2. Mix pasta, tuna, peas, cream cheese, and pasta water in microwave-safe bowl. 3. Top with grated cheese. 4. Microwave 2 min or until cheese melts.',
      timeTaken: 'Prep: 3min, Cook: 10min',
      cost: 3.70,
      tags: ['quick', 'pasta', 'tuna', 'microwave'],
      description: 'protein hit without actually cooking',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1705947846996-2887733378a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Veggie Fried Noodles',
      ingredients: '200g fresh hokkien noodles ($2.00), 1 cup mixed frozen veg ($0.60), 2 eggs ($0.80), 2 tbsp oyster sauce ($0.30), 1 tbsp soy sauce ($0.10), garlic ($0.20)',
      instructions: '1. Rinse noodles in hot water to separate. 2. Heat wok, scramble eggs, set aside. 3. Stir-fry garlic and frozen veg for 2 min. 4. Add noodles, oyster sauce, soy sauce. 5. Toss everything together with eggs.',
      timeTaken: 'Prep: 3min, Cook: 6min',
      cost: 4.00,
      tags: ['quick', 'asian', 'noodles', 'vegetarian'],
      description: 'takeaway vibes at home',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1695044277387-4ee7eaf417ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Avocado Toast Actually Worth It',
      ingredients: '2 slices bread ($0.40), 1 avocado ($2.50), 1 egg ($0.40), chili flakes ($0.05), lemon juice ($0.10), salt & pepper ($0.05)',
      instructions: '1. Toast bread. 2. Mash avocado with lemon juice, salt, pepper. 3. Fry egg to your liking. 4. Spread avo on toast, top with egg and chili flakes.',
      timeTaken: 'Prep: 2min, Cook: 5min',
      cost: 3.50,
      tags: ['quick', 'breakfast', 'vegetarian', 'avocado'],
      description: 'millennial breakfast but make it cheap',
      imageUrl: 'https://images.unsplash.com/photo-1633204339916-6ddd69d426e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Korean-ish Beef Rice Bowl',
      ingredients: '200g beef mince ($3.00), 2 cups rice ($0.80), 2 tbsp soy sauce ($0.20), 1 tbsp brown sugar ($0.10), 1 tsp sesame oil ($0.10), garlic ($0.20), fried egg ($0.40), spring onion ($0.20)',
      instructions: '1. Cook rice. 2. Brown mince with garlic. 3. Add soy sauce, sugar, sesame oil, cook until caramelized. 4. Serve over rice with fried egg on top. 5. Garnish with spring onions.',
      timeTaken: 'Prep: 5min, Cook: 12min',
      cost: 5.00,
      tags: ['quick', 'asian', 'beef', 'rice', 'korean'],
      description: 'bulgogi at home minus the effort',
      imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Tomato Egg Stir Fry',
      ingredients: '3 eggs ($1.20), 2 tomatoes ($1.50), 1 tbsp ketchup ($0.20), 1 tsp sugar ($0.05), spring onion ($0.20), rice to serve ($0.80)',
      instructions: '1. Cut tomatoes into wedges. 2. Scramble eggs until just set, remove. 3. Stir-fry tomatoes until soft. 4. Add ketchup and sugar. 5. Add eggs back, toss together. 6. Serve over rice with spring onions.',
      timeTaken: 'Prep: 5min, Cook: 8min',
      cost: 3.95,
      tags: ['quick', 'cheap', 'asian', 'egg', 'vegetarian'],
      description: 'chinese comfort food that hits different',
      imageUrl: 'https://images.unsplash.com/photo-1582492710145-d723e0a219f8?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Spicy Peanut Butter Toast',
      ingredients: '2 slices bread ($0.40), 2 tbsp peanut butter ($0.40), honey ($0.20), chili flakes ($0.05), banana ($0.80)',
      instructions: '1. Toast bread. 2. Spread peanut butter generously. 3. Drizzle honey, sprinkle chili flakes. 4. Top with sliced banana if using.',
      timeTaken: 'Prep: 2min, Cook: 2min',
      cost: 1.85,
      tags: ['quick', 'cheap', 'breakfast', 'vegetarian', 'spicy'],
      description: 'sweet spicy chaos that works',
      imageUrl: 'https://images.unsplash.com/photo-1664350454685-a3298c47fb58?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Microwave Mac & Cheese',
      ingredients: '1 cup macaroni ($0.60), 1 cup water ($0), 1/4 cup milk ($0.20), 3/4 cup grated cheese ($0.90), salt & pepper ($0.05)',
      instructions: '1. Put pasta and water in large microwave-safe bowl. 2. Microwave 3 min, stir, microwave 3 more min. 3. Stir in milk and cheese until melted. 4. Season with salt and pepper.',
      timeTaken: 'Prep: 1min, Cook: 6min',
      cost: 1.75,
      tags: ['quick', 'cheap', 'vegetarian', 'pasta', 'microwave'],
      description: 'no pot no problem',
      imageUrl: 'https://images.unsplash.com/photo-1708184528301-b0dad28dded5?q=80&w=1682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Kimchi Fried Rice',
      ingredients: '2 cups day-old rice ($0.80), 1 cup kimchi ($1.50), 2 eggs ($0.80), 1 tbsp gochujang ($0.30), sesame oil ($0.10), spring onion ($0.20)',
      instructions: '1. Chop kimchi into small pieces. 2. Heat pan, fry kimchi for 2 min. 3. Add rice and gochujang, mix well. 4. Make space in center, crack eggs, scramble. 5. Mix everything, drizzle sesame oil, top with spring onions.',
      timeTaken: 'Prep: 3min, Cook: 7min',
      cost: 3.70,
      tags: ['quick', 'asian', 'korean', 'spicy', 'rice'],
      description: 'hangover cure that actually works',
      imageUrl: 'https://images.unsplash.com/photo-1600688654899-379ec76aca42?q=80&w=2204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Lazy Shakshuka',
      ingredients: '1 can crushed tomatoes ($1.20), 2 eggs ($0.80), 1/2 onion ($0.30), garlic ($0.20), 1 tsp cumin ($0.10), bread for dipping ($0.40)',
      instructions: '1. Dice onion, fry with garlic until soft. 2. Add tomatoes and cumin, simmer 5 min. 3. Make two wells, crack eggs into each. 4. Cover and cook until eggs set (5-7 min). 5. Serve with bread for dipping.',
      timeTaken: 'Prep: 5min, Cook: 12min',
      cost: 3.00,
      tags: ['quick', 'vegetarian', 'egg', 'breakfast'],
      description: 'fancy breakfast for broke students',
      imageUrl: 'https://images.unsplash.com/photo-1542895364-1f38d277f031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
  
    // MEAL PREP
    {
      title: 'Bulk Chicken Fried Rice (4 serves)',
      ingredients: '500g chicken thigh ($6.00), 4 cups rice ($3.20), 2 cups frozen mixed veg ($1.20), 4 eggs ($1.60), 1/4 cup soy sauce ($0.40), sesame oil ($0.20), spring onions ($0.60)',
      instructions: '1. Cook rice, spread on tray to cool. 2. Dice chicken, season with salt. 3. Cook chicken until done, set aside. 4. Scramble eggs, set aside. 5. Fry rice in batches until slightly crispy. 6. Add veg, chicken, eggs, soy sauce, sesame oil. 7. Mix well, divide into 4 containers, top with spring onions.',
      timeTaken: 'Prep: 15min, Cook: 25min',
      cost: 13.20,
      tags: ['meal-prep', 'asian', 'chicken', 'rice', 'freezable'],
      description: 'cook once eat for days',
      imageUrl: 'https://images.unsplash.com/photo-1687020835955-59528e8c91dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Budget Butter Chicken (5 serves)',
      ingredients: '600g chicken thigh ($7.20), 2 cans crushed tomatoes ($2.40), 1 cup cream ($2.00), 1 onion ($0.60), 4 garlic cloves ($0.20), ginger ($0.40), 2 tbsp curry powder ($0.60), rice to serve ($4.00)',
      instructions: '1. Dice chicken, marinate in curry powder. 2. Dice onion, mince garlic and ginger. 3. Fry chicken until browned, set aside. 4. Fry onion, garlic, ginger until soft. 5. Add tomatoes, simmer 10 min. 6. Add cream and chicken, simmer 15 min. 7. Divide into containers, serve with rice.',
      timeTaken: 'Prep: 15min, Cook: 35min',
      cost: 17.40,
      tags: ['meal-prep', 'indian', 'chicken', 'curry', 'freezable'],
      description: 'better than takeaway and way cheaper',
      imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Veggie Stir Fry Batch (4 serves)',
      ingredients: '500g tofu ($3.50), 3 cups mixed veg ($2.40), 1/2 cup cashews ($2.00), 1/4 cup soy sauce ($0.40), 2 tbsp hoisin sauce ($0.50), garlic & ginger ($0.40), rice/noodles to serve ($3.20)',
      instructions: '1. Press tofu, cut into cubes. 2. Fry tofu until golden, set aside. 3. Stir-fry garlic, ginger, veg on high heat. 4. Add soy sauce, hoisin, tofu, cashews. 5. Toss everything, divide into containers. 6. Store rice/noodles separately.',
      timeTaken: 'Prep: 15min, Cook: 20min',
      cost: 12.40,
      tags: ['meal-prep', 'vegetarian', 'asian', 'tofu', 'vegan'],
      description: 'plant based but actually filling',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1770646003620-2d860f453d26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Spaghetti Bolognese Batch (6 serves)',
      ingredients: '500g beef mince ($6.00), 2 cans crushed tomatoes ($2.40), 1 onion ($0.60), 2 carrots ($0.80), 2 celery stalks ($0.80), garlic ($0.20), 600g spaghetti ($3.60), parmesan ($3.00)',
      instructions: '1. Dice onion, carrot, celery finely. 2. Brown mince, set aside. 3. Fry veg until soft. 4. Add mince back, add tomatoes, simmer 30 min. 5. Divide sauce into containers. 6. Cook pasta fresh when serving, freeze sauce only.',
      timeTaken: 'Prep: 15min, Cook: 40min',
      cost: 17.40,
      tags: ['meal-prep', 'italian', 'beef', 'pasta', 'freezable'],
      description: 'classic that never gets old',
      imageUrl: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Burrito Bowl Prep (4 serves)',
      ingredients: '400g chicken thigh ($4.80), 2 cups rice ($1.60), 1 can black beans ($1.20), 1 cup corn ($0.80), 2 capsicums ($2.40), taco seasoning ($0.80), sour cream & cheese ($3.00)',
      instructions: '1. Cook rice, divide into containers. 2. Season and cook chicken, slice into strips. 3. Drain and rinse beans. 4. Dice capsicum, char in pan. 5. Divide chicken, beans, corn, capsicum into containers. 6. Store sour cream and cheese separately, add when eating.',
      timeTaken: 'Prep: 15min, Cook: 20min',
      cost: 14.60,
      tags: ['meal-prep', 'mexican', 'chicken', 'rice', 'healthy'],
      description: 'chipotle at home for a week',
      imageUrl: 'https://images.unsplash.com/photo-1647545401834-39096eb7e4ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
  
    // VEGETARIAN
    {
      title: 'Lentil Daal',
      ingredients: '1 cup red lentils ($1.20), 1 can coconut milk ($2.00), 1 onion ($0.60), 3 garlic cloves ($0.15), ginger ($0.30), 1 tbsp curry powder ($0.30), spinach ($1.00), rice to serve ($0.80)',
      instructions: '1. Rinse lentils. 2. Fry onion, garlic, ginger until soft. 3. Add curry powder, fry 30 sec. 4. Add lentils and 2 cups water, simmer 20 min. 5. Add coconut milk and spinach, cook 5 min. 6. Serve over rice.',
      timeTaken: 'Prep: 10min, Cook: 25min',
      cost: 6.35,
      tags: ['vegetarian', 'indian', 'lentils', 'vegan', 'healthy'],
      description: 'cheap protein that doesnt taste cheap',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1701064865162-db655bfb998f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Veggie Pad Thai',
      ingredients: '200g rice noodles ($1.50), 200g tofu ($1.40), 2 eggs ($0.80), bean sprouts ($1.00), 3 tbsp tamarind paste ($0.60), 2 tbsp peanut butter ($0.40), lime ($0.50), peanuts ($0.80), spring onion ($0.20)',
      instructions: '1. Soak noodles in hot water. 2. Mix tamarind, peanut butter, 2 tbsp water for sauce. 3. Fry tofu, set aside. 4. Scramble eggs, set aside. 5. Stir-fry drained noodles with sauce. 6. Add tofu, eggs, bean sprouts. 7. Top with peanuts, lime, spring onions.',
      timeTaken: 'Prep: 10min, Cook: 10min',
      cost: 7.20,
      tags: ['vegetarian', 'asian', 'thai', 'noodles', 'tofu'],
      description: 'thai food without leaving ur room',
      imageUrl: 'https://images.unsplash.com/photo-1645500498403-970672caf43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Caprese Pasta',
      ingredients: '200g pasta ($1.20), 200g cherry tomatoes ($2.00), 100g mozzarella ($2.50), fresh basil ($1.50), 2 garlic cloves ($0.10), olive oil ($0.50), balsamic ($0.30)',
      instructions: '1. Cook pasta. 2. Halve tomatoes, tear mozzarella. 3. Heat olive oil, add garlic and tomatoes, cook until soft. 4. Toss pasta with tomatoes, mozzarella, basil. 5. Drizzle balsamic vinegar.',
      timeTaken: 'Prep: 5min, Cook: 12min',
      cost: 8.10,
      tags: ['vegetarian', 'italian', 'pasta', 'fresh'],
      description: 'fancy vibes minimal effort',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1705686155091-339e78cebfea?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Chickpea Curry',
      ingredients: '2 cans chickpeas ($2.40), 1 can crushed tomatoes ($1.20), 1 can coconut milk ($2.00), 1 onion ($0.60), 3 garlic cloves ($0.15), ginger ($0.30), 2 tbsp curry powder ($0.60), spinach ($1.00), rice ($0.80)',
      instructions: '1. Fry onion, garlic, ginger. 2. Add curry powder, fry 30 sec. 3. Add tomatoes, simmer 10 min. 4. Add drained chickpeas and coconut milk, simmer 10 min. 5. Stir in spinach until wilted. 6. Serve over rice.',
      timeTaken: 'Prep: 10min, Cook: 25min',
      cost: 9.05,
      tags: ['vegetarian', 'indian', 'chickpea', 'vegan', 'curry'],
      description: 'vegan and actually tasty',
      imageUrl: 'https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
    {
      title: 'Margherita Flatbread Pizza',
      ingredients: '2 flatbreads ($1.60), 1/2 cup tomato paste ($0.40), 150g mozzarella ($3.00), fresh basil ($1.50), olive oil ($0.30), garlic ($0.10)',
      instructions: '1. Preheat oven to 220°C. 2. Mix tomato paste with crushed garlic and olive oil. 3. Spread on flatbreads. 4. Top with torn mozzarella and basil. 5. Bake 10 min until cheese bubbles.',
      timeTaken: 'Prep: 5min, Cook: 10min',
      cost: 6.90,
      tags: ['vegetarian', 'italian', 'pizza', 'quick'],
      description: 'pizza night on a budget',
      imageUrl: 'https://images.unsplash.com/photo-1764024945383-1a50f23aad92?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userId: seedUser.id,
    },
  ];

  console.log('Seeding recipes...');
  
  for (const recipe of recipes) {
    await prisma.recipe.create({ data: recipe });
  }

  console.log(`Seeded ${recipes.length} recipes`);
  console.log('Database seeded successfully!');
  console.log(`

Summary:
- Recipes: ${recipes.length}
  - Quick meals: 15
  - Meal prep: 5
  - Vegetarian: 5 (spread throughout)
  `);
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });