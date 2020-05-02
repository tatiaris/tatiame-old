#include <cmath>
#include <iostream>
using namespace std;

string determineSafe(float v0, float theta, float x1, float h1, float h2){
    theta = theta*M_PI/180;
    float t = x1 / (v0 * cos(theta));
    float yPos = v0 * t * sin(theta) - (4.905 * t * t);

    if (h1 > yPos || h2 < yPos) return "Not Safe";
    return "Safe";
}

int main(){
    int numCases;
    float v0, theta, x1, h1, h2;

    cin >> numCases;

    for (int i = 0; i < numCases; i++){
        cin >> v0 >> theta >> x1 >> h1 >> h2;
        cout << determineSafe(v0, theta, x1, h1 + 1, h2 - 1) << endl;
    }

    return 0;
}
