import { IEntityColumn } from 'imx-qbm-dbts';

import { ColumnDependentReference } from './column-dependent-reference.interface';

/**
 * Generic implementation of a ColumnDependentReference.
 */
export class CCC_BaseCdr implements ColumnDependentReference {
  public hint: string;

  constructor(public readonly column: IEntityColumn, public readonly display?: string) { }

  public isReadOnly(): boolean {
    var readonlyColumns = ["PersonnelNumber","CentralAccount","DefaultEmailAddress","IsExternal"]
    if( readonlyColumns.includes(this.column.ColumnName))
      return true 
    else 
    return this.column == null || !this.column.GetMetadata().CanEdit();
  }
}
