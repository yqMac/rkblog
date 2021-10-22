---
title: 增量变量设计
date: 2021-10-22
categories:
  - 变量开发
subSidebar: 'auto'
tags:
 - PySpark
 - Python
 - 变量开发
 - 脚本
sticky: 1
---

:::tip 
+ 变量开发/PySpark/SQL
+ 增量设计,变量增量方式实现方式
:::

<!-- more -->


[TOC]

### 前置
- tbh 历史存量
- tbc 增量数据
- tbr 产出变量
- date_sub 本次计算与存量数据间日期差

### 求和
- tbc
```sql
count(col) as var_cnt,
sum(col) as var_sum
```
- tbh
```sql
(coalesce(tbh.var_cnt,0.0) + coalesce(tbc.var_cnt,0.0)) as var_cnt ,
(coalesce(tbh.var_sum,0.0) + coalesce(tbc.var_sum,0.0)) as var_sum 
```
- 日期类浮动历史
```
(coalesce(tbh.var_sum,0.0)+{date_sub}*coalesce(tbh.var_cnt,0.0)*24*3600 + coalesce(tbc.var_sum,0.0)) as var_sum ,
```
- tbr
```sql
var_sum as var 
```

### 计数
- tbc
```sql
count(col) as var_cnt
```
- tbh
```sql
(coalesce(tbh.var_cnt,0.0) + coalesce(tbc.var_cnt,0.0)) as var_cnt
```
- tbr
```sql
var_cnt as var 
```


### 均值
- tbc
```sql
count(col) as var_cnt,
avg(col) as var_avg 
```
- tbh
```sql
(coalesce(tbh.var_cnt,0.0) + coalesce(tbc.var_cnt,0.0)) as var_cnt,
(
    coalesce(tbh.var_cnt,0.0) * coalesce(tbh.var_avg,0.0)  
    + coalesce(tbc.var_avg,0.0) * coalesce(tbc.var_cnt,0.0)
) * 1.0 / ( coalesce(tbc.var_cnt,0.0) + coalesce(tbh.var_cnt,0.0) ) as var_avg 
```


- tbr
```sql
var_avg as var 

```


### 去重机构数类
- tbc
```sql
concat_ws('_',collect_set(col)) AS var_dct
```
- tbh
```sql
    -- python 注册 ufd
    def rk_udf_join(var_str,schr):
        return schr.join(set(var_str.split(schr)))

    hsqlContext.udf.register("rk_udf_join", rk_udf_join)
    -- sql 使用udf
    rk_udf_join(concat_ws('_',tbh.var_dct,tbc.var_dct),'_') as var_dct
```

- tbr
```sql
size(split(var_dct,"_")) as var,
```

### 偏度

- tbc
```sql
count(col) AS var_cnt,
avg(col) AS var_avg,
avg(pow(col,2)) AS var_avg_2,
avg(pow(col,3)) AS var_avg_3,

```
- tbh
```sql

coalesce(tbh.var_cnt,0.0) + coalesce(tbc.var_cnt,0.0) as var_cnt ,
(coalesce(tbh.var_cnt,0.0)*coalesce(tbh.var_avg,0.0)+coalesce(tbc.var_cnt,0.0)*coalesce(tbc.var_avg,0.0))/ (coalesce(tbh.var_cnt,0.0)+coalesce(tbc.var_cnt,0.0)) as var_avg ,
(coalesce(tbh.var_cnt,0.0)*coalesce(tbh.var_avg_2,0.0)+coalesce(tbc.var_cnt,0.0)*coalesce(tbc.var_avg_2,0.0))/ (coalesce(tbh.var_cnt,0.0)+coalesce(tbc.var_cnt,0.0)) as var_avg_2 ,
(coalesce(tbh.var_cnt,0.0)*coalesce(tbh.var_avg_3,0.0)+coalesce(tbc.var_cnt,0.0)*coalesce(tbc.var_avg_3,0.0))/ (coalesce(tbh.var_cnt,0.0)+coalesce(tbc.var_cnt,0.0)) as var_avg_3 ,

```
- 日期类浮动历史
```

((coalesce(tbh.var_cnt,0)*coalesce(tbh.var_avg,0)
+{date_sub}*coalesce(tbh.var_cnt,0.0)*24*3600
+coalesce(tbc.var_cnt,0)*coalesce(tbc.var_avg,0))
/(coalesce(tbh.var_cnt,0)+coalesce(tbc.var_cnt,0))) as var_avg,

(
coalesce(tbh.var_cnt,0) * coalesce(tbh.var_avg_2,0) 
+ 2 * coalesce(tbh.var_cnt,0) * {date_sub}*24*3600 * coalesce(tbh.var_avg ,0)
+ coalesce(tbh.var_cnt,0) * pow({date_sub}*24*3600,2)
+ coalesce(tbc.var_cnt,0) * coalesce(tbc.var_avg_2,0)
)/(coalesce(tbh.var_cnt,0)+coalesce(tbc.var_cnt,0)) as var_avg_2,

(
coalesce(tbh.var_cnt,0) * coalesce(tbh.var_avg_3 ,0)
+ 3 * coalesce(tbh.var_cnt,0) * {date_sub}*24*3600 * coalesce(tbh.var_avg_2,0)
+ 3 * coalesce(tbh.var_cnt,0) * pow({date_sub}*24*3600,2) * coalesce(tbh.var_avg,0)
+ coalesce(tbh.var_cnt,0) * pow({date_sub}*24*3600,3)
+ coalesce(tbc.var_cnt,0) * coalesce(tbc.var_avg_3,0)
)/(coalesce(tbh.var_cnt,0)+coalesce(tbc.var_cnt,0)) as var_avg_3 ,

```

