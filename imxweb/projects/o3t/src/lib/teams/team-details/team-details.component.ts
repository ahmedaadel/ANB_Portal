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

import { Component, Inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
=======
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
>>>>>>> oned/v92
import { PortalTargetsystemTeams } from 'imx-api-o3t';
import { BaseCdr, ColumnDependentReference, SnackBarService } from 'qbm';
import { GroupSidesheetComponent, GroupSidesheetData, GroupsService } from 'tsb';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'imx-team-details',
  templateUrl: './team-details.component.html'
})
export class TeamDetailsComponent implements OnInit {
<<<<<<< HEAD
  public readonly formGroup: FormGroup;
  public cdrList: ColumnDependentReference[] = [];

  constructor(
    formBuilder: FormBuilder,
    @Inject(EUI_SIDESHEET_DATA) public team: PortalTargetsystemTeams,
    private teamsService: TeamsService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly groupsService: GroupsService,
    private readonly snackbar: SnackBarService,
  ) {
    this.formGroup = new FormGroup({ formArray: formBuilder.array([]) });
  }

  get formArray(): FormArray {
    return this.formGroup.get('formArray') as FormArray;
=======
  public readonly formGroup: UntypedFormGroup;
  public cdrList: ColumnDependentReference[] = [];

  constructor(
    formBuilder: UntypedFormBuilder,
    @Inject(EUI_SIDESHEET_DATA) public team: PortalTargetsystemTeams,
    private teamsService: TeamsService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly sidesheetRef: EuiSidesheetRef,
    private readonly groupsService: GroupsService,
    private readonly snackbar: SnackBarService,
    private readonly translate: TranslateService
  ) {
    this.formGroup = new UntypedFormGroup({ formArray: formBuilder.array([]) });
  }

  get formArray(): UntypedFormArray {
    return this.formGroup.get('formArray') as UntypedFormArray;
>>>>>>> oned/v92
  }

  get teamId(): string {
    return this.team?.GetEntity().GetKeys().join('');
  }

  public ngOnInit(): void {
    this.setup();
  }

  public async saveChanges(): Promise<void> {
    this.teamsService.handleOpenLoader();
    try {
      this.team.GetEntity().Commit(true);
      this.formGroup.markAsPristine();
      this.snackbar.open({ key: '#LDS#Your changes have been successfully saved.' });
    } finally {
      this.teamsService.handleCloseLoader();
    }
  }

  public cancel(): void {
<<<<<<< HEAD
    this.sidesheet.close();
=======
    this.sidesheetRef.close();
>>>>>>> oned/v92
  }

  public async viewGroup(): Promise<void> {

    let data: GroupSidesheetData;
    this.teamsService.handleOpenLoader();
    try {
      const unsGroupDbObjectKey: any = { TableName: 'O3EUnifiedGroup', Keys: [this.team.UID_O3EUnifiedGroup.value] };
      const o3tGroup = await this.groupsService.getGroupDetails(unsGroupDbObjectKey);
      const uidAccProduct = o3tGroup?.GetEntity().GetColumn('UID_AccProduct').GetValue();
      const serviceItem = await this.groupsService.getGroupServiceItem(uidAccProduct);

      data = {
        uidAccProduct,
        unsGroupDbObjectKey,
        group: o3tGroup,
        groupServiceItem: serviceItem
      };
    } finally {
      this.teamsService.handleCloseLoader();
    }

<<<<<<< HEAD
    this.openGroupSidesheet(this.team.GetEntity().GetDisplay(), data);
  }

  private async openGroupSidesheet(title: string, data: GroupSidesheetData): Promise<void> {
    this.sidesheet.open(GroupSidesheetComponent, {
      title,
      headerColour: 'green',
      padding: '0px',
      width: 'max(650px, 60%)',
      icon: 'usergroup',
=======
    this.openGroupSidesheet(data);
  }

  private async openGroupSidesheet(data: GroupSidesheetData): Promise<void> {
    this.sidesheet.open(GroupSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading Edit System Entitlement').toPromise(),
      subTitle: this.team.GetEntity().GetDisplay(),
      padding: '0px',
      width: 'max(650px, 60%)',
      icon: 'usergroup',
      testId: 'teams-details-view-group-details',
>>>>>>> oned/v92
      data
    });
  }

  private setup(): void {
    this.cdrList = [
      new BaseCdr(this.team.tmsAllowDeleteChannels.Column),
      new BaseCdr(this.team.tmsAllowCreateUpdateRemoveTabs.Column),
      new BaseCdr(this.team.tmsAllowCreateUpdateRemoveConn.Column),
      new BaseCdr(this.team.tmsAllowCreateUpdateChannels.Column),
      new BaseCdr(this.team.tmsAllowAddRemoveApps.Column),
      new BaseCdr(this.team.msAllowUserEditMessages.Column),
      new BaseCdr(this.team.msAllowUserDeleteMessages.Column),
      new BaseCdr(this.team.msAllowTeamMentions.Column),
      new BaseCdr(this.team.msAllowOwnerDeleteMessages.Column),
      new BaseCdr(this.team.msAllowChannelMentions.Column),
      new BaseCdr(this.team.gsAllowDeleteChannels.Column),
      new BaseCdr(this.team.IsArchived.Column),
      new BaseCdr(this.team.gsAllowCreateUpdateChannels.Column),
      new BaseCdr(this.team.fsGiphyContentRating.Column),
      new BaseCdr(this.team.fsAllowStickersAndMemes.Column),
      new BaseCdr(this.team.fsAllowGiphy.Column),
      new BaseCdr(this.team.fsAllowCustomMemes.Column)
    ];
  }
}
