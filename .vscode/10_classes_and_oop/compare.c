#include <stdio.h>

int main() {
    int a, b, c;

    // Taking input from user
    printf("Enter value of a: ");
    scanf("%d", &a);
    printf("Enter value of b: ");
    scanf("%d", &b);
    printf("Enter value of c: ");
    scanf("%d", &c);

    // Checking conditions
    if (a > b && b > c) {
    printf("a is greater than b and b is greater than c\n");
    } else {
    printf("Condition not satisfied\n");
    }

    return 0;
}
