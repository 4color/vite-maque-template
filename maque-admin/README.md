# 一般的Vue3+TS项目

已集成了基本的组件

Axios的集成组件： maque-request-ts

相关地址请修改public下面的 *.env.js文件

具体的变量有：



| window.apiApp     | 当前应用程序的统一服务根目录，封装在 MyRequest.ts文件中,比如 /myapi |
| ----------------- | ------------------------------------------------------------ |
| window.tokenName  | 要传给后端的Token名称, 比如 X-TOKEN                          |
| window.ssoUrl     | 当后端Token认证失效后,返回401时，刷新Token的地址。完整地址为 window.ssoUrl+"/user/token",如果不配置，则不去刷新 |
| window.apiGateway | 如果后端有微服务的网关，则配置成网关址，比如 /gateway 。代替axios 中的baseURL |

