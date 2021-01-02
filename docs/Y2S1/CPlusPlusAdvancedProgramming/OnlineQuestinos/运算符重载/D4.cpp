#include <iostream>
using namespace std;
class Point {
private:
	int x;
	int y;
public:
	Point operator++(){
		x++;
		y++;
		return *this;
	}
	Point operator+(const Point &p){
		return Point(this->x + p.x , this->y + p.y);
	}
	Point(int x = 0,int y =0):x(x),y(y){}
	friend Point operator--(Point&,int);	
	friend Point operator-(Point,Point);
	friend ostream& operator<<(ostream &,Point p);
	void display(){
		cout << "坐标为：(" << this->x << "," << this->y << ")";
	}
};

ostream& operator << (ostream &os, Point p){
    return os << "坐标为：(" << p.x << "," << p.y << ")";
}

Point operator --( Point& p1, int i){
    Point temp(p1.x,p1.y);
	p1.x --;
	p1.y --;
	return temp;
}
Point operator - (Point p1, Point p2){
	return Point(p1.x - p2.x , p1.y - p2.y);
}

int main() {
	int x,y;
	cin >> x >> y;
	Point p1(x,y);
	cin >> x >> y;
	Point p2(x,y);

	cout << "p=++p1后,p的" ;
    ( ++p1).display() ; 
    cout << ",p1";
    p1.display();
    cout << endl;

	cout << "p=p2--后,p的" ;
    (p2--).display();
    cout << ",p2" ;
    p2.display();
    cout << endl;

	cout << "p=p1+p2后,p的" ;
    (p1+p2).display();
    cout << endl;

	cout << "p=p1-p2后,p的";
    (p1-p2).display();
    cout << endl;
}
