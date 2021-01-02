#include <iostream>
using namespace std;

class Complex {
private:
	int real;
	int imag;
public:
	Complex(int r, int i):real(r),imag(i){}
	Complex operator +(const Complex &c){
		Complex d(0,0);
		d.real = this->real + c.real;
		d.imag = this->imag + c.imag;
		return d;
	}
	Complex operator +(const int i){
		Complex c(0,0);
		c.real = this->real + i;
		c.imag = this->imag;
		return c;
	}
	friend Complex operator+(const int i, const Complex&c);
	void display(){
		cout << this->real;
        if (this->imag > 0){
            cout << "+" << this->imag << "i";
        } else if(this->imag < 0){
            cout << this->imag << "i";
        }
        cout <<endl;
	}
};
Complex operator+(const int i, const Complex&d){
	Complex c(0,0);
	c.real = i + d.real;
	c.imag = d.imag;
	return c;
}
int main() {
	int real,imag,i;
	cin >> real >> imag;
	Complex c1(real,imag);
	cin >> real >> imag;
	Complex c2(real,imag);
	cin >> i;
	(c1+c2).display();
	(c1+i).display();
	(i+c1).display();
}
