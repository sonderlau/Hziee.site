# C++ 实践作业报告

**刘柏田 199050418**

## 设计分析

### CPU 类

> 定义 `rank` `frequence` `voltage` 私有变量
>
> 编写`run` `stop` 方法 以及 析构方法

### Computer 类

> 定义 `CDROM` `RAM`内置类 
>
> `cpu` `cdroom` `ram` 私有变量
>
> 编写 `run` `stop`方法

### People 类

> 定义 `int number` `int sex` `Birthday bithday` `string id` 私有变量
>
> 编写参数构造方法 编写复制构造方法
>
> 编写析构函数
>
> 编写变量的`getter`函数
>
> 编写变量的`setter`函数

#### Birthday 类

> 定义 `string` 类型的 `year month day` 三个私有变量 作为 生日的年月日
>
> 编写 `getYear` `getMonth` `getDay` 三个方法返回变量值



## 源代码

### CPU.h

```cpp
#include <iostream>

class CPU
{
private:
	enum rank { P1 = 1, P2, P3, P4, P5, P6, P7 };
	int frequency;
	float voltage;
public:
	void run();
	void stop();
	~CPU() {
		std::cout << "CPU has been destoryed !";
	}
};
void CPU::run()
{
	std::cout << "CPU run!" << std::endl;
}
void CPU::stop()
{
	std::cout << "CPU stop!" << std::endl;
}

```



### Computer.h

```cpp
#include"CPU.h"
class Computer
{
private:
	class CDROM
	{};
	class RAM
	{};
	CPU cpu;
	CDROM cdrom;
	RAM ram;
public:
	void run();
	void stop();
};
void Computer::run()
{
	std::cout << "Computer run!" << std::endl;
}
void Computer::stop()
{
	std::cout << "Computer stop!" << std::endl;
}
```



### People.h

```cpp
#include <string>
#include <iostream>
using namespace std;

class Birthday {
private:
	string year;
	string month;
	string day;
public:
	Birthday(string year, string month, string day) :year(year), month(month), day(day) {}
	string getYear() {
		return year;
	}
	string getMonth() {
		return month;
	}
	string getDay() {
		return day;
	}
};

class People {
private:
	int number;
	int sex;
	Birthday birthday;
	string id;
public:
	People(int number, int sex, Birthday birthday, string id) :number(number), sex(sex), birthday(birthday), id(id){}
	People(People &people) :number(people.getNumber()), sex(people.getSex()), birthday(people.getBirthday()), id(people.getId()) {}
	~People() {
		cout << "一个People 类已经被销毁" << endl;
	}
	inline int getNumber() {
		return number;
	};
	inline int getSex() {
		return sex;
	};
	inline Birthday getBirthday() {
		return birthday;
	};
	inline string getId() {
		return id;
	};
	inline void setNumber(int num) {
		number = num;
	};
	inline void setSex(int s) {
		sex = s;
	};
	inline void setBirthday(Birthday t) {
		birthday = t;
	};
	inline void setId(string i) {
		id = i;
	};
};

```



### main.cpp

```cpp
#include <string>
#include <iostream>
#include "People.h"
#include "CPU.h"
#include "Computer.h"
using namespace std;

int main() {
	// CPU 类测试
	CPU c;
	c.run();
	c.stop();
	
	// Computer 类测试
	Computer com;
	com.run();
	com.stop();

	// People 类测试
		// 新建一个 Birthday 类
	Birthday birth("2000", "1", "2");
	People p(1, 1, birth, "5");
	cout << "People 's data : " << p.getBirthday().getYear() << " " << p.getBirthday().getMonth() << " " << p.getBirthday().getDay()<< " "  <<  p.getId() << " " << p.getNumber() << " " << p.getSex() << " " << endl;;
}
```



### 测试运行代码

![image-20201030211357589](cpp%E6%8A%A5%E5%91%8A.assets/image-20201030211357589.png)