#include <iostream>
using namespace std;

int main(){
    int numTemps, temp, cnt;
    cnt = 0;
    cin >> numTemps;
    for (int i = 0; i < numTemps; i++){
        cin >> temp;
        if (temp < 0) cnt++;
    }
    cout << cnt << endl;
    return 0;
}
