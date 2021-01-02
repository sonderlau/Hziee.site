#include <iostream>
using namespace std;
class Point
{ private:  int x,y;
 public:  
Point(int x=0, int y=0):x(x),y(y){} 
Point &operator ++();  
friend Point operator ++(Point &p,int);
void print(){cout<<"X="<<x<<",Y="<<y<<endl;} 
};

Point& Point::  operator ++ (){
    x++; y++;
return *this;
}  
Point operator ++(Point &p,int)       
{ Point pt;
  pt.x=p.x;
  pt.y = p.y; 
pt.x++; 
pt.y++;  
 return pt;
}

int main()
{ int m; 
while(cin>>m) 
{ Point p1(m,m),p2(m+1,m+1),p3; (++p1).print(); 
p3 = p2++; 
p3.print(); 
p2.print(); 
} 
return 0;
}