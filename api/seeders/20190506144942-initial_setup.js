const date = new Date()
const options = { returning: '*' }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [ player1, player2 ] = await queryInterface.bulkInsert('player', [
      {
        name: 'Player 1',
        email: 'player1@gmail.com',
        password: 'password',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Player 2',
        email: 'player2@gmail.com',
        password: 'password',
        created_at: date,
        updated_at: date
      }
    ], options)

    const [ matchGroup ] = await queryInterface.bulkInsert('match_group', [
      {
        winner: player1.player_id,
        created_at: date,
        updated_at: date
      }
    ], options)

    const [ match1, match2, match3 ] = await queryInterface.bulkInsert('match', [
      {
        match_group_id: matchGroup.match_group_id,
        winner: player1.player_id,
        created_at: date,
        updated_at: date
      },
      {
        match_group_id: matchGroup.match_group_id,
        winner: player2.player_id,
        created_at: date,
        updated_at: date
      },
      {
        match_group_id: matchGroup.match_group_id,
        winner: player1.player_id,
        created_at: date,
        updated_at: date
      }
    ], options)

    await queryInterface.bulkInsert('player_match', [
      {
        player_id: player1.player_id,
        match_id: match1.match_id,
        score: 21
      },
      {
        player_id: player2.player_id,
        match_id: match1.match_id,
        score: 16
      },
      {
        player_id: player1.player_id,
        match_id: match2.match_id,
        score: 9
      },
      {
        player_id: player2.player_id,
        match_id: match2.match_id,
        score: 21
      },
      {
        player_id: player1.player_id,
        match_id: match3.match_id,
        score: 21
      },
      {
        player_id: player2.player_id,
        match_id: match3.match_id,
        score: 10
      }
    ])

    await queryInterface.bulkInsert('ranking', [
      {
        player_id: player1.player_id,
        rank: 1
      },
      {
        player_id: player2.player_id,
        rank: 2
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('player', null)
    await queryInterface.bulkDelete('match_group', null)
    await queryInterface.bulkDelete('match', null)
    await queryInterface.bulkDelete('player_match', null)
    await queryInterface.bulkDelete('ranking', null)
  }
}
