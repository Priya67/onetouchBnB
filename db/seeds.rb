User.destroy_all
Spot.destroy_all
Review.destroy_all

demo = User.create!(
  username: 'john',
  fname: 'John',
  lname: 'Doe',
  password: 'password',
  email: 'prettyuser@gmail.com',
  phone_number: '1234567890',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889126/new_user/james.png'
)

manushi = User.create!(
  username: 'manushi',
  fname: 'Manushi',
  lname: 'Chacho',
  password: 'password',
  email: 'manushi@gmail.com',
  phone_number: '2345678901',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889084/new_user/manushi.png'
)

yara = User.create!(
  username: 'yara',
  fname: 'Yara',
  lname: 'D\'Souza',
  password: 'password',
  email: 'yara@gmail.com',
  phone_number: '3456789012',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889129/new_user/yara.png'
)

sarah = User.create!(
  username: 'sarah',
  fname: 'Sarah',
  lname: 'Li',
  password: 'password',
  email: 'sarah@gmail.com',
  phone_number: '4567890123',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889111/new_user/sarah.png'
)

chris = User.create!(
  username: 'chris',
  fname: 'Chris',
  lname: 'Baker',
  password: 'password',
  email: 'chris@gmail.com',
  phone_number: '5678901234',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889131/new_user/chris.png'
)

hannah = User.create!(
  username: 'hannah',
  fname: 'Hannah',
  lname: 'Sun',
  password: 'password',
  email: 'hannah@gmail.com',
  phone_number: '5678901234',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889086/new_user/hanna.png'
)
leo = User.create!(
  username: 'leo',
  fname: 'Leo',
  lname: 'Kim',
  password: 'password',
  email: 'leo@gmail.com',
  phone_number: '5678901234',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889120/new_user/leo.png'
)

naz = User.create!(
  username: 'naz',
  fname: 'Naz',
  lname: 'Louis',
  password: 'password',
  email: 'naz@gmail.com',
  phone_number: '5678901234',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889107/new_user/nazeen.png'
)

navid = User.create!(
  username: 'navid',
  fname: 'Navid',
  lname: 'Lara',
  password: 'password',
  email: 'navid@gmail.com',
  phone_number: '5678901234',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889083/new_user/navid.jpg'
)

stefanie = User.create!(
  username: 'stefanie',
  fname: 'Stefanie',
  lname: 'Moon',
  password: 'password',
  email: 'stefanie@gmail.com',
  phone_number: '5678901234',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889133/new_user/stefanie.png'
)

tyler = User.create!(
  username: 'tyler',
  fname: 'Tyler',
  lname: 'Octa',
  password: 'password',
  email: 'tyler@gmail.com',
  phone_number: '5678901234',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/w_100,h_100,c_thumb,g_face/v1513889110/new_user/tyler.png'
)

house1 = Spot.create!(
  headline: 'Beautiful place',
  description: 'Beautiful house near lake and school with all modern amenities. Please be aware that there are security cameras in the living room (facing the front door) and in the hallways. I have never had a problem and I never watch the video, but I think it is a good deterrent.',
  location: '100 Broderick St, San Francisco, CA - 94117',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407116/spots/new3_oudh7p.jpg',
  rating: 4.2,
  number_of_beds: '2',
  number_of_guests: 3,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: manushi.id,
  price: 270,
  room_type: 'Private',
  cancellations: 'Flexible - 24 hours cancellation',
  house_rules: 'No smoking
   No drugs
  No parties',
  lat: 37.771448,
  lng: -122.438111,
  city: 'San Francisco, CA'
);

house2 = Spot.create!(
  headline: 'Luxurious Home',
  description: 'Big luxurious home in the heart of sAN Francisco. You can walk to malls, grocery stores and can spend time in beautiful parks in the neighborhood.',
  location: '620 Folsom Street, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506406434/spots/new1_m3hpdw.jpg',
  rating: 3,
  number_of_beds: '1',
  number_of_guests: 2,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: yara.id,
  price: 95,
  room_type: 'Private',
  cancellations: 'Allowed before 7 days of booking date',
  house_rules: 'Keep it clean and noise free and no other person allowed other than the guest',
  lat: 37.785104,
  lng: -122.397674,
  city: 'San Francisco, CA'
)

