fetch('../json/tournaments.json')
.then(res => res.json())
.then(data => {
    const bracket = document.getElementById('bracket');
    data.forEach(t => {
        bracket.innerHTML += `<h2>${t.name}</h2>`;
        t.matches.forEach(m => {
            bracket.innerHTML += `<p>${m.player1} vs ${m.player2} - Winner: ${m.winner || "?"}</p>`;
        });
    });
});