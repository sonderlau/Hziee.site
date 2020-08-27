# 实践作业答案文档

---

[实践作业需求和要求](https://hzieefiles-1300064754.cos.ap-shanghai.myqcloud.com/Y1S2/DatabaseTheory/线路系统数据库设计.pdf)

::: details 建表代码

```sql
create table G_ROUTETYPE
(
  OUTETYPE number(5) not null
    constraint G_ROUTETYPE_PK
      primary key ,
  ROUTETYPENAME varchar2(20),
  ROUTETYPEENO varchar2(10)
)
/

comment on table G_ROUTETYPE is '线路类别表'
/

comment on column G_ROUTETYPE.ROUTETYPE is 'pk'
/

comment on column G_ROUTETYPE.ROUTETYPENAME is '线路类别名称'
/

comment on column G_ROUTETYPE.ROUTETYPEENO is '线路类别字母代号'
/

create table G_ROUTENUM
(
  ROUTENUM varchar2(14) not null
        constraint G_ROUTENUM_PK
            primary key ,
  ROUTENAME VARCHAR2(50),
  ROUTETYPE NUMBER(5),
  ROUTESEQ NUMBER(5),
  FICNUM VARCHAR2(6),
  INCOMCOEF NUMBER(3,2) default 1,
  ROUTEFEE NUMBER(4,2) default 01,
  MILEPERCIRCLE NUMBER(6,2),
  ROUTEBUSTYPE VARCHAR2(2)
)
/

comment on table G_ROUTENUM is '线路表'
/

comment on column G_ROUTENUM.ROUTENUM is '线路代号'
/

comment on column G_ROUTENUM.ROUTENAME is '线路名称'
/

comment on column G_ROUTENUM.ROUTETYPE is '线路类别'
/

comment on column G_ROUTENUM.ROUTESEQ is '线路类别序号'
/

comment on column G_ROUTENUM.FICNUM is 'IC卡系统编号'
/

comment on column G_ROUTENUM.INCOMCOEF is '1.03'
/

comment on column G_ROUTENUM.ROUTEFEE is '线路票价'
/

comment on column G_ROUTENUM.MILEPERCIRCLE is '单圈营运里程数'
/

comment on column G_ROUTENUM.ROUTEBUSTYPE is '线路车辆类型'
/

create table G_UNITNUM
(
  UNITNUM VARCHAR2(14) not null
    constraint G_UNITNUM_PK
      primary key ,
  UNINAME VARCHAR2(64),
  RESPEMPLNUM VARCHAR2(10),
  SYMBOL VARCHAR2(1),
  MAINTTYPENUM NUMBER(2),
  QUERYTYPE NUMBER(2),
  PARENTNUM VARCHAR2(14)
)
/

comment on table G_UNITNUM is '单位基本情况表'
/

comment on column G_UNITNUM.UNITNUM is '单位代号'
/

comment on column G_UNITNUM.UNINAME is '单位名称'
/

comment on column G_UNITNUM.RESPEMPLNUM is '负责人工号'
/

comment on column G_UNITNUM.SYMBOL is '标志'
/

comment on column G_UNITNUM.MAINTTYPENUM is '维修护理类别'
/

comment on column G_UNITNUM.QUERYTYPE is '单位查询类别'
/

comment on column G_UNITNUM.PARENTNUM is '父单位节点编号'
/




-- 联合主键

create table G_DICINFO
(
  DICNAME VARCHAR2(20) not null,
  CODE VARCHAR2(20) not null,
  VALUE VARCHAR2(40),
  INVALID NUMBER(1) not null,
  PARAM VARCHAR2(50)
)
/

comment on table G_DICINFO is '字典表'
/

comment on column G_DICINFO.DICNAME is '字典名称'
/

comment on column G_DICINFO.CODE is '条目代码'
/

comment on column G_DICINFO.VALUE is '条目值'
/

comment on column G_DICINFO.INVALID is '有效性 : 1 无效 0 有效'
/

comment on column G_DICINFO.PARAM is '额外参数'
/

ALTER TABLE G_DICINFO add constraint G_DICINFO_PK primary key (DICNAME,CODE);
```

:::

::: 删除

```sql
delete G_ROUTETYPE
where ROUTETYPE = 1;

delete G_ROUTENUM
where ROUTENUM = 1;


---------------------------------


delete
from G_UNITNUM
where PARENTNUM = '0201';


----------------------------------


delete
from G_UNITNUM
where UNITNUM = '1';
```

:::

::: details 插入数据

```sql
insert all
into G_ROUTETYPE values (1,'普通','P') into G_ROUTETYPE values (2,'空调','K')
into G_ROUTETYPE values (3,'游车','Y') into G_ROUTETYPE values (4,'校车','X')
into G_ROUTETYPE values (5,'假日','JR') into G_ROUTETYPE values (6,'假夜','JY')
into G_ROUTETYPE values (7,'假夜空调','JYK') into G_ROUTETYPE values (8,'其他','QT') select 1 from DUAL;


insert all
into G_ROUTENUM(ROUTENAME,ROUTETYPE,ROUTESEQ,FICNUM,ROUTENUM,ROUTEBUSTYPE) values ('13',1,13,'13','020113','1')
into G_ROUTENUM(ROUTENAME,ROUTETYPE,ROUTESEQ,FICNUM,ROUTENUM,ROUTEBUSTYPE) values ('K13',2,13,'2013','02012013','1')
into G_ROUTENUM(ROUTENAME,ROUTETYPE,ROUTESEQ,FICNUM,ROUTENUM,ROUTEBUSTYPE) values ('K20',2,20,'2020','02012020','1')
into G_ROUTENUM(ROUTENAME,ROUTETYPE,ROUTESEQ,FICNUM,ROUTENUM,ROUTEBUSTYPE) values ('20',1,20,'20','020120','1')
select 1 from dual;


insert all
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('00','公交总公司','1','00000000')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('0001','七堡工段','2','00')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('01','第一汽车修理分公司','1','00')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('02','汽车二公司','1','00')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('0201','二公司一车队','4','02')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('020113','13','6','0201')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('020120','20','6','0201')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('02012013','K13','6','0201')
into G_UNITNUM(UNITNUM,UNINAME,SYMBOL,PARENTNUM) values ('02012020','K20','6','0201')
select 1 from DUAL;


insert all
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('UNITTYPE','1','公司','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('UNITTYPE','2','工段','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('UNITTYPE','3','班组','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('UNITTYPE','4','车队','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('UNITTYPE','5','部门','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('UNITTYPE','6','线路','0')

into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('ROUTEBUSTYPE','0','大公共','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('ROUTEBUSTYPE','1','小公共','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('VALIDTYPE','1','无效','0')
into G_DICINFO(DICNAME,CODE,VALUE,INVALID) VALUES ('VALIDTYPE','0','有效','0')
select 1 from DUAL;
```

:::

::: details 查询

```sql
select a.ROUTENAME 线路名称,
       b.ROUTETYPENAME 线路类别,
       c2.UNINAME 所属单位,
       c1.UNINAME 所属车队,
       d.VALUE 线路车辆类型
  from G_ROUTENUM a,
       g_Routetype b,
       g_Unitnum c1,
       g_Unitnum c2,
       g_dicinfo d
 where a.routetype = b.routetype
   and substr(a.routenum, 1, 4) = c1.unitnum
   and substr(a.routenum, 1, 2) = c2.unitnum
   and a.routebustype = d.code
   and d.dicname = 'ROUTEBUSTYPE'
;


select a.ROUTENAME,
       b.ROUTETYPENAME,
       c3.UNINAME,
       c2.UNINAME,
       d.VALUE
  from G_ROUTENUM  a,
       g_Routetype b,
       g_Unitnum   c1,
       g_Unitnum   c2,
       g_unitnum   c3,
       g_dicinfo   d
 where a.routenum = c1.unitnum
   and a.routetype = b.routetype
   and c1.parentnum = c2.unitnum
   and c2.parentnum = c3.unitnum
   and a.routebustype = d.code
   and d.dicname = 'ROUTEBUSTYPE'
;
```

:::
