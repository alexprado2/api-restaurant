import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
   
    await knex("products").del();

    
    await knex("products").insert([
        { name:"Batata Frita", price:45},
        { name:"Lasanha", price:70},
        { name:"Frango a pasarinho", price:100},
        { name:"Suco natural 300ml", price:12},
        { name:"Bolinho de queijo", price:50},
        { name:"Isca de frango", price:80},
        { name:"Costela", price:70},
        { name:"Refrigerante 300ml", price:10},
        { name:"Picanha da casa", price:120},
        { name:"Executivo de frango", price:50.5},

    ]);
};
