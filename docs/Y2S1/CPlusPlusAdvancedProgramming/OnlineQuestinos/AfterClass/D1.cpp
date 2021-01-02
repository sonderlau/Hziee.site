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
	Ellipse(const Ellipse &e):x1(e.getX1()), x2(e.getX2()),y1(e.getY1()),y2(e.getY2()){}
	~Ellipse(){
		cout <<  "xigou" << " " << x1 << " " << y1 << endl;
	}
	int getX1() const;
	int getX2() const;
	int getY1() const;
	int getY2() const;
	void Show();
	void Fun(int y);
	double Area();
};

void Ellipse::Show(){
	cout << x1 << " " << y1 << " " <<  x2 << " " << y2 << endl;
}

void Ellipse::Fun(int y){
	y1 += y;
	y2 -= y;
}

double Ellipse::Area(){
	double a = abs((x1 - x2) / 2);
	double b = abs((y1 - y2) / 2);
	double result = a* b * 3.141592653 ;
	return result;
}
int Ellipse::getX1() const{
	return x1;
}
int Ellipse::getX2() const{
	return x2;
}
int Ellipse::getY1() const{
	return y1;
}
int Ellipse::getY2() const{
	return y2;
}

int main() {
	int x1,x2,y1,y2;
	int move;
	cin >> x1 >> y1 >> x2 >> y2;
	
	Ellipse e(x1,x2,y1,y2);
	Ellipse e1(e);
	

	e.Show();
	e1.Show();

	cout << setiosflags(ios::fixed) << setprecision(2) << e.Area() << endl;
	cout << setiosflags(ios::fixed) << setprecision(2) << e1.Area() << endl;

	cin >> move;
	e1.Fun(move);
	
	cout << setiosflags(ios::fixed) << setprecision(2) << e1.Area() << endl;
	
	
}
	