house3 = Spot.create!(
  headline: 'Clean comfortable sharing spot',
  description: 'Shared spot available in a big room in Soma Square Apartments located in the heart of SF.This a large room in a modern apartment in Bedford-Stuyvesant where I live with my partner. You will enjoy private use of the room as well as access to everything you see in the photos (kitchen, living room, etc). Please note that you may be sharing the common areas with other guests.',
  location: 'Soma Square Apartments',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407113/spots/new9_gc61x7.jpg',
  rating: 3.2,
  number_of_beds: '2',
  number_of_guests: 4,
  number_of_bedroom: 2,
  number_of_bathroom: 2,
  user_id: sarah.id,
  price: 220,
  room_type: 'Sharing',
  cancellations: 'Inflexible',
  house_rules: 'None',
  lat: 37.783859,
  lng: -122.397759,
  city: 'San Francisco, CA'
)

house4 = Spot.create!(
  headline: 'Room in 2Br /2Ba house',
  description: 'If you just want a cheap place to sleep, but you need a clean and convenience place, this will be the right choice for you. 3 mins walk to Bart. 10 mins walk to mall, Macy\'s, JCPpenny, Best Buy',
  location: '2701 van Ness Ave, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407112/spots/new7_vvczgw.jpg',
  rating: 4.7,
  number_of_beds: '1',
  number_of_guests: 1,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: stefanie.id,
  price: 80,
  room_type: 'Sharing',
  cancellations: 'Allowed if cancelled before 2 days of booking date',
  house_rules: 'No pets allowed',
  lat: 37.800560,
  lng:  -122.424710,
  city: 'San Francisco, CA'
)

house5 = Spot.create!(
  headline: 'Neat spacious apartment',
  description: 'Big apartment available for 3 people to live in private rooms. You will have this small private bedroom on the upper floor, as well as the shared living room and kitchen (my place is never crowded). You have options to sleep either in the loft bed or the pull-out sofa underneath it. Both beds are full sized. The mattress in the loft bed is memory foam, more preferable. However it would be perfect for 2 people who travel together but don\'t want to share bed. There is also a decent sized closet included in this bedroom.',
  location: '120 Page Street, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407113/spots/new4_rk7s7i.jpg',
  rating: 5,
  number_of_beds: '3',
  number_of_guests: 3,
  number_of_bedroom: 2,
  number_of_bathroom: 2,
  user_id: chris.id,
  price: 450,
  room_type: 'Private',
  cancellations: 'Allowed if cancelled before 7 days of booking date',
  house_rules: 'No cats allowed',
  lat: 37.771896,
  lng: -122.441311,
  city: 'San Francisco, CA'
)

house6 = Spot.create!(
  headline: 'Private Room/Bathroom',
  description: 'This is a medium sized room, with two twin mattresses and a private bathroom, in a multi room house. Orange or Apple Juice and Coffee is provided. As our Hotel quality Towels and hand towels, sparkling water, and disinfectant wipes. Shampoo, Conditioner, and bars of soap are provided upon request. No one knows the city better than us. Perfect for Students, Backpackers, and Adventurers. We\'ve had travelers from all over the world and can help cater to your needs. Ask!',
  location: '250 26th Ave, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407113/spots/nwe5_jfckmp.jpg',
  rating: 4.5,
  number_of_beds: '2',
  number_of_guests: 3,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: manushi.id,
  price: 130,
  room_type: 'Private',
  cancellations: 'Cancel up to 24 hours before check in and get a full refund (minus service fees).',
  house_rules: 'We wish for your pleasant stay.',
  lat: 37.784982,
  lng: -122.485845,
  city: 'San Francisco, CA'
)

