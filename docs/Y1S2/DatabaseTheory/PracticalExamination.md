# 实践考试备考指南

> 以下是书上例题的解答过程
>
> 实践考试即是对以下内容进行小部分的修改之后的一次考试

::: details 建表与初始数据

```sql
-- 建表
create table Student
(
    no char(7) primary key ,
    Sname varchar(20) not null ,
    Ssex char(2) not null ,
    Sage smallint ,
    Clno char(5) not null
);

create table Course
(
    Cno char(1) primary key ,
    Cname varchar(20) not null ,
    Credit numeric
);

create table Class
(
    Clno char(5) primary key ,
    Speciality varchar(20) not null ,
    Inyear char(4) not null ,
    "NUMBER" INTEGER ,
    Monitor char(7)
);



create table Grade
(
  Sno char(7) not null references student(Sno),
  Cno char(1) not null references course(Cno),
  Gmark numeric,
  primary key (Sno,Cno)
);


-- -----------------------------------------------------------------------------------

-- 插入信息部分
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2000101','李勇','男',20,'00311');
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2000102','刘诗晨','女',19,'00311');
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2000103','王一鸣','男',20,'00312');
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2000104','张婷婷','女',21,'00312');
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2001101','李勇敏','女',19,'01311');
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2001102','贾向东','男',22,'01311');
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2001103','陈宝玉','男',20,'01311');
INSERT INTO Student(Sno,Sname,Ssex,Sage,Clno) VALUES('2001104','张逸凡','男',21,'01311');


INSERT INTO Course(Cno,Cname,Credit) VALUES('1','数据库','4');
INSERT INTO Course(Cno,Cname,Credit) VALUES('2','离散数学','3');
INSERT INTO Course(Cno,Cname,Credit) VALUES('3','管理信息系统','2');
INSERT INTO Course(Cno,Cname,Credit) VALUES('4','操作系统','4');
INSERT INTO Course(Cno,Cname,Credit) VALUES('5','数据结构','4');
INSERT INTO Course(Cno,Cname,Credit) VALUES('6','数据处理','2');
INSERT INTO Course(Cno,Cname,Credit) VALUES('7','C语言','4');


INSERT INTO class(clno,speciality,inyear, "NUMBER",monitor)
    VALUES('00311','计算机软件','2000',120,'2000101');

INSERT INTO class(clno,speciality,inyear, "NUMBER",monitor)
    VALUES('00312','计算机应用件','2000',140,'2000103');

INSERT INTO class(clno,speciality,inyear, "NUMBER",monitor)
    VALUES('01311','计算机软件','2001',220,'2001103');


INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000101','1',92);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000101','3',NULL);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000101','5',86);

INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000102','1',78);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000102','6',55);

INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000103','3',65);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000103','6',78);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000103','5',66);

INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000104','1',54);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2000104','6',83);

INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001101','2',70);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001101','4',65);

INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001102','2',80);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001102','4',null);

INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001103','1',83);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001103','2',76);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001103','4',56);
INSERT INTO Grade(Sno,Cno,Gmark) VALUES('2001103','7',88);

```

:::

::: details 题目解答

## P83_11

```sql
-- -----------------------------------------------------------------------------------

-- 11


-- (1) 增加属性 Nation Varchar(20)
alter table Student add Nation varchar(20);
-- (2) 删除新增的属性
alter table Student drop column Nation;
-- (3) 插入记录
insert into Grade(sno, cno, gmark) VALUES ('2001110','3',80);
    -- 此时会报错 不能添加新数据 因为有完整性约束的缘故
-- (4) 修改学号为指定学号的学生的成绩
update grade set Gmark = 70 where Sno = '2001110';
-- (5) 删除学号为指定学号的学生的成绩记录
delete from grade where Sno = '2001110';
-- (6) 在学生表的 Clno 属性上创建 ix_class 的索引 班级号升序排列
create index ix_class
on Student(Clno asc );
-- (7) 删除索引
drop index Student.ix_class;
```

## P83_12

```sql
-- -----------------------------------------------------------------------------------

-- 12


-- (1) 找出所有被学生选修了的课程号
-- 不重复
select distinct Cno
from grade;

-- (2) 找出 01311班 女 学生的个人信息
select *
from student
where Clno = '01311'
  and Ssex =  '女';

-- (3) 找出 01311 01312班 的学生姓名 性别 出生年份
select Sname, Ssex, 2020 - Sage as birth
from student
where Clno = '01311'
   or Clno = '01312';

-- (4) 找出所有姓李的学生的信息
select *
from student
where Sname like '李%';

-- (5) 找出李勇所在班级的学生人数
select count(*)
from Student
where Clno in
      (select Clno
       from student
       where Sname = '李勇');

-- (6) 找出 操作系统 课程的平均成绩 最高分 最低分
select min(Gmark), avg(Gmark), max(Gmark)
from grade,
     course
where Course.Cname = '操作系统'
  and Course.Cno = Grade.Cno;

-- (7) 选修了课程的学生人数
select count(distinct Sno)
from grade;

-- (8) 找出选修了 操作系统 课程的学生人数
select count(*)
from grade,
     course
where course.Cname = '操作系统'
  and course.Cno = grade.Cno;

-- (9) 找出 2000 级 计算机软件班的成绩为空的学生姓名
select Sname
from student
where Clno in (
    select Clno
    from class
    where Inyear = '2000'
      and Speciality = '计算机软件'
      and Student.Sno in (
        select Sno
        from grade
        where Gmark is null
    )
);
```

