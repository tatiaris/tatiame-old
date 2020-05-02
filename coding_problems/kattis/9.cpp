#include <iostream>
#include <vector>

using namespace std;

struct star {
    char c;
    bool used;
};

int floodfill(int m, int n, int i, int j, vector<vector<star> >& v) {
    if(i < 0 || i >= m || j < 0 || j >= n) return 0;

    if(v[i][j].used) return 0;

    v[i][j].used = true;

    floodfill(m, n, i, j+1, v);
    floodfill(m, n, i, j-1, v);
    floodfill(m, n, i+1, j, v);
    floodfill(m, n, i-1, j, v);

    return 1;
}

int main() {
    int m, n;
    int count = 1;
    while(cin >> m && cin >> n) {
        vector<vector<star> > v;

        for(int i = 0; i < m; i++) {
            vector<star> temp;
            for(int i = 0; i < n; i++) {
                char c;
                cin >> c;
                star p;
                p.c = c;
                p.used = (c == '#');
                temp.push_back(p);
            }
            v.push_back(temp);
        }

        int stars = 0;
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                stars += floodfill(m, n, i, j, v);
            }
        }

        cout << "Case " << count << ": " << stars << endl;
        count++;
    }
}