house7 = Spot.create!(
  headline: 'Studio hotel suite near Union Square',
  description: 'Close to Union Square, Nob Hill, Chinatown, and the cable car, this hotel suite offers a quintessential San Francisco experience. Your room at the Worldmark San Francisco is well equipped for exploring the city with a queen size bed, full bathroom, and mini-fridge to store leftovers from the areas many great restaurants.The workout room means you don\'t have to leave your routine when you\'re away from home. The main floor has a free laundry room.Parking is not available at this property.',
  location: '46 Union Square, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407112/spots/new8_bnplcn.jpg',
  rating: 5,
  number_of_beds: '3',
  number_of_guests: 5,
  number_of_bedroom: 2,
  number_of_bathroom: 3,
  user_id: demo.id,
  price: 500,
  room_type: 'Private',
  cancellations: 'Strict
   Cancel up to 7 days before check in and get a 50% refund (minus service fees).',
  house_rules: 'No pets allowed',
  lat: 37.801692,
  lng: -122.401067,
  city: 'San Francisco, CA'
)

house8 = Spot.create!(
  headline: 'One bedroom with city view',
  description: 'View of the bay, fire place and free parking. This is shared space with other guest.Your bathroom would be shared with only me. You will immediately notice how clean I am as a responsible host. Both of the bathroom and the bedroom are fully equipped, including a hairdryer and a steam iron (if it\'s needed).',
  location: '75 Innes Ave, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506416216/spots/new6_p133xz.jpg',
  rating: 4,
  number_of_beds: '2',
  number_of_guests: 2,
  number_of_bedroom: 1,
  number_of_bathroom: 2,
  user_id: yara.id,
  price: 375,
  room_type: 'Private',
  cancellations: 'Allowed if cancelled before 3 weeks of booking date',
  house_rules: 'No parties',
  lat: 37.744419,
  lng: -122.397222,
  city: 'San Francisco, CA'
);

house9 = Spot.create!(
  headline: 'Master bedroom for two people',
  description: 'Beautiful room with attached luxurious bathroom. We\'ll provide you washed towels, soaps and all utilities, the room has it\'s own heater so you can set the temparature according to your need. My wife is very friendly and I hardly stay at home, so she\'ll take care of all your needs.',
  location: '641 16th Ave, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506216504/spots/spot_4.jpg',
  rating: 4.8,
  number_of_beds: '1',
  number_of_guests: 2,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: tyler.id,
  price: 300,
  room_type: 'Private',
  cancellations: 'Allowed if cancelled before 7 days of booking date',
  house_rules: 'No pets',
  lat: 37.776132,
  lng: -122.474934,
  city: 'San Francisco, CA'
);

house10 = Spot.create!(
  headline: 'One bedroom with city view',
  description: 'View of the bay, fire place and free parking. This is shared space with other guest.Your bathroom would be shared with only me. You will immediately notice how clean I am as a responsible host. Both of the bathroom and the bedroom are fully equipped, including a hairdryer and a steam iron (if it\'s needed).',
  location: '55 Rossi Ave, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506216504/spots/spot_6.jpg',
  rating: 3.9,
  number_of_beds: '2',
  number_of_guests: 3,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: stefanie.id,
  price: 415,
  room_type: 'Private',
  cancellations: 'No refund',
  house_rules: 'Keep it clean',
  lat: 37.778015,
  lng: -122.456311,
  city: 'San Francisco, CA'
);


house11 = Spot.create!(
  headline: 'Beautiful elegant place',
  description: 'Beautiful house with elegant interior to maintain peace. We have a cute dog, who is very friendly. Our house is very clean and quiet and it is suitable for anyone who is looking for a beautiful elegant place to stay.',
  location: '3730 Scott St, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506406433/spots/new2_gd6onp.jpg',
  rating: 4.3,
  number_of_beds: '1',
  number_of_guests: 2,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: naz.id,
  price: 325,
  room_type: 'Private',
  cancellations: 'Allowed if cancelled before 3 weeks of booking date',
  house_rules: 'No smoking\n
    Not suitable for pets',
  lat: 37.804222,
  lng: -122.441521,
  city: 'San Francisco, CA'
);


