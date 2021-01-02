# 小程序数据库设计

## 个人信息

### PersonalInfo 个人信息

| 列名         | 类型         | 描述                     |
| ------------ | ------------ | ------------------------ |
| openId :key: |              | 微信官方提供的用户唯一id |
| phone        | varchar(255) | 手机号                   |
| name         | varchar(255) | 姓名                     |
| address      | varchar(255) | 地址                     |



## 优惠券

### Coupon 优惠券 [改]

| 列名             | 类型         | 描述           |
| ---------------- | ------------ | -------------- |
| coupon_key :key: | varchar(255) | cdkey          |
| value            | int          | 面额           |
| deadline         | timestamp    | 使用的截止日期 |
| used             | varchar(255) | 是否被使用过   |
| rules_id :link:  | int          | 使用规则的id   |

**备注：**

- `used`字段默认为空
  - 若被激活了 则在`used` 字段填写激活用户的 `openId`
  - 若被使用了 则填写 `-1`



### Coupon_Rules 优惠券使用条件 [增]

| 列名                         | 类型         | 描述              |
| ---------------------------- | ------------ | ----------------- |
| rules_id :link: :arrow_down: | int          | 规则的id值 可重复 |
| type                         | varchar(255) | 使用需满足的类型  |
| value                        | varchar(255) | 值                |
| name                         | varchar(255) | 名称              |



## 拼团

### Grouping 拼团

| 列名                    | 类型      | 描述                                   |
| ----------------------- | --------- | -------------------------------------- |
| g_id :key: :arrow_down: |           |                                        |
| name                    |           | 拼团名                                 |
| m_id :link:             |           | 哪家门店负责承担                       |
| c_id :link:             |           | 商品id                                 |
| membership_max          | int       | 所需要的人数                           |
| cost                    | int       | 每个人需要付费的价格                   |
| deadline                | timestamp | 截止时间                               |
| available               | int       | 是否可用 0 - 不可用  1 - 可用  默认为1 |



### Grouping_Users 参与拼团的用户

| 列名          | 类型 | 描述                     |
| ------------- | ---- | ------------------------ |
| g_id :link:   |      | 拼团信息的id             |
| openId :link: |      | 参与当前拼团的用户openId |



### 事件

#### 过期处理

```mysql
create event Expiry_detection_every_second
on schedule
every 1 second
do 
	update Grouping 
		set available = 0 
		# 截止时间小于当前的系统时间
		where deadline < NOW()
```





#### 对成功拼团的订单处理

```mysql
create trigger Process_for_successful_grouping
	after update Grouping_Users
	for each row
begin
	# 人数是否达到最大值
	if  select count(*) 
		from Grouping g 
        where g.g_id = new.g_id
        = g.membership_max
    then
    	# 拼团信息关闭
		update Grouping g 
			set available = 0 
			where g.g_id = new.g_id
		# 产生订单详情
		insert into Order_Details(c_id) 
			# 物品id 使用默认的amount值 1
			select c_id 
				from Grouping 
				where g_id = new.g_id
		# 产生订单
		insert into Orders(openId, m_id, orderedTime, od_id,status) 
				# 用户的openId 商品id 当前时间 
				# LAST_INSERT_ID() : 上面刚插入的OrderDetails的 od_id 值
				# 1 即 自提商品的默认状态
			values(openId, m_id, NOW(), LAST_INSERT_ID(), 0)
			# m_id 来自拼团信息 Grouping表
			select m_id 
				from Grouping g 
				where g.g_id = new.g_id
            select openId
            # openId 取自所有成功参与当前拼团的用户
            	from Grouping_Users gu
            	where gu.g_id = new.openId
	end if;
end;
```



## 会员

### VIP 会员 [改]

即平台目前已经有的会员

| 列名           | 类型 | 描述                   |
| -------------- | ---- | ---------------------- |
| v_id :key:     |      |                        |
| cost           |      | 一个月价格             |
| name           |      | 名称                   |
| coupon_maximum | int  | 所能持有的优惠券的上限 |



### Members 会员列表

即某个用户是哪个会员

| 列名                | 类型      | 描述     |
| ------------------- | --------- | -------- |
| openId :key: :link: |           | 用户的id |
| v_id :link:         |           | vip类型  |
| deadline            | timestamp | 截止时间 |



## 积分与兑换

### Points 积分

