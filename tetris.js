tetris = () => {
    document.getElementById("tetris").innerHTML = "";
    let game = new Game();
    game.start();
    Game = function() {
        this.board = new Board();
        this.board.draw();
        this.score = new Score();
        this.score.draw();
        this.interval = setInterval(this.update, 1000);
        this.update = () => {
            this.board.update();
            this.score.update();
        };
        this.start = () => {
            this.board.draw();
            this.score.draw();
            this.interval = setInterval(this.update, 1000);
        };
        this.stop = () => {
            clearInterval(this.interval);
        };
    }
    Board = function() {
        this.grid = new Array(20);
        for (let i = 0; i < 20; i++) {
            this.grid[i] = new Array(10);
            for (let j = 0; j < 10; j++) {
                this.grid[i][j] = 0;
            }
        }
        this.draw = () => {
            let table = document.createElement("table");
            table.setAttribute("id", "board");
            for (let i = 0; i < 20; i++) {
                let row = document.createElement("tr");
                for (let j = 0; j < 10; j++) {
                    let cell = document.createElement("td");
                    cell.setAttribute("id", `${i}-${j}`);
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            document.getElementById("tetris").appendChild(table);
        };
        this.update = () => {
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 10; j++) {
                    if (this.grid[i][j] == 1) {
                        document.getElementById(`${i}-${j}`).style.backgroundColor = "red";
                    }
                }
            }
        };
    }
}