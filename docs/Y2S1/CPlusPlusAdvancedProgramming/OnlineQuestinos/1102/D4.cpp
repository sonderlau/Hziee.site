#include<iostream>
using namespace std;
int Days[13] = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
class data
{
private:
	int y;
	int m;
	int d;
public:
	data(int year = 2000, int month = 1, int day = 1)
	{
		y = year;
		m = month;
		d = day;
	}
	
	void set(int year, int month, int day);
	int isleapyear(int y);
	int days();
	void show();
};
void data::set(int year, int month, int day)
{
	y = year;
	m = month;
	d = day;
}
int data::isleapyear(int y)
{
	if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
		return 1;
	else
		return 0;
}
int data::days()
{
	int f;
	int a = 0;
	f = isleapyear(y);
	if (f ==1)
		Days[2] = 29;
	for (int i = 0; i<m; i++)
	{
		a += Days[i];
	}
	return a + d;
}
void data::show()
{
	cout << "是" << y << "年的第" << days() << "天" << endl;
}
void test(int y, int m, int d)
{
	data data;
	data.set(y, m, d);
	data.isleapyear(y);
	data.show();
}
int main()
{
	data data1;
	int y, m, s;
	while (cin>>y>>m>>s)
	{
		data1.set(y, m, s);
		data1.days();
		data1.show();
 
	}
	return 0;
}