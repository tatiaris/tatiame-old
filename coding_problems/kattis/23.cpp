#include <vector>
#include <iostream>

using namespace std;

vector<string > combos;

void generateCombos(char set[], string prefix, int n, int k){
    if (k == 0) {
        combos.push_back(prefix);
    }
    else {
        for (int i = 0; i < n; i++) {
            generateCombos(set, prefix + set[i], n, k - 1);
        }
    }
}

int getSol(int m, int n, char op){
    if (op == '*') return m*n;
    else if (op == '/'){
        if (n == 0) return -99999;
        return m/n;
    }
    else if (op == '+') return m + n;
    else return m - n;
}

bool checkEquation(string eq, int target){
    vector<int > nums;
    for (int i = 0; i < 4; i++) nums.push_back(4);
    for (int i = 2; i > -1; i--){
        if (eq.at(i) == '*' || eq.at(i) == '/'){
            nums[i] = getSol(nums[i], nums[i + 1], eq.at(i));
            if (nums[i] == -99999) return false;
            nums.erase(nums.begin() + i + 1);
            eq.erase(eq.begin() + i);
        }
    }

    while (eq.length() > 0){
        nums[0] = getSol(nums[0], nums[1], eq.at(0));
        nums.erase(nums.begin() + 1);
        eq.erase(eq.begin() + 0);
    }

    if (nums[0] == target) return true;
    return false;
}

string findEquation(int t){
    int s = combos.size();
    for (int i = 0; i < s - 2; i++){
        if (checkEquation(combos[i], t))
            return combos[i];
    }

    return "no solution";
}



void printEquation(string eq, int target){
    if (eq == "no solution") cout << eq << endl;
    else {
        for (int i = 0; i < eq.length(); i++){
            cout << "4 " << eq.substr(i, 1) << " ";
        }
        cout << "4 = " << target << endl;
    }
}

int main(){
    int numProblems, target;

    cin >> numProblems;

    char set1[] = {'*', '+', '-', '/'};

    generateCombos(set1, "", 4, 3);

    for (int i = 0; i < numProblems; i++){
        cin >> target;
        printEquation(findEquation(target), target);
    }

    return 0;
}
