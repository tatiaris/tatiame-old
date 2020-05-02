#include <cmath>
#include <iostream>
using namespace std;

int main(){
    int n, w, h, m, s;

    cin >> n >> w >> h;

    s = sqrt(w*w + h*h);

    for (int i = 0; i < n; i++){
        cin >> m;
        if (m <= s) cout << "DA" << endl;
        else cout << "NE" << endl;
    }

    return 0;
}
