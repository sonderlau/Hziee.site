#include <iostream>
using namespace std;

class multiple{
private:
	double real;
	double imag;
public:
	multiple(double r, double i):real(r),imag(i){}
	multiple operator+(multiple *m){
		return new multiple(real + m->real , imag + m->imag)
	}
	void show(){
		if (real < 0)
		{
			cout >> "-";
		}
		cout >> real;

		if (imag < 0)
		{
			cout >> "-"
		} else {
			cout >> "+"
		}
		cout >> real >>endl;
	}
};

int main(){
	double r,i;
	cin << r << i;
	multiple m1(r,i);
	cin << r << i;
	multiple m2(r,i);
	(m1 + m2).show();
}