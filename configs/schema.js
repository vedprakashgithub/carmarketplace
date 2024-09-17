
import { varbinary } from "drizzle-orm/mysql-core";
import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";


export const CarListing=pgTable('CarListing',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    tagline: varchar('tagline'), 
    originalPrice:varchar('originalPrice'),
    sellingPrice: varchar('sellingPrice'), 
    category:varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    make: varchar('make'). notNull(),
    model:varchar('model'). notNull(), 
    year: varchar('year'). notNull(),
    driveType:varchar('driveType').notNull(),
    transmission: varchar('transmission'),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(), 
    engineSize: varchar('engineSize'), 
    cylinder: varchar('cylinder'), 
    color:varchar('color').notNull(),
    door: varchar('door'). notNull(), 
    vin: varchar('vin'),
    offerType: varchar('offerType'), 
    postedOn: varchar('postedOn').default('20/10/2024'),
    listingDescription: varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').default('ved@gmail.com'),

    }) 

    
    export const CarImages=pgTable('CarImages', {
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    carListingId: integer('carListingId').notNull().references(() =>CarListing.id)

    })
