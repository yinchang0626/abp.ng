import { Component, OnInit, Injector } from '@angular/core';
import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ListService, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ePermissionManagementComponents } from '@abp/ng.permission-management';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { eIdentityComponents } from '@abp/ng.identity';
import { Store } from '@ngxs/store';
import { STColumn, STComponent,STData } from '@delon/abc/st';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'fs-tw-roles',
  templateUrl: './roles.component.html',
  styles: [],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.Roles,
    },
    {
      provide: AbpRolesComponent,
      useExisting: RolesComponent,
    }
  ],
})
export class RolesComponent extends AbpRolesComponent implements OnInit {
  constructor(
    public readonly list: ListService<PagedAndSortedResultRequestDto>,
    protected confirmationService: ConfirmationService,
    protected store: Store,
    protected injector: Injector
  ) {
    super(list, confirmationService, store, injector);
  }
  users: STData[] = [];
  columns: STColumn[] = [
    {
      title: '编号',
      index: 'id',
      type: 'checkbox',
      selections: [
        {
          text: '小于25岁',
          select: data => data.forEach(item => (item.checked = item.age < 25)),
        },
        {
          text: '大于25岁',
          select: data => data.forEach(item => (item.checked = item.age >= 25)),
        },
      ],
    },
    {
      title: '姓名',
      index: 'name',
      sort: {
        compare: (a, b) => a.name.length - b.name.length,
      },
      filter: {
        type: 'keyword',
        fn: (filter, record) => !filter.value || record.name.indexOf(filter.value) !== -1,
      },
    },
    {
      title: '年龄',
      index: 'age',
      sort: {
        compare: (a, b) => a.age - b.age,
      },
      filter: {
        menus: [
          { text: '20岁以下', value: [0, 20] },
          { text: '20-25岁', value: [20, 25] },
          { text: '25岁以上', value: [25, 100] },
        ],
        fn: (filter, record) => record.age >= filter.value[0] && record.age <= filter.value[1],
        multiple: false,
      },
    },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        1: { text: 'Success', color: 'success' },
        2: { text: 'Error', color: 'error' },
        3: { text: 'Processing', color: 'processing' },
        4: { text: 'Default', color: 'default' },
        5: { text: 'Warning', color: 'warning' },
      },
    },
  ];
  ngOnInit(): void {
    const data = Array(100)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        status: Math.floor(Math.random() * 5) + 1,
      }));
    of(data)
      .pipe(delay(500))
      .subscribe(res => (this.users = res));
  }
}
