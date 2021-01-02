# 小程序 API 文档

## Base URL

## 端口

- product开头8002
- member开头8001
- users开头8003



## 状态信息

以下所有的接口 均需要返回是否成功

### 成功

- `errorCode` 设为 `200`

### 失败

- `errorCode` 设为非 `200` 的值
- `errorMessage` 中填写错误的信息



## 登录

### 微信登录

**简要描述：**

- 用户登录接口

**请求地址：**

完成

- `users/user/login`

**请求方式：**

- POST

**参数**

| 参数名 | 必选 | 类型   | 说明       |
| ------ | ---- | ------ | ---------- |
| code   | 是   | string | 登录的code |

**返回示例：**

```json
{
    openId: "1231asnal123njk"
}
```

**返回参数说明**

| 参数名 | 类型   | 说明                 |
| ------ | ------ | -------------------- |
| openId | string | 微信官方的用户唯一id |

**备注：**

- 



## 个人信息

### 获取个人信息

**简要描述：**

- 获取个人的信息

**请求地址：**

完成

- `users/user/PersonalInfo`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型   | 说明 |
| ------ | ---- | ------ | ---- |
| openId | 是   | string |      |

**返回示例：**

```json
{
    phone: "1555555",
    name: "帅得不行",
    address: "帅",
    firstTime: false
}
```

**返回参数说明**

| 参数名    | 类型    | 说明       |
| --------- | ------- | ---------- |
| phone     | string  | 手机号     |
| name      | string  | 姓名       |
| address   | string  | 地址       |
| firstTime | boolean | 是否为首次 |

**备注：**

- 若用户第一次登录 个人信息为空  则返回`firstTime`为`true` 其余则为`false`
- 若用户的某项数据值为空 则返回空值即可 **但一定要返回字段**





### 更新个人信息

**简要描述：**

- 更新个人信息的内容

**请求地址：**

完成

RequestBody

![image-20201215165902110](API.assets/image-20201215165902110.png)

- `users/user/PersonalInfo/patch/`

**请求方式：**

- PATCH

**参数：**

| 参数名 | 必选 | 类型   | 说明           |
| ------ | ---- | ------ | -------------- |
| openId | 是   | string |                |
| value  | 是   | string | 更新的数据的值 |

**备注：**

- `param` 为需要更新的个人信息的字段名
  - 可选值为 `phone` `name` `address`



## 优惠券

### 查询拥有的优惠券 [改]

**简要描述：**

- 查询当前用户所持有的优惠券 包括已经过期的

**请求地址：**

完成

- `users/coupon/coupon/get`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型   | 说明 |
| ------ | ---- | ------ | ---- |
| openId | 是   | string |      |

**返回示例：**

```json
{
    available:[
        {
            coupon_key: "cdkeyhere",
            value: 100,
            deadline: "2020-12-10 11:43:11.000000",
            rules: [
                {
                    type: "merchant",
                    value: "2",
                    name: "青山湖店"
                }
            ]
        }
    ],
    disable: [
        {
            coupon_key: "cdkeyhere",
            value: 100,
            deadline: "2020-11-10 11:43:11.000000",
            rules: [
                {
                    type: "value",
                    value: "20",
                    name: ""
                }
            ]
        }
    ]
}
```

**返回参数说明**

| 参数名             | 类型   | 说明              |
| ------------------ | ------ | ----------------- |
| availble / disable | Array  | 有效 / 无效的数组 |
| coupon_key         | string | cdkey值           |
| value              | int    | 面值              |
| dealine            | string | timestamp转string |
| rules              | Array  | 规则数组          |

**备注：**

- 即便优惠券的个数为 0 `availble` `disable` 两个数组字段也需要写



### 激活优惠券 [改]

**简要描述：**

- 将某个未使用的优惠券激活到自己的账号上

**请求地址：**

完成

- `users/coupon/coupon/activate`

**请求方式：**

- GET

**参数：**

| 参数名     | 必选 | 类型   | 说明    |
| ---------- | ---- | ------ | ------- |
| openId     | 是   | string |         |
| coupon_key | 是   | string | cdkey值 |

**返回示例：**

```json
{
    status: "successful",
    info: "添加成功"
}
```

```json
{
    status: "failed",
    info: "已经达到持有的上限"
}
```

**返回参数：**

