#include "iostream"
using namespace std;

class Rectangle {
private:
	int length;
	int width;
public:
	Rectangle(int length, int width): length(length), width(width){}
	int perimeter();
	int area();
};

int Rectangle::perimeter(){
	return length*2 + width*2;
}
int Rectangle::area(){
	return length*width;
}

int main () {
	int length, width;
	cin >> width >> length;
	Rectangle rec(width, length);
	cout << rec.area() << endl;
	cout << rec.perimeter();
}