#include "iostream"
#include "cstring"
using namespace std;
class Student {
private:
	int sex;
	char* name;
	unsigned age;
public:
	void setName(char* name);
	void setGender(int g);
	void setAge(unsigned a);
	unsigned getAge() const;
	int getGender() const;
	char* getName();
	void DIYName();
};
void Student:: setName(char* newName){
	name = newName;
}
void Student::setGender(int g){
	sex = g;
}
void Student::setAge(unsigned a){
	age = a;
}
unsigned Student::getAge() const{return age;};
int Student::getGender() const{return sex;};
char* Student::getName(){
	return name;
};
void Student::DIYName(){
	int count = 0;
	for (int i = 0; i < strlen(name); ++i)
	{

		if (name[i] >= 'A' && name[i] <= 'Z' )
		{

			if (count > 0)
			{
				cout << "_";
			}
            count ++;
		}
		cout << name[i];
	}
}

int main(){
	Student stu;
	char* chOne;
    int iSex;
    unsigned iOld;
	chOne=new char[11]; //创建动态字符数组用来存放姓名，指针chOne指向该数组
    cin>>chOne; //输入姓名，存放在chOne所指向的动态字符数组中
    cin>>iSex;  //输入性别，输入1表示性别为“男”，输入0表示性别为“女”
    cin>>iOld;  //输入年龄
    stu.setName(chOne);
    stu.setGender(iSex);
    stu.setAge(iOld);
    cout <<"Zhang_San's name is " << stu.getName()<<endl ;
    cout <<"Zhang_San's gender is " << stu.getGender() << endl;
    cout <<"Zhang_San's age is " << stu.getAge() << endl;
    delete chOne;
    return 0;

}