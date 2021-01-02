#include <iostream>
using namespace std;
#define discount 0.95;
class Sale {
private:
	int gross;
	static double num;
	static double value;
public:
	Sale(double n, double v){
		num += n;
		double clacValue = n * v ;
		clacValue *= discount;
		if (n > 10) clacValue *= 0.98;
		value += clacValue ;
	}
	static void display(){
		cout << value << endl << value / num ;
	}
};

double Sale::num = 0;
double Sale::value = 0;

int main(){
	double code,num,value;
	while(cin >> code >> num >> value) {
	    Sale s(num,value);
	}
	Sale::display();
	return 0;
}