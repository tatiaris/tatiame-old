#include <iostream>

using namespace std;

int main(){
    int t, g, c, score;
    t=0;g=0;c=0;

    string hand;

    cin >> hand;

    for (int i = 0; i < hand.length(); i++){
        if (hand.at(i) == 'T') t++;
        else if (hand.at(i) == 'G') g++;
        else c++;
    }

    if (t <= g && t <= c) score = t*7 + t*t + g*g + c*c;
    else if (g <= t && g <= c) score = g*7 + t*t + g*g + c*c;
    else score = c*7 + t*t + g*g + c*c;

    cout << score << endl;

    return 0;
}
