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

<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { PortalPasswordquestions, UserConfig } from 'imx-api-qer';
import { CollectionLoadParameters, ExtendedTypedEntityCollection } from 'imx-qbm-dbts';
import { ConfirmationService, LdsReplacePipe, SnackBarService } from 'qbm';
import { UserModelService } from '../../user/user-model.service';
import { CreatePasswordQuestionComponent } from './create-password-question.component';
import { PasswordQuestionService } from './password-question.service';
import { checkMatchValidator } from './password-questions-validator';
=======
import { Component, ErrorHandler, Input, OnInit } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { PortalPasswordquestions, UserConfig } from 'imx-api-qer';
import { CollectionLoadParameters, DisplayColumns, EntitySchema, ExtendedTypedEntityCollection } from 'imx-qbm-dbts';
import { BusyService, ConfirmationService, DataSourceToolbarSettings, DataSourceWrapper, LdsReplacePipe, SnackBarService } from 'qbm';
import { UserModelService } from '../../user/user-model.service';
import { PasswordQuestionService, PasswordQuestionType } from './password-question.service';
import { PasswordQuestionsSidesheetComponent } from './password-questions-sidesheet/password-questions-sidesheet.component';
>>>>>>> oned/v92

@Component({
  selector: 'imx-password-questions',
  templateUrl: './password-questions.component.html',
  styleUrls: ['./password-questions.component.scss'],
})
export class PasswordQuestionsComponent implements OnInit {
<<<<<<< HEAD
  public PwdQuestionMode = PwdQuestionMode;
  public userConfig: UserConfig;
  public items: ExtendedTypedEntityCollection<PortalPasswordquestions, unknown>;
  public fgs: FormGroup[] = [];
=======
  @Input() public passwordQuestionType: PasswordQuestionType = 'passwordreset';
  public items: ExtendedTypedEntityCollection<PortalPasswordquestions, unknown>;
>>>>>>> oned/v92
  public navigationState: CollectionLoadParameters = {
    PageSize: 1000,
    StartIndex: 0,
  };
  public totalCount = 0;
<<<<<<< HEAD

  @ViewChild(MatAccordion) public accordion: MatAccordion;

