# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all
Review.destroy_all

demo = User.create!(
  username:'User',
  fname: 'Dwayne',
  lname: 'Johnson',
  password:'password',
  email:'prettyuser@gmail.com',
  phone_number:'1234567890',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506420041/users/u4.png'
)

priyanka = User.create!(
  username:'Priyanka',
  fname: 'Priyanka',
  lname: 'Chopra',
  password:'password',
  email:'priyanka@gmail.com',
  phone_number:'2345678901',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506420041/users/u3.jpg'
)

selena = User.create!(
  username:'Selena',
  fname: 'Selena',
  lname: 'Gomez',
  password:'password',
  email:'selena@gmail.com',
  phone_number:'3456789012',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506420041/users/u2.jpg'
)

taylor = User.create!(
  username:'Taylor',
  fname: 'Taylor',
  lname: 'Swift',
  password:'password',
  email:'taylor@gmail.com',
  phone_number:'4567890123',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506420041/users/u1.jpg'
)

justin = User.create!(
  username:'Justin',
  fname: 'Justin',
  lname: 'Bieber',
  password:'password',
  email:'justin@gmail.com',
  phone_number:'5678901234',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506418307/bgs/user/user.png'
)

house1 = Spot.create!(
  headline:'Beautiful place',
  description:'Beautiful house near lake and school with all modern amenities. Please be aware that there are security cameras in the living room (facing the front door) and in the hallways. I have never had a problem and I never watch the video, but I think it is a good deterrent.',
  location:'100 Broderick St, San Francisco, CA - 94117',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407116/spots/new3_oudh7p.jpg',
  rating:4.2,
  number_of_beds:'2',
  number_of_guests: 3,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: priyanka.id,
  price:270,
  room_type:'Private',
  cancellations:'Flexible - 24 hours cancellation',
  house_rules:'No smoking
   No drugs
  No parties',
  lat: 37.771448,
  lng: -122.438111,
  city: 'San Francisco, CA'
);

house2 = Spot.create!(
  headline:'Luxurious Home',
  description:'Big luxurious home in the heart of Kansas city. You can walk to malls, grocery stores and can spend time in beautiful parks in the neighborhood.',
  location:'2626 Brooklyn Avenue, Kansas, MO-64127',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506406434/spots/new1_m3hpdw.jpg',
  rating:3,
  number_of_beds:'1',
  number_of_guests: 2,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: selena.id,
  price:95,
  room_type:'Private',
  cancellations:'Allowed before 7 days of booking date',
  house_rules:'Keep it clean and noise free and no other person allowed other than the guest',
  lat: 39.078145,
  lng: -94.557401,
  city: 'Kansas, MO'
)

house3 = Spot.create!(
  headline:'Clean comfortable sharing spot',
  description:'Shared spot available in a big room in Soma Square Apartments located in the heart of SF.This a large room in a modern apartment in Bedford-Stuyvesant where I live with my partner. You will enjoy private use of the room as well as access to everything you see in the photos (kitchen, living room, etc). Please note that you may be sharing the common areas with other guests.',
  location:'Soma Square Apartments',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407113/spots/new9_gc61x7.jpg',
  rating:3.2,
  number_of_beds:'2',
  number_of_guests: 4,
  number_of_bedroom: 2,
  number_of_bathroom: 2,
  user_id: taylor.id,
  price:220,
  room_type:'Sharing',
  cancellations:'Inflexible',
  house_rules:'None',
  lat: 37.783859,
  lng: -122.397759,
  city: 'San Francisco, CA'
)

house4 = Spot.create!(
  headline:'Room in 2Br /2Ba house',
  description:'If you just want a cheap place to sleep, but you need a clean and convenience place, this will be the right choice for you. 3 mins walk to subway, 45 mins to Manhattan . 10 mins walk to Queens mall, Macy\'s, JCPpenny, Best Buy',
  location:'392 Sip Avenue, Jersey City, New Jersey',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407112/spots/new7_vvczgw.jpg',
  rating:4.7,
  number_of_beds:'1',
  number_of_guests: 1,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: justin.id,
  price:80,
  room_type:'Sharing',
  cancellations:'Allowed if cancelled before 2 days of booking date',
  house_rules:'No pets allowed',
  lat: 40.734051,
  lng:  -74.078676,
  city: 'Jersey City, NJ'
)

