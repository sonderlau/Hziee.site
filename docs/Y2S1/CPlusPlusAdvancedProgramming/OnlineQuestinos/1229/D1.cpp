#include <iostream>
#include <string>
using namespace std;

class vehicle{
public:
	virtual void display();
};
class car:public vehicle {
public:
	void display(){
		cout << "奔驰" << endl;
	}
};
class truck:public vehicle{
public:
	void display(){
		cout << "运输卡车" << endl;
	}
};
class boat:public vehicle{
public:
	void display(){
		cout << "游艇" << endl;
	}
};

void fun(vehicle * v){
	v->display();
}

int main(){
	string name;
	char type;
	while(cin >> type >> name ) {
	    switch (type){
	    	case 'C':{
	    		car c;
	    		fun(&c);
	    		break;
	    	}
	    		
    		case 'T':{
    			truck t;
    			fun(&t);
    			break;
    		}
    			
			case 'B':{
				boat b;
				fun(&b);
			}
				
	    }
	}
	return 0;
}