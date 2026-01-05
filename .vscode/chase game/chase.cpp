#include <iostream>
#include <conio.h>   // for _getch()
#include <windows.h> // for Sleep()

using namespace std;

const int WIDTH = 20;
const int HEIGHT = 10;

int playerX = WIDTH / 2;
int playerY = HEIGHT / 2;
int enemyX = 0;
int enemyY = 0;
bool gameOver = false;

void drawBoard() {
    system("cls"); // clear screen

    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            if (x == playerX && y == playerY)
                cout << "P"; // Player
            else if (x == enemyX && y == enemyY)
                cout << "E"; // Enemy
            else
                cout << ".";
        }
        cout << endl;
    }
}

void input() {
    if (_kbhit()) { // if key pressed
        switch (_getch()) {
            case 'w': playerY--; break;
            case 's': playerY++; break;
            case 'a': playerX--; break;
            case 'd': playerX++; break;
            case 'q': gameOver = true; break; // quit
        }
    }

    // keep player inside boundaries
    if (playerX < 0) playerX = 0;
    if (playerX >= WIDTH) playerX = WIDTH - 1;
    if (playerY < 0) playerY = 0;
    if (playerY >= HEIGHT) playerY = HEIGHT - 1;
}

void logic() {
    // Enemy chases player
    if (enemyX < playerX) enemyX++;
    else if (enemyX > playerX) enemyX--;

    if (enemyY < playerY) enemyY++;
    else if (enemyY > playerY) enemyY--;

    // If caught
    if (enemyX == playerX && enemyY == playerY) {
        gameOver = true;
        cout << "\n💀 You got caught by the enemy! Game Over.\n";
    }
}

int main() {
    cout << "=== Simple Chase Game ===\n";
    cout << "Controls: W = up, S = down, A = left, D = right, Q = quit\n";
    cout << "Press any key to start...\n";
    _getch();

    while (!gameOver) {
        drawBoard();
        input();
        logic();
        Sleep(200); // control speed (ms)
    }

    return 0;
}