house5 = Spot.create!(
  headline:'Neat spacious apartment',
  description:'Big apartment available for 3 people to live in private rooms. You will have this small private bedroom on the upper floor, as well as the shared living room and kitchen (my place is never crowded). You have options to sleep either in the loft bed or the pull-out sofa underneath it. Both beds are full sized. The mattress in the loft bed is memory foam, more preferable. However it would be perfect for 2 people who travel together but don\'t want to share bed. There is also a decent sized closet included in this bedroom.',
  location:'Colonnade apartment, San Jose, CA',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407113/spots/new4_rk7s7i.jpg',
  rating:5,
  number_of_beds:'3',
  number_of_guests: 3,
  number_of_bedroom: 2,
  number_of_bathroom: 2,
  user_id: justin.id,
  price:450,
  room_type:'Private',
  cancellations:'Allowed if cancelled before 7 days of booking date',
  house_rules:'No cats allowed',
  lat: 37.333582,
  lng: -121.884579,
  city: 'San Jose, CA'
)

house6 = Spot.create!(
  headline:'Private Room/Bathroom',
  description:'This is a medium sized room, with two twin mattresses and a private bathroom, in a multi room house. Orange or Apple Juice and Coffee is provided. As our Hotel quality Towels and hand towels, sparkling water, and disinfectant wipes. Shampoo, Conditioner, and bars of soap are provided upon request. No one knows the city better than us. Perfect for Students, Backpackers, and Adventurers. We\'ve had travelers from all over the world and can help cater to your needs. Ask!',
  location:'250 26th Ave, San Francisco, CA',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407113/spots/nwe5_jfckmp.jpg',
  rating:4.5,
  number_of_beds:'2',
  number_of_guests: 3,
  number_of_bedroom: 1,
  number_of_bathroom: 1,
  user_id: priyanka.id,
  price:130,
  room_type:'Private',
  cancellations:'Cancel up to 24 hours before check in and get a full refund (minus service fees).',
  house_rules:'We wish for your pleasant stay.',
  lat: 37.784982,
  lng: -122.485845,
  city: 'San Francisco, CA'
)

house7 = Spot.create!(
  headline:'Studio hotel suite near Union Square',
  description:'Close to Union Square, Nob Hill, Chinatown, and the cable car, this hotel suite offers a quintessential San Francisco experience. Your room at the Worldmark San Francisco is well equipped for exploring the city with a queen size bed, full bathroom, and mini-fridge to store leftovers from the areas many great restaurants.The workout room means you don\'t have to leave your routine when you\'re away from home. The main floor has a free laundry room.Parking is not available at this property.',
  location:'46 Union Square, San Francisco, CA',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506407112/spots/new8_bnplcn.jpg',
  rating:5,
  number_of_beds:'3',
  number_of_guests: 5,
  number_of_bedroom: 2,
  number_of_bathroom: 3,
  user_id: demo.id,
  price:500,
  room_type:'Private',
  cancellations:'Strict
   Cancel up to 7 days before check in and get a 50% refund (minus service fees).',
  house_rules:'No pets allowed',
  lat: 37.801692,
  lng: -122.401067,
  city: 'San Francisco, CA'
)

house8 = Spot.create!(
  headline:'One bedroom with city view',
  description:'View of the bay, fire place and free parking. This is shared space with other guest.Your bathroom would be shared with only me. You will immediately notice how clean I am as a responsible host. Both of the bathroom and the bedroom are fully equipped, including a hairdryer and a steam iron (if it\'s needed).',
  location:'75 Innes Ave, San Francisco, CA',
  img_url:'https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506416216/spots/new6_p133xz.jpg',
  rating:4,
  number_of_beds:'2',
  number_of_guests: 2,
  number_of_bedroom: 1,
  number_of_bathroom: 2,
  user_id: selena.id,
  price:375,
  room_type:'Private',
  cancellations:'Allowed if cancelled before 3 weeks of booking date',
  house_rules:'No parties',
  lat: 37.744419,
  lng: -122.397222,
  city: 'San Francisco, CA'
);

review1 = Review.create!(
  body: 'Loved it',
  rating: 5,
  spot_id: house1.id,
  author_id: selena.id
);

review2 = Review.create!(
  body: 'Liked it very much',
  rating: 4,
  spot_id: house2.id,
  author_id: priyanka.id
);

review3 = Review.create!(
  body: 'Had an awesome stay',
  rating: 4.2,
  spot_id: house3.id,
  author_id: justin.id
);

review4 = Review.create!(
  body: 'Good for vacation',
  rating: 3,
  spot_id: house4.id,
  author_id: taylor.id
);
review5 = Review.create!(
  body: 'Must visit',
  rating: 4,
  spot_id: house5.id,
  author_id: priyanka.id
);
review6 = Review.create!(
  body: 'Will come again',
  rating: 5,
  spot_id: house6.id,
  author_id: taylor.id
);
