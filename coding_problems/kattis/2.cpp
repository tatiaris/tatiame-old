#include <iostream>
#include <vector>

using namespace std;

void shift(int row[4]){
    vector<int> v;
    for (int i = 0; i < 4; i++){
        if (row[i] != 0){
            v.push_back(row[i]);
        }
    }
    for (int i = v.size() - 1; i > 0; i--){
        if (v[i] == v[i - 1]){
            v[i] *= 2;
            v[i - 1] = 0;
        }
    }
    for (int i =  0; i < 4; i++) row[i] = 0;
    int e = 3;
    for (int i = v.size() - 1; i > -1; i--){
        if (v[i] != 0){
            row[e] = v[i];
            e--;
        }
    }
}
void swipeDown(int grid[4][4]){
    for (int i = 0; i < 4; i++){
        int r[4] = {grid[0][i], grid[1][i], grid[2][i], grid[3][i]};
        shift(r);
        for (int j = 0; j < 4; j++)
            grid[j][i] = r[j];
    }
}
void swipeLeft(int grid[4][4]){
    for (int i = 0; i < 4; i++){
        int r[4] = {grid[i][3], grid[i][2], grid[i][1], grid[i][0]};
        shift(r);
        for (int j = 0; j < 4; j++)
            grid[i][3 - j] = r[j];
    }
}
void swipeUp(int grid[4][4]){
    for (int i = 0; i < 4; i++){
        int r[4] = {grid[3][i], grid[2][i], grid[1][i], grid[0][i]};
        shift(r);
        for (int j = 0; j < 4; j++)
            grid[3 - j][i] = r[j];
    }
}
void swipeRight(int grid[4][4]){
    for (int i = 0; i < 4; i++){
        int r[4] = {grid[i][0], grid[i][1], grid[i][2], grid[i][3]};
        shift(r);
        for (int j = 0; j < 4; j++)
            grid[i][j] = r[j];
    }
}

int main(){
    int mat[4][4];
    int swipeDir;
    for (int i = 0; i < 4; i++)
        for (int j = 0; j < 4; j++)
            cin >> mat[i][j];

    cin >> swipeDir;

    if (swipeDir == 0) swipeLeft(mat);
    else if (swipeDir == 1) swipeUp(mat);
    else if (swipeDir == 2) swipeRight(mat);
    else if (swipeDir == 3) swipeDown(mat);

    for (int i = 0; i < 4; i++){
        for (int j = 0; j < 4; j++)
            cout << mat[i][j] << " ";
        cout << endl;
    }

    return 0;
}
