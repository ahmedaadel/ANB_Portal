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
import { ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
=======
import {  ViewContainerRef, ComponentRef } from '@angular/core';
>>>>>>> oned/v92
import * as TypeMoq from 'typemoq';

import { IValueMetadata, IForeignKeyInfo, IEntityColumn } from 'imx-qbm-dbts';
import { FkCdrEditorProvider } from './fk-cdr-editor-provider';
import { ColumnDependentReference } from './column-dependent-reference.interface';
import { CdrEditor } from './cdr-editor.interface';
import { createComponentMock } from './default-cdr-editor-provider.spec';
import { EditFkComponent } from './edit-fk/edit-fk.component';
import { clearStylesFromDOM } from '../testing/clear-styles.spec';
import { ViewPropertyDefaultComponent } from './view-property-default/view-property-default.component';

describe('FkCdrEditorProvider', () => {
<<<<<<< HEAD
  let factoryResolverMock: TypeMoq.IMock<ComponentFactoryResolver>;

  beforeEach(() => {
    factoryResolverMock = TypeMoq.Mock.ofType<ComponentFactoryResolver>();
=======

  beforeEach(() => {
>>>>>>> oned/v92
  });

  afterAll(() => {
    clearStylesFromDOM();
  });

  it('should create an instance', () => {
<<<<<<< HEAD
    expect(new FkCdrEditorProvider(factoryResolverMock.object)).toBeDefined();
=======
    expect(new FkCdrEditorProvider()).toBeDefined();
>>>>>>> oned/v92
  });

  it('should return null, if non fk column', () => {
    const editor = testCreateEditor(null, null, true);
    expect( editor ).toBeNull();
  });

  it('should create ViewPropertyDefaultComponent for a Fk property that is set as readonly', () => {
    testCreateEditor(ViewPropertyDefaultComponent, [createMockForeignKey('testtable', 'testcolumn')], false, true);
  });

  it('should create EditDefaultComponent for Fk Element', () => {
    testCreateEditor(EditFkComponent, [createMockForeignKey('testtable', 'testcolumn')]);
  });

  it('should work with empty fk', () => {
    expect(() => {testCreateEditor(EditFkComponent, [createMockForeignKey('', '')], true)}).not.toThrowError();
  });

});

function testCreateEditor<T extends CdrEditor>(TCtor: new (...args: any[]) => T, fkRelation?: IForeignKeyInfo[],
                                               editorShouldBeNull: boolean = false, isReadOnly: boolean = false): ComponentRef<CdrEditor> {
      const cdrMock = createCdr(fkRelation, isReadOnly);
      const editorMock = TypeMoq.Mock.ofType<T>();
      const parentMock = TypeMoq.Mock.ofType<ViewContainerRef>();
      const childMock = createComponentMock<T>(editorMock.object);
<<<<<<< HEAD
      const factoryResolverMock = TypeMoq.Mock.ofType<ComponentFactoryResolver>();

      parentMock.setup( p => p.createComponent(TypeMoq.It.isAny(), TypeMoq.It.isAny())).returns(() => childMock.object);
      factoryResolverMock.setup(r => r.resolveComponentFactory(TCtor)).returns(() => null);

      // Act
      const provider = new FkCdrEditorProvider(factoryResolverMock.object);
=======

      parentMock.setup( p => p.createComponent(TypeMoq.It.isAny(), TypeMoq.It.isAny())).returns(() => childMock.object);

      // Act
      const provider = new FkCdrEditorProvider();
>>>>>>> oned/v92
      const editor = provider.createEditor(parentMock.object, cdrMock.object);

      // Assert
      if (editorShouldBeNull) {
        expect(editor).toBeNull();
      } else {
        expect(editor === childMock.object).toBeTruthy();
      }
      editorMock.verify(e => e.bind(cdrMock.object), TypeMoq.Times.atMostOnce());
      editorMock.verify(e => e.bind(TypeMoq.It.isAny()), TypeMoq.Times.atMostOnce());
<<<<<<< HEAD
      factoryResolverMock.verify(e => e.resolveComponentFactory(TCtor), TypeMoq.Times.atMostOnce());
      factoryResolverMock.verify(e => e.resolveComponentFactory(TypeMoq.It.isAny()), TypeMoq.Times.atMostOnce());
=======
>>>>>>> oned/v92

      return editor;
}

function createMockForeignKey(tablename: string, column: string): IForeignKeyInfo {
  const mockKey = TypeMoq.Mock.ofType<IForeignKeyInfo>();
  mockKey.setup(m => m.TableName).returns(() => tablename);
  mockKey.setup(m => m.ColumnName).returns(() => column);

  return mockKey.object;
}


function createCdr( fkRelation?: IForeignKeyInfo[], isReadOnly?: boolean)
: TypeMoq.IMock<ColumnDependentReference> {

  const metaMock = TypeMoq.Mock.ofType<IValueMetadata>();
  metaMock.setup(m => m.GetFkRelations()).returns(() => fkRelation);
  metaMock.setup(m => m.CanEdit()).returns(() => !isReadOnly)

  const cdrMock = TypeMoq.Mock.ofType<ColumnDependentReference>();
  cdrMock.setup(m => m.column).returns(() => ({ GetMetadata: () => metaMock.object } as IEntityColumn));
  cdrMock.setup(m => m.isReadOnly()).returns(() => isReadOnly);

  return cdrMock;
}
