#include <iostream>
using namespace std;

class Vector2d{
private:
	double x;
	double y;
public:
	Vector2d(double x, double y):x(x),y(y){}
	void show(){
		cout << this->x << " " << this->y << endl;
	}
	Vector2d operator +(const Vector2d &v){
		return Vector2d(this->x + v.x, this->y + v.y);
	}

};

int main()
{  double x1,y1,x2,y2;
cin>>x1>>y1 ;
cin>>x2>>y2;
Vector2d d1(x1, y1), d2(x2, y2),d3;
	d3 = d1 + d2; 
	d3.Show(); 
	return 0;
}