| 列名                | 类型 | 描述     |
| ------------------- | ---- | -------- |
| openId :key: :link: |      | 用户的id |
| value               | int  | 积分值   |
|                     |      |          |

- `value` 字段默认值为 0



### Items 可兑换物品

| 列名                       | 类型         | 描述                |
| -------------------------- | ------------ | ------------------- |
| item_id :key: :arrow_down: |              |                     |
| cost                       | int          | 需要花费的积分      |
| name                       | varchar(255) | 名称                |
| image                      | varchar(255) | 图片地址            |
| available                  | int          | 0 - 不可用 1 - 可用 |

- `availble` 字段默认值为 1



### Redeemed Items 已兑换的物品

| 列名                | 类型      | 描述         |
| ------------------- | --------- | ------------ |
| openId :key: :link: |           | 用户的openId |
| items_id :link:     |           | 兑换物品的id |
| time                | timestamp | 兑换的时间   |



## 订单

### Orders 订单

| 列名                    | 类型         | 描述             |
| ----------------------- | ------------ | ---------------- |
| o_id :key: :arrow_down: |              | 订单号           |
| openId :link:           |              | 订单属于哪个用户 |
| m_id :link:             |              | 门店id           |
| orderedTime             | timestamp    | 下单时间         |
| od_id :link:            |              | 订单详细信息     |
| coupon_key :link:       | varchar(255) | 使用的优惠券key  |
| status :link:           | int          | 当前订单的状态   |



### Order_Details 订单详情 [改]

| 列名                | 类型         | 描述                    |
| ------------------- | ------------ | ----------------------- |
| od_id ​ :arrow_down: |              | 订单详情的id            |
| c_id :link:         |              | 商品的 id               |
| amount              | int          | 购买的数量 默认值为 `1` |
| taste               | varchar(255) | 口味名称                |
| property            | varchar(255) | 属性名称                |

- `od_id` 值可重复
  - 一个订单会有多个商品
  - **注意不要出现一个订单的多个商品的`od_id`不同的情况**



### Status 状态

| 列名            | 类型         | 描述                                                         |
| --------------- | ------------ | ------------------------------------------------------------ |
| status_id :key: | int          |                                                              |
| name            | varchar(255) | 名称                                                         |
| next :link:     |              | 下一个状态 此处连接到下一个状态的 `status_id` 若最后一个状态则**留空** |



> `Status`表在新建之后需要插入默认的数据 语句如下
>
> ```mysql
> insert into Status values(1,"自提商品制作中",3)
> insert into Status values(3,"待提走",200)
> 
> 
> insert into Status values(2,"外卖商品制作中",4)
> insert into Status values(4,"外卖待骑手领取",5)
> insert into Status values(5,"骑手正在前往",200)
> 
> 
> insert into Status(status_id, name) values(200,"订单完成")
> ```
>
> 



## 商品

### Commodities 商品 [改]

| 列名           | 类型 | 描述            |
| -------------- | ---- | --------------- |
| c_id :key:     |      | 商品id值        |
| value          | int  | 价格            |
| name           |      | 名称            |
| image          |      | 图片地址        |
| taste_id:link: | int  | 口味的id 可为空 |
| property_id    | int  | 属性的id 可为空 |



### Tastes 口味 [增]

| 列名     | 类型         | 描述     |
| -------- | ------------ | -------- |
| taste_id | int          | 口味id值 |
| name     | varchar(255) | 名称     |
| value    | decimal(7,2) | 价格     |



### Property 属性 [增]

| 列名        | 类型         | 描述       |
| ----------- | ------------ | ---------- |
| property_id | int          | 属性id值   |
| name        |              | 属性名称   |
| delta       | varchar(255) | 变化的类型 |
| value       | decimal(7,2) | 变化值     |



## 商家

### Merchants 商家

| 列名       | 类型         | 描述   |
| ---------- | ------------ | ------ |
| m_id :key: |              | 商家id |
| username   | varchar(255) |        |
| password   | varchar(255) |        |
| name       |              | 店名   |
| longitutde |              | 经度   |
| latitude   |              | 纬度   |



### Merchant_Products 商家存货 [改]

| 列名         | 类型      | 描述          |
| ------------ | --------- | ------------- |
| m_id :link:  |           | 商家id        |
| c_id :link:  |           | 物品id        |
| amount       | int       | 数量          |
| inbound_date | timestamp | 商品入库日期  |
| shelf_life   | int       | 保质期 (天数) |

