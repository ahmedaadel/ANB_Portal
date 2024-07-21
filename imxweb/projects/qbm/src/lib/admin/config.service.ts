/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
<<<<<<< HEAD
 * Copyright 2022 One Identity LLC.
=======
 * Copyright 2023 One Identity LLC.
>>>>>>> oned/v92
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { Injectable } from '@angular/core';
import { EuiLoadingService } from '@elemental-ui/core';

import { ConfigNodeData, ConfigSettingType } from 'imx-api-qbm';
import { ConfirmationService } from '../confirmation/confirmation.service';
import { imx_SessionService } from '../session/imx-session.service';
import { SnackBarService } from '../snackbar/snack-bar.service';
import { ConfigSection, KeyData } from './config-section';
<<<<<<< HEAD
=======
import { Subject } from 'rxjs';
>>>>>>> oned/v92

@Injectable()
export class ConfigService {

  public get pendingChangeCount(): number {
    return Object.keys(this.pendingChanges).length;
  }

  public appId: string;

  /** all sections */
  public sections: ConfigSection[] = [];

  /** view model for the sections */
  public sectionsFiltered: ConfigSection[] = [];

<<<<<<< HEAD
  canAddAnyConfigKey = false;

  public readonly filter: {
    customized?: boolean,
    keywords?: string
=======
  /** paths that can be deleted */
  public deletableKeys: KeyData[] = [];

  canAddAnyConfigKey = false;

  public supportsLocalCustomization: boolean;

  public submitChanges: Subject<void> = new Subject();

  public readonly filter: {
    customized?: boolean,
    keywords?: string[]
>>>>>>> oned/v92
  } = {};

  private pendingChanges: {
    [appId: string]: {
      [id: string]: KeyData
    }
  } = {};

  constructor(
    private readonly session: imx_SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly busySvc: EuiLoadingService,
    private readonly snackbar: SnackBarService) {
  }

  /** Returns display information about the pending changes to keys. */
  public getPendingChanges(): string[][] {
    const result: string[][] = [];
    for (const appId in this.pendingChanges) {
      if (Object.prototype.hasOwnProperty.call(this.pendingChanges, appId)) {
        for (const elem of Object.values(this.pendingChanges[appId])) {
          result.push([appId, ...elem.DisplayPath]);
        }
      }
    }
    return result;
  }

  public addChange(conf: KeyData): void {
    this.initForAppId();
    this.pendingChanges[this.appId][conf.Path] = conf;
  }

  public async addKey(path: string): Promise<void> {
    await this.session.Client.admin_apiconfigsingle_post(this.appId, path);
  }

<<<<<<< HEAD
=======
  public async deleteKey(path: string): Promise<void> {
    const payload = {};
    payload[path] = null;
    await this.session.Client.admin_apiconfig_post(this.appId, payload);
  }

>>>>>>> oned/v92
  public getLocalCustomizations(): string[][] {
    var result: string[][] = [];

    for (var s of this.sections) {
      for (var key of s.Keys) {
        if (key.HasCustomLocalValue)
          result.push(key.DisplayPath);
      }
    }
    return result;
  }

  public async convert(): Promise<void> {
    const overlay = this.busySvc.show();
    try {
      await this.session.Client.admin_apiconfig_convert_post(this.appId);

      for (var s of this.sections) {
        for (var key of s.Keys) {
          if (key.HasCustomLocalValue) {
            key.HasCustomGlobalValue = true;
            key.HasCustomLocalValue = false;
          }
        }
      }
    }
    finally {
      this.busySvc.hide(overlay);
    }
  }

  public async revert(conf: KeyData): Promise<void> {
    // delete pending change if there is one
    if (this.pendingChanges[this.appId]) {
      delete this.pendingChanges[this.appId][conf.Path];
    }
    const confObj = {};
    // setting to null value, meaning: revert
    confObj[conf.Path] = null;
    await this.session.Client.admin_apiconfig_post(this.appId, confObj, { global: !conf.HasCustomLocalValue });
    delete this.pendingChanges[this.appId];

    // reload all to get the effective value. there is no good way to get just
    // the new effective value of the changed key.
    this.load();
<<<<<<< HEAD
=======
    this.submitChanges.next();
>>>>>>> oned/v92
  }

  public async revertAll(isGlobal: boolean): Promise<void> {
    if (await this.confirmationService.confirm({
      Title: '#LDS#Heading Reset Configuration',
      Message: '#LDS#Are you sure you want to reset all customized configuration values?',
      identifier: 'config-confirm-reset-configuration'
    })) {
      await this.session.Client.admin_apiconfig_revert_post(this.appId, { global: isGlobal });
      delete this.pendingChanges[this.appId];
      this.load();
    }
  }

  public async submit(isGlobal: boolean): Promise<void> {
    const changeObj: {
      [id: string]: any
    } = {};

    const changes = this.pendingChanges[this.appId];
    for (const elem in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, elem)) {
        changeObj[elem] = changes[elem].Value;
      }
    }

