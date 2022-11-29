const presentation = document.createElement('div');
document.body.appendChild(presentation);
presentation.className = 'presentation';

presentation.innerHTML = `
    <p>
        Tic-tac-toe or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. <br> The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. <br>

        Games played on three-in-a-row boards can be traced back to ancient Egypt, where such game boards have been found on roofing tiles dating from around 1300 BC.

    </p>`;

export {presentation};