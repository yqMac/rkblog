---
title: 常用脚本内容
date: 2021-10-20
cover: https://zyj_yida.gitee.io/source/img/indexbg/52.jpg
categories:
  - 运维
subSidebar: 'auto'
tags:
 - 运维
 - 脚本
 - 数仓
sticky: 1
---


:::tip 
+ 常用脚本
+ Bash Python Hive Hbase
:::

<!-- more -->

[[toc]]

## Hive相关
- 数据导出
```bash
hive -e "
set mapred.job.queue.name=root.tianchuang;
set hive.cli.print.header=true;
set hive.resultset.use.unique.column.names=false;

select * from db_name.table_name where 1=1;

"  | sed 's/[\t]/,/g' | grep -v 'WARN' > out_data.csv

```

## Bash脚本

- 格式化输出日志rkecho
```bash
function rkecho()
{
    var_str=$1
    var_curr_timestamp=`date "+%Y-%m-%d %H:%M:%S"`
    ## 判断参数1 是否是空字符串
    if [ "x${var_str}" == "x" ];then
        return 
    fi
    t_str="[${var_curr_timestamp}][RK_Log_TAG]"
    p_str="${var_str}"
    ## 打印输出
    echo "${t_str}:${p_str}"
}

rkecho "测试"
```

- 绑定退出事件
```bash
# 绑定结束事件
function script_exit_hook {
  echo "GAME OVER"
}
trap script_exit_hook EXIT

```

- 耗时时间
```bash
ts_start=`date +%s`

# do sth

ts_end=`date +%s`
ts_spend=$(( ts_end - ts_start ))
((sec=ts_spend%60, ts_spend/=60, min=ts_spend%60, hrs=ts_spend/60))
ts_spend_str=$(printf "%02d:%02d:%02d" ${hrs} ${min} ${sec})
echo ${ts_spend_str}
ts_stop=`date +'%Y-%m-%d %H:%M:%S'`
echo "耗时:${ts_spend_str},结束时间:${ts_stop}"

```

### Python相关


### Hbase相关