| 参数名 | 必选 | 类型   | 说明                                |
| ------ | ---- | ------ | ----------------------------------- |
| status | 是   | string | 成功 - `successful` 失败 - `failed` |
| info   | 是   | string | 一般是失败的说明                    |



**备注：**

- 后端要对 优惠券是否被使用过 是否已经过期了 做出判断
- 同时对用户是否已经达到了持有的上限做出判断
- **查询`VIP`表内该用户是否是会员 否则 优惠券的上限默认为 5**
- 若有会员 则按照会员的上限判断



### 生成优惠券 [改]

**简要描述：**

- 批量生成优惠券

**请求地址：**

完成

- `users/coupon/coupon/generate`

**请求方式：**

- POST

**参数：**

| 参数名   | 必选 | 类型   | 说明         |
| -------- | ---- | ------ | ------------ |
| amount   | 是   | int    | 生成的数量   |
| value    | 是   | int    | 每一张的面值 |
| deadline | 是   | string | 截止日期     |
| rules    | 是   | Array  | 使用的规则   |

其中  `rules` 规则中包含的每一条使用规则`object`的字段如下

> | 参数名 | 类型   | 说明           |
> | ------ | ------ | -------------- |
> | type   | string | 需要满足的类型 |
> | value  | string | 类型对应的值   |
> | name   | string | 解释如下       |
>
> - `type` 值以及对应的`value`值的解释如下
>   - `merchant` 
>     - 满足指定的商家 
>     - 此时 `value` 为商家的 `m_id`
>     - 此时 `name` 为商家的名称
>   - `value`
>     - 整个订单满足指定的数额
>     - 此时 `value` 为指定的 需要达到的数额 **数额仍为string类型**
>     - 此时 `name` 为空 但仍有该字段
>   - `commodity`
>     - 满足指定的商品 此优惠券对整笔订单的商品都有优惠效果
>     - 此时`value`为指定的商品的 `c_id`
>     - 此时`name` 为商品的名称

**备注：**

- `deadline`字段即`timestamp`格式的日期转`string`



### 查询所有的优惠券 [改]

**简要描述：**

- 管理员查询所有未使用 已经使用的优惠券的详细信息

**请求地址：**

完成

- `users/coupon/coupon/getAll`

**请求方式：**

- GET



**返回示例：**

```json
{
    coupons:[
        {
            coupon_key: "cdkey here",
            value: 100,
            deadline: "2020-12-12 11:43:15.000000",
            used: "",
            rules: [
                {
                    type: "value",
                    value: "20",
                    name: ""
                }
            ]
        }
    ]
}
```

**返回参数说明**



| 参数名     | 类型   | 说明           |
| ---------- | ------ | -------------- |
| coupons    | Array  | 查询的结果数组 |
| coupon_key | string | cdkey          |
| value      | int    | 面值           |
| dealine    | string | 截止日期       |
| used       | string | 使用者的openId |
| rules      | Array  | 优惠券数组     |

**备注：**

- `used` 值可为空 但字段要有



### 使用优惠券 [删]

在购买商品的接口中进行操作



## 拼团

### 参与拼团

**简要描述：**

- 用户参与拼团

**请求地址：**

- `users/groupuser/grouping/join`

**请求方式：**

- POST

**参数：**

| 参数名 | 必选 | 类型   | 说明         |
| ------ | ---- | ------ | ------------ |
| openId | 是   | string |              |
| g_id   | 是   | string | 参与的拼团id |

**备注：**

- 

未写

### 查询可参加的拼团

**简要描述：**

- 查询当前所有用户可用参加的拼团

**请求地址：**

完成

- `users/group/grouping/get`

**请求方式：**

- GET

**返回示例：**

```json
{
    groupings:[
        {
            g_id: "g_id here",
            name: "grouping name",
            merchant: {
                name: "店名",
                longitude: 48.1231231,
                latitude: 21.3169278
            },
            commodity:{
                name: "",
                value: 15,
                image: "123.jpg"
            },
            membership_max: 5,
            cost: 20,
            currentAmount: 2,
            deadline: "2020-12-10 11:43:11.000000"
        }
    ]
}
```

**返回参数说明**

