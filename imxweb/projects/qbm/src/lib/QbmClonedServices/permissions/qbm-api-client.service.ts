import { Injectable } from '@angular/core';
import {  CCC_isHROutsourceAdmin, CCC_isOutsourceAdmin } from './qbm-permissions-helper';
import { UserModelService } from '../user-models/user-model.service';

@Injectable({
  providedIn: 'root'
})
export class QbmPermissionsService {

  constructor(private readonly userService:UserModelService) { }
  

  public async CCC_isOutsourceAdmin(): Promise<boolean> {
    return CCC_isOutsourceAdmin((await this.userService.getGroups()).map(group => group.Name));
  }
  public async CCC_isHROutsourceAdmin(): Promise<boolean> {
    return CCC_isHROutsourceAdmin((await this.userService.getGroups()).map(group => group.Name));
  }

}
