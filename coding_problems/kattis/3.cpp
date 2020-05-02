#include <cmath>
#include <iostream>
using namespace std;

int main(){
    int n, days, printers;
    printers = 1;
    days = 0;
    cin >> n;

    while (n > 0){
        while (printers < round(n/2)){
            printers *= 2;
            days++;
        }
        n -= printers;
        days++;
    }

    cout << days << endl;

    return 0;
}