| 参数名         | 类型   | 说明                         |
| -------------- | ------ | ---------------------------- |
| groupings      | Array  | 可用拼团数组                 |
| g_id           | string |                              |
| name           | string | 拼团名                       |
| merchant       | Object | `Merchants` 表内的部分内容   |
| commodity      | Object | `Commodities` 表内的部分内容 |
| membership_max | int    | 所需要的参加人数             |
| cost           | int    | 每人需要支付的金额           |
|                |        |                              |
| deadline       | string | 截止日期                     |

**备注：**

- `deadline` 即`timestamp`格式的日期转`string`

### 生成拼团信息

**简要描述：**

- 管理员生成拼团信息

**请求地址：**

完成

- `users/group/grouping/generate`

**请求方式：**

- POST

**参数：**

| 参数名         | 必选 | 类型   | 说明                 |
| -------------- | ---- | ------ | -------------------- |
| m_id           | 是   | string | 店家id               |
| c_id           | 是   | string | 商品id               |
| name           | 是   | string | 拼团名称             |
| cost           | 是   | int    | 每个人需要付费的价格 |
| deadline       | 是   | string | 截止时间             |
| membership_max | 是   | int    | 所需要的人数         |



## 会员

### 查询当前会员状态

**简要描述：**

- 查询当前用户的会员状态

**请求地址：**

- `member/members/vip/get`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型   | 说明 |
| ------ | ---- | ------ | ---- |
| openId | 是   | string |      |

**返回示例：**

```json
{
    name: "",
    deadline: "2020-12-10 11:43:11.000000"
}
```

**返回参数说明**

| 参数名   | 类型   | 说明          |
| -------- | ------ | ------------- |
| name     | string | VIP会员的名称 |
| deadline | string | 截止日期      |

**备注：**

- `deadline` 即`timestamp`格式的日期转`string`



### 查询所有会员

**简要描述：**

- 查询目前平台可用的会员

**请求地址：**

- `member/vip/vip/getAll`

**请求方式：**

- GET

**返回示例：**

```json
{
   vips: [
       {
           v_id: "",
           cost: 10,
           name: ""
       }
   ] 
}
```

**返回参数说明**

| 参数名 | 类型  | 说明 |
| ------ | ----- | ---- |
| vips   | Array |      |
| v_id   |       |      |
| cost   |       |      |
| name   |       |      |

**备注：**

- 



### 充值会员

**简要描述：**

- 充值会员

**请求地址：**

完成

- `member/members/vip/recharge`

**请求方式：**

- POST

**参数：**

| 参数名 | 必选 | 类型   | 说明           |
| ------ | ---- | ------ | -------------- |
| openId | 是   | string |                |
| v_id   | 是   | string | 会员类型       |
| number | 是   | int    | 充值的**月数** |

**备注：**

- `number` 是充值的**月数** 需要后端计算截止的日期



## 积分

### 查询积分

**简要描述：**

- 查询当前账号所持有的积分

**请求地址：**

- `member/points/info/{openid}`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型   | 说明 |
| ------ | ---- | ------ | ---- |
| openId | 是   | string |      |

**返回示例：**

```json
{
    value: 400
}
```

**返回参数说明**

| 参数名 | 类型 | 说明   |
| ------ | ---- | ------ |
| value  | int  | 积分值 |

**备注：**

- 



### 查询可兑换物品

**简要描述：**

- 查询当前平台能兑换的物品

**请求地址：**

完成

- `member/item/items/get`

**请求方式：**

- GET

**返回示例：**

```json
{
    items: [
        {
            item_id: "",
            cost: 20,
            name: "",
            image: "ajsai.jpg"
        }
    ]
}
```

**返回参数说明**

| 参数名  | 类型   | 说明 |
| ------- | ------ | ---- |
| item_id | string |      |
| cost    | int    |      |
| name    | string |      |
| image   | string |      |

**备注：**

- 



### 兑换物品

**简要描述：**

- 使用积分兑换物品

**请求地址：**

完成

- `member/item/items/redeem`

**请求方式：**

- GET

**参数：**

| 参数名  | 必选 | 类型   | 说明 |
| ------- | ---- | ------ | ---- |
| openid  | 是   | string |      |
| item_id | 是   | string |      |

**备注：**

- 



### 增加积分 [删]

该接口删除 积分的增加将由后端处理



## 订单

### 查询订单 [改]

**简要描述：**

- 查询当前用户的订单

**请求地址：**

