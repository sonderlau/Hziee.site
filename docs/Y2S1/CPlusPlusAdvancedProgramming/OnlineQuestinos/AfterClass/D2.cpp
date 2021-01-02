#include "iostream"
#include "cmath"
#include "iomanip"
#define PI 3.1415926f;
using namespace std;

class Ellipse {
private:
	int x1;
	int x2;
	int y1;
	int y2;
public:
	Ellipse(int x1, int x2, int y1, int y2):x1(x1),x2(x2),y1(y1),y2(y2){}
	int getX1();
	int getX2();
	int getY1();
	int getY2();
	double Area();
};

double Ellipse::Area(){
	double a = abs((x1 - x2) / 2);
	double b = abs((y1 - y2) / 2);
	double result = a* b * 3.141592653 ;
	return result;
}
int Ellipse::getX1(){
	return x1;
}
int Ellipse::getX2(){
	return x2;
}
int Ellipse::getY1(){
	return y1;
}
int Ellipse::getY2(){
	return y2;
}

int main() {
	int x1,x2,y1,y2;
	cin >> x1 >> y1 >> x2 >> y2;
	Ellipse e(x1,x2,y1,y2);
	cout << e.getX1() << " " << e.getY1() << " " <<  e.getX2() << " " << e.getY2() << endl;
	cout << setiosflags(ios::fixed) << setprecision(2) << e.Area() << endl;
}
