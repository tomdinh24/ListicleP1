import { pool } from './database.js'
import './dotenv.js'
import cardData from '../data/cards.js'

const createCardsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS cards;

    CREATE TABLE IF NOT EXISTS cards (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      affiliation VARCHAR(255) NOT NULL,
      clan VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    )
  `

  try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 cards table created successfully')
  } catch (err) {
    console.error('⚠️ error creating cards table', err)
  }
}

const seedCardsTable = async () => {
  await createCardsTable()

  cardData.forEach((card) => {
    const insertQuery = {
      text: 'INSERT INTO cards (name, image, affiliation, clan, description) VALUES ($1, $2, $3, $4, $5)'
    }

    const values = [
      card.name,
      card.image,
      card.affiliation,
      card.clan,
      card.description
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting card', err)
        return
      }
      console.log(`✅ ${card.name} added successfully`)
    })
  })
}

seedCardsTable()