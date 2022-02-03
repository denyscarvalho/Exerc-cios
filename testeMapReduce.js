var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  //const dadosPilots = personnel.map(personnel => `${personnel.name} Score: ${personnel.pilotingScore}`)
  //console.log(dadosPilots)

 // const infoTotal = personnel.reduce ((acum, item) => acum + item.shootingScore, 0)

  //const scorePilots = personnel.filter(personnel => personnel.pilotingScore > 70)

  const usuario = personnel.filter(personnel => personnel.isForceUser === true)
  console.table(usuario)