house12 = Spot.create!(
  headline: 'Beautiful house',
  description: 'View of the bay, fire place and free parking. This is shared space with other guest.Your bathroom would be shared with only me. You will immediately notice how clean I am as a responsible host. Both of the bathroom and the bedroom are fully equipped, including a hairdryer and a steam iron (if it\'s needed).',
  location: '455 Haight St, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506216503/spots/spot_5.jpg',
  rating: 4.6,
  number_of_beds: '2',
  number_of_guests: 3,
  number_of_bedroom: 1,
  number_of_bathroom: 2,
  user_id: hannah.id,
  price: 475,
  room_type: 'Private',
  cancellations: 'Flexible',
  house_rules: 'No guests allowed',
  lat: 37.771816,
  lng: -122.429518,
  city: 'San Francisco, CA'
);


house13 = Spot.create!(
  headline: 'One bedroom close to Downtown SF',
  description: 'Huge bedroom apartment in a safe neighborhood. Maximum two people are allowed. This place is very close to downtown SF, you can visit all famous tourist spots in very less time and it\'s perfect for people who want to visit SF.',
  location: '1348 22nd Ave, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506135165/spots/house4_k2zggs.jpg',
  rating: 3.4,
  number_of_beds: '2',
  number_of_guests: 2,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: leo.id,
  price: 375,
  room_type: 'Private',
  cancellations: 'Allowed if cancelled before 3 weeks of booking date',
  house_rules: 'No parties',
  lat: 37.762533,
  lng: -122.480126,
  city: 'San Francisco, CA'
);

house14 = Spot.create!(
  headline: 'bedroom with clean and quiet roomamtes',
  description: 'Perfect spot for a student for a working professional, if you are looking for a place to live for a long-term then this place is for you. You\'ll be sharing the room with 3 other professionals who are clean and quiet and you\'ll get bed and mattress.',
  location: 'La Casita De Las Joyas, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506135165/spots/house6_vjbhj1.jpg',
  rating: 4,
  number_of_beds: '1',
  number_of_guests: 1,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: chris.id,
  price: 90,
  room_type: 'Shared',
  cancellations: 'Allowed if cancelled before 1 month of booking date',
  house_rules: 'You have to make sure the room is clean',
  lat: 37.752239,
  lng: -122.416664,
  city: 'San Francisco, CA'
);

house15 = Spot.create!(
  headline: 'Living room comfortable spot',
  description: 'If you are looking for a cheap and comfortable place to live which is in San Francisco and close to mission district then this place is perfect spot for you, you can book it flexibly. The hosts are very nice and cooperative people.',
  location: '789 Minnesota St, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506216503/spots/spot_2.jpg',
  rating: 3,
  number_of_beds: '1',
  number_of_guests: 1,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: hannah.id,
  price: 80,
  room_type: 'Shared',
  cancellations: 'Flexible',
  house_rules: 'Keep your stuff in the store room',
  lat: 37.761345,
  lng: -122.390505,
  city: 'San Francisco, CA'
);

house16 = Spot.create!(
  headline: 'Affordable place',
  description: 'Comfortable spot is available in affordable price, you\'ll be sharing the place with 1 other person where you both will get your own twin size bed and mattress and we\'ll provide you all the utilities and bathroom necessities.',
  location: '2810 Moraga St, San Francisco, CA',
  img_url: 'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506216503/spots/spot_3.jpg',
  rating: 4.7,
  number_of_beds: '1',
  number_of_guests: 1,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: naz.id,
  price: 95,
  room_type: 'Shared',
  cancellations: 'Allowed if cancelled before 3 weeks of booking date',
  house_rules: 'No parties',
  lat: 37.755497,
  lng: -122.493370,
  city: 'San Francisco, CA'
);

# REVIEWS
# Reviews for house 1
review1 = Review.create!(
  body: 'Loved it',
  rating: 5,
  spot_id: house1.id,
  author_id: yara.id
);
review2 = Review.create!(
  body: 'Liked it very much',
  rating: 4,
  spot_id: house1.id,
  author_id: tyler.id
);
review3 = Review.create!(
  body: 'Had an awesome stay',
  rating: 4.2,
  spot_id: house1.id,
  author_id: chris.id
);