  constructor(
    private readonly api: PasswordQuestionService,
    private readonly userService: UserModelService,
    private readonly fb: FormBuilder,
=======
  public dstWrapper: DataSourceWrapper<PortalPasswordquestions>;
  public dstSettings: DataSourceToolbarSettings;
  public selectedQuestions: PortalPasswordquestions[] = [];
  public DisplayColumns = DisplayColumns;
  public requiredPasswordQuestions: number;
  public entitySchema: EntitySchema;
  public busyService = new BusyService();

  constructor(
    private readonly passwordQuestionService: PasswordQuestionService,
    private readonly errorHandler: ErrorHandler,
>>>>>>> oned/v92
    private readonly sidesheetService: EuiSidesheetService,
    private readonly snackbar: SnackBarService,
    private readonly confirmation: ConfirmationService,
    private readonly translate: TranslateService,
    private readonly ldsReplace: LdsReplacePipe,
<<<<<<< HEAD
    private readonly busy: EuiLoadingService,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    this.userConfig = await this.userService.getUserConfig();
    await this.getData();
  }

  public async getData(): Promise<void> {
    this.busy.show();

    try {
      this.items = await this.api.get(this.navigationState);
      this.totalCount = this.items.totalCount;

      this.fgs = [];
      this.items.Data.forEach((item) => {
        const fg = this.fb.group(
          {
            question: [item.GetEntity().GetColumn('PasswordQuery').GetDisplayValue(), Validators.required],
            answer: ['', Validators.required],
            retypeAnswer: ['', Validators.required],
            id: [item.GetEntity().GetKeys()[0]],
            mode: PwdQuestionMode.View,
            item: item,
          },
          {
            validator: checkMatchValidator('answer', 'retypeAnswer'),
          }
        );

        this.fgs.push(fg);
      });
    } finally {
      this.busy.hide();
    }
  }

  public async onSubmit(fg: FormGroup, index: number): Promise<void> {
    const selectedItem = this.items.Data[index];
    selectedItem.GetEntity().GetColumn('PasswordQuery').PutValue(fg.get('question').value);
    selectedItem.GetEntity().GetColumn('PasswordAnswer').PutValue(fg.get('answer').value);

    this.busy.show();

    try {
      await this.api.put(selectedItem);
      this.snackbar.open({ key: '#LDS#The password question has been successfully saved.' });
      this.onCancel(fg);
    } finally {
      this.busy.hide();
    }
  }

  public onEdit(fg: FormGroup): void {
    fg.get('mode').setValue(PwdQuestionMode.Edit);
  }

  public onCancel(fg: FormGroup): void {
    fg.get('mode').setValue(PwdQuestionMode.View);
    fg.get('answer').setValue('');
    fg.get('retypeAnswer').setValue('');
    fg.markAsPristine();
  }

  public async onCreate(): Promise<void> {
    const sidesheetRef = this.sidesheetService.open(CreatePasswordQuestionComponent, {
      title: await this.translate.get('#LDS#Heading Create Password Question').toPromise(),
      disableClose: true,
      width: '600px',
      headerColour: 'blue',
      padding: '0px',
    });

    sidesheetRef.afterClosed().subscribe(async () => {
      await this.getData();
    });
  }

  public async onDelete(index: number): Promise<void> {
    const message =
      this.totalCount <= this.userConfig.RequiredPasswordQuestions
        ? this.ldsReplace.transform(
          await this.translate.get(
            '#LDS#If you delete this password question, you no longer have enough password questions and must create a new password question. You need at least {0} active password questions. Are you sure you want to delete this password question?'
          ).toPromise(),
          this.userConfig.RequiredPasswordQuestions
        )
        : await this.translate.get(
          '#LDS#Are you sure you want to delete this password question?')
          .toPromise();

    if (await this.confirmation.confirm({
      Title: '#LDS#Heading Delete Password Question',
      Message: message
    })) {
      this.busy.show();

      try {
        await this.api.delete(this.items.Data[index]);
        this.snackbar.open({ key: '#LDS#The password question has been successfully deleted.' });
      } finally {
        this.busy.hide();
        this.getData();
      }
    }
  }
}

export enum PwdQuestionMode {
  View,
  Edit,
=======
    private readonly busy: EuiLoadingService
  ) {}

  public async ngOnInit(): Promise<void> {
    const entitySchema = this.passwordQuestionService.getSchema();
    this.entitySchema = entitySchema;
    const isBusy = this.busyService.beginBusy();
    try{
    this.passwordQuestionService.setPasswordQuestionType(this.passwordQuestionType);
    this.requiredPasswordQuestions = await this.passwordQuestionService.getRequiredPasswordQuestion();

    this.dstWrapper = new DataSourceWrapper(
      (state) => this.passwordQuestionService.get(state),
      [entitySchema.Columns.PasswordQuery, entitySchema.Columns.IsLocked],
      entitySchema,
      undefined,
      'password-questions'
    );
    }finally {
      isBusy.endBusy();
    }

    await this.getData();
  }

  public async onHighlightedEntityChanged(question: PortalPasswordquestions): Promise<void> {
    await this.openEditSidesheet(question);
  }

  public onSelectionChanged(items: PortalPasswordquestions[]): void {
    this.selectedQuestions = items;
  }

  public async openEditSidesheet(question: PortalPasswordquestions): Promise<void> {
    const deleteMessage = await this.getDeleteMessage(1);
    const sidesheetRef = this.sidesheetService.open(PasswordQuestionsSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading Edit Password Question').toPromise(),
      subTitle: question.GetEntity().GetDisplay(),
      disableClose: true,
      panelClass: 'imx-sidesheet',
      icon: 'password',
      padding: '0',
      width: 'max(768px, 80%)',
      testId: 'edit-question-sidesheet',
      data: {
        passwordQuestion: question,
        isNew: false,
        deleteMessage,
      },
    });

