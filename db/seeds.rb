# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all

demo = User.create!(
  username:'User',
  password:'password',
  email:'prettyuser@gmail.com',
  phone_number:'1234567890',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506214592/users/Dwayne.jpg'
)

priyanka = User.create!(
  username:'Priyanka',
  password:'password',
  email:'priyanka@gmail.com',
  phone_number:'2345678901',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506214593/users/priyanka.jpg'
)

selena = User.create!(
  username:'Selena',
  password:'password',
  email:'selena@gmail.com',
  phone_number:'3456789012',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506214593/users/selena.jpg'
)

taylor = User.create!(
  username:'Taylor',
  password:'password',
  email:'taylor@gmail.com',
  phone_number:'4567890123',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506214592/users/taylor.jpg'
)

justin = User.create!(
  username:'Justin',
  password:'password',
  email:'justin@gmail.com',
  phone_number:'5678901234',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506214592/users/justin.jpg'
)

house1 = Spot.create!(
  headline:'Beautiful place',
  description:'Beautiful house near lake and school with all modern amenities',
  location:'100 Shore Ave, Syracuse, NY-13209',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506216503/spots/spot_3.jpg',
  rating:4.2,
  number_of_beds:'2',
  user_id: priyanka.id,
  price:400,
  room_type:'Private',
  cancellations:'Flexible - 24 hours cancellation',
  house_rules:'No smoking \n No drugs \n No parties',
)

house2 = Spot.create!(
  headline:'Luxurious Home',
  description:'Big luxurious home in the heart of Kansas city',
  location:'near Kansa University',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506135165/spots/house2_vdswgg.jpg',
  rating:3,
  number_of_beds:'1',
  user_id: selena.id,
  price:600,
  room_type:'Private',
  cancellations:'Allowed before 7 days of booking date',
  house_rules:'Keep it clean and noise free and no other person allowed other than the guest',
)

house3 = Spot.create!(
  headline:'Sharing spot in SF',
  description:'Shared spot available in a big room in Soma Square Apartments located in the heart of SF',
  location:'Soma Square Apartments',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506216503/spots/spot_2.jpg',
  rating:3.2,
  number_of_beds:'1',
  user_id: taylor.id,
  price:600,
  room_type:'Sharing',
  cancellations:'Inflexible',
  house_rules:'None',
)

house4 = Spot.create!(
  headline:'Safe haven',
  description:'A beautiful private room in available in a big building with laundry and gym facilities',
  location:'500 Sip Avenue, Jersey City, New Jersey',
  img_url:'http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506135165/spots/house4_k2zggs.jpg',
  rating:4.7,
  number_of_beds:'2',
  user_id: justin.id,
  price:550,
  room_type:'Private',
  cancellations:'Allowed if cancelled before 2 days of booking date',
  house_rules:'No pets allowed',
)
