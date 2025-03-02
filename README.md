# javascript-practice

调试Javascript程序:

vscode原生支持JavaScript,只需安装node环境即可

```shell
E:\github\javascript-practice>node -v
v18.17.1

E:\github\javascript-practice>npm -v
10.9.0
```

F5打开调试, 选择node默认配置即可

![1740902773827](image/README/1740902773827.png)

项目结构如下

```shell
E:\github\javascript-practice>tree /f
Folder PATH listing for volume 新加卷
Volume serial number is 1E87-7BD0
E:.
│   .gitignore
│   mock copy.js
│   mock.js
│   README.md
│
└───.vscode
        launch.json
```

如果你想指定调试某一个js文件, 则需要新建属于当前vscode工程的launch.js文件

- "type": "node",
- "request": "launch",
- "name": "Launch Program1",
- "program": "${workspaceFolder}\\指定.js"

如下配置写两组,分别是Launch Program1和Launch Program2

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
  
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program1",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\mock copy.js"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program2",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\mock.js"
        }
    ]
}
```

效果如下,选择指定的debug配置即可生效

![1740902783584](image/README/1740902783584.png)