- `product/orders/orders/get`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型   | 说明 |
| ------ | ---- | ------ | ---- |
| openid | 是   | string |      |

**返回示例：**

```json
{
    orders: [
        {
            orderedTime: "2020-12-10 11:43:11.000000",
            status: "外卖制作中",
            details: [
                {
                    amount: 1,
                    image: "demo.jpg",
                    name: "奶茶",
                    taste: "芋泥味",
                    property: ""
                }
            ]
        }
    ]
}
```

**返回参数说明**

| 参数名      | 类型   | 说明           |
| ----------- | ------ | -------------- |
| orders      | Array  | 集合数组       |
| orderedTime | string | 订单时间       |
| status      | string | 状态名称       |
| details     | Array  | 订单详情数组   |
| amount      | int    | 某个商品的数量 |
| value       | int    | 某个商品的价格 |
| name        | string | 商品名称       |
| image       | string | 商品图片地址   |

**备注：**

- 需要使用 `Status` `OrderDetails` `Order` `Commoditites` 四张表的数据



### 商家查询订单 [改]

**简要描述：**

- 商家查询当前待处理的订单

**请求地址：**

- `product/merchant/merchant/orders`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型   | 说明 |
| ------ | ---- | ------ | ---- |
| m_id   | 是   | string |      |

**返回示例：**

```json
{
    orders:[
        {
            o_id: "",
            orderedTime: "",
            details: [
                {
                    amount: 1,
                    value: 5,
                    name: "",
                    image: "",
                    taste: "",
                    property: ""
                }
            ],
            status: {
                name: "",
                next: ""
            }
        }
    ]
}
```

**返回参数说明**

| 参数名      | 类型   | 说明             |
| ----------- | ------ | ---------------- |
| oders       | Array  |                  |
| o_id        | string | 订单号           |
| orderedTime | string | 下单时间         |
| details     | Array  |                  |
| amount      | int    | 数量             |
| value       | string | 价格             |
| name        | string | 商品名称         |
| image       | string | 商品图片地址     |
| taste       | string | 口味名称 可为空  |
| property    | string | 属性名称 可为空  |
|             |        |                  |
| status      | Object |                  |
| name        | string | 当前状态名称     |
| next_id     | int    | 下一个状态的id值 |
| next_name   | string | 下一个状态的名称 |

**备注：**

- `next` 可为空



### 订单状态更改

**简要描述：**

- 商家更改订单的状态

**请求地址：**

- `product/orders/status/change`

**请求方式：**

- PATCH

**参数：**

| 参数名 | 必选 | 类型   | 说明           |
| ------ | ---- | ------ | -------------- |
| m_id   | 是   | string | 店id           |
| o_id   | 是   | string | 订单id         |
| status | 是   | int    | 下一个状态的id |



## 购买

### 查询商家

**简要描述：**

- 查询最近的商家

**请求地址：**

- `product/orders/merchants/get`

**请求方式：**

- GET

**参数：**

| 参数名     | 必选 | 类型   | 说明 |
| ---------- | ---- | ------ | ---- |
| latitude   | 是   | double | 纬度 |
| longitutde | 是   | double | 经度 |

**返回示例：**

```json
{
    m_id: "",
    name: "",
    longitude: 49.1234501,
    latitude: 123.7834912
}
```

**返回参数说明**

| 参数名 | 类型   | 说明 |
| ------ | ------ | ---- |
| m_id   | string |      |
| name   | string | 店名 |

**备注：**

- 通过给定用户的坐标 找用户最近的店



### 查询店家商品 [改]

**简要描述：**

- 查询某家店正在出售的商品

**请求地址：**

完成

- `product/merchant/products/getAllProducts`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型   | 说明 |
| ------ | ---- | ------ | ---- |
| m_id   | 是   | string |      |

**返回示例：**

```json
{
    products: [
        [
            {
                title: "人气必点",
                items: [
                    {
                        c_id: "commoditi id here",
                        name: '热早餐',
                        image: "de.jpg",
                        value: 13.50,
                        specification: {
                            taste: [
                                {name: "芋泥味", value: 14.00},
                                {name: "紫薯味", value: 14.00}
                            ],
                            property: [
                                {
                                    name: "不加热",
                                    action: {
                                        delta: "minus",
                                        value: 0
                                    }
                                },
                                {
                                    name: "加热",
                                    action: {
                                        delta: "add",
                                        value: 2.00
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    ]
}
```

