# 系统与服务

日常使用操作系统，服务这个概念很少有人会去提起，但是在操作系统当中是一个非常重要的角色，不论是Windows还是Linux

## 自启动

这是一个在Linux里面非常典型的案例，现在我们可以尝试这样一个案例来证明service在自启动当中的用处——使用bash脚本对文件内容进行输入

## 脚本编写与测试

这里需要讲到一个bash脚本的基础语法`echo`，这个命令可以对文件内容进行改写，添加等操作，可以参考这个结构了解语法

```bash
echo "需要增加的内容" >> [文件路径以及名称]
```

**示例如下**

```bash
echo "Hello World！" >> $HOME/test.txt
```

---

### 脚本的编写

在我们的用户目录创建与编辑一个脚本

```bash
vim $HOME/test.sh
```

将刚刚的内容写下

```bash
echo "Autorun service is enabled" >> $HOME/test.txt
```

但是bash脚本有自己的标准写法，需要在开头加上`#!/bin/bash`，所以写成下面这个样子

```bash
#!/bin/bash
echo "Autorun service is enabled " >> /home/teach/test.txt
```

输出内容都可以随意填写

---

### 脚本运行测试

运行脚本，输入

```bash
bash $HOME/test.sh
```

查看结果

```bash
cat $HOME/test.txt
```

下方出现刚刚输入的字符串

## 服务文件

Windows的服务有自己的服务管理器，但是Linux不一样，这个服务文件存在于`/etc/systemd/system`文件夹下，以`.service`文件的形式存在，`.service`文件也有自己的编写规则

## 服务文件的编写

服务文件有自己的写法

```ini
# /etc/systemd/system/你的服务名.service

[Unit]
Description=服务描述
Documentation=文档地址
After=network.target          # 在什么之后启动
Wants=                        # 弱依赖，不影响启动
Requires=                     # 强依赖，失败则不启动

[Service]
Type=simple                   # simple | forking | oneshot | notify | exec
ExecStart=/path/to/你的脚本   # 启动命令
ExecStop=                     # 停止命令（可选）
ExecReload=                   # 重载命令（可选）
Restart=on-failure            # no | on-success | on-failure | on-abnormal | always
RestartSec=5                  # 重启间隔秒数
User=root                     # 运行用户
Group=root                    # 运行用户组
WorkingDirectory=/opt         # 工作目录
Environment=KEY=value         # 环境变量
EnvironmentFile=/etc/default/你的服务  # 环境变量文件

# 输出日志自动写入 journal
StandardOutput=journal
StandardError=journal

# 资源限制
MemoryMax=512M
CPUQuota=50%

[Install]
WantedBy=multi-user.target    # 多用户模式启动（Server 用这个）
# WantedBy=graphical.target   # 图形界面启动（桌面用这个）
```

我们只需要使用几个基础的就可以了，可以参考我的文件

```ini
[Unit]
Description=auto_start
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/bin/bash /home/teach/test.sh

[Install]
WantedBy=multi-user.target
```

## 效果查看

现在重启查看效果

```bash
cat $HOME/test.txt
```

最后应该会多出一行输出