# Reviews for house 2
review4 = Review.create!(
  body: 'Good for vacation',
  rating: 3.4,
  spot_id: house2.id,
  author_id: sarah.id
);
review5 = Review.create!(
  body: 'Must visit',
  rating: 4.4,
  spot_id: house2.id,
  author_id: manushi.id
);
review6 = Review.create!(
  body: 'Will come again',
  rating: 4.5,
  spot_id: house2.id,
  author_id: stefanie.id
);

# Reviews for house 3
review7 = Review.create!(
  body: 'pleasant place to stay',
  rating: 4.0,
  spot_id: house3.id,
  author_id: leo.id
);
review8 = Review.create!(
  body: 'Very close to downtown SF',
  rating: 4.1,
  spot_id: house3.id,
  author_id: chris.id
);
review9 = Review.create!(
  body: 'The house hosts are very sweet',
  rating: 5.0,
  spot_id: house3.id,
  author_id: navid.id
);

# Reviews for house 4
review10 = Review.create!(
  body: 'Wow! This place is truly phenomenal.',
  rating: 3.9,
  spot_id: house4.id,
  author_id: naz.id
);
review11 = Review.create!(
  body: 'Very clean and quiet',
  rating: 3.4,
  spot_id: house4.id,
  author_id: manushi.id
);
review12 = Review.create!(
  body: 'Worth the cost. Extremely beautiful!!',
  rating: 4.8,
  spot_id: house4.id,
  author_id: chris.id
);

# Reviews for house 5
review13 = Review.create!(
  body: 'Great spot.',
  rating: 5,
  spot_id: house5.id,
  author_id: sarah.id
);
review14 = Review.create!(
  body: 'Inlove with the house',
  rating: 5,
  spot_id: house5.id,
  author_id: manushi.id
);
review15 = Review.create!(
  body: 'Will come again for sure',
  rating: 5,
  spot_id: house5.id,
  author_id: naz.id
);

# Reviews for house 6
review16 = Review.create!(
  body: 'Good for vacation',
  rating: 3,
  spot_id: house6.id,
  author_id: yara.id
);
review17 = Review.create!(
  body: 'I\'d recommend staying here',
  rating: 4,
  spot_id: house6.id,
  author_id: leo.id
);
review18 = Review.create!(
  body: 'It is out of this world.',
  rating: 5,
  spot_id: house6.id,
  author_id: navid.id
);

# Reviews for house 7
review19 = Review.create!(
  body: ' It really is stunning and I will always remember my stay here.',
  rating: 3.7,
  spot_id: house7.id,
  author_id: tyler.id
);
review20 = Review.create!(
  body: 'highly recommend it.',
  rating: 4.2,
  spot_id: house7.id,
  author_id: chris.id
);
review21 = Review.create!(
  body: 'We had a fantastic experience.',
  rating: 5,
  spot_id: house7.id,
  author_id: sarah.id
);

# Reviews for house 8
review22 = Review.create!(
  body: 'the house itself is breathtaking!',
  rating: 4.9,
  spot_id: house8.id,
  author_id: hannah.id
);
review23 = Review.create!(
  body: 'This is a super unique property and experience.',
  rating: 4.6,
  spot_id: house8.id,
  author_id: stefanie.id
);
review24 = Review.create!(
  body: 'The house is openly designed in that it does not have windows to separate you from the the nature.',
  rating: 5,
  spot_id: house8.id,
  author_id: leo.id
);

# Reviews for house 9
review25 = Review.create!(
  body: 'The house was clean and comfortable.',
  rating: 3.8,
  spot_id: house9.id,
  author_id: navid.id
);
review26 = Review.create!(
  body: 'Tyler let me check in early, so I was able to enjoy my first day fully, luggage-free.',
  rating: 4,
  spot_id: house9.id,
  author_id: hannah.id
);
review27 = Review.create!(
  body: 'It was quiet and had a comfy firm mattress. This was my first airbnb experience and I thought it went well.',
  rating: 5,
  spot_id: house9.id,
  author_id: yara.id
);

