#include <iostream>
using namespace std;

int main(){
    int numPeriods;
    float q, period;
    float qaly = 0;
    cin >> numPeriods;
    for (int i = 0; i < numPeriods; i++){
        cin >> q >> period;
        qaly += q*period;
    }

    cout << qaly << endl;
    return 0;
}
