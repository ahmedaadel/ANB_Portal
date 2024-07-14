import { Injectable } from '@angular/core';
import { QbmApiClientService } from '../apiClient/qbm-api-client.service';
import { UserConfig, UserGroupInfo } from 'imx-api-qer';

@Injectable({
  providedIn: 'root'
})
export class UserModelService {


  constructor(private qbmClient: QbmApiClientService) { }

  public async getUserConfig(): Promise<UserConfig> {
    return this.qbmClient.client.portal_person_config_get();
  }


  public async getGroups(): Promise<UserGroupInfo[]> {
    return this.qbmClient.client.portal_usergroups_get();
  }

}
