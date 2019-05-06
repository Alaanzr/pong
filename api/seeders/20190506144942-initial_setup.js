const date = new Date()
const timestamps = { created_at: date, updated_at: date }
const options = { returning: '*' }

module.exports = {
  up: async queryInterface => {
    const [ player1, player2 ] = await queryInterface.bulkInsert('player', [
      {
        ...timestamps,
        name: 'Player 1',
        email: 'player1@gmail.com',
        password: 'password'
      },
      {
        ...timestamps,
        name: 'Player 2',
        email: 'player2@gmail.com',
        password: 'password'
      }
    ], options)

    const [ matchGroup ] = await queryInterface.bulkInsert('match_group', [
      {
        ...timestamps,
        winner: player1.player_id
      }
    ], options)

    const [ match1, match2, match3 ] = await queryInterface.bulkInsert('match', [
      {
        ...timestamps,
        match_group_id: matchGroup.match_group_id,
        winner: player1.player_id
      },
      {
        ...timestamps,
        match_group_id: matchGroup.match_group_id,
        winner: player2.player_id
      },
      {
        ...timestamps,
        match_group_id: matchGroup.match_group_id,
        winner: player1.player_id
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

  down: async queryInterface => {
    await queryInterface.bulkDelete('player', null)
    await queryInterface.bulkDelete('match_group', null)
    await queryInterface.bulkDelete('match', null)
    await queryInterface.bulkDelete('player_match', null)
    await queryInterface.bulkDelete('ranking', null)
  }
}
