# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bench.destroy_all

Bench.create(description: "Mission Dolores Park", lat: 37.760272, lng: -122.426828)
Bench.create(description: "Lands End", lat: 37.783920, lng: -122.507970)
Bench.create(description: "App Academy", lat: 37.798851, lng: -122.401211)
