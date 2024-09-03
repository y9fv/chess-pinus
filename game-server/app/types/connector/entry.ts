import {BaseHandlerResp} from '../base'
import services from '../../services'
import {pinus} from 'pinus'
import {GlobalEnum} from '../../constants/global'
import errorCode from "../../constants/errorCode";

// 用户信息
export interface UserInfo {
    avatar: string,
    nickname: string,
    chanelID: string
}

// 返回
export class EntryResp extends BaseHandlerResp {
    // 用户信息
    userInfo: any
    // 公共参数
    publicParameter: any
    // 所有游戏
    gameTypes: any
    // 代理配置
    agentProfile: any

    static success(userInfo: any, clubShortIdList: number[]) {
        // 调用基类 static
        const msg = {
            userInfo,
            clubShortIdList: [],
            publicParameter: services.parameter.buildClientParameter(pinus.app.get(GlobalEnum.publicParameterKey)),
            gameTypes: services.parameter.clientGameTypes(),
            agentProfile: pinus.app.get(GlobalEnum.agentProfitKey),
            gameConfig: pinus.app.get(GlobalEnum.gameConfigKey),
        }
        return {
            code: errorCode.ok,
            msg,
        }
    }
}
