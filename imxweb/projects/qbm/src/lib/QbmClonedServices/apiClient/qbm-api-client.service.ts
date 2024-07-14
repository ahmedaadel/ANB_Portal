
import { Injectable } from '@angular/core';
import { V2Client, Client, TypedClient, UserGroupInfo } from 'imx-api-qer';
import { ApiClient } from 'imx-qbm-dbts';
import { AppConfigService } from '../../appConfig/appConfig.service';
import { ClassloggerService } from '../../classlogger/classlogger.service';
import { ImxTranslationProviderService } from '../../translation/imx-translation-provider.service';


@Injectable({
  providedIn: 'root'
})
export class QbmApiClientService {
  private tc: TypedClient;
  public get typedClient(): TypedClient {
    return this.tc;
  }

  public get client(): V2Client {
    return this.v2Client;
  }

  public readonly v2Client: V2Client;

  public get apiClient(): ApiClient {
    return this.config.apiClient;
  }

  constructor(
    private readonly config: AppConfigService,
    private readonly logger: ClassloggerService,
    private readonly translationProvider: ImxTranslationProviderService) {
    try {
      this.logger.debug(this, 'Initializing QER API service');

      // Use schema loaded by QBM client
      const schemaProvider = config.client;
      this.v2Client = new V2Client(this.config.apiClient, schemaProvider);
      this.tc = new TypedClient(this.v2Client, this.translationProvider);
    } catch (e) {
      this.logger.error(this, e);
    }
  }

}