    if (await sidesheetRef.afterClosed().toPromise()) {
      return this.getData();
    }
  }

  public async getData(): Promise<void> {
    const isBusy = this.busyService.beginBusy();
    try {
      this.items = await this.passwordQuestionService.get(this.navigationState);
      this.totalCount = this.items.totalCount;
      this.dstSettings = await this.dstWrapper.getDstSettings(this.navigationState);
    } finally {
      isBusy.endBusy();
    }
  }

  public async create(): Promise<void> {
    const newItem = this.passwordQuestionService.create();
    const sidesheetRef = this.sidesheetService.open(PasswordQuestionsSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading Create Password Question').toPromise(),
      disableClose: true,
      panelClass: 'imx-sidesheet',
      icon: 'password',
      padding: '0',
      width: 'max(768px, 80%)',
      testId: 'create-question-sidesheet',
      data: {
        passwordQuestion: newItem,
        isNew: true,
      },
    });

    if (await sidesheetRef.afterClosed().toPromise()) {
      return this.getData();
    }
  }

  public async delete(): Promise<void> {
    const message = await this.getDeleteMessage(this.selectedQuestions.length);

    if (
      await this.confirmation.confirm({
        Title: this.selectedQuestions.length > 1 ? this.ldsDeleteTitleMutiple : this.ldsDeleteTitleSingle,
        Message: message,
      })
    ) {
      let deleteCount = 0;
      this.busy.show();

      try {
        for (const question of this.selectedQuestions) {
          if (await this.tryDelete(question)) {
            deleteCount++;
          }
        }
      } finally {
        this.busy.hide();
        if (deleteCount > 0) {
          this.snackbar.open({ key: deleteCount > 1 ? this.ldsDeleteSnackbarMessageMultiple : this.ldsDeleteSnackbarMessageSingle });
          this.getData();
        }
      }
    }
  }

  public selectedItemsCanBeDeleted(): boolean {
    return this.selectedQuestions != null && this.selectedQuestions.length > 0;
  }

  public get showComponentHeading(): boolean {
    return this.passwordQuestionType === 'passwordreset';
  }

  private async tryDelete(item: PortalPasswordquestions): Promise<boolean> {
    try {
      await this.passwordQuestionService.delete(item);
      return true;
    } catch (error) {
      this.errorHandler.handleError(error);
    }
    return false;
  }

  private async getDeleteMessage(itemsToDelete: number): Promise<string> {
    const numberOfQuestionsAfterDeletion = this.totalCount - itemsToDelete;
    return numberOfQuestionsAfterDeletion < this.requiredPasswordQuestions
      ? this.ldsReplace.transform(
          await this.translate
            .get(itemsToDelete > 1 ? this.ldsDeleteMessageWarningMultiple : this.ldsDeleteMessageWarningSingle)
            .toPromise(),
          this.requiredPasswordQuestions
        )
      : await this.translate.get(itemsToDelete > 1 ? this.ldsDeleteMessageMultiple : this.ldsDeleteMessageSingle).toPromise();
  }

  private ldsDeleteTitleSingle = '#LDS#Heading Delete Password Question';
  private ldsDeleteTitleMutiple = '#LDS#Heading Delete Password Questions';
  private ldsDeleteMessageSingle = '#LDS#Are you sure you want to delete this password question?';
  private ldsDeleteMessageMultiple = '#LDS#Are you sure you want to delete the selected password questions?';
  private ldsDeleteMessageWarningSingle =
    '#LDS#If you delete this password question, you no longer have enough password questions and must create a new password question. You need at least {0} active password questions. Are you sure you want to delete this password question?';
  private ldsDeleteMessageWarningMultiple =
    '#LDS#If you delete these password questions, you no longer have enough password questions and must create a new password question. You need at least {0} active password questions. Are you sure you want to delete these password questions?';
  private ldsDeleteSnackbarMessageSingle = '#LDS#The password question has been successfully deleted.';
  private ldsDeleteSnackbarMessageMultiple = '#LDS#The password questions have been successfully deleted.';
>>>>>>> oned/v92
}
