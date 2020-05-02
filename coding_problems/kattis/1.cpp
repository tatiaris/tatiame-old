#include <iostream>
#include <string>
using namespace std;

void floodFill(int grid[1001][1001], int i, int j, int num, int r, int c, int type){
    if (i < 0 || j < 0 || i >= r || j >= c || grid[i][j] > 1 || grid[i][j] != type);
    else {
        grid[i][j] = num;
        floodFill(grid, i - 1, j, num, r, c, type);
        floodFill(grid, i, j - 1, num, r, c, type);
        floodFill(grid, i + 1, j, num, r, c, type);
        floodFill(grid, i, j + 1, num, r, c, type);
    }
}

int main(){
    int r, c, numQueries, cnt, r1, c1, r2, c2;
    cin >> r >> c;

    int map[1001][1001];

    for (int i = 0; i < r; i++){
        for (int j = 0; j < c; j++){
            char c;
            cin >> c;
            map[i][j] = c - '0';
        }
    }

    cnt = 1;
    for (int i = 0; i < r; i++){
        for (int j = 0; j < c; j++){
            if (map[i][j] < 2){
                floodFill(map, i, j, cnt*2 + map[i][j], r, c, map[i][j]);
                cnt++;
            }
        }
    }

    cin >> numQueries;

    for (int i = 0; i < numQueries; i++){
        cin >> r1 >> c1 >> r2 >> c2;
        if (map[r1 - 1][c1 - 1] == map[r2 - 1][c2 - 1]){
            if (map[r1 - 1][c1 - 1]%2 == 0){
                cout << "binary" << endl;
            } else {
                cout << "decimal" << endl;
            }
        } else {
            cout << "neither" << endl;
        }
    }


    return 0;
}
