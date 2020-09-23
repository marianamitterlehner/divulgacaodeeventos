import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('events', table =>{
        table.increments('id_event').primary();
        table.string('evento').notNullable();
        table.string('local').notNullable();
        table.string('foto').notNullable();
        table.string('comentario').notNullable();
        table.integer('like').notNullable();
        table.integer('deslike').notNullable();

        table.integer('id_user')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('events');
}