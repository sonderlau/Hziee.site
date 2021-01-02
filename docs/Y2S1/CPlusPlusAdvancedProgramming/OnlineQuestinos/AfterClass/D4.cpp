#include "iostream"
#include "cmath"
using namespace std;
class Line
{
public:
	Line(double x, double y): x(x), y(y){
	}
	double calcDistance(Line *line);
	double getX();
	double getY();

private:
	double x;
	double y;
	
};

class Distance {
private:
	Line *line1;
	Line *line2;
public:
	Distance(Line &line1, Line &line2):line1(&line1),line2(&line2){}
	double calc();
};

double Line::getY(){
	return y;
}

double Line::getX(){
	return x;
}

double Distance::calc(){
	return sqrt(pow(line1->getX() - line2->getX(), 2) + pow(line1->getY() - line2->getY() , 2));

}


int main(){
	double x1,x2,y1,y2;
	cin >> x1 >> y1;
	Line l1(x1,y1);
	cin >> x2 >> y2;
	Line l2(x2,y2);
	Distance d(l1,l2);
	cout << d.calc() << endl;
	return 0;
}