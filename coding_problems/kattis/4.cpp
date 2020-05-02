#include <iostream>
using namespace std;

int main(){
    string name;
    cin >> name;
    cout << name.substr(0, 1);
    for (int i = 1; i < name.size(); i++)
        if (name.substr(i, 1) != name.substr(i - 1, 1))
            cout << name.substr(i, 1);
    cout << endl;
    return 0;
}
