#include <iostream>
#include <numeric>

using namespace std;

int main()
{
    int arr[5];
    iota(arr, arr + 5, 1);
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}