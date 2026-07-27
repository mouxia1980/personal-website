1、CMD命令终端下以管理员身份输入命令：

wmic path softwareLicensingService get OA3xOriginalProductKey

wmic path softwareLicensingService get OA3xOriginalProductKey

```js
wmic path softwareLicensingService get OA3xOriginalProductKey
```

如果你通过上方的命令运行后没有看到密钥，那是因为你用的是OEM数字许可证密钥，这种情况请使用下面的第2种方法来获取密钥。

2、注册表下：计算机\\HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform

找到 BackupProductKeyDefault，在其后面就能找到你的激活密钥

[![](https://www.freedidi.com/wp-content/uploads/2024/09/2024-09-03-161728-2-scaled.webp)](https://www.freedidi.com/wp-content/uploads/2024/09/2024-09-03-161728-2-scaled.webp)

3、Windows 10 /11 KMS激活方式

**注意：以管理员身份运行CMD，然后依次输入下面的命令即可**

slmgr /ipk 这里填写你的OEM密钥

　　slmgr /skms kms.loli.best

　　slmgr /ato

　　slmgr /xpr

slmgr /ipk 这里填写你的OEM密钥 　　slmgr /skms kms.loli.best 　　slmgr /ato 　　slmgr /xpr

```js
slmgr /ipk 这里填写你的OEM密钥

slmgr /skms kms.loli.best

slmgr /ato

slmgr /xpr
```

OEM激活密钥可以去微软官方免费获取 【 **[点击前往](https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys?tabs=server2022%2Cwindows10ltsc%2Cversion1803%2Cwindows81)** 】