# Reviews for house 10
review28 = Review.create!(
  body: 'Quiet at home, lively in public.',
  rating: 3.9,
  spot_id: house10.id,
  author_id: tyler.id
);
review29 = Review.create!(
  body: 'I love to travel and enjoy having people from all over the world stay with me. I have lived in San Francisco for many years and am happy to share my home.',
  rating: 4.7,
  spot_id: house10.id,
  author_id: naz.id
);

# Reviews for house 11
review30 = Review.create!(
  body: 'Great place, would stay here again!',
  rating: 5,
  spot_id: house11.id,
  author_id: leo.id
);

# Reviews for house 12
review31 = Review.create!(
  body: 'Perfect location for getting to UCSF',
  rating: 5,
  spot_id: house12.id,
  author_id: manushi.id
);
review32 = Review.create!(
  body: 'Loved it here! Big, beautiful house and this room is huge!',
  rating: 4.6,
  spot_id: house12.id,
  author_id: leo.id
);
review33 = Review.create!(
  body: 'The most comfortable bed I’ve ever slept in. Location is incredible.',
  rating: 4.9,
  spot_id: house12.id,
  author_id: stefanie.id
);

# Reviews for house 13
review34 = Review.create!(
  body: 'Nice host, lovely host.',
  rating: 3,
  spot_id: house13.id,
  author_id: hannah.id
);
review35 = Review.create!(
  body: 'Clean and well-equipped room. And leo is very nice to make my checkout time flexible.',
  rating: 3.2,
  spot_id: house13.id,
  author_id: tyler.id
);
review36 = Review.create!(
  body: 'If you are looking to stay outside of the busy city, this place is for you.',
  rating: 3.5,
  spot_id: house13.id,
  author_id: stefanie.id
);

# Reviews for house 14
review37 = Review.create!(
  body: 'Good for vacation',
  rating: 3.9,
  spot_id: house14.id,
  author_id: navid.id
);
review38 = Review.create!(
  body: 'Lots of places to eat and see in the area without the hassle. About a 30 min uber into downtown. Host was very accommodating and friendly. Room is exactly as described.',
  rating: 4.6,
  spot_id: house14.id,
  author_id: naz.id
);

# Reviews for house 15
review39 = Review.create!(
  body: 'This room is actually the "living room" in this dwelling, set with a wall of opening windows to let in the cool Pacific air, a fireplace, and a ton of square footage.',
  rating: 5,
  spot_id: house15.id,
  author_id: yara.id
);
review40 = Review.create!(
  body: 'The location was great and the room was clean and very spacious. Would stay there again.',
  rating: 3.9,
  spot_id: house15.id,
  author_id: chris.id
);
review41 = Review.create!(
  body: 'Everything was exactly as promised, easy check-in, great location (try the golden bear tranding co down the street, it\'s great!) and Kameh provided me with plenty of privacy, but was available when needed.',
  rating: 4.5,
  spot_id: house15.id,
  author_id: manushi.id
);

# Reviews for house 16
review42 = Review.create!(
  body: 'Naz was very easy to get a hold of and was extremely flexible even with me arriving late at night and leaving early.',
  rating: 5,
  spot_id: house16.id,
  author_id: sarah.id
);
review43 = Review.create!(
  body: 'She was hospitable and helpful giving advice on walk to the City Center which we planned to take and took. Also on coffee shops near by.',
  rating: 3,
  spot_id: house16.id,
  author_id: hannah.id
);
review44 = Review.create!(
  body: 'Naz was an excellent host. She was very kind and hospitable. She took her time to make sure that I felt at home and spent time explaining the highlights that I should visit in SF.',
  rating: 4,
  spot_id: house16.id,
  author_id: stefanie.id
);
review45 = Review.create!(
  body: 'Perfect! Very close to UCSF and public transportation.',
  rating: 5,
  spot_id: house16.id,
  author_id: tyler.id
);