- tbr
```sql

case when coalesce(var_cnt,0) <=1 then null else 
round((coalesce(var_avg_3,0) - 3 * coalesce(var_avg,0) * pow(sqrt(coalesce(var_avg_2,0) -pow(coalesce(var_avg,0),2)),2)-pow(coalesce(var_avg,0),3))/pow(sqrt(coalesce(var_avg_2,0) -pow(coalesce(var_avg,0),2)),3),4) 
 end 
 as var ,
```



### 标准差
- tbc
```sql
count(col) AS var_cnt,
avg(col) AS var_avg,
case when count(col) <=1 then null else  stddev_samp(col) end AS var_std,

```
- tbh
```sql

coalesce(tbh.var_cnt,0.0) + coalesce(tbc.var_cnt,0.0) as var_cnt ,
(coalesce(tbh.var_cnt,0.0)*coalesce(tbh.var_avg,0.0)+coalesce(tbc.var_cnt,0.0)*coalesce(tbc.var_avg,0.0))/ (coalesce(tbh.var_cnt,0.0)+coalesce(tbc.var_cnt,0.0)) as var_avg ,

case when coalesce(tbh.var_cnt,0) =0 and coalesce(tbc.var_cnt,0) =0 then  null 
when coalesce(tbh.var_cnt,0) =0 then tbc.var_std 
when coalesce(tbc.var_cnt,0) =0 then tbh.var_std 
else 
sqrt(
(
    (tbh.var_cnt-1)*pow(coalesce(tbh.var_std,0),2)
    +(tbc.var_cnt-1)*pow(coalesce(tbc.var_std,0),2)
    +((tbh.var_cnt * tbc.var_cnt)/(tbh.var_cnt+tbc.var_cnt))*pow((tbh.var_avg-tbc.var_avg),2)
)/(tbh.var_cnt+tbc.var_cnt-1)
)
end 
as var_std,
```
- 日期类浮动历史
```

case when coalesce(tbh.var_cnt,0) =0 and coalesce(tbc.var_cnt,0) =0 then  null 
when coalesce(tbh.var_cnt,0) =0 then tbc.var_std 
when coalesce(tbc.var_cnt,0) =0 then tbh.var_std
else 
sqrt(
(
    (tbh.var_cnt-1)*pow(coalesce(tbh.var_std,0),2)
    +(tbc.var_cnt-1)*pow(coalesce(tbc.var_std,0),2)
    +((tbh.var_cnt * tbc.var_cnt)/(tbh.var_cnt+tbc.var_cnt))*pow((((coalesce(tbh.var_cnt,0)*coalesce(tbh.var_avg,0)
    +{date_sub}*coalesce(tbh.var_cnt,0.0)*24*3600
    )/coalesce(tbh.var_cnt,0))-tbc.var_avg),2)
)/(coalesce(tbh.var_cnt,0)+coalesce(tbc.var_cnt,0)-1)
)
end 
as var_std,
```

- tbr
```sql

var_std as var ,
```
