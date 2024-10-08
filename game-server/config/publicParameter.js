// 默认配置
module.exports = {
    'ANXEN_memberid': {
        'value': '10351',
        'describe': '支付商户ID',
        type: 'string'
    },

    'ANXEN_key': {
        'value': 'hfnj9a9sx493q7qnpjak1hc6y264qrzk',
        'describe': '支付商户密钥',
        type: 'string'
    },

    'freeShopItem': {
        'value': 'notfree',
        'describe': '当值为free时免费充值（测试时使用，正式运营切勿开启）',
        type: 'string'
    },
    'startGold': {
        'value': 10000,
        'describe': '注册用户初始金币数量',
        type: 'number'
    },
    'profitPercentage': {
        'value': 5,
        'describe': '游戏抽水百分比，5表示抽取5%',
        type: 'number',
    },

    'withdrawCashBillPercentage': {
        'value': 2,
        'describe': '兑换手续费，2表示手续费为2%',
        type: 'number',
    },

    'webServerUrl': {
        'value': 'http://127.0.0.1:14009',
        'describe': '网页服务器地址',
        type: 'string',
    },

    'gameServerUrl': {
        'value': 'http://127.0.0.1:13009',
        'describe': '游戏服务器地址',
        type: 'string',
    },

    'loopBroadcastContent': {
        'value': '欢迎进入游戏大厅！',
        'describe': '大厅循环广播内容',
        type: 'string',
    },

    'minKeepGold': {
        'value': 12,
        'describe': '兑换时最少需要保留的金币数量',
        type: 'number',
    },

    'minWithdrawCash': {
        'value': 100,
        'describe': '单次兑换的最小金额',
        type: 'number',
    },

    'minRechargeCount': {
        'value': 20,
        'describe': '单次充值的最小金额',
        type: 'number',
    },

    'rechargeConfig': {
        'value': {
            'alipay': {
                'enable': true,
                'list': [
                    20, 50, 100, 500, 1000, 2000, 5000
                ]
            },
            'wx': {
                'enable': true,
                'list': [
                    20, 50, 100, 500, 1000, 2000, 5000
                ]
            },
            'qq': {
                'enable': true,
                'list': [
                    20, 50, 100, 500, 1000, 2000, 5000
                ]
            },
            'union': {
                'enable': true,
                'list': [
                    20, 50, 100, 500, 1000, 2000, 5000
                ]
            }
        },
        // json对象
        type: 'json'
    }
}
