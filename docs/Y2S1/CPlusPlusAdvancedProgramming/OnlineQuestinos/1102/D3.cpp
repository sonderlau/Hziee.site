#include <iostream>
#include <math.h>
using namespace std;
class Point {
private:
	double x;
	double y;
public:
	Point():x(0),y(0){}
	Point(double x,double y):x(x),y(y){}
	void Show();
	friend double distance(const Point &p1, const Point &p2);
};

void Point::Show(){
	cout << "(" << x << "," << y << ")" <<endl;
}

double distance(const Point &p1, const Point &p2){
	return sqrt(pow(p1.x - p2.x,2)+pow(p1.y - p2.y,2));
}

int main()
{
   Point a;
   Point b(3,4);
   a.Show(); 
   b.Show();
   cout << distance(a,b);
   return 0;
}