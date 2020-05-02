#include <iostream>
using namespace std;

int main() {
    int l, d, x, n, m, sum, temp;
    cin >> l >> d >> x;
    for (size_t i = l; i < d + 1; i++) {
        temp = i;
        sum = temp%10;
        temp /= 10;
        while (temp != 0) {
            sum += temp%10;
            temp /= 10;
        }
        if (sum == x) {
            n = i;
            break;
        }
    }
    for (size_t i = d; i > l - 1; i--) {
        temp = i;
        sum = temp%10;
        temp /= 10;
        while (temp != 0) {
            sum += temp%10;
            temp /= 10;
        }
        if (sum == x) {
            m = i;
            break;
        }
    }
    cout << n << endl << m << endl;
    return 0;
}
