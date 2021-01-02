#include <iostream>
using namespace std;
class Time;
class Date {
private:
	int year;
	int month;
	int day;
	friend class Time;
public:
	Date(int y, int m,int d):year(y),month(m),day(d){}
	friend void display(Date &date,Time &t);
};
class Time {
private:
	int hour;
	int minute;
	int second;
	Date date;
public:
	Time(int h, int m, int s,Date d):hour(h),minute(m),second(s),date(d){}
	friend void display(Date &date,Time &t);
};
void display(Date &date,Time &t){
	cout << date.month << "/" << date.day << "/" << date.year << endl;
	cout << t.hour << ":" << t.minute << ":" << t.second;
}
int main(){
	int year,month,day,hour,minute,second;
	cin >> year >> month >> day ;
	Date d(year,month,day);
	cin >> hour >> minute >> second;
	Time t(hour,minute,second,d);
	display(d,t);
}