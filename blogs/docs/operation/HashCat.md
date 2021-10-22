---
title: HASHCAT撞库解密软件
date: 2021-10-20
categories:
  - 运维
subSidebar: 'auto'
tags:
 - 运维
 - 撞库
 - 数仓
 - 解密
sticky: 1
autoGroup-2: 运维
# autoGroup+10: group10
---


:::tip 
+ GPU计算
+ 哈希HASH反算明文
+ MD5/SHA256/等等 密码破解
:::

<!-- more -->



[[toc]]

## CUDA安装
- 查看设备
```bash
yum install -y pciutils
lspci | grep -i vga

00:02.0 VGA compatible controller: Intel Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller (rev 06)
01:00.0 VGA compatible controller: NVIDIA Corporation GM107 [GeForce GTX 750] (rev a2)
```
- 排坑`nouveau`
```bash
lsmod | grep nouveau

# 如果有值:
vim /usr/lib/modprobe.d/dist-blacklist.conf
# 附加下面两行
blacklist nouveau
options nouveau modeset=0
# 备份
mv /boot/initramfs-$(uname -r).img /boot/initramfs-$(uname -r)-nouveau.img  

#创建新的 initramfs image镜像
dracut /boot/initramfs-$(uname -r).img $(uname -r)  

reboot

lsmod | grep nouveau

```
- 下载软件 
[CUDA选择下载地址](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=CentOS&target_version=7&target_type=runfile_local
)
```
# 驱动测试
nvidia-smi
```

## 软件安装
```bash
wget https://hashcat.net/files/hashcat-6.2.4.7z
yum install -y gcc p7zip
7z x hashcat-6.2.4.7z
cd hashcat-6.2.4 
chmod +x hashcat.bin && cp hashcat.bin hashcat
ln -s hashcat /usr/sbin/hashcat

hashcat -m 0 1de28c5ea8f7a94114eeddb48bf5226c -a 3 1?d?d?d?d?d?d?d?d?d?d --show --force

```
## 字典生成
```bash
# 年月日数据
sh gen.sh 19500101 20200101
cp 19500101_20200101.txt year.dict
awk 'NR==FNR { a[$0]; next } { for (i in a) print i$0 }' region.txt year.dict > region_1950_2020.dict

# 追加盐 盐值固定 saltx
:%s!\(.*\)!\1:saltx!g


nohup hashcat -m 1420 myhash01.txt -a 6 region_1950_2020.dict --custom-charset1 ?dX ?d?d?d?1 --force -o salt_test.out --status --status-timer 10 >> hashcat.log 2>&1 &
```

## 异常
- Unable to find the kernel source tree for the currently running kernel. 
```bash
  yum -y install kernel-devel
  yum -y install epel-release
```

## 参考

- [阿里云安装文档](https://github.com/jas502n/sangfor/blob/master/1earn/Security/%E5%AE%89%E5%85%A8%E5%B7%A5%E5%85%B7/Hashcat.md)
- [HashCat入参详解](https://apt404.github.io/2017/04/26/use-hashcat-crack-hash/)