## P83_13

```sql
--------------------------------------------------------------------------------------

--  13


-- (1) 找出与李勇在同一个班级的学生信息
select *
from student s1,
     student s2
where s2.Sname = '李勇'
  and s1.Clno = s2.Clno;
-- (2) 找出所有与学生李勇有相同选修课程的学生信息
select *
from student
where sno in (
    select sno
    from grade
    where Cno in (
        select cno
        from grade,
             student
        where student.Sno = Grade.Sno
          and Student.Sname = '李勇'
    )
)
  and Sname != '李勇';

-- (3)
select *
from student
where sage between (select Sage from student where Sname = '李勇') and 25;

-- (4)
    -- 与标准答案不太一样 这里我排除了成绩为空的学生 我觉得这样不算选修成功
select Sno, Sname
from student
where Sno in (
    select sno
    from grade,
         course
    where course.Cname = '操作系统'
      and grade.cno = Course.Cno
      and Grade.Gmark is not null
);



-- (5) 找出没有选修 1号课程的所有学生姓名
select Sname
from student
where sno not in (
    select sno
    from grade
    where Cno = '1'
);


-- (6) 找出选修了全部课程的学生姓名
select Sname
from student
where (
          select count(cno)
          from grade
          group by Grade.Sno
      ) =
      (
          select count(*)
          from course
      );
```

## P83_14

```sql
------------------------------------------------------------------

-- 14

-- (1) 查询选修了 3号课程的学生 学号及其成绩 并按成绩降序排列
select Sno, Gmark
from Grade
where Cno = '3'
order by Gmark desc;

-- (2) 查询全体学生信息 要求查询结果按班级号升序排列 同一班级学生按年龄降序排列
select *
from student
order by Clno asc, Sage desc;

-- (3) 求每个课程号及对应的选课人数
select Cno, count(Sno) as "选课人数"
from grade
group by Cno;

-- (4) 查询选修了 3门 以上课程的学生学号
select Sno
from grade
group by Sno
having count(Cno) > 3;
```

## P83_15

```sql
----------------------------------------------------------------------

-- 15

-- (1) 将 01311 班全体学生成绩置 0
update grade
set Gmark = 0
where Sno in
      (
          select Sno
          from student
          where Clno = '01311'
      );

-- (2) 删除 2001 级 计算机软件的全体学生的选课记录
delete
from grade
where Sno in
      (
          select Sno
          from Student
          where Clno = '01311'
);


-- (3) 在数据库中删除李勇有关的记录
        -- 删除顺序  :  Grade -> class -> Student

delete
from grade
where Sno in
      (
          select sno
          from student
          where Sname = '李勇'
      );


update class
set "NUMBER" = "NUMBER" - 1
where clno in
      (
          select clno
          from student
          where Sname = '李勇'
      );


delete
from student
where Sname = '李勇';



-- (4) 对每个班 求学生的平均年龄 存入数据库
create table average
(
    clno    char(5),
    average smallint
);

insert into average
select clno, avg(sage)
from student
group by clno;
```

## P83_16

```sql
----------------------------------------------------------------------

-- 16

-- (1) 建立 01311 班 选修了 1号 课程的学生视图 Stu_01311_1
create view Stu_01311_1
as
select *
from Student
where Student.Sno in (
    select Sno
    from Grade
    where Grade.Cno = '1'

) and Student.Clno = '00312';


-- (2) 建立 01311 班 选修了 1号课程 且成绩不及格的学生视图 Stu_01311_2
create view Stu_01311_2
as
select *
from Student
where Student.Sno in (
    select Sno
    from Grade
    where Grade.Cno = '1'
      and Grade.Gmark < 60)
  and Student.Clno = '00312';


-- (3) 建立视图 Stu_year 由 学生学号 姓名 出生年份组成
create view Stu_year
as
select Sno, Sname, 2020-Sage birthyear
from Student;

-- (4) 查询 1990 年以后出生的学生姓名
select Sname
from Stu_year
where birthyear > 1990

-- (5) 查询 01311 班 选修了 1号课程 并且成绩不及格的学生的 学生 姓名 出生年份
select Sname,2020-Sage
from Stu_01311_2;
```

## P102_10

```sql
----------------------------------------------------------------------

--  P102 10

Create table student
(
    Sno   char(7) primary key,
    Sname varchar(20)         not null,
    Ssex  char(2) default '男' not null check (Ssex in ('男', '女')),
    Sage  smallint check (sage < 65 and sage > 14),
    Clno  char(5)             not null
)

------------------------------

alter table Course add primary key(Cno);

alter table Course add constraint PK_course primary key (Cno);

alter table Course add constraint check_credit check ( Credit in (1,2,3,4,5,6) );

------------------------------

alter table Class add primary key (Clno);

alter table class add check ( "NUMBER" > 1 and "NUMBER" <100 );

alter table class add foreign key (Monitor) references Student(Sno);

------------------------------

alter table student add foreign key (Clno) references Class(Clno);

------------------------------

alter table Grade add primary key (Sno,Cno);

alter table Grade add foreign key (Cno) references Course(Cno);

alter table Grade add constraint check_mark check ( Gmark >= 0 and Gmark <= 100 );
```

:::
