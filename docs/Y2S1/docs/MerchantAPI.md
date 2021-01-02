# 商家 Web 端 API 文档

## 状态信息

以下所有的接口 均需要返回是否成功

### 成功

- `errorCode` 设为 `200`

### 失败

- `errorCode` 设为非 `200` 的值
- `errorMessage` 中填写错误的信息

## 其他

带`*`标识说明上一个文档中已经有该接口 





## 信息

### 登录

**简要描述：**

- 商家登录

**请求地址：**

- `/merchant/login/`

**请求方式：**

- POST

**参数：**

| 参数名   | 必选 | 类型   | 说明   |
| -------- | ---- | ------ | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |
|          |      |        |        |

**返回示例：**

```json
{
    code: 200
}
```

**返回参数说明**

**备注：**

- 



### 更改商家信息





## 订单

### 商家查询订单 *

**在上一个api文档中已经写了该接口 检查是否能过就行**

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





### 更改订单状态 *

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





## 拼团

### 查询商家拼团信息

**简要描述：**

- 查询当前分配给当前商家的拼团信息

**请求地址：**

- `/merchant/grouping/get`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型 | 说明     |
| ------ | ---- | ---- | -------- |
| m_id   | 是   | int  | 商家的id |
|        |      |      |          |
|        |      |      |          |

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
            deadline: "2020-12-10 11:43:11.000000"
        }
    ]
}
```

**返回参数说明**

大部分参数与上一个文档基本相同

| 参数名            | 类型 | 说明               |
| ----------------- | ---- | ------------------ |
|                   |      |                    |
| **currentAmount** | int  | 当前已经参与的人数 |
|                   |      |                    |

**备注：**

- 



### 拼团的用户

**简要描述：**

- 查看参与了某拼团的用户列表

**请求地址：**

- 

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型 | 说明 |
| ------ | ---- | ---- | ---- |
| g_id   | 是   | int  |      |
|        |      |      |      |
|        |      |      |      |

**返回示例：**

```json
{
    users:[
        {openId: ""},
        {openId: ""}
    ]
}
```

**返回参数说明**

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
|        |      |      |
|        |      |      |
|        |      |      |

**备注：**

- 



## 库存

### 查看当前库存

**简要描述：**

- 查看当前商家的库存

**请求地址：**

- `/merchant/products/get`

**请求方式：**

- GET

**参数：**

| 参数名 | 必选 | 类型 | 说明       |
| ------ | ---- | ---- | ---------- |
| m_id   | 是   | int  | 商家的id值 |
|        |      |      |            |

**返回示例：**

```json
{
    products:[
        {
            c_id: 2,
            details: {
              	value: 7,
                name: "三明治",
                image: "222.jpg",
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
            },
            amount: 5,
            inbound_date: "2020-12-17 18:33:33",
            shelf_life: 30,
        }
    ]
}
```

**返回参数说明**

所有参数与数据库的字段对应 只需要组织好数据结构即可

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
|        |      |      |
|        |      |      |
|        |      |      |

**备注：**

- 



### 查询所有的商品

**简要描述：**

- 查询所有可以入库的商品 该商品由管理员制定

**请求地址：**

- `/commodities/get`

**请求方式：**

- GET



**返回示例：**

```json
{
    products: [
        {
            c_id: 1,
            value: 7,
            name: "",
            image: "",
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
    ]
}
```

**返回参数说明**

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
|        |      |      |
|        |      |      |
|        |      |      |

**备注：**

- 



### 入库商品

**简要描述：**

- 入库当前商家的商品

**请求地址：**

- `merchant/inbound`

**请求方式：**

- POST

**参数：**

| 参数名       | 必选 | 类型   | 说明 |
| ------------ | ---- | ------ | ---- |
| c_id         | 是   |        |      |
| m_id         | 是   |        |      |
| inbound_date | 是   | string |      |
| shelf_life   | 是   | int    |      |

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



### 更改入库信息

**简要描述：**

- 更改已入库的商品信息

**请求地址：**

- `/inbound/{param}/update`

**请求方式：**

- PATCH

**参数：**

| 参数名 | 必选 | 类型   | 说明                                                         |
| ------ | ---- | ------ | ------------------------------------------------------------ |
| param  | 是   | string | 表明要修改的入库信息的各个字段的名称<br />可选值有 `amount` `inbound_date` `shelf_life` |
| m_id   | 是   |        |                                                              |
| c_id   | 是   |        |                                                              |

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