    for (let appId in this.pendingChanges) {
      await this.session.Client.admin_apiconfig_post(appId, changeObj, { global: isGlobal });
    }
    this.pendingChanges = {};
    this.load();
<<<<<<< HEAD
=======
    this.submitChanges.next();
>>>>>>> oned/v92
    const key = isGlobal
      ? '#LDS#Your changes have been successfully saved. The changes apply to all API Server instances connected to the software update process. It may take some time for the changes to take effect.'
      : '#LDS#Your changes have been successfully saved. The changes only apply to this API Server and will be lost when you restart the server.';
    this.snackbar.open({
      key
    });
  }

  public async load(): Promise<void> {
    // remove data from unselected project
    this.sections = [];
    this.sectionsFiltered = [];

<<<<<<< HEAD
    const configNodes = await this.session.Client.admin_apiconfig_get(this.appId);

    var canAdd = false;
    const result: ConfigSection[] = [];
    for (const topLevelNode of configNodes) {
      const keyData: KeyData[] = [];
      const settingsSupportingAdd: KeyData[] = [];
      this.flatten(keyData, topLevelNode, '', [], settingsSupportingAdd);
=======
    const data = await this.session.Client.admin_apiconfig_get(this.appId);
    this.supportsLocalCustomization = data.SupportsLocalCustomization;
    const deletablePaths = data.Added;
    const configNodes = data.Data;

    var canAdd = false;
    const result: ConfigSection[] = [];
    const supportingDelete: KeyData[] = [];
    for (const topLevelNode of configNodes) {
      const keyData: KeyData[] = [];
      const settingsSupportingAdd: KeyData[] = [];
      this.flatten(keyData, topLevelNode, '', [], settingsSupportingAdd, deletablePaths, supportingDelete);
>>>>>>> oned/v92
      if (settingsSupportingAdd.length > 0)
        canAdd = true;

      let name = topLevelNode.Name;
      if (!name) {
        name = topLevelNode.Key;
      }
      result.push(new ConfigSection(name, topLevelNode.Description, keyData, settingsSupportingAdd));
    }

    this.sections = result;
    this.search();
    this.canAddAnyConfigKey = canAdd;
<<<<<<< HEAD
=======
    this.deletableKeys = supportingDelete;
>>>>>>> oned/v92
  }

  public async search(): Promise<void> {
    const keywords = this.filter.keywords;
    let result = this.sections;
    if (keywords || this.filter.customized) {
<<<<<<< HEAD
      result = result
        .map(d => this.matchesSection(d, keywords, this.filter.customized))
=======
      const lcKeywords = keywords != null ? keywords.map(k => k.toLowerCase()) : null;
      result = result
        .map(d => this.matchesSection(d, lcKeywords, this.filter.customized))
>>>>>>> oned/v92
        .filter(d => d.Keys.length > 0);
    }

    this.sectionsFiltered = result;
  }

  private initForAppId(): void {
    if (!this.pendingChanges[this.appId]) {
      this.pendingChanges[this.appId] = {};
    }
  }

<<<<<<< HEAD
  private flatten(keyData: KeyData[], node: ConfigNodeData, path: string, displayPath: string[], settingsSupportingAdd: KeyData[]): void {
=======
  private flatten(keyData: KeyData[], node: ConfigNodeData, path: string, displayPath: string[], settingsSupportingAdd: KeyData[], deletablePaths: string[], supportingDelete: KeyData[]): void {
>>>>>>> oned/v92

    const thisPath = path + node.Key;
    for (const n of node.Settings) {
      const searchTerms = [
        ...displayPath.map(d => d?.toLowerCase()),
        n.Name?.toLowerCase(),
        n.Key?.toLowerCase(),
        n.Description?.toLowerCase()
      ];
      keyData.push({
        ...n,
        DisplayPath: [...displayPath, n.Name],
        Path: thisPath + '/' + n.Key,
        searchTerms
      });

    }

<<<<<<< HEAD
    if (node.CanAddSetting) {
      settingsSupportingAdd.push({
        Name: node.Name,
        Key: node.Key,
        Description: node.Description,
        Type: ConfigSettingType.None,
        DisplayPath: [...displayPath],
        Path: thisPath,
        searchTerms: []
      });
    }

    for (const n of node.Children) {
      this.flatten(keyData, n, thisPath + '/', [...displayPath, n.Name], settingsSupportingAdd);
    }
  }

  private matchesSection(section: ConfigSection, keywords: string, onlyCustomized: boolean): ConfigSection {
=======
    function buildNode() : KeyData {
      return {
          Name: node.Name,
          Key: node.Key,
          Description: node.Description,
          Type: ConfigSettingType.None,
          DisplayPath: [...displayPath],
          Path: thisPath,
          searchTerms: []
      };
    }

    if (node.CanAddSetting) {
      settingsSupportingAdd.push(buildNode());
    }

    if (deletablePaths.includes(thisPath)) {
      supportingDelete.push(buildNode());
    }

    for (const n of node.Children) {
      this.flatten(keyData, n, thisPath + '/', [...displayPath, n.Name], settingsSupportingAdd, deletablePaths, supportingDelete);
    }
  }

  private matchesSection(section: ConfigSection, keywords: string[], onlyCustomized: boolean): ConfigSection {
>>>>>>> oned/v92
    const matching = section.Keys.filter(d => this.matches(d, keywords, onlyCustomized));

    return new ConfigSection(section.Title, section.Description, matching, section.SettingsSupportingAdd);
  }

<<<<<<< HEAD
  private matches(d: KeyData, keywords: string, onlyCustomized: boolean): boolean {
=======
  private matches(d: KeyData, keywords: string[], onlyCustomized: boolean): boolean {
>>>>>>> oned/v92
    if (onlyCustomized && !d.HasCustomGlobalValue && !d.HasCustomLocalValue) {
      return false;
    }

<<<<<<< HEAD
    if (!keywords || d.searchTerms.filter(n => n?.includes(keywords)).length > 0) {
=======
    if (!keywords || d.searchTerms.some(searchTerm => keywords.every(keyword => searchTerm?.includes(keyword)))) {
>>>>>>> oned/v92
      return true;
    }

    return false;
  }
}
