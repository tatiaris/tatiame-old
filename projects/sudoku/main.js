grid = [];
unfilled_values = 81;

setup();
// fill_example();

function setup() {
    grid = [...Array(9)].map(e => Array(9).fill(0));
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            e = document.getElementById('cell_' + i + j);
            solid_white = "1px solid #ffffffab"

            if (i == 1) {
                e.style.borderTop = "0px";
            }
            if (j == 1) {
                e.style.borderLeft = "0px";
            }
            if (j == 9) {
                e.style.borderRight = "0px";
            }
            if (i == 9) {
                e.style.borderBottom = "0px";
            }
            if (i == 3 || i == 6) {
                e.style.borderBottom = solid_white;
            }
            if (i == 4 || i == 7) {
                e.style.borderTop = solid_white;
            }
            if (j == 3 || j == 6) {
                e.style.borderRight = solid_white;
            }
            if (j == 4 || j == 7) {
                e.style.borderLeft = solid_white;
            }
        }
    }
}

function fill_example() {
    grid_string = "930000004\n000094537\n451030029\n140900650\n005301298\n093608001\n089010040\n670009310\n304060902";
    row_string = grid_string.split("\n");
    for (var i = 0; i < row_string.length; i++) {
        row = row_string[i].split("");
        for (var j = 0; j < row.length; j++) {
            if (row[j] != "0") {
                document.getElementById('inp_' + (i + 1) + (j + 1)).value = parseInt(row[j]);
                update_grid(i+1, j+1, row[j]);
            }
        }
    }
}

function solve_sudoku() {
    var temp_grid = [...Array(9)].map(e => Array(9).fill([]));;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 0) {
                temp_grid[i][j] = get_possible_keys(i, j);
                if (temp_grid[i][j].length < 2) {
                    document.getElementById('hint_' + (i + 1) + (j + 1)).innerHTML = "";
                    e = document.getElementById('inp_' + (i + 1) + (j + 1));
                    e.style.color = "green";
                    e.value = temp_grid[i][j][0];
                    update_grid(i+1, j+1);
                } else {
                    e = document.getElementById('hint_' + (i + 1) + (j + 1));
                    e.innerHTML = temp_grid[i][j].toString();
                }
            }
        }
    }
    // print_grid(temp_grid);
}

function get_possible_keys(i, j) {
    possible_keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var m = possible_keys.length - 1; m > -1; m--) {
        key_found = false;
        if (grid[i].includes(possible_keys[m])) {
            key_found = true;
        }
        if (!key_found){
            for (var k = 0; k < grid.length; k++) {
                if (grid[k][j] == possible_keys[m]) {
                    key_found = true;
                }
            }
        }
        if (!key_found){
            key_found = is_key_in_block(i, j, possible_keys[m]);
        }
        if (key_found) {
            possible_keys.splice(m, 1);
        }
    }
    return possible_keys;
}

function is_key_in_block(i, j, key) {
    start_i = Math.floor(i/3)*3;
    start_j = Math.floor(j/3)*3;

    for (var m = start_i; m < start_i + 3; m++) {
        for (var n = start_j; n < start_j + 3; n++) {
            if (grid[m][n] == key) {
                return true;
            }
        }
    }
    return false;
}

function update_grid(i, j) {
    document.getElementById('hint_' + i + j).innerHTML = "";
    e = document.getElementById("inp_" + i + j);
    if (e != null ) {
        if (e.value.length > 1) {
            e.value = e.value[0];
        }
        if (e.value != "") grid[i-1][j-1] = parseInt(e.value);
        else grid[i-1][j-1] = 0;
    }
    // solve_sudoku();
}

function print_grid(g) {
    string_grid = "";
    for (var i = 0; i < g.length; i++) {
        for (var j = 0; j < g[i].length; j++) {
            string_grid += g[i][j] + " ";
        }
        string_grid += "\n";
    }
    console.log(string_grid);
}
