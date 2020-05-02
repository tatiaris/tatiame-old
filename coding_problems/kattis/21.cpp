#include <iostream>
using namespace std;

int main(){
    int dpm, m, s, r;
    cin >> dpm >> m;
    r = dpm;
    for (int i = 0; i < m; i++){
        cin >> s;
        r += dpm - s;
    }
    cout << r << endl;
    return 0;
}