**返回参数说明**

| 参数名   | 类型  | 说明                 |
| -------- | ----- | -------------------- |
| products | Array | 拥有的商品存货的数组 |
|          |       |                      |

其中`products`数组中每一个子数组字段如下

> 由一个分类组成的 `object`
>
> `object`中值如下
>
> > | 参数名 | 类型   | 说明                             |
> > | ------ | ------ | -------------------------------- |
> > | title  | string | 分类名                           |
> > | items  | Array  | 每一个商品信息`object`组成的数组 |
> >
> > 其中 商品信息 `object` 相关字段如下
> >
> > | 参数名        | 类型   | 说明                                        |
> > | ------------- | ------ | ------------------------------------------- |
> > | c_id          | string | 商品的id值                                  |
> > | name          | string | 商品名称                                    |
> > | image         | string | 商品图片的 `url` 地址                       |
> > | value         | double | 价格 精确的小数点后 `2` 位 为基础价格       |
> > | specification | object | 规格 **若无相应的规格选项 则该值为 `null`** |
> >
> > 其中 `specification` 相关字段如下
> >
> > > `taste` object
> > >
> > > | 参数名 | 类型   | 说明                    |
> > > | ------ | ------ | ----------------------- |
> > > | name   | string | 名称                    |
> > > | value  | doubl  | 价格 精确到小数点后两位 |
> > >
> > > `property ` object 
> > >
> > > | 参数名 | 类型   | 说明                                |
> > > | ------ | ------ | ----------------------------------- |
> > > | name   | string |                                     |
> > > | delta  | string | 对价格的操作 可选值有 `add` `minus` |
> > > | value  | double | 值的变化量 精确到小数点后两位       |
> > >
> > > 若`property` 字段无相关的选项 则该字段值为 `null`



**备注：**

- 需要联查 `Commodites` 表的内容



### 购买物品 [改]

**简要描述：**

- 用户支付成功并购买商品

**请求地址：**

- `product/merchant/commodities/buy`

**请求方式：**

- POST

**参数：**

| 参数名      | 必选 | 类型   | 说明                  |
| ----------- | ---- | ------ | --------------------- |
| m_id        | 是   | string | 店家id                |
| openId      | 是   | string |                       |
| payment     | 是   | double | 用户实际付款的数值    |
| commodities | 是   | Array  | 存储购买物品的数组    |
| coupon_key  | 否   | Array  | 使用的优惠券的key数组 |

> `commodities` 数组的字段如下
>
> | 参数名        | 必选 | 类型   | 说明     |
> | ------------- | ---- | ------ | -------- |
> | c_id          | 是   | string | 商品id   |
> | amount        | 是   | int    | 购买数量 |
> | specification | 否   | Object | 规格     |
>
> 其中`specification`的相关值如下
>
> | 参数名   | 必选 | 类型   | 说明           |
> | -------- | ---- | ------ | -------------- |
> | taste    | 否   | string | 选择的口味名称 |
> | property | 否   | string | 选择的属性名称 |
> |          |      |        |                |

**请求示例：**

```json
{
    m_id: "1",
    openId: "12312389ay97",
    payment: 20,
    commodities:[
        {
            c_id: "2",
            amount: 2,
            specification: {
                taste: "紫薯味",
                property: "加热"
            }
        }
    ],
    coupon_key: [
        "no1cdkey",
        "no2cdkey"
    ]
}
```



**备注：**

- `orderedTime` 需要后端生成
- `commodities` 数组内的内容需要到 `Order_Details` 表内做修改
  - **注意不要出现一个订单的多个商品的`od_id`不同的情况**
- 在商家的数据库中查找 对应的生成积分的条件
- 同时对用户所使用的优惠券进行处理



---





**模板**

---

**简要描述：**

- 

**请求地址：**

- 

**请求方式：**

- 

**参数：**

| 参数名 | 必选 | 类型 | 说明 |
| ------ | ---- | ---- | ---- |
|        |      |      |      |
|        |      |      |      |
|        |      |      |      |

**返回示例：**

```json

```

**返回参数说明**

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
|        |      |      |
|        |      |      |
|        |      |      |

**备注：**

- 

---

​	