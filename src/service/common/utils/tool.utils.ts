export function getCurformatDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * 暂停方法
 * @param time 单位毫秒
 * @returns 
 */
export async function delay(time: any) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

import { AutoChatDto } from "../../../entites/dto/AutoChatDto";
import { QueryParamDto } from "../../boss/boss.types";

export class DtoConverter {
  /**
   * Converts an AutoChatDto object to a QueryParamDto object
   * @param autoChatDto The AutoChatDto to convert
   * @returns A new QueryParamDto with the same properties as the input
   */
  static toQueryParamDto(autoChatDto: AutoChatDto): QueryParamDto {
    const queryParamDto: QueryParamDto = {
      jd: autoChatDto.jd,
      areaId: autoChatDto.areaId,
      countyId: autoChatDto.countyId,
      streetId: autoChatDto.streetId,
      degree: autoChatDto.degree,
      experience: autoChatDto.experience,
      jobType: autoChatDto.jobType,
      salary: autoChatDto.salary,
      greeting: autoChatDto.greeting,
      active: autoChatDto.active,
      phone: autoChatDto.phone,
      exitAccount: autoChatDto.exitAccount,
      size: autoChatDto.size,
      nature: autoChatDto.nature
    };
    return queryParamDto;
  }
}